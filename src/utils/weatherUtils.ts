import type { WeatherCurrent } from "@/types";

export function describeWeather(current: WeatherCurrent): string {
  const { condition, precip_mm, is_day, cloud, humidity, wind_kph } = current;
  const text = condition.text.toLowerCase();

  if (text.includes("rain")) {
    if (precip_mm > 10) return "🌧️ Heavy rain";
    if (precip_mm > 0) return "🌦️ Light rain";
  }

  if (text.includes("snow")) return "❄️ Snowy";
  if (text.includes("thunder")) return "⛈️ Thunderstorm";
  if (text.includes("drizzle")) return "🌦️ Drizzle";
  if (text.includes("fog") || text.includes("mist")) return "🌫️ Foggy";
  if (text.includes("overcast") || cloud > 70) return "☁️ Overcast";
  if (text.includes("cloud")) return "🌤️ Partly cloudy";

  if (text.includes("clear") || (cloud < 10 && precip_mm === 0)) {
    return is_day ? "☀️ Sunny" : "🌙 Clear night";
  }

  if (humidity > 80) return "💧 Humid";
  if (wind_kph > 30) return "💨 Windy";

  return "🌈 Mild weather";
}
