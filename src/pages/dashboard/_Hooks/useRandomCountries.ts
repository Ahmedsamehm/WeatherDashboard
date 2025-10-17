import { weatherConfig } from "@/config/apiConfig";
import { GetRandomCity } from "@/utils/getRandomCity";
import axios from "axios";
import { useEffect, useState } from "react";

const useRandomCountries = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${weatherConfig.baseUrl}/search.json?key=${weatherConfig.apiKey}&q=${GetRandomCity()}`);
        setCountries(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to fetch countries";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useRandomCountries;
