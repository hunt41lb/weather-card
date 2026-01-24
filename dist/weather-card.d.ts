import { LitElement, TemplateResult } from 'lit';
interface ActionConfig {
    action: 'none' | 'more-info' | 'navigate' | 'call-service' | 'url';
    navigation_path?: string;
    url_path?: string;
    service?: string;
    service_data?: {
        [key: string]: unknown;
    };
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
    icon_position?: 'left' | 'right';
    show_forecast?: boolean;
    forecast_days?: number;
    show_sunrise_sunset?: boolean;
    show_alerts?: boolean;
    show_background_effects?: boolean;
    use_dynamic_background?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    view_layout?: {
        'grid-area'?: string;
        'grid-column'?: string;
        'grid-row'?: string;
        position?: string;
        [key: string]: unknown;
    };
}
interface HomeAssistant {
    states: {
        [entity_id: string]: HassEntity;
    };
    user?: {
        name?: string;
    };
    callService: (domain: string, service: string, data: object) => void;
}
interface HassEntity {
    entity_id: string;
    state: string;
    attributes: {
        [key: string]: unknown;
    };
}
export declare class WeatherCard extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _holdTimer?;
    private _lastTap;
    static get styles(): import("lit").CSSResult;
    setConfig(config: WeatherCardConfig): void;
    getCardSize(): number;
    getLayoutOptions(): {
        [key: string]: unknown;
        'grid-area'?: string;
        'grid-column'?: string;
        'grid-row'?: string;
        position?: string;
    };
    static getConfigElement(): HTMLElement;
    static getStubConfig(): WeatherCardConfig;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleTap;
    private _handleHold;
    private _handleTouchStart;
    private _handleTouchEnd;
    private _executeAction;
    protected render(): TemplateResult<1>;
    private _renderBackgroundEffect;
    private _getEffectClass;
    private _getSnowIntensity;
    private _renderWeatherIcon;
    private _renderSunTimes;
    private _renderForecast;
    private _renderAlerts;
    private _getGreeting;
    private _getPrimaryValue;
    private _getSecondaryValue;
    private _getDescription;
    private _formatCondition;
}
export declare class WeatherCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    static get styles(): import("lit").CSSResult;
    setConfig(config: WeatherCardConfig): void;
    private _getEntityAttributes;
    private _getAttributeUnit;
    private _getAttributeLabel;
    private _renderAttributeSelect;
    protected render(): TemplateResult<1>;
    private _valueChanged;
    private _attributeChanged;
    private _actionChanged;
    private _actionPathChanged;
    private _viewLayoutChanged;
}
declare global {
    interface Window {
        customCards?: Array<{
            type: string;
            name: string;
            description: string;
            preview?: boolean;
        }>;
    }
}
export {};
//# sourceMappingURL=weather-card.d.ts.map