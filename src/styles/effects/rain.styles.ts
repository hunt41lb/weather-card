/* weather-card/src/styles/effects/rain.styles.ts

 * Rain weather effect styles
 * Features:
 * - Teardrop-shaped raindrops falling at 100° angle
 * - Splash effect when drops hit the bottom
 * - Randomized timing with CSS variables
 * - Day and night color variants
 */

import { css } from 'lit';

export const rainEffectStyles = css`
  /* ==========================================================================
     Rain Effect Container
     ========================================================================== */

  .effect-rain {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* Rain drop container - positioned across the card */
  .effect-rain .rain {
    position: absolute;
    width: 30px;
    height: 100%;
  }

  /* Teardrop shape using borders */
  .effect-rain .drop {
    position: absolute;
    width: 2px;
    height: 0;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 30px solid rgba(200, 220, 255, 0.6);
    border-radius: 2px;
    top: -40px;
    left: 50%;
    transform-origin: center;
    animation: rain-fall var(--duration, 1.5s) ease-in var(--delay, 0s) infinite;
  }

  /* Splash effect - positioned to match where drop lands */
  .effect-rain .splash {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 20px;
    height: 15px;
    transform: translateX(-50%) translateX(-15px);
    clip-path: polygon(
      10% 100%,
      5% 80%,
      15% 40%,
      25% 60%,
      35% 30%,
      45% 50%,
      55% 20%,
      65% 45%,
      75% 25%,
      85% 55%,
      95% 70%,
      90% 100%
    );
    background: rgba(200, 220, 255, 0.5);
    transform-origin: bottom center;
    opacity: 0;
    animation: rain-splash var(--duration, 1.5s) ease-out var(--delay, 0s) infinite;
  }

  /* ==========================================================================
     Animations
     ========================================================================== */

  /* Fall animation - drops come from top-right at 100° angle */
  @keyframes rain-fall {
    0% {
      top: -40px;
      opacity: 0;
      transform: translateX(-50%) rotate(10deg) translateX(30px);
    }
    10% {
      opacity: 0.8;
    }
    85% {
      opacity: 0.6;
    }
    90% {
      top: calc(100% - 25px);
      opacity: 0.6;
      transform: translateX(-50%) rotate(10deg) translateX(-15px);
    }
    91% {
      opacity: 0;
    }
    100% {
      top: calc(100% - 25px);
      opacity: 0;
      transform: translateX(-50%) rotate(10deg) translateX(-15px);
    }
  }

  /* Splash animation - appears when drop hits bottom */
  @keyframes rain-splash {
    0%, 88% {
      transform: translateX(-50%) translateX(-15px) scale(0.3, 0);
      opacity: 0;
    }
    90% {
      transform: translateX(-50%) translateX(-15px) scale(0.5, 0.8);
      opacity: 0.8;
    }
    95% {
      transform: translateX(-50%) translateX(-15px) scale(1, 1);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-50%) translateX(-15px) scale(1.2, 0);
      opacity: 0;
    }
  }

  /* ==========================================================================
     Individual raindrop positions and timing - 20 drops
     ========================================================================== */

  .effect-rain .rain:nth-child(1) { left: 95%; --delay: 0.0s; --duration: 1.3s; }
  .effect-rain .rain:nth-child(2) { left: 88%; --delay: 0.7s; --duration: 1.5s; }
  .effect-rain .rain:nth-child(3) { left: 82%; --delay: 0.3s; --duration: 1.4s; }
  .effect-rain .rain:nth-child(4) { left: 75%; --delay: 1.1s; --duration: 1.6s; }
  .effect-rain .rain:nth-child(5) { left: 68%; --delay: 0.5s; --duration: 1.3s; }
  .effect-rain .rain:nth-child(6) { left: 62%; --delay: 1.4s; --duration: 1.5s; }
  .effect-rain .rain:nth-child(7) { left: 55%; --delay: 0.2s; --duration: 1.4s; }
  .effect-rain .rain:nth-child(8) { left: 48%; --delay: 0.9s; --duration: 1.6s; }
  .effect-rain .rain:nth-child(9) { left: 42%; --delay: 1.6s; --duration: 1.3s; }
  .effect-rain .rain:nth-child(10) { left: 35%; --delay: 0.4s; --duration: 1.5s; }
  .effect-rain .rain:nth-child(11) { left: 28%; --delay: 1.2s; --duration: 1.4s; }
  .effect-rain .rain:nth-child(12) { left: 22%; --delay: 0.6s; --duration: 1.6s; }
  .effect-rain .rain:nth-child(13) { left: 15%; --delay: 1.8s; --duration: 1.3s; }
  .effect-rain .rain:nth-child(14) { left: 8%; --delay: 0.8s; --duration: 1.5s; }
  .effect-rain .rain:nth-child(15) { left: 2%; --delay: 1.5s; --duration: 1.4s; }
  .effect-rain .rain:nth-child(16) { left: 91%; --delay: 1.9s; --duration: 1.5s; }
  .effect-rain .rain:nth-child(17) { left: 78%; --delay: 2.1s; --duration: 1.4s; }
  .effect-rain .rain:nth-child(18) { left: 58%; --delay: 2.3s; --duration: 1.6s; }
  .effect-rain .rain:nth-child(19) { left: 38%; --delay: 2.0s; --duration: 1.3s; }
  .effect-rain .rain:nth-child(20) { left: 18%; --delay: 2.2s; --duration: 1.5s; }

  /* ==========================================================================
     Night Variants - Slightly darker, more blue-tinted drops
     ========================================================================== */

  .effect-rain.is-night .drop {
    border-bottom-color: rgba(150, 180, 220, 0.5);
  }

  .effect-rain.is-night .splash {
    background: rgba(150, 180, 220, 0.4);
  }
`;
