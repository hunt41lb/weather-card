/* weather-card/src/styles/effects/cloudy.styles.ts

 * Cloudy weather effect styles
 * Features:
 * - Organic, textured clouds with multiple overlapping puffs
 * - Horizontal drift animation (left to right)
 * - Multiple cloud clusters at different positions and depths
 * - Varying blur levels for realistic soft edges
 * - Day and night color variants
 */

import { css } from 'lit';

export const cloudyEffectStyles = css`
  /* ==========================================================================
     Cloudy Effect Container
     ========================================================================== */

  .effect-cloudy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* ==========================================================================
     Cloud Cluster - Group of puffs that form one cloud
     ========================================================================== */

  .effect-cloudy .cloud {
    position: absolute;
    display: flex;
    align-items: center;
  }

  /* Base cloud puff - will be customized per layer */
  .effect-cloudy .cloud span {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    opacity: 0;
    animation: cloud-drift 20s linear infinite;
  }

  /* ==========================================================================
     Cloud 1 - Large foreground cloud (top)
     ========================================================================== */

  .effect-cloudy .cloud-1 {
    top: 10%;
    left: -100px;
  }

  .effect-cloudy .cloud-1 span {
    filter: blur(8px);
  }

  /* Core puffs - main body */
  .effect-cloudy .cloud-1 span:nth-child(1) { width: 60px; height: 40px; top: 10px; left: 0; animation-delay: 0s; }
  .effect-cloudy .cloud-1 span:nth-child(2) { width: 80px; height: 50px; top: 0; left: 30px; animation-delay: 0.2s; }
  .effect-cloudy .cloud-1 span:nth-child(3) { width: 70px; height: 45px; top: 5px; left: 70px; animation-delay: 0.4s; }
  .effect-cloudy .cloud-1 span:nth-child(4) { width: 55px; height: 35px; top: 15px; left: 110px; animation-delay: 0.6s; }
  
  /* Texture puffs - add depth */
  .effect-cloudy .cloud-1 span:nth-child(5) { width: 40px; height: 30px; top: -5px; left: 50px; opacity: 0.6; filter: blur(10px); animation-delay: 0.3s; }
  .effect-cloudy .cloud-1 span:nth-child(6) { width: 35px; height: 25px; top: 20px; left: 40px; opacity: 0.5; filter: blur(12px); animation-delay: 0.5s; }
  .effect-cloudy .cloud-1 span:nth-child(7) { width: 50px; height: 35px; top: -8px; left: 85px; opacity: 0.7; filter: blur(9px); animation-delay: 0.7s; }
  .effect-cloudy .cloud-1 span:nth-child(8) { width: 30px; height: 22px; top: 25px; left: 95px; opacity: 0.4; filter: blur(14px); animation-delay: 0.8s; }

  /* ==========================================================================
     Cloud 2 - Medium mid-level cloud
     ========================================================================== */

  .effect-cloudy .cloud-2 {
    top: 45%;
    left: -120px;
  }

  .effect-cloudy .cloud-2 span {
    filter: blur(7px);
    animation-duration: 25s;
  }

  /* Core puffs */
  .effect-cloudy .cloud-2 span:nth-child(1) { width: 50px; height: 35px; top: 8px; left: 0; animation-delay: 6s; }
  .effect-cloudy .cloud-2 span:nth-child(2) { width: 65px; height: 42px; top: 0; left: 25px; animation-delay: 6.2s; }
  .effect-cloudy .cloud-2 span:nth-child(3) { width: 55px; height: 38px; top: 5px; left: 60px; animation-delay: 6.4s; }
  .effect-cloudy .cloud-2 span:nth-child(4) { width: 45px; height: 30px; top: 12px; left: 90px; animation-delay: 6.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-2 span:nth-child(5) { width: 35px; height: 25px; top: -3px; left: 40px; opacity: 0.6; filter: blur(10px); animation-delay: 6.3s; }
  .effect-cloudy .cloud-2 span:nth-child(6) { width: 28px; height: 20px; top: 18px; left: 55px; opacity: 0.5; filter: blur(11px); animation-delay: 6.5s; }
  .effect-cloudy .cloud-2 span:nth-child(7) { width: 40px; height: 28px; top: -5px; left: 70px; opacity: 0.6; filter: blur(9px); animation-delay: 6.7s; }
  .effect-cloudy .cloud-2 span:nth-child(8) { width: 32px; height: 22px; top: 20px; left: 30px; opacity: 0.4; filter: blur(13px); animation-delay: 6.8s; }

  /* ==========================================================================
     Cloud 3 - Small background cloud (lower)
     ========================================================================== */

  .effect-cloudy .cloud-3 {
    top: 70%;
    left: -80px;
  }

  .effect-cloudy .cloud-3 span {
    filter: blur(6px);
    animation-duration: 30s;
    opacity: 0.7;
  }

  /* Core puffs */
  .effect-cloudy .cloud-3 span:nth-child(1) { width: 40px; height: 28px; top: 5px; left: 0; animation-delay: 12s; }
  .effect-cloudy .cloud-3 span:nth-child(2) { width: 55px; height: 35px; top: 0; left: 20px; animation-delay: 12.2s; }
  .effect-cloudy .cloud-3 span:nth-child(3) { width: 45px; height: 30px; top: 3px; left: 50px; animation-delay: 12.4s; }
  .effect-cloudy .cloud-3 span:nth-child(4) { width: 35px; height: 24px; top: 8px; left: 75px; animation-delay: 12.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-3 span:nth-child(5) { width: 25px; height: 18px; top: -2px; left: 35px; opacity: 0.5; filter: blur(8px); animation-delay: 12.3s; }
  .effect-cloudy .cloud-3 span:nth-child(6) { width: 30px; height: 20px; top: 12px; left: 45px; opacity: 0.4; filter: blur(10px); animation-delay: 12.5s; }

  /* ==========================================================================
     Cloud 4 - Wispy accent cloud
     ========================================================================== */

  .effect-cloudy .cloud-4 {
    top: 28%;
    left: -90px;
  }

  .effect-cloudy .cloud-4 span {
    filter: blur(9px);
    animation-duration: 22s;
  }

  /* Core puffs - more spread out for wispy look */
  .effect-cloudy .cloud-4 span:nth-child(1) { width: 45px; height: 30px; top: 5px; left: 0; animation-delay: 3s; }
  .effect-cloudy .cloud-4 span:nth-child(2) { width: 60px; height: 38px; top: -2px; left: 35px; animation-delay: 3.3s; }
  .effect-cloudy .cloud-4 span:nth-child(3) { width: 50px; height: 32px; top: 8px; left: 75px; animation-delay: 3.6s; }
  .effect-cloudy .cloud-4 span:nth-child(4) { width: 40px; height: 26px; top: 3px; left: 110px; animation-delay: 3.9s; }
  
  /* Texture puffs - extra wispy */
  .effect-cloudy .cloud-4 span:nth-child(5) { width: 30px; height: 20px; top: -8px; left: 55px; opacity: 0.5; filter: blur(12px); animation-delay: 3.4s; }
  .effect-cloudy .cloud-4 span:nth-child(6) { width: 25px; height: 18px; top: 15px; left: 90px; opacity: 0.4; filter: blur(14px); animation-delay: 3.7s; }
  .effect-cloudy .cloud-4 span:nth-child(7) { width: 35px; height: 24px; top: -5px; left: 95px; opacity: 0.6; filter: blur(11px); animation-delay: 4.0s; }

  /* ==========================================================================
     Cloud Drift Animation - Horizontal movement with scale/fade
     ========================================================================== */

  @keyframes cloud-drift {
    0% {
      transform: translateX(0) scale(1);
      opacity: 0;
    }
    5% {
      opacity: 0.7;
    }
    15% {
      opacity: 0.85;
    }
    50% {
      transform: translateX(220px) scale(1.15);
      opacity: 0.9;
    }
    85% {
      opacity: 0.7;
    }
    95% {
      opacity: 0.3;
    }
    100% {
      transform: translateX(480px) scale(1.3);
      opacity: 0;
    }
  }

  /* ==========================================================================
     Night Variants - Darker, muted cloud colors with subtle blue tint
     ========================================================================== */

  .effect-cloudy.is-night .cloud span {
    background: rgba(70, 75, 100, 0.75);
  }

  /* Slightly different shades per cloud for depth */
  .effect-cloudy.is-night .cloud-1 span {
    background: rgba(75, 80, 110, 0.8);
  }

  .effect-cloudy.is-night .cloud-1 span:nth-child(5),
  .effect-cloudy.is-night .cloud-1 span:nth-child(6),
  .effect-cloudy.is-night .cloud-1 span:nth-child(7),
  .effect-cloudy.is-night .cloud-1 span:nth-child(8) {
    background: rgba(65, 70, 100, 0.6);
  }

  .effect-cloudy.is-night .cloud-2 span {
    background: rgba(65, 70, 95, 0.7);
  }

  .effect-cloudy.is-night .cloud-3 span {
    background: rgba(55, 60, 85, 0.65);
  }

  .effect-cloudy.is-night .cloud-4 span {
    background: rgba(60, 65, 90, 0.7);
  }
`;
