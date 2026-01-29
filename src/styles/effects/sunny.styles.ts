/* weather-card/src/styles/effects/sunny.styles.ts

 * Sunny/Clear weather effect styles
 * Features:
 * - Gradient background with warm tones
 * - Primary sun glow with pulsing animation
 * - Diagonal light streak
 * - Multiple bokeh orbs along the light path
 */

import { css } from 'lit';

export const sunnyEffectStyles = css`
  /* ==========================================================================
     Sunny Effect Base
     ========================================================================== */

  .effect-sunny {
    background: linear-gradient(
      135deg,
      rgba(255, 250, 230, 0.35) 0%,
      rgba(255, 245, 200, 0.15) 25%,
      transparent 50%
    );
  }

  /* ==========================================================================
     Primary Sun Glow
     ========================================================================== */

  .effect-sunny::before {
    content: '';
    position: absolute;
    top: 3%;
    left: 3%;
    width: 70px;
    height: 70px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 245, 0.7) 0%,
      rgba(255, 250, 200, 0.4) 35%,
      rgba(255, 240, 180, 0.1) 60%,
      transparent 75%
    );
    border-radius: 50%;
    animation: sunny-glow-pulse 5s ease-in-out infinite;
  }

  /* ==========================================================================
     Light Streak
     ========================================================================== */

  .effect-sunny .streak-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 250, 220, 0.4) 40%,
      rgba(255, 245, 200, 0.1) 80%,
      transparent 100%
    );
    transform: rotate(50deg);
    transform-origin: 0% 0%;
    animation: sunny-streak-glow 7s ease-in-out infinite;
  }

  /* ==========================================================================
     Bokeh Orbs
     ========================================================================== */

  .effect-sunny .orb {
    position: absolute;
    border-radius: 50%;
    animation: sunny-orb-float 6s ease-in-out infinite;
  }

  /* Orb 1: Largest, closest to sun */
  .effect-sunny .orb-1 {
    top: 18%;
    left: 22%;
    width: 18px;
    height: 18px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 245, 200, 0.2) 50%,
      transparent 70%
    );
    animation-delay: -1s;
  }

  /* Orb 2 */
  .effect-sunny .orb-2 {
    top: 28%;
    left: 35%;
    width: 12px;
    height: 12px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 240, 180, 0.15) 50%,
      transparent 70%
    );
    animation-delay: -2.5s;
  }

  /* Orb 3 */
  .effect-sunny .orb-3 {
    top: 38%;
    left: 48%;
    width: 8px;
    height: 8px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 235, 170, 0.1) 50%,
      transparent 70%
    );
    animation-delay: -4s;
  }

  /* Orb 4: Smallest, furthest from sun */
  .effect-sunny .orb-4 {
    top: 48%;
    left: 60%;
    width: 6px;
    height: 6px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    animation-delay: -3s;
  }

  /* ==========================================================================
     Animations
     ========================================================================== */

  @keyframes sunny-glow-pulse {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.08);
    }
  }

  @keyframes sunny-streak-glow {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.9;
    }
  }

  @keyframes sunny-orb-float {
    0%, 100% {
      opacity: 0.7;
      transform: scale(1) translate(0, 0);
    }
    50% {
      opacity: 1;
      transform: scale(1.15) translate(2px, 2px);
    }
  }

`;
