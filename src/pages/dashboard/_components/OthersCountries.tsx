import { Card, CardContent, CardHeader } from "@/components/ui/card";

import useRandomCountries from "../_Hooks/useRandomCountries";

import { getWeatherIcon } from "@/utils/dateUtils";
import { GetRandomWeather } from "@/utils/getRandomCity";
import Loading from "@/components/Loading";

const OthersCountries = () => {
  const { countries, error, loading } = useRandomCountries();
  const { condition, temp } = GetRandomWeather();

  if (!countries || countries.length === 0) return null;

  const randomCountries = [...countries].sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div>
      <Card className="bg-primary border-secondary p-4 size-full max-h-[50vh] ">
        {loading ? (
          <Loading />
        ) : (
          <>
            <CardHeader className="px-2">
              <h3 className="text-xl font-semibold mb-1">Other Countries</h3>
            </CardHeader>

            {randomCountries.map((city: any) => (
              <CardContent key={city.id} className="px-2 mt-4">
                <div className="grid grid-cols-3 px-3 gap-4 items-center bg-secondary rounded-md mx-auto">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mx-auto font-semibold capitalize">
                    <span>{city.country}</span>
                    <span className="text-white text-xl lg:text-2xl">{city.name}</span>
                    <span className="text-white">Sunny</span>
                  </div>
                  <div className="mx-auto">
                    <img src={getWeatherIcon(condition)} alt={condition} className="size-32 object-cover" />
                  </div>
                  <div className="mx-auto font-semibold capitalize">
                    <span>{temp} </span>
                  </div>
                </div>
              </CardContent>
            ))}
          </>
        )}
      </Card>
    </div>
  );
};

export default OthersCountries;
