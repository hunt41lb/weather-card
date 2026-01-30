/* weather-card/src/weather-card.ts

 * All Components/Styling Importing here
*/

import { LitElement, html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { guard } from 'lit/directives/guard.js';

import { weatherCardStyles } from './styles';
import { getWeatherIcon, MINI_ICONS } from './components/icons';
import './components/editor';
import type { HomeAssistant, WeatherCardConfig, ActionConfig, ForecastDay } from './types';
import {
  formatTime,
  getDayName,
  getGreeting,
  getPrimaryValue,
  getSecondaryValue,
  getDescription,
} from './utils';

@customElement('weather-card')
export class WeatherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: WeatherCardConfig;
  private _holdTimer?: number;
  private _lastTap = 0;

  static styles = weatherCardStyles;

  public setConfig(config: WeatherCardConfig): void {
    if (!config) throw new Error('Invalid configuration');
    this._config = {
      show_greeting: true,
      icon_size: 100,
      card_height: 'auto',
      sun_entity: 'sun.sun',
      icon_position: 'left',
      show_forecast: false,
      forecast_days: 5,
      show_sunrise_sunset: false,
      show_alerts: false,
      show_background_effects: false,
      use_dynamic_background: false,
      day_background: 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)',
      night_background: 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)',
      tap_action: { action: 'more-info' },
      hold_action: { action: 'none' },
      double_tap_action: { action: 'none' },
      ...config
    };
  }

  public getCardSize(): number { return 3; }

  public getLayoutOptions() {
    return this._config?.view_layout || {};
  }

  public static getConfigElement(): HTMLElement { return document.createElement('weather-card-editor'); }
  public static getStubConfig(): WeatherCardConfig {
    return {
      type: 'custom:weather-card',
      weather_entity: 'weather.forecast_home',
      sun_entity: 'sun.sun',
      primary_entity: 'weather.forecast_home',
      primary_attribute: 'temperature',
      primary_unit: 'Â°F',
      secondary_entity: 'weather.forecast_home',
      secondary_attribute: 'apparent_temperature',
      secondary_unit: 'Â°F',
      secondary_label: 'Feels Like:',
      show_greeting: true,
      icon_size: 100,
      show_forecast: true,
      forecast_days: 5,
      show_sunrise_sunset: true
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleTap);
    this.addEventListener('contextmenu', this._handleHold);
    this.addEventListener('touchstart', this._handleTouchStart, { passive: true });
    this.addEventListener('touchend', this._handleTouchEnd);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleTap);
    this.removeEventListener('contextmenu', this._handleHold);
    this.removeEventListener('touchstart', this._handleTouchStart);
    this.removeEventListener('touchend', this._handleTouchEnd);
  }

  private _handleTap = (ev: Event) => {
    const now = Date.now();
    if (now - this._lastTap < 300) {
      this._executeAction(this._config.double_tap_action);
      this._lastTap = 0;
    } else {
      this._lastTap = now;
      setTimeout(() => {
        if (this._lastTap !== 0) {
          this._executeAction(this._config.tap_action);
          this._lastTap = 0;
        }
      }, 300);
    }
  };

  private _handleHold = (ev: Event) => {
    ev.preventDefault();
    this._executeAction(this._config.hold_action);
  };

  private _handleTouchStart = () => {
    this._holdTimer = window.setTimeout(() => {
      this._executeAction(this._config.hold_action);
    }, 500);
  };

  private _handleTouchEnd = () => {
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
  };

  private _executeAction(action?: ActionConfig) {
    if (!action || action.action === 'none') return;

    switch (action.action) {
      case 'more-info':
        const entityId = action.entity || this._config.weather_entity;
        if (entityId) {
          const event = new CustomEvent('hass-more-info', { detail: { entityId }, bubbles: true, composed: true });
          this.dispatchEvent(event);
        }
        break;
      case 'navigate':
        if (action.navigation_path) {
          history.pushState(null, '', action.navigation_path);
          const event = new CustomEvent('location-changed', { bubbles: true, composed: true });
          this.dispatchEvent(event);
        }
        break;
      case 'url':
        if (action.url_path) {
          window.open(action.url_path, '_blank');
        }
        break;
      case 'call-service':
        if (action.service) {
          const [domain, service] = action.service.split('.');
          this.hass.callService(domain, service, action.service_data || {});
        }
        break;
    }
  }

  protected render() {
    if (!this._config || !this.hass) return html``;
    const greeting = getGreeting(this._config, this.hass);
    const primary = getPrimaryValue(this._config, this.hass);
    const secondary = getSecondaryValue(this._config, this.hass);
    const description = getDescription(this._config, this.hass);
    const showGreeting = this._config.show_greeting !== false;
    const iconRight = this._config.icon_position === 'right';

    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    const sunEntity = this._config.sun_entity ? this.hass.states[this._config.sun_entity] : undefined;
    const condition = weatherEntity?.state || '';
    const isDay = sunEntity?.state === 'above_horizon';

    const gridClasses = [
      'weather-card-grid',
      showGreeting ? '' : 'no-greeting',
      iconRight ? 'icon-right' : ''
    ].filter(Boolean).join(' ');

    // Dynamic background color based on sun state
    const dayBg = this._config.day_background || 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)';
    const nightBg = this._config.night_background || 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)';
    const dynamicBgStyle = this._config.use_dynamic_background
      ? `background: ${isDay ? dayBg : nightBg};`
      : '';

    return html`
      <ha-card style="height: ${this._config.card_height}; ${dynamicBgStyle}">
        ${this._config.show_background_effects ? this._renderBackgroundEffect(condition, isDay) : nothing}
        <div class="${gridClasses}" style="--weather-icon-size: ${this._config.icon_size}px">
          ${showGreeting ? html`<div class="greeting">${greeting}</div>` : nothing}
          <div class="weather-icon">
            ${guard([condition, isDay], () => this._renderWeatherIcon(condition, isDay))}
          </div>
          <div class="primary-value">${primary}</div>
          <div class="secondary-value">${secondary}</div>
          <div class="description">${description}</div>
          ${this._config.show_sunrise_sunset ? this._renderSunTimes() : nothing}
          ${this._config.show_forecast ? this._renderForecast() : nothing}
          ${this._config.show_alerts ? this._renderAlerts() : nothing}
        </div>
      </ha-card>
    `;
  }

  private _renderBackgroundEffect(condition: string, isDay: boolean): TemplateResult {
    const effectClass = this._getEffectClass(condition, isDay);
    if (!effectClass) return html``;

    // For snow, render the enhanced effect with snowbank
    if (effectClass === 'effect-snow') {
      const intensityClass = this._getSnowIntensity();
      return html`
        <div class="weather-effects ${effectClass} ${intensityClass}">
          <!-- Falling snowflakes - 6 independent layers -->
          <div class="snow-container">
            <div class="layer-1"></div>
            <div class="layer-2"></div>
            <div class="layer-3"></div>
            <div class="layer-4"></div>
            <div class="layer-5"></div>
            <div class="layer-6"></div>
          </div>

          <!-- Snowbank at bottom -->
          <div class="snow-bank">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="snowFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                  <stop offset="100%" stop-color="rgba(240,245,255,1)"/>
                </linearGradient>
              </defs>
              <path d="M0,100 L0,65
                Q10,55 20,60
                Q30,65 40,55
                Q50,45 60,55
                Q70,65 80,58
                Q90,50 100,60
                L100,100 Z"
                fill="url(#snowFill)"/>
            </svg>
          </div>
        </div>
      `;
    }

    // For sunny/clear, render lens flare with bokeh orbs
    if (effectClass === 'effect-sunny') {
      return html`
        <div class="weather-effects ${effectClass}">
          <div class="streak-main"></div>
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
          <div class="orb orb-4"></div>
        </div>
      `;
    }

    if (effectClass === 'effect-cloudy') {
      const timeClass = isDay ? 'is-day' : 'is-night';
      return html`
        <div class="weather-effects ${effectClass} ${timeClass}">
          <div class="cloud cloud-1">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="cloud cloud-2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="cloud cloud-3">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span>
          </div>
          <div class="cloud cloud-4">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
      `;
    }

    // For clear night, render static stars with twinkling stars
    if (effectClass === 'effect-clear-night') {
      return html`
        <div class="weather-effects ${effectClass}">
          <div class="stars-static"></div>
          <div class="twinkle-star twinkle-star-1"></div>
          <div class="twinkle-star twinkle-star-2"></div>
          <div class="twinkle-star twinkle-star-3"></div>
          <div class="twinkle-star twinkle-star-4"></div>
          <div class="twinkle-star twinkle-star-5"></div>
          <div class="twinkle-star twinkle-star-6"></div>
        </div>
      `;
    }

    // Rain effect
    if (effectClass === 'effect-rain') {
      const timeClass = isDay ? 'is-day' : 'is-night';
      return html`
        <div class="weather-effects ${effectClass} ${timeClass}">
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
          <div class="rain"><div class="drop"></div><div class="splash"></div></div>
        </div>
      `;
    }

    // For other effects, use simple container
    return html`<div class="weather-effects ${effectClass}"></div>`;
  }

  private _getEffectClass(condition: string, isDay: boolean): string {
    const c = condition?.toLowerCase() || '';

    // Snow takes priority (including snowy-rainy)
    if (c.includes('snow') || c.includes('hail')) return 'effect-snow';

    // Rain conditions
    if (c.includes('rain') || c.includes('pouring')) return 'effect-rain';

    // Cloudy/Fog conditions
    if (c.includes('cloudy') || c.includes('fog')) return 'effect-cloudy';

    // Clear/Sunny conditions
    if (c === 'sunny' || c === 'clear' || c === 'clear-night' || c.includes('windy') || c === 'exceptional') {
      return isDay ? 'effect-sunny' : 'effect-clear-night';
    }

    return '';
  }

  private _getSnowIntensity(): string {
    const weatherEntity = this._config.weather_entity
      ? this.hass.states[this._config.weather_entity]
      : undefined;

    if (!weatherEntity) return '';

    // Get precipitation amount (mm/h typically)
    const precipitation = Number(weatherEntity.attributes?.precipitation) || 0;

    // Map precipitation to intensity class
    // Light: < 1 mm/h, Normal: 1-4 mm/h, Heavy: > 4 mm/h
    if (precipitation >= 4) return 'intensity-heavy';
    if (precipitation < 1) return 'intensity-light';
    return ''; // default/normal intensity
  }

  private _renderWeatherIcon(condition: string, isDay: boolean) {
    if (!condition) return html`<span class="unavailable">No weather entity</span>`;
    const svgContent = getWeatherIcon(condition, isDay);
    return html`${unsafeHTML(svgContent)}`;
  }

  private _renderSunTimes(): TemplateResult {
    const sunEntity = this._config.sun_entity ? this.hass.states[this._config.sun_entity] : undefined;
    if (!sunEntity) return html``;

    const sunrise = sunEntity.attributes.next_rising as string;
    const sunset = sunEntity.attributes.next_setting as string;

    return html`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">ðŸŒ…</span>
          <span>${formatTime(sunrise)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">ðŸŒ‡</span>
          <span>${formatTime(sunset)}</span>
        </div>
      </div>
    `;
  }

  private _renderForecast(): TemplateResult {
    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    if (!weatherEntity) return html``;

    const forecast = weatherEntity.attributes.forecast as ForecastDay[] | undefined;
    if (!forecast || forecast.length === 0) return html``;

    const days = forecast.slice(0, this._config.forecast_days || 5);
    const unit = this._config.primary_unit || 'Â°';

    return html`
      <div class="forecast">
        ${days.map(day => html`
          <div class="forecast-day">
            <div class="forecast-day-name">${getDayName(day.datetime)}</div>
            <div class="forecast-icon">${MINI_ICONS[day.condition] || 'â“'}</div>
            <div class="forecast-temps">
              <span class="forecast-high">${Math.round(day.temperature || 0)}${unit}</span>
              ${day.templow !== undefined ? html`<span class="forecast-low">${Math.round(day.templow)}${unit}</span>` : nothing}
            </div>
          </div>
        `)}
      </div>
    `;
  }

  private _renderAlerts(): TemplateResult {
    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    if (!weatherEntity) return html``;

    const alerts = weatherEntity.attributes.alerts as Array<{ title?: string; description?: string }> | undefined;
    if (!alerts || alerts.length === 0) return html``;

    // Show only first alert
    const alert = alerts[0];

    return html`
      <div class="alerts">
        <div class="alert">
          <span class="alert-icon">âš ï¸</span>
          <div class="alert-text">
            <div class="alert-title">${alert.title || 'Weather Alert'}</div>
            ${alert.description ? html`<div class="alert-description">${alert.description}</div>` : nothing}
          </div>
        </div>
      </div>
    `;
  }
}

declare global { interface Window { customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>; } }
window.customCards = window.customCards || [];
window.customCards.push({ type: 'weather-card', name: 'Weather Card', description: 'A customizable weather card with animated icons, forecast, and tap actions', preview: true });
console.info('%c WEATHER-CARD %c v1.0.1-u5 ', 'color: white; background: #3498db; font-weight: bold;', 'color: #3498db; background: white; font-weight: bold;');
