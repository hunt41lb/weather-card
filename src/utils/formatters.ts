/* weather-card/src/utils/formatters.ts

 * Formatting Utilities
 *
 * Functions for formatting weather conditions, times, and dates.
 */

/**
 * Condition name mappings for display
 * Maps Home Assistant weather condition states to human-readable names
 */
const CONDITION_MAP: { [key: string]: string } = {
  'partlycloudy': 'Partly Cloudy',
  'mostlycloudy': 'Mostly Cloudy',
  'clear': 'Clear',
  'clear-night': 'Clear',
  'cloudy': 'Cloudy',
  'rainy': 'Rain',
  'pouring': 'Heavy Rain',
  'snowy': 'Snow',
  'snowy-rainy': 'Sleet',
  'sunny': 'Sunny',
  'windy': 'Windy',
  'windy-variant': 'Windy',
  'foggy': 'Foggy',
  'fog': 'Fog',
  'hail': 'Hail',
  'lightning': 'Lightning',
  'lightning-rainy': 'Thunderstorm',
  'exceptional': 'Exceptional',
};

/**
 * Formats a weather condition state into a human-readable string
 *
 * @param condition - The weather condition state (e.g., 'partlycloudy', 'rainy')
 * @returns Formatted condition name (e.g., 'Partly Cloudy', 'Rain')
 *
 * @example
 * formatCondition('partlycloudy') // 'Partly Cloudy'
 * formatCondition('lightning-rainy') // 'Thunderstorm'
 * formatCondition('custom-condition') // 'Custom Condition'
 */
export function formatCondition(condition: string): string {
  if (!condition) return '';

  const mapped = CONDITION_MAP[condition.toLowerCase()];
  if (mapped) return mapped;

  // Fallback: capitalize first letter and replace hyphens with spaces
  return condition.charAt(0).toUpperCase() + condition.slice(1).replace(/-/g, ' ');
}

/**
 * Formats an ISO time string into a localized time display
 *
 * @param isoString - ISO 8601 formatted date string
 * @returns Formatted time string (e.g., '6:30 AM') or '--:--' if invalid
 *
 * @example
 * formatTime('2024-01-15T06:30:00Z') // '6:30 AM' (locale dependent)
 * formatTime('') // '--:--'
 * formatTime(null) // '--:--'
 */
export function formatTime(isoString: string | null | undefined): string {
  if (!isoString) return '--:--';

  try {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '--:--';
  }
}

/**
 * Formats a date string into a short day name
 * Returns 'Today', 'Tmrw', or abbreviated weekday (e.g., 'Mon')
 *
 * @param dateStr - Date string parseable by Date constructor
 * @returns Short day name
 *
 * @example
 * getDayName('2024-01-15') // 'Today' (if today is Jan 15)
 * getDayName('2024-01-16') // 'Tmrw' (if today is Jan 15)
 * getDayName('2024-01-17') // 'Wed' (if Jan 17 is Wednesday)
 */
export function getDayName(dateStr: string): string {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) return 'Today';
  if (date.toDateString() === tomorrow.toDateString()) return 'Tmrw';

  return date.toLocaleDateString([], { weekday: 'short' });
}