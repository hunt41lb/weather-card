/* weather-card/src/styles/effects/clear-night.styles.ts

 * Clear Night Background Effect Styles
 *
 * Static star field with individual twinkling stars that "pop" brighter
 * at random intervals (10-15 seconds). Uses prime number timing to
 * prevent synchronization.
 */

import { css } from 'lit';

export const clearNightStyles = css`
  /* ==========================================================================
     Clear Night Effect Container
     ========================================================================== */
  .effect-clear-night {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* ==========================================================================
     Static Star Field - These don't animate
     ========================================================================== */
  .effect-clear-night .stars-static {
    position: absolute;
    inset: 0;
    background-image:
      /* Larger brighter stars */
      radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 85px 65px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 150px 25px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 215px 80px, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 280px 35px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 345px 70px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 55px 120px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 120px 145px, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 185px 110px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 250px 155px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 315px 125px, rgba(255,255,255,0.8), transparent),
      /* Smaller dimmer stars */
      radial-gradient(1px 1px at 40px 55px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 100px 40px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 170px 95px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 235px 50px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 300px 100px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 65px 170px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 140px 180px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 210px 165px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 275px 185px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 340px 160px, rgba(255,255,255,0.6), transparent);
  }

  /* ==========================================================================
     Individual Twinkle Stars - Each animates independently
     ========================================================================== */
  .effect-clear-night .twinkle-star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
  }

  /* Star positions spread across the card */
  .effect-clear-night .twinkle-star-1 {
    top: 18%;
    left: 12%;
    animation: twinkle-burst 13s ease-in-out infinite;
  }

  .effect-clear-night .twinkle-star-2 {
    top: 22%;
    left: 45%;
    animation: twinkle-burst 11s ease-in-out infinite;
    animation-delay: -4s;
  }

  .effect-clear-night .twinkle-star-3 {
    top: 15%;
    left: 78%;
    animation: twinkle-burst 14s ease-in-out infinite;
    animation-delay: -8s;
  }

  .effect-clear-night .twinkle-star-4 {
    top: 45%;
    left: 22%;
    animation: twinkle-burst 12s ease-in-out infinite;
    animation-delay: -2s;
  }

  .effect-clear-night .twinkle-star-5 {
    top: 52%;
    left: 85%;
    animation: twinkle-burst 15s ease-in-out infinite;
    animation-delay: -6s;
  }

  .effect-clear-night .twinkle-star-6 {
    top: 70%;
    left: 55%;
    animation: twinkle-burst 10s ease-in-out infinite;
    animation-delay: -3s;
  }

  /* ==========================================================================
     Twinkle Animation - Quick bright burst then back to dim

     The animation spends most of its time (85%) at base opacity,
     then quickly bursts bright (5%) and fades back (10%).
     This creates a natural "twinkle" effect.
     ========================================================================== */
  @keyframes twinkle-burst {
    0%, 85%, 100% {
      opacity: 0.7;
      transform: scale(1);
      box-shadow: none;
    }
    90% {
      opacity: 1;
      transform: scale(1.4);
      box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.6);
    }
    95% {
      opacity: 1;
      transform: scale(1.2);
      box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.4);
    }
  }
`;
