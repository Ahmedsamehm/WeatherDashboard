import { weatherConfig } from "@/config/apiConfig";
import type { WeatherAstronomy, WeatherLocation } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";

const useAstro = () => {
  const [highlightData, setHighlightData] = useState<{ location: WeatherLocation; astronomy: WeatherAstronomy } | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLoading(true);
        setError(null);
        setHighlightData(null);

        const { latitude, longitude } = position.coords;

        try {
          const { data } = await axios.get(`${weatherConfig.baseUrl}/astronomy.json?key=${weatherConfig.apiKey}&q=${latitude},${longitude}&aqi=no`);

          setHighlightData(data);
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
  }, []);
  return { highlightData, loading, error };
};

export default useAstro;
