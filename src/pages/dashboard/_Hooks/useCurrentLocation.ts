import { useState, useEffect } from "react";
import axios from "axios";
import { weatherConfig } from "@/config/apiConfig";
import type { WeatherCurrent, WeatherLocation } from "@/types";

export function useCurrentLocation() {
  const [dataLocation, setDataLocation] = useState<{ location: WeatherLocation; current: WeatherCurrent } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const { data } = await axios.get(`${weatherConfig.baseUrl}/current.json?key=${weatherConfig.apiKey}&q=${latitude},${longitude}&aqi=no`);

          setDataLocation(data);
        } catch (err) {
          setError("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setError("Failed to get location: " + error.message);
        setLoading(false);
      }
    );
  }, [loading]);

  return { dataLocation, loading, error };
}
