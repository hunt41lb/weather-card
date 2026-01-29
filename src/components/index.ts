/* weather-card/src/components/index.ts

 * Components Index
 *
 * Central export point for all components.
 */

// Icons
export { getWeatherIcon, getMiniIcon, WEATHER_ICONS, MINI_ICONS, FALLBACK_ICON, CONDITION_ALIASES } from './icons';

// Editor
export { WeatherCardEditor } from './editor';

// UI Components
export { EditorSection, EditorField, ActionSelector } from './ui';

// Side-effect imports to register custom elements
import './icons';
import './editor';
import './ui';