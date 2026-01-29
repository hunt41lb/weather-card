/* weather-card/src/styles/card.styles.ts

 * Base card styles - foundational layout and structural styling
 * This includes the ha-card container, grid layout, and all text elements
 */

import { css } from 'lit';

export const cardStyles = css`
  /* Host element */
  :host {
    display: block;
  }

  /* Main card container */
  ha-card {
    padding: 12px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: var(--weather-card-background, var(--ha-card-background, var(--card-background-color)));
    color: var(--weather-card-text-color, var(--primary-text-color));
  }

  /* ==========================================================================
     Grid Layout
     ========================================================================== */

  .weather-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 1fr auto auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "greeting greeting greeting greeting"
      "icon icon primary primary"
      "icon icon secondary secondary"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
    height: 100%;
    min-height: 140px;
    position: relative;
    z-index: 1;
  }

  /* Grid variant: No greeting */
  .weather-card-grid.no-greeting {
    grid-template-rows: 1fr 1fr auto auto auto auto;
    grid-template-areas:
      "icon icon primary primary"
      "icon icon secondary secondary"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* Grid variant: Icon on right */
  .weather-card-grid.icon-right {
    grid-template-areas:
      "greeting greeting greeting greeting"
      "primary primary icon icon"
      "secondary secondary icon icon"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* Grid variant: Icon on right + no greeting */
  .weather-card-grid.icon-right.no-greeting {
    grid-template-areas:
      "primary primary icon icon"
      "secondary secondary icon icon"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* ==========================================================================
     Primary Content Elements
     ========================================================================== */

  .greeting {
    grid-area: greeting;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 4px;
    color: var(--weather-card-greeting-color, var(--primary-text-color));
  }

  .weather-icon {
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-icon svg {
    width: var(--weather-icon-size, 100px);
    height: var(--weather-icon-size, 100px);
  }

  .primary-value {
    grid-area: primary;
    font-size: var(--weather-card-primary-font-size, 40px);
    font-weight: 400;
    line-height: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: var(--weather-card-primary-color, var(--primary-text-color));
  }

  .secondary-value {
    grid-area: secondary;
    font-size: var(--weather-card-secondary-font-size, 12px);
    font-weight: 400;
    opacity: 0.8;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 4px;
    color: var(--weather-card-secondary-color, var(--secondary-text-color));
  }

  .description {
    grid-area: description;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-top: 4px;
    color: var(--weather-card-description-color, var(--primary-text-color));
  }

  /* ==========================================================================
     Sun Times
     ========================================================================== */

  .sun-times {
    grid-area: sun-times;
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 8px 0 4px 0;
    font-size: 12px;
    opacity: 0.8;
  }

  .sun-time {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .sun-icon {
    font-size: 14px;
  }

  /* ==========================================================================
     Forecast
     ========================================================================== */

  .forecast {
    grid-area: forecast;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
    margin-top: 8px;
  }

  .forecast-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;
    min-width: 40px;
  }

  .forecast-day-name {
    font-weight: 600;
    opacity: 0.8;
  }

  .forecast-icon {
    font-size: 18px;
    margin: 4px 0;
  }

  .forecast-temps {
    display: flex;
    gap: 4px;
  }

  .forecast-high {
    font-weight: 600;
  }

  .forecast-low {
    opacity: 0.6;
  }

  /* ==========================================================================
     Alerts
     ========================================================================== */

  .alerts {
    grid-area: alerts;
    padding: 8px;
    margin-top: 8px;
    background: var(--weather-card-alert-background, rgba(255, 152, 0, 0.2));
    border-radius: 4px;
    border-left: 3px solid var(--weather-card-alert-color, #ff9800);
  }

  .alert {
    font-size: 12px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .alert-icon {
    font-size: 16px;
  }

  .alert-text {
    flex: 1;
  }

  .alert-title {
    font-weight: 600;
  }

  .alert-description {
    opacity: 0.8;
    font-size: 11px;
  }

  /* ==========================================================================
     Utility Classes
     ========================================================================== */

  .unavailable {
    opacity: 0.5;
    font-style: italic;
  }
`;

