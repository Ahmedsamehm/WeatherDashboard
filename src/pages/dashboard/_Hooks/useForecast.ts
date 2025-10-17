import { weatherConfig } from "@/config/apiConfig";
import type { ForecastResponse, WeatherCurrent, WeatherLocation } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

interface ForecastResponseTypes {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: ForecastResponse;
}

const useForecast = (searchQuery: string = "") => {
  const [data, setData] = useState<ForecastResponseTypes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = searchQuery.trim();

        // If no search query, use geolocation
        if (!query) {
          if (!navigator.geolocation) {
            setError("Geolocation not supported");
            setLoading(false);
            return;
          }

          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const { latitude, longitude } = position.coords;
          query = `${latitude},${longitude}`;
        }

        const { data: response } = await axios.get(`${weatherConfig.baseUrl}/forecast.json?key=${weatherConfig.apiKey}&q=${query}&days=3&aqi=no&alerts=no`);

        setData(response);
        console.log("Forecast data:", response);
      } catch (err: any) {
        const message = err.response?.data?.error?.message || err.message || "Failed to fetch forecast";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [searchQuery]);

  return { data, loading, error };
};

export default useForecast;
