/* weather-card/src/utils/helpers.ts

 * Helper Utilities
 *
 * Functions for extracting entity values and generating display text.
 */

import type { HomeAssistant, HassEntity, WeatherCardConfig } from '../types';
import { formatCondition } from './formatters';

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
export function getGreeting(config: WeatherCardConfig, hass?: HomeAssistant): string {
  // Use custom greeting name if configured
  if (config.greeting_name) {
    return `Hello, ${config.greeting_name}`;
  }

  // Use logged-in user's first name if available
  const userName = hass?.user?.name;
  if (userName) {
    return `Hello, ${userName.split(' ')[0]}`;
  }

  return 'Hello';
}

/**
 * Extracts a value from an entity's state or attributes
 *
 * @param hass - Home Assistant instance
 * @param entityId - Entity ID to get value from
 * @param attribute - Optional attribute name (uses state if not provided)
 * @returns The value or undefined if not found/invalid
 */
export function getEntityValue(
  hass: HomeAssistant,
  entityId: string | undefined,
  attribute?: string
): string | number | unknown | undefined {
  if (!entityId) return undefined;

  const entity = hass.states[entityId];
  if (!entity) return undefined;

  let value: string | number | unknown;

  if (attribute) {
    value = entity.attributes[attribute];
  } else {
    value = entity.state;
  }

  // Check for invalid states
  if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') {
    return undefined;
  }

  return value;
}

/**
 * Gets the primary display value from config
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted primary value with unit (e.g., '72°F') or '--'
 */
export function getPrimaryValue(config: WeatherCardConfig, hass: HomeAssistant): string {
  const value = getEntityValue(hass, config.primary_entity, config.primary_attribute);

  if (value === undefined) return '--';

  const unit = config.primary_unit || '';
  return `${value}${unit}`;
}

/**
 * Gets the secondary display value from config
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted secondary value with label and unit (e.g., 'Feels Like: 68°F') or ''
 */
export function getSecondaryValue(config: WeatherCardConfig, hass: HomeAssistant): string {
  const value = getEntityValue(hass, config.secondary_entity, config.secondary_attribute);

  if (value === undefined) return '';

  const label = config.secondary_label || '';
  const unit = config.secondary_unit || '';
  return `${label} ${value}${unit}`.trim();
}

/**
 * Gets the weather description from config
 * Falls back to weather entity condition if no description entity configured
 *
 * @param config - Weather card configuration
 * @param hass - Home Assistant instance
 * @returns Formatted description string or ''
 */
export function getDescription(config: WeatherCardConfig, hass: HomeAssistant): string {
  // If no description entity, use weather entity's condition
  if (!config.description_entity) {
    if (config.weather_entity) {
      const entity = hass.states[config.weather_entity];
      if (entity) return formatCondition(entity.state);
    }
    return '';
  }

  const entity = hass.states[config.description_entity];
  if (!entity) return '';

  // If attribute specified, get that value
  if (config.description_attribute) {
    const value = entity.attributes[config.description_attribute];
    return value !== undefined && value !== null ? String(value) : '';
  }

  // Otherwise format the entity state
  return formatCondition(entity.state);
}