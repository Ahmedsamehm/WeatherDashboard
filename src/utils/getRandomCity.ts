export function GetRandomCity(): string {
  const cities = [
    "Cairo",
    "London",
    "New York",
    "Paris",
    "Tokyo",
    "Berlin",
    "Toronto",
    "Sydney",
    "Dubai",
    "Rome",
    "Madrid",
    "Moscow",
    "Beijing",
    "Seoul",
    "Riyadh",
    "Johannesburg",
    "Buenos Aires",
    "Mexico City",
    "Istanbul",
    "Singapore",
  ];

  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
export function GetRandomWeather(): { temp: string; condition: string } {
  const conditions = ["Sunny"];

  const high = Math.floor(Math.random() * 16) + 25;
  const low = high - Math.floor(Math.random() * 8) - 2;

  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  return {
    temp: `${high}°/${low}°`,
    condition,
  };
}
