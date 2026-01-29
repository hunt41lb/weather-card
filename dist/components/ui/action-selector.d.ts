import { LitElement } from 'lit';
import type { ActionConfig } from '../../types';
export declare class ActionSelector extends LitElement {
    label: string;
    action?: ActionConfig;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    private _actionTypeChanged;
    private _navigationPathChanged;
    private _urlPathChanged;
    private _dispatchChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'action-selector': ActionSelector;
    }
}
//# sourceMappingURL=action-selector.d.ts.map