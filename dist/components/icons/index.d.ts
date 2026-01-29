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
export declare function getWeatherIcon(condition: string, isDay: boolean): string;
/**
 * Get the mini (emoji) icon for a condition
 *
 * @param condition - Weather condition string
 * @returns Emoji string for the condition
 */
export declare function getMiniIcon(condition: string): string;
//# sourceMappingURL=index.d.ts.map