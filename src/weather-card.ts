import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { guard } from 'lit/directives/guard.js';

// Action types
interface ActionConfig {
  action: 'none' | 'more-info' | 'navigate' | 'call-service' | 'url';
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: { [key: string]: unknown };
  entity?: string;
}

interface WeatherCardConfig {
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
  // New features
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

interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  user?: { name?: string };
  callService: (domain: string, service: string, data: object) => void;
}

interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { [key: string]: unknown };
}

interface ForecastDay {
  datetime: string;
  condition: string;
  temperature?: number;
  templow?: number;
  precipitation_probability?: number;
}

const WEATHER_ICONS: { [key: string]: string } = {
  'sunny_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>`,
  'clear_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>`,
  'clear-night_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>`,
  'clear_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>`,
  'partlycloudy_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>`,
  'partlycloudy_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>`,
  'cloudy_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>`,
  'cloudy_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>`,
  'rainy_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'rainy_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'pouring_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'pouring_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'snowy_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="30.12" x2="31.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><circle cx="19" cy="24" r="5" fill="url(#b)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>`,
  'snowy_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="30.12" x2="31.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#c)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>`,
  'snowy-rainy_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><circle cx="19" cy="24" r="5" fill="url(#c)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'snowy-rainy_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><path fill="url(#c)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'fog_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>`,
  'fog_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>`,
  'foggy_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>`,
  'foggy_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>`,
  'hail_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#c"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>`,
  'hail_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" xlink:href="#a"/><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#a"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>`,
  'lightning_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>`,
  'lightning_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>`,
  'lightning-rainy_day': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'lightning-rainy_night': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>`,
  'windy_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>`,
  'windy_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>`,
  'windy-variant_day': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>`,
  'windy-variant_night': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>`,
};

const MINI_ICONS: { [key: string]: string } = {
  'sunny': '☀️', 'clear': '☀️', 'clear-night': '🌙', 'partlycloudy': '⛅', 'cloudy': '☁️',
  'rainy': '🌧️', 'pouring': '🌧️', 'snowy': '❄️', 'snowy-rainy': '🌨️', 'fog': '🌫️', 'foggy': '🌫️',
  'hail': '🌨️', 'lightning': '⚡', 'lightning-rainy': '⛈️', 'windy': '💨', 'windy-variant': '💨', 'exceptional': '⚠️'
};

const FALLBACK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="40" text-anchor="middle" font-size="24">?</text></svg>`;

function getWeatherIcon(condition: string, isDay: boolean): string {
  const normalizedCondition = condition?.toLowerCase().replace(/-/g, '') || 'cloudy';
  const timeOfDay = isDay ? 'day' : 'night';
  const exactKey = `${normalizedCondition}_${timeOfDay}`;
  if (WEATHER_ICONS[exactKey]) return WEATHER_ICONS[exactKey];
  const hyphenKey = `${condition}_${timeOfDay}`;
  if (WEATHER_ICONS[hyphenKey]) return WEATHER_ICONS[hyphenKey];
  const conditionAliases: { [key: string]: string } = { 'exceptional': 'cloudy' };
  const aliasedCondition = conditionAliases[normalizedCondition];
  if (aliasedCondition) {
    const aliasKey = `${aliasedCondition}_${timeOfDay}`;
    if (WEATHER_ICONS[aliasKey]) return WEATHER_ICONS[aliasKey];
  }
  return FALLBACK_ICON;
}

@customElement('weather-card')
export class WeatherCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: WeatherCardConfig;
  private _holdTimer?: number;
  private _lastTap = 0;

  static get styles() {
    return css`
      :host { display: block; }
      ha-card {
        padding: 12px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: var(--weather-card-background, var(--ha-card-background, var(--card-background-color)));
        color: var(--weather-card-text-color, var(--primary-text-color));
      }

      /* Background effects container */
      .weather-effects {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }

      /* Rain effect */
      .effect-rain {
        background: linear-gradient(transparent 0%, rgba(100, 150, 200, 0.3) 100%);
        opacity: 0.4;
      }
      .effect-rain::before {
        content: '';
        position: absolute;
        top: -50%; left: 0; right: 0; height: 200%;
        background-image: repeating-linear-gradient(
          transparent 0px, transparent 4px,
          rgba(100, 150, 200, 0.4) 4px, rgba(100, 150, 200, 0.4) 6px
        );
        animation: rain-fall 0.3s linear infinite;
      }
      @keyframes rain-fall { 0% { transform: translateY(-10%); } 100% { transform: translateY(10%); } }

      /* Snow effect - enhanced with snowbank */
      .effect-snow {
        background: linear-gradient(180deg,
          rgba(220, 230, 245, 0.02) 0%,
          rgba(200, 215, 235, 0.05) 100%
        );
      }

      /* Snowbank at bottom */
      .snow-bank {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 32px;
        z-index: 10;
        pointer-events: none;
      }
      .snow-bank svg {
        display: block;
        width: 100%;
        height: 100%;
      }

