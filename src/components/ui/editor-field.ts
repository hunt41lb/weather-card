/* weather-card/src/components/ui/editor-field.ts

 * Editor Field Component
 *
 * A wrapper for form fields that provides a consistent label and layout.
 * Supports single fields and side-by-side field rows.
 *
 * @example
 * ```html
 * <!-- Single field -->
 * <editor-field label="Weather Entity">
 *   <ha-entity-picker ...></ha-entity-picker>
 * </editor-field>
 *
 * <!-- Side-by-side fields using row -->
 * <div class="field-row">
 *   <editor-field label="Icon Size">
 *     <ha-textfield ...></ha-textfield>
 *   </editor-field>
 *   <editor-field label="Icon Position">
 *     <ha-select ...></ha-select>
 *   </editor-field>
 * </div>
 * ```
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('editor-field')
export class EditorField extends LitElement {
  @property({ type: String }) label = '';

  static styles = css`
    :host {
      display: block;
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

    /* Ensure slotted elements take full width */
    ::slotted(*) {
      width: 100%;
    }
  `;

  protected render() {
    return html`
      <div class="field">
        ${this.label ? html`<span class="field-label">${this.label}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-field': EditorField;
  }
}