/* weather-card/src/types/index.ts

 * Shared TypeScript types and interfaces
 */

// =============================================================================
// Action Types
// =============================================================================

export interface ActionConfig {
  action: 'none' | 'more-info' | 'navigate' | 'call-service' | 'url';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: { [key: string]: unknown };
  entity?: string;
}

// =============================================================================
// Card Configuration
// =============================================================================

export interface WeatherCardConfig {
  type: string;
  weather_entity?: string;
  sun_entity?: string;
  primary_entity?: string;
  primary_attribute?: string;
  primary_unit?: string;
  secondary_entity?: string;
  secondary_attribute?: string;
  secondary_unit?: string;
  secondary_label?: string;
  description_entity?: string;
  description_attribute?: string;
  show_greeting?: boolean;
  greeting_name?: string;
  icon_size?: number;
  card_height?: string;
  // Layout features
  icon_position?: 'left' | 'right';
  show_forecast?: boolean;
  forecast_days?: number;
  show_sunrise_sunset?: boolean;
  show_alerts?: boolean;
  show_background_effects?: boolean;
  use_dynamic_background?: boolean;
  day_background?: string;
  night_background?: string;
  // Tap actions
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  // Layout
  view_layout?: {
    'grid-area'?: string;
    'grid-column'?: string;
    'grid-row'?: string;
    position?: string;
    [key: string]: unknown;
  };
}

// =============================================================================
// Home Assistant Types
// =============================================================================

export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  user?: { name?: string };
  callService: (domain: string, service: string, data: object) => void;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { [key: string]: unknown };
}

// =============================================================================
// Weather Types
// =============================================================================

export interface ForecastDay {
  datetime: string;
  condition: string;
  temperature?: number;
  templow?: number;
  precipitation_probability?: number;
}