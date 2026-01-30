/* weather-card/src/styles/index.ts

 * Index of all styles used by weather-card
*/
import { CSSResult } from 'lit';

// Base card styles
import { cardStyles } from './card.styles';

// Weather effect styles
import {
  baseEffectStyles,
  snowEffectStyles,
  sunnyEffectStyles,
  cloudyEffectStyles,
  rainEffectStyles,
  fogEffectStyles,
  clearNightStyles,
} from './effects';

/**
 * Combined styles for the WeatherCard component
 * Merges base card styles with all weather effect styles
 */
export const weatherCardStyles: CSSResult[] = [
  cardStyles,
  baseEffectStyles,
  snowEffectStyles,
  sunnyEffectStyles,
  cloudyEffectStyles,
  rainEffectStyles,
  fogEffectStyles,
  clearNightStyles,
];

// Re-export individual styles for selective importing if needed
export { cardStyles } from './card.styles';
export * from './effects';
