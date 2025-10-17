import DropdownMenuDialog from "@/components/DropdownMenuDialog";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { MapPin } from "lucide-react";

import { useState } from "react";
import type { WeatherCurrent, WeatherLocation } from "@/types";
import { describeWeather } from "@/utils/weatherUtils";
import { formatDate, getDayName, getWeatherIcon } from "@/utils/dateUtils";
import Loading from "@/components/Loading";

const WeatherCard = ({ location, current, loading }: { location: WeatherLocation; current: WeatherCurrent; loading: boolean }) => {
  const [unit, setUnit] = useState<"C" | "F">("C");

  const temp = unit === "C" ? current?.temp_c : current?.temp_f;
  const feelsLike = unit === "C" ? current?.feelslike_c : current?.feelslike_f;
  return (
    <div>
      <Card className="size-full bg-primary border-secondary">
        {loading ? (
          <Loading />
        ) : (
          <>
            <CardHeader>
              <CardTitle className="flex gap-3 items-center justify-center bg-accent w-fit p-1 rounded-md">
                <MapPin />
                <p className="text-center text-nowrap text-sm px-2">
                  {location?.region}, {location?.country}
                </p>
              </CardTitle>

              <CardDescription className="flex flex-col w-fit space-y-2">
                <p className="text-center text-white text-2xl">{getDayName(location.localtime)}</p>
                <span className="text-xs">{formatDate(location.localtime)}</span>
              </CardDescription>

              {/* Pass state handler to dropdown */}
              <CardAction className="bg-accent rounded-md p-1">
                <DropdownMenuDialog unit={unit} setUnit={setUnit} />
              </CardAction>
            </CardHeader>

            <CardContent className="flex items-center justify-center ">
              <div className="basis-3xl flex items-center justify-center">
                <img src={getWeatherIcon(current?.condition?.text)} alt={current?.condition?.text} className="size-30 object-cover" />
              </div>

              <div className="text-end basis-xs pr-3">
                <div className="flex flex-col text-center items-end mb-2">
                  <h1 className="text-4xl w-fit">
                    {temp}°{unit}
                  </h1>
                </div>
                <h2 className="text-lg">{describeWeather(current)}</h2>
                <p className="text-sm space-x-2">
                  Feels like
                  <span> {feelsLike}°</span>
                </p>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default WeatherCard;
