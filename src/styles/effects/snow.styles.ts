/* weather-card/src/styles/effects/snow.styles.ts

 * Snow effect styles
 * Features:
 * - 6 independent snowflake layers with prime-number timing for seamless loops
 * - Horizontal drift animations for natural movement
 * - Intensity variants (light, normal, heavy)
 * - SVG snowbank at bottom
 */

import { css } from 'lit';

export const snowEffectStyles = css`
  /* ==========================================================================
     Snow Effect Base
     ========================================================================== */

  .effect-snow {
    background: linear-gradient(
      180deg,
      rgba(220, 230, 245, 0.02) 0%,
      rgba(200, 215, 235, 0.05) 100%
    );
  }

  /* ==========================================================================
     Snowbank (bottom accumulation)
     ========================================================================== */

  .snow-bank {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 32px;
    z-index: 10;
    pointer-events: none;
  }

  .snow-bank svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* ==========================================================================
     Falling Snowflakes Container
     ========================================================================== */

  .snow-container {
    position: absolute;
    top: 0;
    left: -20px;
    right: -20px;
    bottom: 28px;
    overflow: hidden;
  }

  /* ==========================================================================
     Snowflake Layers
     Each layer has different:
     - Size (larger = further back, smaller = closer)
     - Speed (slower = further back, faster = closer)
     - Opacity (lower = further back)
     - Grid spacing
     Uses prime-number durations to prevent synchronized resets
     ========================================================================== */

  /* Layer 1: Large slow flakes (background) */
  .snow-container .layer-1 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 2.5px, transparent 2.5px);
    background-size: 90px 90px;
    background-position: 0 0;
    animation: snowfall-1 23s linear infinite;
    animation-delay: -7s;
    opacity: 0.4;
  }

  /* Layer 2 */
  .snow-container .layer-2 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.85) 2px, transparent 2px);
    background-size: 70px 70px;
    background-position: 35px 20px;
    animation: snowfall-2 17s linear infinite, drift-a 13s ease-in-out infinite;
    animation-delay: -3s, -5s;
    opacity: 0.5;
  }

  /* Layer 3 */
  .snow-container .layer-3 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.9) 1.8px, transparent 1.8px);
    background-size: 55px 55px;
    background-position: 15px 40px;
    animation: snowfall-3 13s linear infinite, drift-b 17s ease-in-out infinite;
    animation-delay: -11s, -2s;
    opacity: 0.55;
  }

  /* Layer 4 */
  .snow-container .layer-4 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.95) 1.5px, transparent 1.5px);
    background-size: 45px 45px;
    background-position: 25px 10px;
    animation: snowfall-4 11s linear infinite, drift-c 19s ease-in-out infinite;
    animation-delay: -6s, -8s;
    opacity: 0.6;
  }

  /* Layer 5: Small fast flakes */
  .snow-container .layer-5 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.85) 1.2px, transparent 1.2px);
    background-size: 35px 35px;
    background-position: 10px 25px;
    animation: snowfall-5 7s linear infinite, drift-d 23s ease-in-out infinite;
    animation-delay: -2s, -13s;
    opacity: 0.65;
  }

  /* Layer 6: Tiny fastest flakes (foreground) */
  .snow-container .layer-6 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px);
    background-size: 25px 25px;
    background-position: 5px 15px;
    animation: snowfall-6 5s linear infinite, drift-e 11s ease-in-out infinite;
    animation-delay: -1s, -4s;
    opacity: 0.7;
  }

  /* ==========================================================================
     Fall Keyframes
     33.333% of 300% container = 100% viewport for seamless loop
     ========================================================================== */

  @keyframes snowfall-1 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-2 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-3 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-4 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-5 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-6 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  /* ==========================================================================
     Drift Keyframes
     Different directions for natural variety
     ========================================================================== */

  @keyframes drift-a {
    0%, 100% { margin-left: 0; }
    50% { margin-left: 20px; }
  }

  @keyframes drift-b {
    0%, 100% { margin-left: 10px; }
    50% { margin-left: -15px; }
  }

  @keyframes drift-c {
    0%, 100% { margin-left: -5px; }
    50% { margin-left: 25px; }
  }

  @keyframes drift-d {
    0%, 100% { margin-left: 15px; }
    50% { margin-left: -10px; }
  }

  @keyframes drift-e {
    0%, 100% { margin-left: -10px; }
    50% { margin-left: 15px; }
  }

  /* ==========================================================================
     Intensity Variants
     ========================================================================== */

  /* Light snow: slower, fewer visible layers */
  .effect-snow.intensity-light .layer-1 {
    animation-duration: 34s;
    opacity: 0.25;
  }
  .effect-snow.intensity-light .layer-2 {
    animation-duration: 26s;
    opacity: 0.3;
  }
  .effect-snow.intensity-light .layer-3 {
    animation-duration: 20s;
    opacity: 0.35;
  }
  .effect-snow.intensity-light .layer-4 {
    animation-duration: 16s;
    opacity: 0.4;
  }
  .effect-snow.intensity-light .layer-5 {
    display: none;
  }
  .effect-snow.intensity-light .layer-6 {
    display: none;
  }

  /* Heavy snow: faster, more opaque */
  .effect-snow.intensity-heavy .layer-1 {
    animation-duration: 16s;
    opacity: 0.5;
  }
  .effect-snow.intensity-heavy .layer-2 {
    animation-duration: 12s;
    opacity: 0.55;
  }
  .effect-snow.intensity-heavy .layer-3 {
    animation-duration: 9s;
    opacity: 0.6;
  }
  .effect-snow.intensity-heavy .layer-4 {
    animation-duration: 7s;
    opacity: 0.7;
  }
  .effect-snow.intensity-heavy .layer-5 {
    animation-duration: 5s;
    opacity: 0.75;
  }
  .effect-snow.intensity-heavy .layer-6 {
    animation-duration: 3.5s;
    opacity: 0.8;
  }
`;