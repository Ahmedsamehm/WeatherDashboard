export interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

// condition type (nested inside current)
export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

// current weather type
export interface WeatherCurrent {
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    code: number;
  };
  wind_kph: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  vis_km: number;
  uv: number;
  temp_f: number;
  feelslike_f: number;
  wind_dir: string;

}

export interface WeatherResponse {
  location: WeatherLocation;
  current: WeatherCurrent;
}
export interface WeatherAstronomy {
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
    is_moon_up: number;
    is_sun_up: number;
  };
}
