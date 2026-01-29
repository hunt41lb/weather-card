/* weather-card/src/styles/effects/fog.styles.ts

 * Fog weather effect styles
 * Features:
 * - Horizontal gradient bands
 * - Slow horizontal drift animation
 */

export const fogEffectStyles = css`
  /* ==========================================================================
     Fog Effect
     ========================================================================== */

  .effect-fog {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(200, 200, 200, 0.3) 25%,
      rgba(200, 200, 200, 0.2) 50%,
      rgba(200, 200, 200, 0.3) 75%,
      transparent 100%
    );
    animation: fog-move 8s ease-in-out infinite;
    opacity: 0.4;
  }

  /* ==========================================================================
     Fog Animation
     ========================================================================== */

  @keyframes fog-move {
    0%, 100% {
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(20%);
    }
  }
`;