/* Falling snowflakes - 6 independent layers with prime-number timing */
      .snow-container {
        position: absolute;
        top: 0; left: -20px; right: -20px; bottom: 28px;
        overflow: hidden;
      }

      /* Layer 1: Large slow flakes (background) */
      .snow-container .layer-1 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.8) 2.5px, transparent 2.5px);
        background-size: 90px 90px;
        background-position: 0 0;
        animation: snowfall-1 23s linear infinite;
        animation-delay: -7s;
        opacity: 0.4;
      }

      /* Layer 2 */
      .snow-container .layer-2 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.85) 2px, transparent 2px);
        background-size: 70px 70px;
        background-position: 35px 20px;
        animation: snowfall-2 17s linear infinite, drift-a 13s ease-in-out infinite;
        animation-delay: -3s, -5s;
        opacity: 0.5;
      }

      /* Layer 3 */
      .snow-container .layer-3 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.9) 1.8px, transparent 1.8px);
        background-size: 55px 55px;
        background-position: 15px 40px;
        animation: snowfall-3 13s linear infinite, drift-b 17s ease-in-out infinite;
        animation-delay: -11s, -2s;
        opacity: 0.55;
      }

      /* Layer 4 */
      .snow-container .layer-4 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.95) 1.5px, transparent 1.5px);
        background-size: 45px 45px;
        background-position: 25px 10px;
        animation: snowfall-4 11s linear infinite, drift-c 19s ease-in-out infinite;
        animation-delay: -6s, -8s;
        opacity: 0.6;
      }

      /* Layer 5: Small fast flakes */
      .snow-container .layer-5 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.85) 1.2px, transparent 1.2px);
        background-size: 35px 35px;
        background-position: 10px 25px;
        animation: snowfall-5 7s linear infinite, drift-d 23s ease-in-out infinite;
        animation-delay: -2s, -13s;
        opacity: 0.65;
      }

      /* Layer 6: Tiny fastest flakes (foreground) */
      .snow-container .layer-6 {
        position: absolute;
        left: 0; right: 0;
        top: -100%;
        height: 300%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
        background-size: 25px 25px;
        background-position: 5px 15px;
        animation: snowfall-6 5s linear infinite, drift-e 11s ease-in-out infinite;
        animation-delay: -1s, -4s;
        opacity: 0.7;
      }

      /* Fall keyframes - 33.333% of 300% container = 100% viewport for seamless loop */
      @keyframes snowfall-1 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }
      @keyframes snowfall-2 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }
      @keyframes snowfall-3 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }
      @keyframes snowfall-4 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }
      @keyframes snowfall-5 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }
      @keyframes snowfall-6 { from { transform: translateY(0); } to { transform: translateY(33.3333%); } }

      /* Drift keyframes - different directions for variety */
      @keyframes drift-a { 0%, 100% { margin-left: 0; } 50% { margin-left: 20px; } }
      @keyframes drift-b { 0%, 100% { margin-left: 10px; } 50% { margin-left: -15px; } }
      @keyframes drift-c { 0%, 100% { margin-left: -5px; } 50% { margin-left: 25px; } }
      @keyframes drift-d { 0%, 100% { margin-left: 15px; } 50% { margin-left: -10px; } }
      @keyframes drift-e { 0%, 100% { margin-left: -10px; } 50% { margin-left: 15px; } }

      /* Snow intensity: Light - slower, fewer layers */
      .effect-snow.intensity-light .layer-1 { animation-duration: 34s; opacity: 0.25; }
      .effect-snow.intensity-light .layer-2 { animation-duration: 26s; opacity: 0.3; }
      .effect-snow.intensity-light .layer-3 { animation-duration: 20s; opacity: 0.35; }
      .effect-snow.intensity-light .layer-4 { animation-duration: 16s; opacity: 0.4; }
      .effect-snow.intensity-light .layer-5 { display: none; }
      .effect-snow.intensity-light .layer-6 { display: none; }

      /* Snow intensity: Heavy - faster, more opaque */
      .effect-snow.intensity-heavy .layer-1 { animation-duration: 16s; opacity: 0.5; }
      .effect-snow.intensity-heavy .layer-2 { animation-duration: 12s; opacity: 0.55; }
      .effect-snow.intensity-heavy .layer-3 { animation-duration: 9s; opacity: 0.6; }
      .effect-snow.intensity-heavy .layer-4 { animation-duration: 7s; opacity: 0.7; }
      .effect-snow.intensity-heavy .layer-5 { animation-duration: 5s; opacity: 0.75; }
      .effect-snow.intensity-heavy .layer-6 { animation-duration: 3.5s; opacity: 0.8; }

      /* Fog effect */
      .effect-fog {
        background: linear-gradient(90deg,
          transparent 0%, rgba(200, 200, 200, 0.3) 25%,
          rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.3) 75%, transparent 100%);
        animation: fog-move 8s ease-in-out infinite;
        opacity: 0.4;
      }
      @keyframes fog-move { 0%, 100% { transform: translateX(-20%); } 50% { transform: translateX(20%); } }

      /* Sunny/Clear effect - Lens flare with multi-orb bokeh */
      .effect-sunny {
        background: linear-gradient(135deg,
          rgba(255, 250, 230, 0.35) 0%,
          rgba(255, 245, 200, 0.15) 25%,
          transparent 50%
        );
      }

      /* Primary sun glow */
      .effect-sunny::before {
        content: '';
        position: absolute;
        top: 3%;
        left: 3%;
        width: 70px;
        height: 70px;
        background: radial-gradient(
          circle,
          rgba(255, 255, 245, 0.7) 0%,
          rgba(255, 250, 200, 0.4) 35%,
          rgba(255, 240, 180, 0.1) 60%,
          transparent 75%
        );
        border-radius: 50%;
        animation: sunny-glow-pulse 5s ease-in-out infinite;
      }

      /* Main light streak */
      .effect-sunny .streak-main {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 2px;
        background: linear-gradient(90deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 250, 220, 0.4) 40%,
          rgba(255, 245, 200, 0.1) 80%,
          transparent 100%
        );
        transform: rotate(50deg);
        transform-origin: 0% 0%;
        animation: sunny-streak-glow 7s ease-in-out infinite;
      }

      /* Bokeh orbs along the diagonal */
      .effect-sunny .orb {
        position: absolute;
        border-radius: 50%;
        animation: sunny-orb-float 6s ease-in-out infinite;
      }

      .effect-sunny .orb-1 {
        top: 18%;
        left: 22%;
        width: 18px;
        height: 18px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.5) 0%, 
          rgba(255, 245, 200, 0.2) 50%, 
          transparent 70%
        );
        animation-delay: -1s;
      }

      .effect-sunny .orb-2 {
        top: 28%;
        left: 35%;
        width: 12px;
        height: 12px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.4) 0%, 
          rgba(255, 240, 180, 0.15) 50%, 
          transparent 70%
        );
        animation-delay: -2.5s;
      }

      .effect-sunny .orb-3 {
        top: 38%;
        left: 48%;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.35) 0%, 
          rgba(255, 235, 170, 0.1) 50%, 
          transparent 70%
        );
        animation-delay: -4s;
      }

      .effect-sunny .orb-4 {
        top: 48%;
        left: 60%;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.3) 0%, 
          transparent 70%
        );
        animation-delay: -3s;
      }

      @keyframes sunny-glow-pulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.08); }
      }

      @keyframes sunny-streak-glow {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 0.9; }
      }

      @keyframes sunny-orb-float {
        0%, 100% { opacity: 0.7; transform: scale(1) translate(0, 0); }
        50% { opacity: 1; transform: scale(1.15) translate(2px, 2px); }
      }

      /* Main grid */
      .weather-card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto 1fr 1fr auto auto auto auto;
        gap: 0px 0px;
        grid-template-areas:
          "greeting greeting greeting greeting"
          "icon icon primary primary"
          "icon icon secondary secondary"
          "description description description description"
          "sun-times sun-times sun-times sun-times"
          "forecast forecast forecast forecast"
          "alerts alerts alerts alerts";
        height: 100%;
        min-height: 140px;
        position: relative;
        z-index: 1;
      }
      .weather-card-grid.no-greeting {
        grid-template-rows: 1fr 1fr auto auto auto auto;
        grid-template-areas:
          "icon icon primary primary"
          "icon icon secondary secondary"
          "description description description description"
          "sun-times sun-times sun-times sun-times"
          "forecast forecast forecast forecast"
          "alerts alerts alerts alerts";
      }
      .weather-card-grid.icon-right {
        grid-template-areas:
          "greeting greeting greeting greeting"
          "primary primary icon icon"
          "secondary secondary icon icon"
          "description description description description"
          "sun-times sun-times sun-times sun-times"
          "forecast forecast forecast forecast"
          "alerts alerts alerts alerts";
      }
      .weather-card-grid.icon-right.no-greeting {
        grid-template-areas:
          "primary primary icon icon"
          "secondary secondary icon icon"
          "description description description description"
          "sun-times sun-times sun-times sun-times"
          "forecast forecast forecast forecast"
          "alerts alerts alerts alerts";
      }

      .greeting { grid-area: greeting; font-size: 20px; font-weight: 600; text-align: center; padding-bottom: 4px; color: var(--weather-card-greeting-color, var(--primary-text-color)); }
      .weather-icon { grid-area: icon; display: flex; align-items: center; justify-content: center; }
      .weather-icon svg { width: var(--weather-icon-size, 100px); height: var(--weather-icon-size, 100px); }
      .primary-value { grid-area: primary; font-size: var(--weather-card-primary-font-size, 40px); font-weight: 400; line-height: 1; display: flex; align-items: flex-end; justify-content: center; color: var(--weather-card-primary-color, var(--primary-text-color)); }
      .secondary-value { grid-area: secondary; font-size: var(--weather-card-secondary-font-size, 12px); font-weight: 400; opacity: 0.8; display: flex; align-items: flex-start; justify-content: center; padding-top: 4px; color: var(--weather-card-secondary-color, var(--secondary-text-color)); }
      .description { grid-area: description; font-size: 18px; font-weight: 600; text-align: center; padding-top: 4px; color: var(--weather-card-description-color, var(--primary-text-color)); }

      /* Sun times */
      .sun-times {
        grid-area: sun-times;
        display: flex;
        justify-content: center;
        gap: 24px;
        padding: 8px 0 4px 0;
        font-size: 12px;
        opacity: 0.8;
      }
      .sun-time { display: flex; align-items: center; gap: 4px; }
      .sun-icon { font-size: 14px; }

      /* Forecast */
      .forecast {
        grid-area: forecast;
        display: flex;
        justify-content: space-around;
        padding: 8px 0;
        border-top: 1px solid var(--divider-color, rgba(0,0,0,0.1));
        margin-top: 8px;
      }
      .forecast-day {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 11px;
        min-width: 40px;
      }
      .forecast-day-name { font-weight: 600; opacity: 0.8; }
      .forecast-icon { font-size: 18px; margin: 4px 0; }
      .forecast-temps { display: flex; gap: 4px; }
      .forecast-high { font-weight: 600; }
      .forecast-low { opacity: 0.6; }

      /* Alerts */
      .alerts {
        grid-area: alerts;
        padding: 8px;
        margin-top: 8px;
        background: var(--weather-card-alert-background, rgba(255, 152, 0, 0.2));
        border-radius: 4px;
        border-left: 3px solid var(--weather-card-alert-color, #ff9800);
      }
      .alert {
        font-size: 12px;
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }
      .alert-icon { font-size: 16px; }
      .alert-text { flex: 1; }
      .alert-title { font-weight: 600; }
      .alert-description { opacity: 0.8; font-size: 11px; }

      .unavailable { opacity: 0.5; font-style: italic; }
    `;
  }

  public setConfig(config: WeatherCardConfig): void {
    if (!config) throw new Error('Invalid configuration');
    this._config = {
      show_greeting: true,
      icon_size: 100,
      card_height: 'auto',
      sun_entity: 'sun.sun',
      icon_position: 'left',
      show_forecast: false,
      forecast_days: 5,
      show_sunrise_sunset: false,
      show_alerts: false,
      show_background_effects: false,
      use_dynamic_background: false,
      day_background: 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)',
      night_background: 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)',
      tap_action: { action: 'more-info' },
      hold_action: { action: 'none' },
      double_tap_action: { action: 'none' },
      ...config
    };
  }

  public getCardSize(): number { return 3; }

  public getLayoutOptions() {
    return this._config?.view_layout || {};
  }

  public static getConfigElement(): HTMLElement { return document.createElement('weather-card-editor'); }
  public static getStubConfig(): WeatherCardConfig {
    return {
      type: 'custom:weather-card',
      weather_entity: 'weather.forecast_home',
      sun_entity: 'sun.sun',
      primary_entity: 'weather.forecast_home',
      primary_attribute: 'temperature',
      primary_unit: '°F',
      secondary_entity: 'weather.forecast_home',
      secondary_attribute: 'apparent_temperature',
      secondary_unit: '°F',
      secondary_label: 'Feels Like:',
      show_greeting: true,
      icon_size: 100,
      show_forecast: true,
      forecast_days: 5,
      show_sunrise_sunset: true
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._handleTap);
    this.addEventListener('contextmenu', this._handleHold);
    this.addEventListener('touchstart', this._handleTouchStart, { passive: true });
    this.addEventListener('touchend', this._handleTouchEnd);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleTap);
    this.removeEventListener('contextmenu', this._handleHold);
    this.removeEventListener('touchstart', this._handleTouchStart);
    this.removeEventListener('touchend', this._handleTouchEnd);
  }

  private _handleTap = (ev: Event) => {
    const now = Date.now();
    if (now - this._lastTap < 300) {
      this._executeAction(this._config.double_tap_action);
      this._lastTap = 0;
    } else {
      this._lastTap = now;
      setTimeout(() => {
        if (this._lastTap !== 0) {
          this._executeAction(this._config.tap_action);
          this._lastTap = 0;
        }
      }, 300);
    }
  };

  private _handleHold = (ev: Event) => {
    ev.preventDefault();
    this._executeAction(this._config.hold_action);
  };

  private _handleTouchStart = () => {
    this._holdTimer = window.setTimeout(() => {
      this._executeAction(this._config.hold_action);
    }, 500);
  };

  private _handleTouchEnd = () => {
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
  };

  private _executeAction(action?: ActionConfig) {
    if (!action || action.action === 'none') return;

    switch (action.action) {
      case 'more-info':
        const entityId = action.entity || this._config.weather_entity;
        if (entityId) {
          const event = new CustomEvent('hass-more-info', { detail: { entityId }, bubbles: true, composed: true });
          this.dispatchEvent(event);
        }
        break;
      case 'navigate':
        if (action.navigation_path) {
          history.pushState(null, '', action.navigation_path);
          const event = new CustomEvent('location-changed', { bubbles: true, composed: true });
          this.dispatchEvent(event);
        }
        break;
      case 'url':
        if (action.url_path) {
          window.open(action.url_path, '_blank');
        }
        break;
      case 'call-service':
        if (action.service) {
          const [domain, service] = action.service.split('.');
          this.hass.callService(domain, service, action.service_data || {});
        }
        break;
    }
  }

  protected render() {
    if (!this._config || !this.hass) return html``;
    const greeting = this._getGreeting();
    const primary = this._getPrimaryValue();
    const secondary = this._getSecondaryValue();
    const description = this._getDescription();
    const showGreeting = this._config.show_greeting !== false;
    const iconRight = this._config.icon_position === 'right';

    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    const sunEntity = this._config.sun_entity ? this.hass.states[this._config.sun_entity] : undefined;
    const condition = weatherEntity?.state || '';
    const isDay = sunEntity?.state === 'above_horizon';

    const gridClasses = [
      'weather-card-grid',
      showGreeting ? '' : 'no-greeting',
      iconRight ? 'icon-right' : ''
    ].filter(Boolean).join(' ');

    // Dynamic background color based on sun state
    const dayBg = this._config.day_background || 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)';
    const nightBg = this._config.night_background || 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)';
    const dynamicBgStyle = this._config.use_dynamic_background
      ? `background: ${isDay ? dayBg : nightBg};`
      : '';

    return html`
      <ha-card style="height: ${this._config.card_height}; ${dynamicBgStyle}">
        ${this._config.show_background_effects ? this._renderBackgroundEffect(condition) : nothing}
        <div class="${gridClasses}" style="--weather-icon-size: ${this._config.icon_size}px">
          ${showGreeting ? html`<div class="greeting">${greeting}</div>` : nothing}
          <div class="weather-icon">
            ${guard([condition, isDay], () => this._renderWeatherIcon(condition, isDay))}
          </div>
          <div class="primary-value">${primary}</div>
          <div class="secondary-value">${secondary}</div>
          <div class="description">${description}</div>
          ${this._config.show_sunrise_sunset ? this._renderSunTimes() : nothing}
          ${this._config.show_forecast ? this._renderForecast() : nothing}
          ${this._config.show_alerts ? this._renderAlerts() : nothing}
        </div>
      </ha-card>
    `;
  }

  private _renderBackgroundEffect(condition: string): TemplateResult {
    const effectClass = this._getEffectClass(condition);
    if (!effectClass) return html``;

    // For snow, render the enhanced effect with snowbank
    if (effectClass === 'effect-snow') {
      const intensityClass = this._getSnowIntensity();
      return html`
        <div class="weather-effects ${effectClass} ${intensityClass}">
          <!-- Falling snowflakes - 6 independent layers -->
          <div class="snow-container">
            <div class="layer-1"></div>
            <div class="layer-2"></div>
            <div class="layer-3"></div>
            <div class="layer-4"></div>
            <div class="layer-5"></div>
            <div class="layer-6"></div>
          </div>

          <!-- Snowbank at bottom -->
          <div class="snow-bank">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="snowFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                  <stop offset="100%" stop-color="rgba(240,245,255,1)"/>
                </linearGradient>
              </defs>
              <path d="M0,100 L0,65
                Q10,55 20,60
                Q30,65 40,55
                Q50,45 60,55
                Q70,65 80,58
                Q90,50 100,60
                L100,100 Z"
                fill="url(#snowFill)"/>
            </svg>
          </div>
        </div>
      `;
    }

    // For sunny/clear, render lens flare with bokeh orbs
    if (effectClass === 'effect-sunny') {
      return html`
        <div class="weather-effects ${effectClass}">
          <div class="streak-main"></div>
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
          <div class="orb orb-4"></div>
        </div>
      `;
    }

    // For other effects, use simple container
    return html`<div class="weather-effects ${effectClass}"></div>`;
  }

  private _getEffectClass(condition: string): string {
    const c = condition?.toLowerCase() || '';
    if (c.includes('rain') || c.includes('pouring')) return 'effect-rain';
    if (c.includes('snow')) return 'effect-snow';
    if (c.includes('fog')) return 'effect-fog';
    if (c === 'sunny' || c === 'clear') return 'effect-sunny';
    return '';
  }

  private _getSnowIntensity(): string {
    const weatherEntity = this._config.weather_entity
      ? this.hass.states[this._config.weather_entity]
      : undefined;

    if (!weatherEntity) return '';

    // Get precipitation amount (mm/h typically)
    const precipitation = Number(weatherEntity.attributes?.precipitation) || 0;

    // Map precipitation to intensity class
    // Light: < 1 mm/h, Normal: 1-4 mm/h, Heavy: > 4 mm/h
    if (precipitation >= 4) return 'intensity-heavy';
    if (precipitation < 1) return 'intensity-light';
    return ''; // default/normal intensity
  }

  private _renderWeatherIcon(condition: string, isDay: boolean) {
    if (!condition) return html`<span class="unavailable">No weather entity</span>`;
    const svgContent = getWeatherIcon(condition, isDay);
    return html`${unsafeHTML(svgContent)}`;
  }

  private _renderSunTimes(): TemplateResult {
    const sunEntity = this._config.sun_entity ? this.hass.states[this._config.sun_entity] : undefined;
    if (!sunEntity) return html``;

    const sunrise = sunEntity.attributes.next_rising as string;
    const sunset = sunEntity.attributes.next_setting as string;

    const formatTime = (isoString: string): string => {
      if (!isoString) return '--:--';
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return html`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">🌅</span>
          <span>${formatTime(sunrise)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">🌇</span>
          <span>${formatTime(sunset)}</span>
        </div>
      </div>
    `;
  }

  private _renderForecast(): TemplateResult {
    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    if (!weatherEntity) return html``;

    const forecast = weatherEntity.attributes.forecast as ForecastDay[] | undefined;
    if (!forecast || forecast.length === 0) return html``;

    const days = forecast.slice(0, this._config.forecast_days || 5);
    const unit = this._config.primary_unit || '°';

    const getDayName = (dateStr: string): string => {
      const date = new Date(dateStr);
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (date.toDateString() === today.toDateString()) return 'Today';
      if (date.toDateString() === tomorrow.toDateString()) return 'Tmrw';
      return date.toLocaleDateString([], { weekday: 'short' });
    };

    return html`
      <div class="forecast">
        ${days.map(day => html`
          <div class="forecast-day">
            <div class="forecast-day-name">${getDayName(day.datetime)}</div>
            <div class="forecast-icon">${MINI_ICONS[day.condition] || '❓'}</div>
            <div class="forecast-temps">
              <span class="forecast-high">${Math.round(day.temperature || 0)}${unit}</span>
              ${day.templow !== undefined ? html`<span class="forecast-low">${Math.round(day.templow)}${unit}</span>` : nothing}
            </div>
          </div>
        `)}
      </div>
    `;
  }

  private _renderAlerts(): TemplateResult {
    const weatherEntity = this._config.weather_entity ? this.hass.states[this._config.weather_entity] : undefined;
    if (!weatherEntity) return html``;

    const alerts = weatherEntity.attributes.alerts as Array<{ title?: string; description?: string }> | undefined;
    if (!alerts || alerts.length === 0) return html``;

    // Show only first alert
    const alert = alerts[0];

    return html`
      <div class="alerts">
        <div class="alert">
          <span class="alert-icon">⚠️</span>
          <div class="alert-text">
            <div class="alert-title">${alert.title || 'Weather Alert'}</div>
            ${alert.description ? html`<div class="alert-description">${alert.description}</div>` : nothing}
          </div>
        </div>
      </div>
    `;
  }

  private _getGreeting(): string {
    if (this._config.greeting_name) return `Hello, ${this._config.greeting_name}`;
    const userName = this.hass?.user?.name;
    if (userName) return `Hello, ${userName.split(' ')[0]}`;
    return 'Hello';
  }

  private _getPrimaryValue(): string {
    const config = this._config;
    if (!config.primary_entity) return '--';
    const entity = this.hass.states[config.primary_entity];
    if (!entity) return '--';
    let value: string | number | unknown;
    if (config.primary_attribute) { value = entity.attributes[config.primary_attribute]; } else { value = entity.state; }
    if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return '--';
    const unit = config.primary_unit || '';
    return `${value}${unit}`;
  }

  private _getSecondaryValue(): string {
    const config = this._config;
    if (!config.secondary_entity) return '';
    const entity = this.hass.states[config.secondary_entity];
    if (!entity) return '';
    let value: string | number | unknown;
    if (config.secondary_attribute) { value = entity.attributes[config.secondary_attribute]; } else { value = entity.state; }
    if (value === undefined || value === null || value === 'unknown' || value === 'unavailable') return '';
    const label = config.secondary_label || '';
    const unit = config.secondary_unit || '';
    return `${label} ${value}${unit}`.trim();
  }

  private _getDescription(): string {
    const config = this._config;
    if (!config.description_entity) {
      if (config.weather_entity) {
        const entity = this.hass.states[config.weather_entity];
        if (entity) return this._formatCondition(entity.state);
      }
      return '';
    }
    const entity = this.hass.states[config.description_entity];
    if (!entity) return '';
    if (config.description_attribute) {
      const value = entity.attributes[config.description_attribute];
      return value !== undefined && value !== null ? String(value) : '';
    }
    return this._formatCondition(entity.state);
  }

  private _formatCondition(condition: string): string {
    const conditionMap: { [key: string]: string } = { 'partlycloudy': 'Partly Cloudy', 'mostlycloudy': 'Mostly Cloudy', 'clear': 'Clear', 'clear-night': 'Clear', 'cloudy': 'Cloudy', 'rainy': 'Rain', 'pouring': 'Heavy Rain', 'snowy': 'Snow', 'snowy-rainy': 'Sleet', 'sunny': 'Sunny', 'windy': 'Windy', 'windy-variant': 'Windy', 'foggy': 'Foggy', 'fog': 'Fog', 'hail': 'Hail', 'lightning': 'Lightning', 'lightning-rainy': 'Thunderstorm', 'exceptional': 'Exceptional' };
    return conditionMap[condition.toLowerCase()] || condition.charAt(0).toUpperCase() + condition.slice(1).replace(/-/g, ' ');
  }
}

// Editor will be continued in part 2...

@customElement('weather-card-editor')
export class WeatherCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: WeatherCardConfig;

  static get styles() {
    return css`
      :host { display: block; }
      .editor-container { display: flex; flex-direction: column; gap: 16px; padding: 16px; }
      .section { border: 1px solid var(--divider-color); border-radius: 8px; padding: 16px; }
      .section-title { font-weight: 600; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-color); }
      .field { margin-bottom: 12px; }
      .field:last-child { margin-bottom: 0; }
      .field-label { display: block; margin-bottom: 4px; font-size: 12px; color: var(--secondary-text-color); }
      .field-row { display: flex; gap: 8px; }
      .field-row > * { flex: 1; }
      ha-entity-picker, ha-textfield, ha-select { width: 100%; }
      ha-formfield { display: block; margin-top: 8px; }
    `;
  }

  public setConfig(config: WeatherCardConfig): void { this._config = config; }

  private _getEntityAttributes(entityId: string | undefined): string[] {
    if (!entityId || !this.hass?.states[entityId]) return [];
    const entity = this.hass.states[entityId];
    const attributes = Object.keys(entity.attributes || {});
    const hiddenAttrs = ['friendly_name', 'icon', 'entity_picture', 'supported_features', 'attribution', 'device_class', 'state_class', 'unit_of_measurement'];
    return attributes.filter(attr => !hiddenAttrs.includes(attr)).sort();
  }

  private _getAttributeUnit(entityId: string | undefined, attribute: string | undefined): string {
    if (!entityId || !attribute || !this.hass?.states[entityId]) return '';
    const entity = this.hass.states[entityId];
    const entityUnit = String(entity.attributes.unit_of_measurement || '');
    const unitMappings: { [key: string]: string } = {
      'temperature': entityUnit || '°F', 'apparent_temperature': entityUnit || '°F', 'dew_point': entityUnit || '°F',
      'humidity': '%', 'pressure': 'hPa', 'wind_speed': 'mph', 'wind_gust_speed': 'mph',
      'visibility': 'mi', 'precipitation': 'in', 'precipitation_probability': '%', 'cloud_coverage': '%', 'uv_index': '',
    };
    return unitMappings[attribute] !== undefined ? unitMappings[attribute] : '';
  }

  private _getAttributeLabel(attribute: string | undefined): string {
    if (!attribute) return '';
    const labelMappings: { [key: string]: string } = {
      'temperature': 'Temperature:', 'apparent_temperature': 'Feels Like:', 'dew_point': 'Dew Point:',
      'humidity': 'Humidity:', 'pressure': 'Pressure:', 'wind_speed': 'Wind:', 'wind_gust_speed': 'Gusts:',
      'wind_bearing': 'Wind Direction:', 'visibility': 'Visibility:', 'precipitation': 'Precipitation:',
      'precipitation_probability': 'Precip Chance:', 'cloud_coverage': 'Cloud Cover:', 'uv_index': 'UV Index:', 'ozone': 'Ozone:',
    };
    if (labelMappings[attribute] !== undefined) return labelMappings[attribute];
    return attribute.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ':';
  }

  private _renderAttributeSelect(entityId: string | undefined, configValue: string, currentValue: string | undefined, placeholder: string, unitConfigValue?: string, labelConfigValue?: string) {
    const attributes = this._getEntityAttributes(entityId);
    if (!entityId || attributes.length === 0) {
      return html`<ha-textfield .value=${currentValue || ''} .configValue=${configValue} @input=${this._valueChanged} placeholder=${placeholder}></ha-textfield>`;
    }
    return html`
      <ha-select .value=${currentValue || ''} .configValue=${configValue} .unitConfigValue=${unitConfigValue || ''} .labelConfigValue=${labelConfigValue || ''} .entityId=${entityId} @selected=${this._attributeChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition naturalMenuWidth>
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${attributes.map(attr => html`<mwc-list-item .value=${attr}>${attr}</mwc-list-item>`)}
      </ha-select>
    `;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <div class="editor-container">
        <div class="section">
          <div class="section-title">Weather Source</div>
          <div class="field">
            <span class="field-label">Weather Entity (required)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.weather_entity || ''} .configValue=${'weather_entity'} @value-changed=${this._valueChanged} .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('weather.')} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Sun Entity (for day/night icons)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.sun_entity || 'sun.sun'} .configValue=${'sun_entity'} @value-changed=${this._valueChanged} .entityFilter=${(entity: { entity_id: string }) => entity.entity_id.startsWith('sun.')} allow-custom-entity></ha-entity-picker>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Icon Settings</div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Icon Size (px)</span>
              <ha-textfield type="number" .value=${String(this._config.icon_size || 100)} .configValue=${'icon_size'} @input=${this._valueChanged}></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Icon Position</span>
              <ha-select .value=${this._config.icon_position || 'left'} .configValue=${'icon_position'} @selected=${this._valueChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
                <mwc-list-item value="left">Left</mwc-list-item>
                <mwc-list-item value="right">Right</mwc-list-item>
              </ha-select>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Primary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.primary_entity || ''} .configValue=${'primary_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.primary_entity, 'primary_attribute', this._config.primary_attribute, 'temperature', 'primary_unit')}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.primary_unit ?? ''} .configValue=${'primary_unit'} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Secondary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.secondary_entity || ''} .configValue=${'secondary_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.secondary_entity, 'secondary_attribute', this._config.secondary_attribute, 'apparent_temperature', 'secondary_unit', 'secondary_label')}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.secondary_unit ?? ''} .configValue=${'secondary_unit'} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
          <div class="field">
            <span class="field-label">Label</span>
            <ha-textfield .value=${this._config.secondary_label ?? ''} .configValue=${'secondary_label'} @input=${this._valueChanged} placeholder="Feels Like:"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Description</div>
          <div class="field">
            <span class="field-label">Entity (leave empty for weather condition)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.description_entity || ''} .configValue=${'description_entity'} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Attribute</span>
            ${this._renderAttributeSelect(this._config.description_entity, 'description_attribute', this._config.description_attribute, 'desc')}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Features</div>
          <div class="field">
            <ha-formfield label="Show Greeting">
              <ha-switch .checked=${this._config.show_greeting !== false} .configValue=${'show_greeting'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <span class="field-label">Custom Greeting Name</span>
            <ha-textfield .value=${this._config.greeting_name || ''} .configValue=${'greeting_name'} @input=${this._valueChanged} placeholder="Leave empty for logged-in user"></ha-textfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Sunrise/Sunset">
              <ha-switch .checked=${this._config.show_sunrise_sunset === true} .configValue=${'show_sunrise_sunset'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Forecast">
              <ha-switch .checked=${this._config.show_forecast === true} .configValue=${'show_forecast'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.show_forecast ? html`
            <div class="field">
              <span class="field-label">Forecast Days (1-7)</span>
              <ha-textfield type="number" min="1" max="7" .value=${String(this._config.forecast_days || 5)} .configValue=${'forecast_days'} @input=${this._valueChanged}></ha-textfield>
            </div>
          ` : nothing}
          <div class="field">
            <ha-formfield label="Show Weather Alerts">
              <ha-switch .checked=${this._config.show_alerts === true} .configValue=${'show_alerts'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Background Effects">
              <ha-switch .checked=${this._config.show_background_effects === true} .configValue=${'show_background_effects'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Dynamic Background (Day/Night)">
              <ha-switch .checked=${this._config.use_dynamic_background === true} .configValue=${'use_dynamic_background'} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.use_dynamic_background ? html`
            <div class="field">
              <span class="field-label">Day Background (color or gradient)</span>
              <ha-textfield 
                .value=${this._config.day_background || 'linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)'} 
                .configValue=${'day_background'} 
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"
              ></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Night Background (color or gradient)</span>
              <ha-textfield 
                .value=${this._config.night_background || 'linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)'} 
                .configValue=${'night_background'} 
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"
              ></ha-textfield>
            </div>
          ` : nothing}
        </div>

        <div class="section">
          <div class="section-title">Tap Actions</div>
          <div class="field">
            <span class="field-label">Tap Action</span>
            <ha-select .value=${this._config.tap_action?.action || 'more-info'} .configValue=${'tap_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          ${this._config.tap_action?.action === 'navigate' ? html`
            <div class="field">
              <span class="field-label">Navigation Path</span>
              <ha-textfield .value=${this._config.tap_action?.navigation_path || ''} .configValue=${'tap_action.navigation_path'} @input=${this._actionPathChanged} placeholder="/lovelace/weather"></ha-textfield>
            </div>
          ` : nothing}
          ${this._config.tap_action?.action === 'url' ? html`
            <div class="field">
              <span class="field-label">URL</span>
              <ha-textfield .value=${this._config.tap_action?.url_path || ''} .configValue=${'tap_action.url_path'} @input=${this._actionPathChanged} placeholder="https://weather.com"></ha-textfield>
            </div>
          ` : nothing}
          <div class="field">
            <span class="field-label">Hold Action</span>
            <ha-select .value=${this._config.hold_action?.action || 'none'} .configValue=${'hold_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          <div class="field">
            <span class="field-label">Double Tap Action</span>
            <ha-select .value=${this._config.double_tap_action?.action || 'none'} .configValue=${'double_tap_action.action'} @selected=${this._actionChanged} @closed=${(e: Event) => e.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Appearance</div>
          <div class="field">
            <span class="field-label">Card Height</span>
            <ha-textfield .value=${this._config.card_height || 'auto'} .configValue=${'card_height'} @input=${this._valueChanged} placeholder="auto or 180px"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Layout</div>
          <div class="field">
            <span class="field-label">Grid Area</span>
            <ha-textfield .value=${this._config.view_layout?.['grid-area'] || ''} .configValue=${'view_layout.grid-area'} @input=${this._viewLayoutChanged} placeholder="weather"></ha-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev: Event): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as HTMLInputElement & { configValue: string };
    const configValue = target.configValue;
    if (!configValue) return;
    let value: string | number | boolean | undefined;
    if (target.type === 'checkbox' || target.tagName === 'HA-SWITCH') { value = (target as HTMLInputElement).checked; }
    else if (target.type === 'number') { value = target.value ? Number(target.value) : undefined; }
    else { value = (ev as CustomEvent).detail?.value ?? target.value; }
    if (value === '' || value === undefined) {
      const newConfig = { ...this._config };
      delete (newConfig as Record<string, unknown>)[configValue];
      this._config = newConfig;
    } else { this._config = { ...this._config, [configValue]: value }; }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _attributeChanged(ev: Event): void {
    if (!this._config || !this.hass) return;
    const target = ev.target as HTMLElement & { configValue: string; unitConfigValue: string; labelConfigValue: string; entityId: string; value: string };
    const { configValue, unitConfigValue, labelConfigValue, entityId, value: attribute } = target;
    if (!configValue) return;
    const newConfig: Record<string, unknown> = { ...this._config };
    if (attribute === '' || attribute === undefined) {
      delete newConfig[configValue];
      if (unitConfigValue) delete newConfig[unitConfigValue];
      if (labelConfigValue) delete newConfig[labelConfigValue];
    } else {
      newConfig[configValue] = attribute;
      if (unitConfigValue) newConfig[unitConfigValue] = this._getAttributeUnit(entityId, attribute);
      if (labelConfigValue) newConfig[labelConfigValue] = this._getAttributeLabel(attribute);
    }
    this._config = newConfig as WeatherCardConfig;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _actionChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLElement & { configValue: string; value: string };
    const [actionType, actionProp] = target.configValue.split('.');
    const newAction = { ...(this._config[actionType as keyof WeatherCardConfig] as ActionConfig || {}), [actionProp]: target.value };
    this._config = { ...this._config, [actionType]: newAction };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _actionPathChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLInputElement & { configValue: string };
    const [actionType, actionProp] = target.configValue.split('.');
    const newAction = { ...(this._config[actionType as keyof WeatherCardConfig] as ActionConfig || {}), [actionProp]: target.value };
    this._config = { ...this._config, [actionType]: newAction };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }

  private _viewLayoutChanged(ev: Event): void {
    if (!this._config) return;
    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const newViewLayout = { ...this._config.view_layout };
    if (value === '' || value === undefined) { delete newViewLayout['grid-area']; }
    else { newViewLayout['grid-area'] = value; }
    const hasValues = Object.keys(newViewLayout).length > 0;
    if (hasValues) { this._config = { ...this._config, view_layout: newViewLayout }; }
    else { const newConfig = { ...this._config }; delete newConfig.view_layout; this._config = newConfig; }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }
}

declare global { interface Window { customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>; } }
window.customCards = window.customCards || [];
window.customCards.push({ type: 'weather-card', name: 'Weather Card', description: 'A customizable weather card with animated icons, forecast, and tap actions', preview: true });
console.info('%c WEATHER-CARD %c v2.0.0 ', 'color: white; background: #3498db; font-weight: bold;', 'color: #3498db; background: white; font-weight: bold;');
