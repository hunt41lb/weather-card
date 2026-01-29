/* weather-card/src/components/ui/editor-section.ts

 * Editor Section Component
 *
 * A collapsible section wrapper for grouping related editor fields.
 * Provides consistent styling with a title header and bordered container.
 *
 * @example
 * ```html
 * <editor-section title="Weather Source">
 *   <editor-field label="Weather Entity">
 *     <ha-entity-picker ...></ha-entity-picker>
 *   </editor-field>
 * </editor-section>
 * ```
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('editor-section')
export class EditorSection extends LitElement {
  @property({ type: String }) title = '';

  static styles = css`
    :host {
      display: block;
    }

    .section {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 16px;
    }

    .section-title {
      font-weight: 600;
      margin-bottom: 12px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--primary-color);
    }

    .section-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Remove margin from last field since we use gap */
    ::slotted(*:last-child) {
      margin-bottom: 0 !important;
    }
  `;

  protected render() {
    return html`
      <div class="section">
        ${this.title ? html`<div class="section-title">${this.title}</div>` : ''}
        <div class="section-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-section': EditorSection;
  }
}