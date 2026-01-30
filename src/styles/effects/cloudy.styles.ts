/* weather-card/src/styles/effects/cloudy.styles.ts

 * Cloudy weather effect styles
 * Features:
 * - Organic, textured clouds with multiple overlapping puffs
 * - Horizontal drift animation (left to right)
 * - Multiple cloud clusters at different positions and depths
 * - Gray color palette for better text readability
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

  /* Base cloud puff - gray tones for readability */
  .effect-cloudy .cloud span {
    position: absolute;
    background: rgba(165, 167, 168, 0.85);
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
    background: rgba(165, 167, 168, 0.9);
  }

  /* Core puffs - main body */
  .effect-cloudy .cloud-1 span:nth-child(1) { width: 60px; height: 40px; top: 10px; left: 0; animation-delay: 0s; }
  .effect-cloudy .cloud-1 span:nth-child(2) { width: 80px; height: 50px; top: 0; left: 30px; animation-delay: 0.2s; }
  .effect-cloudy .cloud-1 span:nth-child(3) { width: 70px; height: 45px; top: 5px; left: 70px; animation-delay: 0.4s; }
  .effect-cloudy .cloud-1 span:nth-child(4) { width: 55px; height: 35px; top: 15px; left: 110px; animation-delay: 0.6s; }
  
  /* Texture puffs - add depth with darker gray */
  .effect-cloudy .cloud-1 span:nth-child(5) { width: 40px; height: 30px; top: -5px; left: 50px; filter: blur(10px); animation-delay: 0.3s; background: rgba(146, 149, 150, 0.7); }
  .effect-cloudy .cloud-1 span:nth-child(6) { width: 35px; height: 25px; top: 20px; left: 40px; filter: blur(12px); animation-delay: 0.5s; background: rgba(146, 149, 150, 0.6); }
  .effect-cloudy .cloud-1 span:nth-child(7) { width: 50px; height: 35px; top: -8px; left: 85px; filter: blur(9px); animation-delay: 0.7s; background: rgba(156, 158, 159, 0.75); }
  .effect-cloudy .cloud-1 span:nth-child(8) { width: 30px; height: 22px; top: 25px; left: 95px; filter: blur(14px); animation-delay: 0.8s; background: rgba(146, 149, 150, 0.5); }

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
    background: rgba(160, 162, 163, 0.85);
  }

  /* Core puffs */
  .effect-cloudy .cloud-2 span:nth-child(1) { width: 50px; height: 35px; top: 8px; left: 0; animation-delay: 6s; }
  .effect-cloudy .cloud-2 span:nth-child(2) { width: 65px; height: 42px; top: 0; left: 25px; animation-delay: 6.2s; }
  .effect-cloudy .cloud-2 span:nth-child(3) { width: 55px; height: 38px; top: 5px; left: 60px; animation-delay: 6.4s; }
  .effect-cloudy .cloud-2 span:nth-child(4) { width: 45px; height: 30px; top: 12px; left: 90px; animation-delay: 6.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-2 span:nth-child(5) { width: 35px; height: 25px; top: -3px; left: 40px; filter: blur(10px); animation-delay: 6.3s; background: rgba(146, 149, 150, 0.65); }
  .effect-cloudy .cloud-2 span:nth-child(6) { width: 28px; height: 20px; top: 18px; left: 55px; filter: blur(11px); animation-delay: 6.5s; background: rgba(146, 149, 150, 0.55); }
  .effect-cloudy .cloud-2 span:nth-child(7) { width: 40px; height: 28px; top: -5px; left: 70px; filter: blur(9px); animation-delay: 6.7s; background: rgba(156, 158, 159, 0.7); }
  .effect-cloudy .cloud-2 span:nth-child(8) { width: 32px; height: 22px; top: 20px; left: 30px; filter: blur(13px); animation-delay: 6.8s; background: rgba(146, 149, 150, 0.5); }

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
    background: rgba(155, 157, 158, 0.8);
  }

  /* Core puffs */
  .effect-cloudy .cloud-3 span:nth-child(1) { width: 40px; height: 28px; top: 5px; left: 0; animation-delay: 12s; }
  .effect-cloudy .cloud-3 span:nth-child(2) { width: 55px; height: 35px; top: 0; left: 20px; animation-delay: 12.2s; }
  .effect-cloudy .cloud-3 span:nth-child(3) { width: 45px; height: 30px; top: 3px; left: 50px; animation-delay: 12.4s; }
  .effect-cloudy .cloud-3 span:nth-child(4) { width: 35px; height: 24px; top: 8px; left: 75px; animation-delay: 12.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-3 span:nth-child(5) { width: 25px; height: 18px; top: -2px; left: 35px; filter: blur(8px); animation-delay: 12.3s; background: rgba(146, 149, 150, 0.6); }
  .effect-cloudy .cloud-3 span:nth-child(6) { width: 30px; height: 20px; top: 12px; left: 45px; filter: blur(10px); animation-delay: 12.5s; background: rgba(146, 149, 150, 0.5); }

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
    background: rgba(162, 164, 165, 0.85);
  }

  /* Core puffs - more spread out for wispy look */
  .effect-cloudy .cloud-4 span:nth-child(1) { width: 45px; height: 30px; top: 5px; left: 0; animation-delay: 3s; }
  .effect-cloudy .cloud-4 span:nth-child(2) { width: 60px; height: 38px; top: -2px; left: 35px; animation-delay: 3.3s; }
  .effect-cloudy .cloud-4 span:nth-child(3) { width: 50px; height: 32px; top: 8px; left: 75px; animation-delay: 3.6s; }
  .effect-cloudy .cloud-4 span:nth-child(4) { width: 40px; height: 26px; top: 3px; left: 110px; animation-delay: 3.9s; }
  
  /* Texture puffs - extra wispy */
  .effect-cloudy .cloud-4 span:nth-child(5) { width: 30px; height: 20px; top: -8px; left: 55px; filter: blur(12px); animation-delay: 3.4s; background: rgba(146, 149, 150, 0.55); }
  .effect-cloudy .cloud-4 span:nth-child(6) { width: 25px; height: 18px; top: 15px; left: 90px; filter: blur(14px); animation-delay: 3.7s; background: rgba(146, 149, 150, 0.45); }
  .effect-cloudy .cloud-4 span:nth-child(7) { width: 35px; height: 24px; top: -5px; left: 95px; filter: blur(11px); animation-delay: 4.0s; background: rgba(156, 158, 159, 0.65); }

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
     Night Variants - Darker gray-blue tones
     ========================================================================== */

  .effect-cloudy.is-night .cloud span {
    background: rgba(70, 75, 85, 0.8);
  }

  /* Slightly different shades per cloud for depth */
  .effect-cloudy.is-night .cloud-1 span {
    background: rgba(75, 80, 90, 0.85);
  }

  .effect-cloudy.is-night .cloud-1 span:nth-child(5),
  .effect-cloudy.is-night .cloud-1 span:nth-child(6),
  .effect-cloudy.is-night .cloud-1 span:nth-child(7),
  .effect-cloudy.is-night .cloud-1 span:nth-child(8) {
    background: rgba(60, 65, 75, 0.65);
  }

  .effect-cloudy.is-night .cloud-2 span {
    background: rgba(65, 70, 80, 0.75);
  }

  .effect-cloudy.is-night .cloud-2 span:nth-child(5),
  .effect-cloudy.is-night .cloud-2 span:nth-child(6),
  .effect-cloudy.is-night .cloud-2 span:nth-child(7),
  .effect-cloudy.is-night .cloud-2 span:nth-child(8) {
    background: rgba(55, 60, 70, 0.6);
  }

  .effect-cloudy.is-night .cloud-3 span {
    background: rgba(55, 60, 70, 0.7);
  }

  .effect-cloudy.is-night .cloud-3 span:nth-child(5),
  .effect-cloudy.is-night .cloud-3 span:nth-child(6) {
    background: rgba(50, 55, 65, 0.55);
  }

  .effect-cloudy.is-night .cloud-4 span {
    background: rgba(60, 65, 75, 0.75);
  }

  .effect-cloudy.is-night .cloud-4 span:nth-child(5),
  .effect-cloudy.is-night .cloud-4 span:nth-child(6),
  .effect-cloudy.is-night .cloud-4 span:nth-child(7) {
    background: rgba(50, 55, 65, 0.55);
  }
`;
