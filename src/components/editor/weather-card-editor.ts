/* weather-card/src/components/editor/weather-card-editor.ts

 * Weather Card Editor
 *
 * Visual editor for configuring the weather card in Home Assistant's UI.
 */

import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, WeatherCardConfig, ActionConfig } from '../../types';

// Import UI components (registers custom elements)
import '../ui';

@customElement('weather-card-editor')
export class WeatherCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: WeatherCardConfig;

  static styles = css`
    :host {
      display: block;
    }

    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .field-row {
      display: flex;
      gap: 8px;
    }

    .field-row > * {
      flex: 1;
    }

    ha-entity-picker,
    ha-textfield,
    ha-select {
      width: 100%;
    }

    ha-formfield {
      display: block;
      margin-top: 8px;
    }
  `;

  public setConfig(config: WeatherCardConfig): void {
    this._config = config;
  }

  // ===========================================================================
  // Helper Methods
  // ===========================================================================

  private _getEntityAttributes(entityId: string | undefined): string[] {
    if (!entityId || !this.hass?.states[entityId]) return [];
    const entity = this.hass.states[entityId];
    const attributes = Object.keys(entity.attributes || {});
    const hiddenAttrs = [
      'friendly_name', 'icon', 'entity_picture', 'supported_features',
      'attribution', 'device_class', 'state_class', 'unit_of_measurement'
    ];
    return attributes.filter(attr => !hiddenAttrs.includes(attr)).sort();
  }

  private _getAttributeUnit(entityId: string | undefined, attribute: string | undefined): string {
    if (!entityId || !attribute || !this.hass?.states[entityId]) return '';
    const entity = this.hass.states[entityId];
    const entityUnit = String(entity.attributes.unit_of_measurement || '');
    const unitMappings: { [key: string]: string } = {
      'temperature': entityUnit || '°F',
      'apparent_temperature': entityUnit || '°F',
      'dew_point': entityUnit || '°F',
      'humidity': '%',
      'pressure': 'hPa',
      'wind_speed': 'mph',
      'wind_gust_speed': 'mph',
      'visibility': 'mi',
      'precipitation': 'in',
      'precipitation_probability': '%',
      'cloud_coverage': '%',
      'uv_index': '',
    };
    return unitMappings[attribute] !== undefined ? unitMappings[attribute] : '';
  }

  private _getAttributeLabel(attribute: string | undefined): string {
    if (!attribute) return '';
    const labelMappings: { [key: string]: string } = {
      'temperature': 'Temperature:',
      'apparent_temperature': 'Feels Like:',
      'dew_point': 'Dew Point:',
      'humidity': 'Humidity:',
      'pressure': 'Pressure:',
      'wind_speed': 'Wind:',
      'wind_gust_speed': 'Gusts:',
      'wind_bearing': 'Wind Direction:',
      'visibility': 'Visibility:',
      'precipitation': 'Precipitation:',
      'precipitation_probability': 'Precip Chance:',
      'cloud_coverage': 'Cloud Cover:',
      'uv_index': 'UV Index:',
      'ozone': 'Ozone:',
    };
    if (labelMappings[attribute] !== undefined) return labelMappings[attribute];
    return attribute.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ':';
  }

  // ===========================================================================
  // Render Methods
  // ===========================================================================

  private _renderAttributeSelect(
    entityId: string | undefined,
    configValue: string,
    currentValue: string | undefined,
    placeholder: string,
    unitConfigValue?: string,
    labelConfigValue?: string
  ) {
    const attributes = this._getEntityAttributes(entityId);
    if (!entityId || attributes.length === 0) {
      return html`
        <ha-textfield
          .value=${currentValue || ''}
          .configValue=${configValue}
          @input=${this._valueChanged}
          placeholder=${placeholder}
        ></ha-textfield>
      `;
    }
    return html`
      <ha-select
        .value=${currentValue || ''}
        .configValue=${configValue}
        .unitConfigValue=${unitConfigValue || ''}
        .labelConfigValue=${labelConfigValue || ''}
        .entityId=${entityId}
        @selected=${this._attributeChanged}
        @closed=${(e: Event) => e.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
      >
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${attributes.map(attr => html`<mwc-list-item .value=${attr}>${attr}</mwc-list-item>`)}
      </ha-select>
    `;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="editor-container">
        ${this._renderWeatherSourceSection()}
        ${this._renderIconSettingsSection()}
        ${this._renderPrimaryValueSection()}
        ${this._renderSecondaryValueSection()}
        ${this._renderDescriptionSection()}
        ${this._renderFeaturesSection()}
        ${this._renderTapActionsSection()}
        ${this._renderAppearanceSection()}
        ${this._renderLayoutSection()}
      </div>
    `;
  }

  private _renderWeatherSourceSection() {
    return html`
      <editor-section title="Weather Source">
        <editor-field label="Weather Entity (required)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.weather_entity || ''}
            .configValue=${'weather_entity'}
            @value-changed=${this._valueChanged}
            .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('weather.')}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <editor-field label="Sun Entity (for day/night icons)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.sun_entity || 'sun.sun'}
            .configValue=${'sun_entity'}
            @value-changed=${this._valueChanged}
            .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('sun.')}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
      </editor-section>
    `;
  }

  private _renderIconSettingsSection() {
    return html`
      <editor-section title="Icon Settings">
        <div class="field-row">
          <editor-field label="Icon Size (px)">
            <ha-textfield
              type="number"
              .value=${String(this._config.icon_size || 100)}
              .configValue=${'icon_size'}
              @input=${this._valueChanged}
            ></ha-textfield>
          </editor-field>
          <editor-field label="Icon Position">
            <ha-select
              .value=${this._config.icon_position || 'left'}
              .configValue=${'icon_position'}
              @selected=${this._valueChanged}
              @closed=${(e: Event) => e.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="left">Left</mwc-list-item>
              <mwc-list-item value="right">Right</mwc-list-item>
            </ha-select>
          </editor-field>
        </div>
      </editor-section>
    `;
  }

  private _renderPrimaryValueSection() {
    return html`
      <editor-section title="Primary Value">
        <editor-field label="Entity">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.primary_entity || ''}
            .configValue=${'primary_entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <div class="field-row">
          <editor-field label="Attribute">
            ${this._renderAttributeSelect(
              this._config.primary_entity,
              'primary_attribute',
              this._config.primary_attribute,
              'temperature',
              'primary_unit'
            )}
          </editor-field>
          <editor-field label="Unit">
            <ha-textfield
              .value=${this._config.primary_unit ?? ''}
              .configValue=${'primary_unit'}
              @input=${this._valueChanged}
              placeholder="°F"
            ></ha-textfield>
          </editor-field>
        </div>
      </editor-section>
    `;
  }

  private _renderSecondaryValueSection() {
    return html`
      <editor-section title="Secondary Value">
        <editor-field label="Entity">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.secondary_entity || ''}
            .configValue=${'secondary_entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <div class="field-row">
          <editor-field label="Attribute">
            ${this._renderAttributeSelect(
              this._config.secondary_entity,
              'secondary_attribute',
              this._config.secondary_attribute,
              'apparent_temperature',
              'secondary_unit',
              'secondary_label'
            )}
          </editor-field>
          <editor-field label="Unit">
            <ha-textfield
              .value=${this._config.secondary_unit ?? ''}
              .configValue=${'secondary_unit'}
              @input=${this._valueChanged}
              placeholder="°F"
            ></ha-textfield>
          </editor-field>
        </div>
        <editor-field label="Label">
          <ha-textfield
            .value=${this._config.secondary_label ?? ''}
            .configValue=${'secondary_label'}
            @input=${this._valueChanged}
            placeholder="Feels Like:"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `;
  }

  private _renderDescriptionSection() {
    return html`
      <editor-section title="Description">
        <editor-field label="Entity (leave empty for weather condition)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.description_entity || ''}
            .configValue=${'description_entity'}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <editor-field label="Attribute">
          ${this._renderAttributeSelect(
            this._config.description_entity,
            'description_attribute',
            this._config.description_attribute,
            'desc'
          )}
        </editor-field>
      </editor-section>
    `;
  }

  private _renderFeaturesSection() {
    return html`
      <editor-section title="Features">
        <ha-formfield label="Show Greeting">
          <ha-switch
            .checked=${this._config.show_greeting !== false}
            .configValue=${'show_greeting'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <editor-field label="Custom Greeting Name">
          <ha-textfield
            .value=${this._config.greeting_name || ''}
            .configValue=${'greeting_name'}
            @input=${this._valueChanged}
            placeholder="Leave empty for logged-in user"
          ></ha-textfield>
        </editor-field>
        <ha-formfield label="Show Sunrise/Sunset">
          <ha-switch
            .checked=${this._config.show_sunrise_sunset === true}
            .configValue=${'show_sunrise_sunset'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show Forecast">
          <ha-switch
            .checked=${this._config.show_forecast === true}
            .configValue=${'show_forecast'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._config.show_forecast ? html`
          <editor-field label="Forecast Days (1-7)">
            <ha-textfield
              type="number"
              min="1"
              max="7"
              .value=${String(this._config.forecast_days || 5)}
              .configValue=${'forecast_days'}
              @input=${this._valueChanged}
            ></ha-textfield>
          </editor-field>
        ` : nothing}
        <ha-formfield label="Show Weather Alerts">
          <ha-switch
            .checked=${this._config.show_alerts === true}
            .configValue=${'show_alerts'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show Background Effects">
          <ha-switch
            .checked=${this._config.show_background_effects === true}
            .configValue=${'show_background_effects'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Dynamic Background (Day/Night)">
          <ha-switch
            .checked=${this._config.use_dynamic_background === true}
            .configValue=${'use_dynamic_background'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._config.use_dynamic_background ? html`
          <editor-field label="Day Background (color or gradient)">
            <ha-textfield
              .value=${this._config.day_background || 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)'}
              .configValue=${'day_background'}
              @input=${this._valueChanged}
              placeholder="linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"
            ></ha-textfield>
          </editor-field>
          <editor-field label="Night Background (color or gradient)">
            <ha-textfield
              .value=${this._config.night_background || 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)'}
              .configValue=${'night_background'}
              @input=${this._valueChanged}
              placeholder="linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"
            ></ha-textfield>
          </editor-field>
        ` : nothing}
      </editor-section>
    `;
  }

  private _renderTapActionsSection() {
    return html`
      <editor-section title="Tap Actions">
        <action-selector
          label="Tap Action"
          .action=${this._config.tap_action}
          @action-changed=${(e: CustomEvent) => this._onActionChanged('tap_action', e)}
        ></action-selector>
        <action-selector
          label="Hold Action"
          .action=${this._config.hold_action}
          @action-changed=${(e: CustomEvent) => this._onActionChanged('hold_action', e)}
        ></action-selector>
        <action-selector
          label="Double Tap Action"
          .action=${this._config.double_tap_action}
          @action-changed=${(e: CustomEvent) => this._onActionChanged('double_tap_action', e)}
        ></action-selector>
      </editor-section>
    `;
  }

  private _renderAppearanceSection() {
    return html`
      <editor-section title="Appearance">
        <editor-field label="Card Height">
          <ha-textfield
            .value=${this._config.card_height || 'auto'}
            .configValue=${'card_height'}
            @input=${this._valueChanged}
            placeholder="auto or 180px"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `;
  }

  private _renderLayoutSection() {
    return html`
      <editor-section title="Layout">
        <editor-field label="Grid Area">
          <ha-textfield
            .value=${this._config.view_layout?.['grid-area'] || ''}
            .configValue=${'view_layout.grid-area'}
            @input=${this._viewLayoutChanged}
            placeholder="weather"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `;
  }

  // ===========================================================================
  // Event Handlers
  // ===========================================================================

  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as HTMLInputElement & { configValue: string };
    const configValue = target.configValue;
    if (!configValue) return;

    let value: string | number | boolean | undefined;

    if (target.type === 'checkbox' || target.tagName === 'HA-SWITCH') {
      value = (target as HTMLInputElement).checked;
    } else if (target.type === 'number') {
      value = target.value ? Number(target.value) : undefined;
    } else {
      value = (ev as CustomEvent).detail?.value ?? target.value;
    }

    if (value === '' || value === undefined) {
      const newConfig = { ...this._config };
      delete (newConfig as Record<string, unknown>)[configValue];
      this._config = newConfig;
    } else {
      this._config = { ...this._config, [configValue]: value };
    }

    this._dispatchConfigChanged();
  }

  private _attributeChanged(ev: Event): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as HTMLElement & {
      configValue: string;
      unitConfigValue: string;
      labelConfigValue: string;
      entityId: string;
      value: string;
    };

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
    this._dispatchConfigChanged();
  }

  private _onActionChanged(actionType: 'tap_action' | 'hold_action' | 'double_tap_action', ev: CustomEvent): void {
    if (!this._config) return;

    const action = ev.detail.action as ActionConfig;
    this._config = { ...this._config, [actionType]: action };
    this._dispatchConfigChanged();
  }

  private _viewLayoutChanged(ev: Event): void {
    if (!this._config) return;

    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const newViewLayout = { ...this._config.view_layout };

    if (value === '' || value === undefined) {
      delete newViewLayout['grid-area'];
    } else {
      newViewLayout['grid-area'] = value;
    }

    const hasValues = Object.keys(newViewLayout).length > 0;
    if (hasValues) {
      this._config = { ...this._config, view_layout: newViewLayout };
    } else {
      const newConfig = { ...this._config };
      delete newConfig.view_layout;
      this._config = newConfig;
    }

    this._dispatchConfigChanged();
  }

  private _dispatchConfigChanged(): void {
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-card-editor': WeatherCardEditor;
  }
}