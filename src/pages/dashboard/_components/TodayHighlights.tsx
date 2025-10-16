import { Card } from "@/components/ui/card";
import { Droplets, Eye, Sun, SunriseIcon, SunsetIcon, Wind } from "lucide-react";

import type { WeatherCurrent } from "@/types";
import useAstro from "../_Hooks/useAstro";

export const TodayHighlights = ({ current }: { current: WeatherCurrent }) => {
  const hasData = (value: any) => value !== undefined && value !== null;
  const { highlightData } = useAstro();
  if (!highlightData) return;
  const { astronomy } = highlightData;
  

  return (
    <div>
      <Card className="bg-primary border-secondary p-4 size-full">
        <h3 className="text-xl font-semibold mb-1">Today's Highlights</h3>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left side - dynamic cards */}
          <div className="grow grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Wind Status */}
            {hasData(current?.wind_kph) && (
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Wind className="size-4" />
                  <span>Wind Status</span>
                </div>
                <div className="text-3xl font-bold mb-1">
                  {current.wind_kph}
                  <span className="text-base font-normal text-muted-foreground"> km/h</span>
                </div>
                <p className="text-xs text-muted-foreground">{current.wind_dir}</p>
              </div>
            )}

            {/* Humidity */}
            {hasData(current?.humidity) && (
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Droplets className="size-4" />
                  <span>Humidity</span>
                </div>
                <div className="text-3xl font-bold mb-1">
                  {current.humidity}
                  <span className="text-base font-normal text-muted-foreground">%</span>
                </div>
                <p className="text-xs text-muted-foreground">{current.humidity > 70 ? "High humidity" : "Comfortable"}</p>
              </div>
            )}

            {/* UV Index */}
            {hasData(current?.uv) && (
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Sun className="size-4" />
                  <span>UV Index</span>
                </div>
                <div className="text-3xl font-bold mb-1">
                  {current.uv}
                  <span className="text-base font-normal text-muted-foreground"> UV</span>
                </div>
                <p className="text-xs text-muted-foreground">{current.uv <= 2 ? "Low UV" : current.uv <= 5 ? "Moderate UV" : "High UV"}</p>
              </div>
            )}

            {/* Visibility */}
            {hasData(current?.vis_km) && (
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Eye className="size-4" />
                  <span>Visibility</span>
                </div>
                <div className="text-3xl font-bold mb-1">
                  {current.vis_km}
                  <span className="text-base font-normal text-muted-foreground"> km</span>
                </div>
              </div>
            )}
          </div>

          {/* Right side - Sunrise / Sunset only if data exists */}
          <div className="grow grid grid-cols-1 gap-4">
            {/* Sunrise */}
            {hasData(astronomy?.astro?.sunrise) && (
              <div className="bg-secondary p-4 rounded-lg flex items-center justify-between w-full">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <SunriseIcon className="size-4" />
                    <span>Sunrise</span>
                  </div>
                  <div className="text-2xl font-bold">{astronomy.astro.sunrise}</div>
                </div>
                <img src="/sunrise.png" alt="Sunrise" className="w-12 h-12 object-contain" />
              </div>
            )}

            {/* Sunset */}
            {hasData(astronomy?.astro?.sunset) && (
              <div className="bg-secondary p-4 rounded-lg flex items-center justify-between w-full">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <SunsetIcon className="size-4" />
                    <span>Sunset</span>
                  </div>
                  <div className="text-2xl font-bold">{astronomy.astro.sunset}</div>
                </div>
                <img src="/sunset.png" alt="Sunset" className="w-12 h-12 object-contain" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TodayHighlights;
