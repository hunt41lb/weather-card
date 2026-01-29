/* weather-card/src/styles/effects/base.styles.ts

 * Base styles for weather background effects
 * This provides the container and common utilities used by all effect types
 */

import { css } from 'lit';

export const baseEffectStyles = css`
  /* Background effects container - shared by all weather effects */
  .weather-effects {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }
`;
