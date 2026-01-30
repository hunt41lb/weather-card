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
export declare function formatCondition(condition: string): string;
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
export declare function formatTime(isoString: string | null | undefined): string;
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
export declare function getDayName(dateStr: string): string;
//# sourceMappingURL=formatters.d.ts.map