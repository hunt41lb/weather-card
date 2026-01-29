import { LitElement } from 'lit';
import type { HomeAssistant, WeatherCardConfig } from '../../types';
import '../ui';
export declare class WeatherCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    static styles: import("lit").CSSResult;
    setConfig(config: WeatherCardConfig): void;
    private _getEntityAttributes;
    private _getAttributeUnit;
    private _getAttributeLabel;
    private _renderAttributeSelect;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderWeatherSourceSection;
    private _renderIconSettingsSection;
    private _renderPrimaryValueSection;
    private _renderSecondaryValueSection;
    private _renderDescriptionSection;
    private _renderFeaturesSection;
    private _renderTapActionsSection;
    private _renderAppearanceSection;
    private _renderLayoutSection;
    private _valueChanged;
    private _attributeChanged;
    private _onActionChanged;
    private _viewLayoutChanged;
    private _dispatchConfigChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'weather-card-editor': WeatherCardEditor;
    }
}
//# sourceMappingURL=weather-card-editor.d.ts.map