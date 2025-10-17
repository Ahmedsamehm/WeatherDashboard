import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Separator } from "@radix-ui/react-dropdown-menu";

import type { ForecastResponse } from "@/types";

const Forecast = ({ forecast }: { forecast: ForecastResponse }) => {
  return (
    <div>
      <Card className="bg-primary border-secondary p-4 size-full  max-h-[50vh]">
        <CardHeader className="px-2">
          <h3 className="text-xl font-semibold mb-1">3 Day Forecast</h3>
        </CardHeader>
        <CardContent className="px-2 ">
          <ul className="flex flex-wrap gap-4 mx-auto text-sm text-muted-foreground font-semibold capitalize">
            {forecast?.forecastday?.map((day, index) => (
              <li key={index} className="grow">
                <div className="flex flex-col bg-secondary items-center justify-center rounded-xl p-4 w-full min-w-[120px]">
                  <h1 className="text-center text-white mb-2">{index === 0 ? "Today" : new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</h1>
                  <Separator className="bg-white w-12 h-0.5 rounded-md mb-2" />
                  <img src={day.day.condition.icon} alt={day.day.condition.text} loading="lazy" className="size-24 object-cover mb-2" />
                  <span className="text-center text-white text-lg font-bold">{Math.round(day.day.avgtemp_c)}°C</span>
                  <span className="text-xs text-muted-foreground mt-1">{day.day.condition.text}</span>
                  <div className="flex gap-2 mt-2 text-xs">
                    <span className="text-blue-400">↓{Math.round(day.day.mintemp_c)}°</span>
                    <span className="text-red-400">↑{Math.round(day.day.maxtemp_c)}°</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecast;
