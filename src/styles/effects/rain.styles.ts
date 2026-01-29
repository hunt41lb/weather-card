/* weather-card/src/styles/effects/rain.styles.ts

 * Rain weather effect styles
 * Features:
 * - Gradient overlay for wet atmosphere
 * - Animated vertical rain streaks
 */

import { css } from 'lit';

export const rainEffectStyles = css`
  /* ==========================================================================
     Rain Effect
     ========================================================================== */

  .effect-rain {
    background: linear-gradient(transparent 0%, rgba(100, 150, 200, 0.3) 100%);
    opacity: 0.4;
  }

  .effect-rain::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    right: 0;
    height: 200%;
    background-image: repeating-linear-gradient(
      transparent 0px,
      transparent 4px,
      rgba(100, 150, 200, 0.4) 4px,
      rgba(100, 150, 200, 0.4) 6px
    );
    animation: rain-fall 0.3s linear infinite;
  }

  /* ==========================================================================
     Rain Animation
     ========================================================================== */

  @keyframes rain-fall {
    0% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(10%);
    }
  }
`;