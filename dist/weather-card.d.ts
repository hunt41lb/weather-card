import { LitElement } from 'lit';
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
    static get styles(): import("lit").CSSResult;
    setConfig(config: WeatherCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): WeatherCardConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getGreeting;
    private _getWeatherIcon;
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
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _attributeChanged;
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