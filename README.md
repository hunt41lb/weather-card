# Weather Card

A customizable weather card for Home Assistant with animated icons, forecast display, and tap actions.

## Features

- **Animated Weather Icons** - Beautiful day/night SVG icons with smooth animations
- **Customizable Layout** - Icon position (left/right), greeting toggle, flexible sizing
- **Forecast Display** - Optional 1-7 day forecast with mini icons
- **Sunrise/Sunset Times** - Display next sunrise and sunset
- **Weather Alerts** - Show active weather alerts from your weather entity
- **Background Effects** - Optional animated rain, snow, or fog effects
- **Tap Actions** - Configurable tap, hold, and double-tap actions
- **Theme Support** - CSS custom properties for full color customization
- **Grid Layout Support** - Works with layout-card and CSS grid dashboards

## Installation

### HACS (Recommended)
1. Add this repository to HACS as a custom repository
2. Install "Weather Card"
3. Restart Home Assistant
4. Add the card to your dashboard

### Manual
1. Download `weather-card.js` from the latest release
2. Copy to `/config/www/weather-card.js`
3. Add resource: `/local/weather-card.js`

## Configuration

### Visual Editor
The card includes a full visual editor for easy configuration.

### YAML Example
```yaml
type: custom:weather-card
weather_entity: weather.forecast_home
sun_entity: sun.sun
primary_entity: weather.forecast_home
primary_attribute: temperature
primary_unit: "°F"
secondary_entity: weather.forecast_home
secondary_attribute: apparent_temperature
secondary_unit: "°F"
secondary_label: "Feels Like:"
show_greeting: true
show_forecast: true
forecast_days: 5
show_sunrise_sunset: true
show_alerts: true
show_background_effects: true
icon_position: left
icon_size: 100
tap_action:
  action: more-info
hold_action:
  action: navigate
  navigation_path: /lovelace/weather
view_layout:
  grid-area: weather
```

## CSS Custom Properties

Customize colors using CSS variables:

```yaml
type: custom:weather-card
card_mod:
  style: |
    ha-card {
      --weather-card-background: rgba(0, 0, 0, 0.2);
      --weather-card-text-color: white;
      --weather-card-primary-color: #ffffff;
      --weather-card-secondary-color: rgba(255, 255, 255, 0.8);
      --weather-card-greeting-color: #ffd700;
      --weather-card-primary-font-size: 48px;
      --weather-card-secondary-font-size: 14px;
      --weather-card-alert-background: rgba(255, 0, 0, 0.2);
      --weather-card-alert-color: #ff5252;
    }
```

## Tap Actions

Supported actions:
- `none` - No action
- `more-info` - Open entity details
- `navigate` - Navigate to a dashboard path
- `url` - Open external URL

## Credits

Weather icons from [Bas Milius' Meteocons](https://github.com/basmilius/weather-icons)
