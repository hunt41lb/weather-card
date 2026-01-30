import { LitElement, TemplateResult } from 'lit';
import './components/editor';
import type { HomeAssistant, WeatherCardConfig } from './types';
export declare class WeatherCard extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _holdTimer?;
    private _lastTap;
    static styles: import("lit").CSSResult[];
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
//# sourceMappingURL=weather-card.d.ts.map