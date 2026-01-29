/* weather-card/src/components/ui/action-selector.ts

 * Action Selector Component
 *
 * A reusable component for selecting tap/hold/double-tap actions.
 * Handles the common Home Assistant action pattern with support for
 * navigation paths and URLs.
 *
 * @fires action-changed - Fired when the action configuration changes
 *
 * @example
 * ```html
 * <action-selector
 *   label="Tap Action"
 *   .action=${this._config.tap_action}
 *   @action-changed=${this._onTapActionChanged}
 * ></action-selector>
 * ```
 */

import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ActionConfig } from '../../types';

@customElement('action-selector')
export class ActionSelector extends LitElement {
  @property({ type: String }) label = 'Action';
  @property({ attribute: false }) action?: ActionConfig;

  static styles = css`
    :host {
      display: block;
    }

    .action-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .field {
      display: flex;
      flex-direction: column;
    }

    .field-label {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    ha-select,
    ha-textfield {
      width: 100%;
    }
  `;

  protected render() {
    const currentAction = this.action?.action || 'none';

    return html`
      <div class="action-container">
        <div class="field">
          <span class="field-label">${this.label}</span>
          <ha-select
            .value=${currentAction}
            @selected=${this._actionTypeChanged}
            @closed=${(e: Event) => e.stopPropagation()}
            fixedMenuPosition
          >
            <mwc-list-item value="none">None</mwc-list-item>
            <mwc-list-item value="more-info">More Info</mwc-list-item>
            <mwc-list-item value="navigate">Navigate</mwc-list-item>
            <mwc-list-item value="url">Open URL</mwc-list-item>
          </ha-select>
        </div>

        ${currentAction === 'navigate' ? html`
          <div class="field">
            <span class="field-label">Navigation Path</span>
            <ha-textfield
              .value=${this.action?.navigation_path || ''}
              @input=${this._navigationPathChanged}
              placeholder="/lovelace/weather"
            ></ha-textfield>
          </div>
        ` : nothing}

        ${currentAction === 'url' ? html`
          <div class="field">
            <span class="field-label">URL</span>
            <ha-textfield
              .value=${this.action?.url_path || ''}
              @input=${this._urlPathChanged}
              placeholder="https://weather.com"
            ></ha-textfield>
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _actionTypeChanged(ev: Event) {
    const target = ev.target as HTMLSelectElement;
    const newAction: ActionConfig = {
      ...this.action,
      action: target.value as ActionConfig['action'],
    };

    // Clear irrelevant fields when action type changes
    if (newAction.action !== 'navigate') {
      delete newAction.navigation_path;
    }
    if (newAction.action !== 'url') {
      delete newAction.url_path;
    }
    if (newAction.action !== 'call-service') {
      delete newAction.service;
      delete newAction.service_data;
    }

    this._dispatchChange(newAction);
  }

  private _navigationPathChanged(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const newAction: ActionConfig = {
      ...this.action,
      action: 'navigate',
      navigation_path: target.value,
    };
    this._dispatchChange(newAction);
  }

  private _urlPathChanged(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const newAction: ActionConfig = {
      ...this.action,
      action: 'url',
      url_path: target.value,
    };
    this._dispatchChange(newAction);
  }

  private _dispatchChange(action: ActionConfig) {
    this.dispatchEvent(
      new CustomEvent('action-changed', {
        detail: { action },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'action-selector': ActionSelector;
  }
}