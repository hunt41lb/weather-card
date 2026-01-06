# Weather Card

A customizable weather card for Home Assistant with visual editor support and day/night icons.

![Weather Card Preview](preview.png)

## Features

- **Visual Editor**: Configure all options through the Home Assistant UI
- **Day/Night Icons**: Automatically switches icons based on sun position
- **Flexible Configuration**: Use any entity/attribute for primary and secondary values
- **Greeting**: Optional personalized greeting with user's name
- **Embedded Icons**: All icons are embedded in the card - no external dependencies

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Click on "Frontend"
3. Click the three dots in the top right corner
4. Select "Custom repositories"
5. Add this repository URL and select "Lovelace" as the category
6. Click "Install"

### Manual Installation

1. Download `weather-card.js` from the [latest release](https://github.com/yourusername/weather-card/releases)
2. Copy it to your `config/www` folder
3. Add the resource in Home Assistant:
   - Go to Configuration → Lovelace Dashboards → Resources
   - Add `/local/weather-card.js` as a JavaScript module

## Configuration

### Using the Visual Editor

1. Add a new card to your dashboard
2. Search for "Weather Card"
3. Configure the options using the visual editor

### Manual YAML Configuration

```yaml
type: custom:weather-card
weather_entity: weather.forecast_home
sun_entity: sun.sun
primary_entity: weather.forecast_home
primary_attribute: temperature
primary_unit: "°F"
secondary_entity: sensor.weather_card
secondary_attribute: feels_like
secondary_unit: "°F"
secondary_label: "Feels Like:"
description_entity: weather.forecast_home
show_greeting: true
icon_size: 100
card_height: "180px"
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `weather_entity` | string | - | Weather entity for icon selection |
| `sun_entity` | string | `sun.sun` | Sun entity for day/night detection |
| `primary_entity` | string | - | Entity for primary value |
| `primary_attribute` | string | - | Attribute to use (leave empty for state) |
| `primary_unit` | string | - | Unit to display after value |
| `secondary_entity` | string | - | Entity for secondary value |
| `secondary_attribute` | string | - | Attribute to use (leave empty for state) |
| `secondary_unit` | string | - | Unit to display after value |
| `secondary_label` | string | `Feels Like:` | Label before secondary value |
| `description_entity` | string | - | Entity for description (defaults to weather condition) |
| `description_attribute` | string | - | Attribute to use for description |
| `show_greeting` | boolean | `true` | Show greeting with user name |
| `greeting_name` | string | - | Custom name for greeting |
| `icon_size` | number | `100` | Icon size in pixels |
| `card_height` | string | `180px` | Card height |

## Using with Template Sensors

For advanced features like "feels like" temperature calculation, you can create template sensors:

```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Weather Card"
        unique_id: "weather_card"
        state: "{{ states('weather.forecast_home') }}"
        attributes:
          temperature: >
            {{ state_attr('weather.forecast_home', 'temperature') }}
          feels_like: >
            {% set T = (state_attr('weather.forecast_home', 'temperature') | float) %}
            {% set V = (state_attr('weather.forecast_home', 'wind_speed') | float) %}
            {% set H = (state_attr('weather.forecast_home', 'humidity') | float) %}
            {% if T <= 50 and V > 3 %}
              {{ (35.74 + 0.6215 * T - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16)) | round(1) }}
            {% elif T >= 80 %}
              {{ (-42.379 + 2.04901523*T + 10.14333127*H - 0.22475541*T*H - 0.00683783*T*T - 0.05481717*H*H + 0.00122874*T*T*H + 0.00085282*T*H*H - 0.00000199*T*T*H*H) | round(1) }}
            {% else %}
              {{ T }}
            {% endif %}
          desc: >
            {% set conditions = {
              'partlycloudy': 'Partly Cloudy',
              'cloudy': 'Cloudy',
              'rainy': 'Rain',
              'snowy': 'Snow',
              'sunny': 'Sunny',
              'clear-night': 'Clear'
            } %}
            {{ conditions.get(states('weather.forecast_home'), states('weather.forecast_home')) }}
```

Then configure the card:

```yaml
type: custom:weather-card
weather_entity: weather.forecast_home
primary_entity: sensor.weather_card
primary_attribute: temperature
primary_unit: "°F"
secondary_entity: sensor.weather_card
secondary_attribute: feels_like
secondary_unit: "°F"
secondary_label: "Feels Like:"
description_entity: sensor.weather_card
description_attribute: desc
```

## Supported Weather Conditions

The card includes icons for the following conditions:

| Condition | Day Icon | Night Icon |
|-----------|----------|------------|
| `partlycloudy` | ✅ | ✅ |
| `cloudy` | ✅ | ✅ |
| `rainy` | ✅ | ✅ |
| `snowy` | ✅* | ✅ |
| `clear-night` | N/A | ✅ |

*Note: Some icons may use fallbacks. See "Adding Custom Icons" section.

### Adding Custom Icons

To add additional icons, you can modify the `WEATHER_ICONS` object in the source code. Icons should be named using the pattern `{condition}_{day|night}`.

**Missing icons that you may want to add:**
- `sunny_day` - Clear/sunny daytime
- `snowy_day` - Snow during daytime
- `fog_day`, `fog_night` - Foggy conditions
- `lightning_day`, `lightning_night` - Thunderstorms
- `pouring_day`, `pouring_night` - Heavy rain
- `hail_day`, `hail_night` - Hail
- `windy_day`, `windy_night` - Windy conditions

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Build the card
npm run build

# Watch for changes during development
npm run watch
```

### Project Structure

```
weather-card/
├── src/
│   └── weather-card.ts    # Main source file
├── dist/
│   └── weather-card.js    # Built output
├── icons/                  # Source SVG icons
├── package.json
├── tsconfig.json
├── rollup.config.mjs
└── README.md
```

## License

MIT License - See [LICENSE](LICENSE) for details.

## Credits

Weather icons based on the Meteocons icon set.
