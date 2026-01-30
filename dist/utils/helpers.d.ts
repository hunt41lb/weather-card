import type { HomeAssistant, WeatherCardConfig } from '../types';
/**
 * Generates a greeting message based on config and user
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Greeting string (e.g., 'Hello, John')
 *
 * @example
 * getGreeting({ greeting_name: 'Thomas' }, hass) // 'Hello, Thomas'
 * getGreeting({}, { user: { name: 'John Doe' } }) // 'Hello, John'
 * getGreeting({}, {}) // 'Hello'
 */
export declare function getGreeting(config: WeatherCardConfig, hass?: HomeAssistant): string;
/**
 * Extracts a value from an entity's state or attributes
 *
 * @param hass - Home Assistant instance
 * @param entityId - Entity ID to get value from
 * @param attribute - Optional attribute name (uses state if not provided)
 * @returns The value or undefined if not found/invalid
 */
export declare function getEntityValue(hass: HomeAssistant, entityId: string | undefined, attribute?: string): string | number | unknown | undefined;
/**
 * Gets the primary display value from config
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted primary value with unit (e.g., '72°F') or '--'
 */
export declare function getPrimaryValue(config: WeatherCardConfig, hass: HomeAssistant): string;
/**
 * Gets the secondary display value from config
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted secondary value with label and unit (e.g., 'Feels Like: 68°F') or ''
 */
export declare function getSecondaryValue(config: WeatherCardConfig, hass: HomeAssistant): string;
/**
 * Gets the weather description from config
 * Falls back to weather entity condition if no description entity configured
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted description string or ''
 */
export declare function getDescription(config: WeatherCardConfig, hass: HomeAssistant): string;
//# sourceMappingURL=helpers.d.ts.map