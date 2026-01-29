/* src/weather-card.ts 

 * All Components/Styling Importing here
*/

import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { guard } from 'lit/directives/guard.js';

import { weatherCardStyles } from './styles';
import { getWeatherIcon, MINI_ICONS } from './components/icons';

// Action types
interface ActionConfig {
  action: 'none' | 'more-info' | 'navigate' | 'call-service' | 'url';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: { [key: string]: unknown };
  entity?: string;
}

interface WeatherCardConfig {
  type: string;
  weather_entity?: string;
  sun_entity?: string;
  primary_entity?: string;
  primary_attribute?: string;
  primary_unit?: string;
  secondary_entity?: string;
  secondary_attribute?: string;
  secondary_unit?: string;
  secondary_label?: string;
  description_entity?: string;
  description_attribute?: string;
  show_greeting?: boolean;
  greeting_name?: string;
  icon_size?: number;
  card_height?: string;
  // New features
  icon_position?: 'left' | 'right';
  show_forecast?: boolean;
  forecast_days?: number;
  show_sunrise_sunset?: boolean;
  show_alerts?: boolean;
  show_background_effects?: boolean;
  use_dynamic_background?: boolean;
  day_background?: string;
  night_background?: string;
  // Tap actions
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  // Layout
  view_layout?: {
    'grid-area'?: string;
    'grid-column'?: string;
    'grid-row'?: string;
    position?: string;
    [key: string]: unknown;
  };
}

interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  user?: { name?: string };
  callService: (domain: string, service: string, data: object) => void;
}

interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { [key: string]: unknown };
}

