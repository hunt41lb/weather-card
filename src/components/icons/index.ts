/* weather-card/src/components/icons/index.ts

 * Weather Icons Module
 * 
 * Provides SVG and emoji icons for weather conditions.
 * Source: https://basmilius.github.io/weather-icons/index-fill.html
 */

import { WEATHER_ICONS, FALLBACK_ICON, CONDITION_ALIASES } from './weather-icons';
import { MINI_ICONS } from './mini-icons';

export { WEATHER_ICONS, FALLBACK_ICON, CONDITION_ALIASES } from './weather-icons';
export { MINI_ICONS } from './mini-icons';

/**
 * Get the appropriate weather icon SVG for a condition and time of day
 * 
 * @param condition - Weather condition string (e.g., 'sunny', 'rainy', 'cloudy')
 * @param isDay - Whether it's daytime (true) or nighttime (false)
 * @returns SVG string for the weather icon
 * 
 * @example
 * const icon = getWeatherIcon('sunny', true);  // Returns sunny day icon
 * const icon = getWeatherIcon('rainy', false); // Returns rainy night icon
 */
export function getWeatherIcon(condition: string, isDay: boolean): string {
  // Normalize condition: lowercase and remove hyphens for flexible matching
  const normalizedCondition = condition?.toLowerCase().replace(/-/g, '') || 'cloudy';
  const timeOfDay = isDay ? 'day' : 'night';
  
  // Try exact match first (with original condition)
  const exactKey = `${normalizedCondition}_${timeOfDay}`;
  if (WEATHER_ICONS[exactKey]) {
    return WEATHER_ICONS[exactKey];
  }
  
  // Try with hyphenated version
  const hyphenKey = `${condition}_${timeOfDay}`;
  if (WEATHER_ICONS[hyphenKey]) {
    return WEATHER_ICONS[hyphenKey];
  }
  
  // Try condition aliases
  const aliasedCondition = CONDITION_ALIASES[normalizedCondition];
  if (aliasedCondition) {
    const aliasKey = `${aliasedCondition}_${timeOfDay}`;
    if (WEATHER_ICONS[aliasKey]) {
      return WEATHER_ICONS[aliasKey];
    }
  }
  
  // Fallback to cloudy if nothing else matches
  const cloudyKey = `cloudy_${timeOfDay}`;
  if (WEATHER_ICONS[cloudyKey]) {
    return WEATHER_ICONS[cloudyKey];
  }
  
  return FALLBACK_ICON;
}

/**
 * Get the mini (emoji) icon for a condition
 * 
 * @param condition - Weather condition string
 * @returns Emoji string for the condition
 */
export function getMiniIcon(condition: string): string {
  const normalized = condition?.toLowerCase() || '';
  return MINI_ICONS[normalized] || '❓';
}
