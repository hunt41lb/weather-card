/* weather-card/src/styles/effects/cloudy.styles.ts

 * Cloudy weather effect styles
 * Features:
 * - 3 independent cloud layers at different speeds
 * - Parallax-like depth effect (front moves faster)
 * - Day and night color variants
 */

import { css } from 'lit';

export const cloudyEffectStyles = css`
  /* ==========================================================================
     Cloudy Effect Base
     ========================================================================== */

  .effect-cloudy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* ==========================================================================
     Cloud Layers
     ========================================================================== */

  .effect-cloudy .cloud-layer {
    position: absolute;
    width: 200%;
    height: 100%;
    background-repeat: repeat-x;
    background-size: 400px 100%;
  }

  /* Layer 1: Foreground clouds - fastest */
  .effect-cloudy .cloud-layer-1 {
    background-image:
      radial-gradient(ellipse 120px 40px at 100px 60%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
      radial-gradient(ellipse 80px 30px at 280px 80%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 100px 35px at 180px 50%, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
    animation: cloud-drift-1 45s linear infinite;
    opacity: 0.9;
  }

  /* Layer 2: Mid-ground clouds */
  .effect-cloudy .cloud-layer-2 {
    background-image:
      radial-gradient(ellipse 90px 35px at 50px 70%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 70px 25px at 200px 40%, rgba(255, 255, 255, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 110px 40px at 320px 65%, rgba(255, 255, 255, 0.55) 0%, transparent 70%);
    animation: cloud-drift-2 60s linear infinite;
    opacity: 0.7;
  }

  /* Layer 3: Background clouds - slowest */
  .effect-cloudy .cloud-layer-3 {
    background-image:
      radial-gradient(ellipse 150px 50px at 150px 55%, rgba(255, 255, 255, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 100px 40px at 350px 75%, rgba(255, 255, 255, 0.35) 0%, transparent 70%);
    animation: cloud-drift-3 80s linear infinite;
    opacity: 0.5;
  }

  /* ==========================================================================
     Night Variants
     Darker, more muted cloud colors
     ========================================================================== */

  .effect-cloudy.is-night .cloud-layer-1 {
    background-image:
      radial-gradient(ellipse 120px 40px at 100px 60%, rgba(60, 60, 90, 0.6) 0%, transparent 70%),
      radial-gradient(ellipse 80px 30px at 280px 80%, rgba(50, 50, 80, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 100px 35px at 180px 50%, rgba(55, 55, 85, 0.55) 0%, transparent 70%);
  }

  .effect-cloudy.is-night .cloud-layer-2 {
    background-image:
      radial-gradient(ellipse 90px 35px at 50px 70%, rgba(50, 50, 80, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 70px 25px at 200px 40%, rgba(45, 45, 75, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 110px 40px at 320px 65%, rgba(55, 55, 85, 0.45) 0%, transparent 70%);
  }

  .effect-cloudy.is-night .cloud-layer-3 {
    background-image:
      radial-gradient(ellipse 150px 50px at 150px 55%, rgba(40, 40, 70, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 100px 40px at 350px 75%, rgba(45, 45, 75, 0.35) 0%, transparent 70%);
  }

  /* ==========================================================================
     Drift Animations
     Each layer starts at different position for variety
     ========================================================================== */

  @keyframes cloud-drift-1 {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes cloud-drift-2 {
    from { transform: translateX(-25%); }
    to { transform: translateX(-75%); }
  }

  @keyframes cloud-drift-3 {
    from { transform: translateX(-10%); }
    to { transform: translateX(-60%); }
  }

`;