interface ForecastDay {
  datetime: string;
  condition: string;
  temperature?: number;
  templow?: number;
  precipitation_probability?: number;
}

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
      primary_unit: '°F',
      secondary_entity: 'weather.forecast_home',
      secondary_attribute: 'apparent_temperature',
      secondary_unit: '°F',
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
    const greeting = this._getGreeting();
    const primary = this._getPrimaryValue();
    const secondary = this._getSecondaryValue();
    const description = this._getDescription();
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
    const effectClass = this._getEffectClass(condition);
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
          <div class="cloud-layer cloud-layer-1"></div>
          <div class="cloud-layer cloud-layer-2"></div>
          <div class="cloud-layer cloud-layer-3"></div>
        </div>
      `;
    }

    // For other effects, use simple container
    return html`<div class="weather-effects ${effectClass}"></div>`;
  }

  private _getEffectClass(condition: string): string {
    const c = condition?.toLowerCase() || '';
    if (c.includes('rain') || c.includes('pouring')) return 'effect-rain';
    if (c.includes('snow')) return 'effect-snow';
    if (c.includes('fog')) return 'effect-fog';
    if (c === 'sunny' || c === 'clear') return 'effect-sunny';
    if (c.includes('cloudy')) return 'effect-cloudy';
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

    const formatTime = (isoString: string): string => {
      if (!isoString) return '--:--';
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return html`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">🌅</span>
          <span>${formatTime(sunrise)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">🌇</span>
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
    const unit = this._config.primary_unit || '°';

    const getDayName = (dateStr: string): string => {
      const date = new Date(dateStr);
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (date.toDateString() === today.toDateString()) return 'Today';
      if (date.toDateString() === tomorrow.toDateString()) return 'Tmrw';
      return date.toLocaleDateString([], { weekday: 'short' });
    };

    return html`
      <div class="forecast">
        ${days.map(day => html`
          <div class="forecast-day">
            <div class="forecast-day-name">${getDayName(day.datetime)}</div>
            <div class="forecast-icon">${MINI_ICONS[day.condition] || '❓'}</div>
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
          <span class="alert-icon">⚠️</span>
          <div class="alert-text">
            <div class="alert-title">${alert.title || 'Weather Alert'}</div>
            ${alert.description ? html`<div class="alert-description">${alert.description}</div>` : nothing}
          </div>
        </div>
      </div>
    `;
  }

  private _getGreeting(): string {
    if (this._config.greeting_name) return `Hello, ${this._config.greeting_name}`;
    const userName = this.hass?.user?.name;
    if (userName) return `Hello, ${userName.split(' ')[0]}`;
    return 'Hello';
  }

  private _getPrimaryValue(): string {
    const config = this._config;
    if (!config.primary_entity) return '--';
    const entity = this.hass.states[config.primary_entity];
    if (!entity) return '--';
    let value: string | number | unknown;
    if (config.primary_attribute) { value = entity.attributes[config.primary_attribute]; } else { value = entity.state; }
    if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return '--';
    const unit = config.primary_unit || '';
    return `${value}${unit}`;
  }

  private _getSecondaryValue(): string {
    const config = this._config;
    if (!config.secondary_entity) return '';
    const entity = this.hass.states[config.secondary_entity];
    if (!entity) return '';
    let value: string | number | unknown;
    if (config.secondary_attribute) { value = entity.attributes[config.secondary_attribute]; } else { value = entity.state; }
    if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return '';
    const label = config.secondary_label || '';
    const unit = config.secondary_unit || '';
    return `${label} ${value}${unit}`.trim();
  }

  private _getDescription(): string {
    const config = this._config;
    if (!config.description_entity) {
      if (config.weather_entity) {
        const entity = this.hass.states[config.weather_entity];
        if (entity) return this._formatCondition(entity.state);
      }
      return '';
    }
    const entity = this.hass.states[config.description_entity];
    if (!entity) return '';
    if (config.description_attribute) {
      const value = entity.attributes[config.description_attribute];
      return value !== undefined && value !== null ? String(value) : '';
    }
    return this._formatCondition(entity.state);
  }

  private _formatCondition(condition: string): string {
    const conditionMap: { [key: string]: string } = { 'partlycloudy': 'Partly Cloudy', 'mostlycloudy': 'Mostly Cloudy', 'clear': 'Clear', 'clear-night': 'Clear', 'cloudy': 'Cloudy', 'rainy': 'Rain', 'pouring': 'Heavy Rain', 'snowy': 'Snow', 'snowy-rainy': 'Sleet', 'sunny': 'Sunny', 'windy': 'Windy', 'windy-variant': 'Windy', 'foggy': 'Foggy', 'fog': 'Fog', 'hail': 'Hail', 'lightning': 'Lightning', 'lightning-rainy': 'Thunderstorm', 'exceptional': 'Exceptional' };
    return conditionMap[condition.toLowerCase()] || condition.charAt(0).toUpperCase() + condition.slice(1).replace(/-/g, ' ');
  }
}

// Editor will be continued in part 2...

@customElement('weather-card-editor')
export class WeatherCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: WeatherCardConfig;

  static get styles() {
    return css`
      :host { display: block; }
      .editor-container { display: flex; flex-direction: column; gap: 16px; padding: 16px; }
      .section { border: 1px solid var(--divider-color); border-radius: 8px; padding: 16px; }
      .section-title { font-weight: 600; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-color); }
      .field { margin-bottom: 12px; }
      .field:last-child { margin-bottom: 0; }
      .field-label { display: block; margin-bottom: 4px; font-size: 12px; color: var(--secondary-text-color); }
      .field-row { display: flex; gap: 8px; }
      .field-row > * { flex: 1; }
      ha-entity-picker, ha-textfield, ha-select { width: 100%; }
      ha-formfield { display: block; margin-top: 8px; }
    `;
  }

  public setConfig(config: WeatherCardConfig): void { this._config = config; }

  private _getEntityAttributes(entityId: string | undefined): string[] {
    if (!entityId || !this.hass?.states[entityId]) return [];
    const entity = this.hass.states[entityId];
    const attributes = Object.keys(entity.attributes || {});
    const hiddenAttrs = ['friendly_name', 'icon', 'entity_picture', 'supported_features', 'attribution', 'device_class', 'state_class', 'unit_of_measurement'];
    return attributes.filter(attr => !hiddenAttrs.includes(attr)).sort();
  }

  private _getAttributeUnit(entityId: string | undefined, attribute: string | undefined): string {
    if (!entityId || !attribute || !this.hass?.states[entityId]) return '';
    const entity = this.hass.states[entityId];
    const entityUnit = String(entity.attributes.unit_of_measurement || '');
    const unitMappings: { [key: string]: string } = {
      'temperature': entityUnit || '°F', 'apparent_temperature': entityUnit || '°F', 'dew_point': entityUnit || '°F',
      'humidity': '%', 'pressure': 'hPa', 'wind_speed': 'mph', 'wind_gust_speed': 'mph',
      'visibility': 'mi', 'precipitation': 'in', 'precipitation_probability': '%', 'cloud_coverage': '%', 'uv_index': '',
    };
    return unitMappings[attribute] !== undefined ? unitMappings[attribute] : '';
  }

  private _getAttributeLabel(attribute: string | undefined): string {
    if (!attribute) return '';
    const labelMappings: { [key: string]: string } = {
      'temperature': 'Temperature:', 'apparent_temperature': 'Feels Like:', 'dew_point': 'Dew Point:',
      'humidity': 'Humidity:', 'pressure': 'Pressure:', 'wind_speed': 'Wind:', 'wind_gust_speed': 'Gusts:',
      'wind_bearing': 'Wind Direction:', 'visibility': 'Visibility:', 'precipitation': 'Precipitation:',
      'precipitation_probability': 'Precip Chance:', 'cloud_coverage': 'Cloud Cover:', 'uv_index': 'UV Index:', 'ozone': 'Ozone:',
    };
    if (labelMappings[attribute] !== undefined) return labelMappings[attribute];
    return attribute.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ':';
  }

  private _renderAttributeSelect(entityId: string | undefined, configValue: string, currentValue: string | undefined, placeholder: string, unitConfigValue?: string, labelConfigValue?: string) {
    const attributes = this._getEntityAttributes(entityId);
    if (!entityId || attributes.length === 0) {
      return html`<ha-textfield .value=${currentValue || ''} .configValue=${configValue} @input=${this._valueChanged} placeholder=${placeholder}></ha-textfield>`;
    }
    return html`
      <ha-select .value=${currentValue || ''} .configValue=${configValue} .unitConfigValue=${unitConfigValue || ''} .labelConfigValue=${labelConfigValue || ''} .entityId=${entityId} @selected=${this._attributeChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition naturalMenuWidth>
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${attributes.map(attr => html`<mwc-list-item .value=${attr}>${attr}</mwc-list-item>`)}
      </ha-select>
    `;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <div class="editor-container">
        <div class="section">
          <div class="section-title">Weather Source</div>
          <div class="field">
            <span class="field-label">Weather Entity (required)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.weather_entity || ''} .configValue=${'weather_entity'} @value-changed=${this._valueChanged} .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('weather.')} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Sun Entity (for day/night icons)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.sun_entity || 'sun.sun'} .configValue=${'sun_entity'} @value-changed=${this._valueChanged} .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('sun.')} allow-custom-entity></ha-entity-picker>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Icon Settings</div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Icon Size (px)</span>
              <ha-textfield type="number" .value=${String(this._config.icon_size || 100)} .configValue=${'icon_size'} @input=${this._valueChanged}></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Icon Position</span>
              <ha-select .value=${this._config.icon_position || 'left'} .configValue=${'icon_position'} @selected=${this._valueChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
                <mwc-list-item value="left">Left</mwc-list-item>
                <mwc-list-item value="right">Right</mwc-list-item>
              </ha-select>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Primary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.primary_entity || ''} .configValue=${'primary_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.primary_entity, 'primary_attribute', this._config.primary_attribute, 'temperature', 'primary_unit')}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.primary_unit ?? ''} .configValue=${'primary_unit'} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Secondary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.secondary_entity || ''} .configValue=${'secondary_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.secondary_entity, 'secondary_attribute', this._config.secondary_attribute, 'apparent_temperature', 'secondary_unit', 'secondary_label')}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.secondary_unit ?? ''} .configValue=${'secondary_unit'} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
          <div class="field">
            <span class="field-label">Label</span>
            <ha-textfield .value=${this._config.secondary_label ?? ''} .configValue=${'secondary_label'} @input=${this._valueChanged} placeholder="Feels Like:"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Description</div>
          <div class="field">
            <span class="field-label">Entity (leave empty for weather condition)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.description_entity || ''} .configValue=${'description_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Attribute</span>
            ${this._renderAttributeSelect(this._config.description_entity, 'description_attribute', this._config.description_attribute, 'desc')}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Features</div>
          <div class="field">
            <ha-formfield label="Show Greeting">
              <ha-switch .checked=${this._config.show_greeting !== false} .configValue=${'show_greeting'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <span class="field-label">Custom Greeting Name</span>
            <ha-textfield .value=${this._config.greeting_name || ''} .configValue=${'greeting_name'} @input=${this._valueChanged} placeholder="Leave empty for logged-in user"></ha-textfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Sunrise/Sunset">
              <ha-switch .checked=${this._config.show_sunrise_sunset === true} .configValue=${'show_sunrise_sunset'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Forecast">
              <ha-switch .checked=${this._config.show_forecast === true} .configValue=${'show_forecast'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.show_forecast ? html`
            <div class="field">
              <span class="field-label">Forecast Days (1-7)</span>
              <ha-textfield type="number" min="1" max="7" .value=${String(this._config.forecast_days || 5)} .configValue=${'forecast_days'} @input=${this._valueChanged}></ha-textfield>
            </div>
          ` : nothing}
          <div class="field">
            <ha-formfield label="Show Weather Alerts">
              <ha-switch .checked=${this._config.show_alerts === true} .configValue=${'show_alerts'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Background Effects">
              <ha-switch .checked=${this._config.show_background_effects === true} .configValue=${'show_background_effects'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Dynamic Background (Day/Night)">
              <ha-switch .checked=${this._config.use_dynamic_background === true} .configValue=${'use_dynamic_background'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.use_dynamic_background ? html`
            <div class="field">
              <span class="field-label">Day Background (color or gradient)</span>
              <ha-textfield
                .value=${this._config.day_background || 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)'}
                .configValue=${'day_background'}
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"
              ></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Night Background (color or gradient)</span>
              <ha-textfield
                .value=${this._config.night_background || 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)'}
                .configValue=${'night_background'}
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"
              ></ha-textfield>
            </div>
          ` : nothing}
        </div>

        <div class="section">
          <div class="section-title">Tap Actions</div>
          <div class="field">
            <span class="field-label">Tap Action</span>
            <ha-select .value=${this._config.tap_action?.action || 'more-info'} .configValue=${'tap_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          ${this._config.tap_action?.action === 'navigate' ? html`
            <div class="field">
              <span class="field-label">Navigation Path</span>
              <ha-textfield .value=${this._config.tap_action?.navigation_path || ''} .configValue=${'tap_action.navigation_path'} @input=${this._actionPathChanged} placeholder="/lovelace/weather"></ha-textfield>
            </div>
          ` : nothing}
          ${this._config.tap_action?.action === 'url' ? html`
            <div class="field">
              <span class="field-label">URL</span>
              <ha-textfield .value=${this._config.tap_action?.url_path || ''} .configValue=${'tap_action.url_path'} @input=${this._actionPathChanged} placeholder="https://weather.com"></ha-textfield>
            </div>
          ` : nothing}
          <div class="field">
            <span class="field-label">Hold Action</span>
            <ha-select .value=${this._config.hold_action?.action || 'none'} .configValue=${'hold_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          <div class="field">
            <span class="field-label">Double Tap Action</span>
            <ha-select .value=${this._config.double_tap_action?.action || 'none'} .configValue=${'double_tap_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Appearance</div>
          <div class="field">
            <span class="field-label">Card Height</span>
            <ha-textfield .value=${this._config.card_height || 'auto'} .configValue=${'card_height'} @input=${this._valueChanged} placeholder="auto or 180px"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Layout</div>
          <div class="field">
            <span class="field-label">Grid Area</span>
            <ha-textfield .value=${this._config.view_layout?.['grid-area'] || ''} .configValue=${'view_layout.grid-area'} @input=${this._viewLayoutChanged} placeholder="weather"></ha-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as HTMLInputElement & { configValue: string };
    const configValue = target.configValue;
    if (!configValue) return;
    let value: string | number | boolean | undefined;
    if (target.type === 'checkbox' || target.tagName === 'HA-SWITCH') { value = (target as HTMLInputElement).checked; }
    else if (target.type === 'number') { value = target.value ? Number(target.value) : undefined; }
    else { value = (ev as CustomEvent).detail?.value ?? target.value; }
    if (value === '' || value === undefined) {
      const newConfig = { ...this._config };
      delete (newConfig as Record<string, unknown>)[configValue];
      this._config = newConfig;
    } else { this._config = { ...this._config, [configValue]: value }; }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _attributeChanged(ev: Event): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as HTMLElement & { configValue: string; unitConfigValue: string; labelConfigValue: string; entityId: string; value: string };
    const { configValue, unitConfigValue, labelConfigValue, entityId, value: attribute } = target;
    if (!configValue) return;
    const newConfig: Record<string, unknown> = { ...this._config };
    if (attribute === '' || attribute === undefined) {
      delete newConfig[configValue];
      if (unitConfigValue) delete newConfig[unitConfigValue];
      if (labelConfigValue) delete newConfig[labelConfigValue];
    } else {
      newConfig[configValue] = attribute;
      if (unitConfigValue) newConfig[unitConfigValue] = this._getAttributeUnit(entityId, attribute);
      if (labelConfigValue) newConfig[labelConfigValue] = this._getAttributeLabel(attribute);
    }
    this._config = newConfig as WeatherCardConfig;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _actionChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLElement & { configValue: string; value: string };
    const [actionType, actionProp] = target.configValue.split('.');
    const newAction = { ...(this._config[actionType as keyof WeatherCardConfig] as ActionConfig || {}), [actionProp]: target.value };
    this._config = { ...this._config, [actionType]: newAction };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _actionPathChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLInputElement & { configValue: string };
    const [actionType, actionProp] = target.configValue.split('.');
    const newAction = { ...(this._config[actionType as keyof WeatherCardConfig] as ActionConfig || {}), [actionProp]: target.value };
    this._config = { ...this._config, [actionType]: newAction };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _viewLayoutChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const newViewLayout = { ...this._config.view_layout };
    if (value === '' || value === undefined) { delete newViewLayout['grid-area']; }
    else { newViewLayout['grid-area'] = value; }
    const hasValues = Object.keys(newViewLayout).length > 0;
    if (hasValues) { this._config = { ...this._config, view_layout: newViewLayout }; }
    else { const newConfig = { ...this._config }; delete newConfig.view_layout; this._config = newConfig; }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }
}

declare global { interface Window { customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>; } }
window.customCards = window.customCards || [];
window.customCards.push({ type: 'weather-card', name: 'Weather Card', description: 'A customizable weather card with animated icons, forecast, and tap actions', preview: true });
console.info('%c WEATHER-CARD %c v1.0.1-u2 ', 'color: white; background: #3498db; font-weight: bold;', 'color: #3498db; background: white; font-weight: bold;');
