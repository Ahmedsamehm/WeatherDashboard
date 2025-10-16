import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { WeatherCurrent, WeatherLocation } from "@/types";

const OthersCountries = ({ location, current }: { location: WeatherLocation; current: WeatherCurrent }) => {
  return (
    <div className="">
      <Card className="bg-primary border-secondary p-4 size-full   ">
        <CardHeader className="px-2">
          <h3 className="text-xl font-semibold mb-1">Other Countries</h3>
        </CardHeader>
        <CardContent className="px-2">
          <div className="grid grid-cols-3 px-3 gap-4 items-center bg-secondary rounded-md mx-auto">
            <div className="flex flex-col  gap-2 text-sm text-muted-foreground  mx-auto font-semibold capitalize">
              <span>Australia</span>
              <span className="text-white text-xl lg:text-2xl ">Canberra</span>
              <span className="text-white">Sunny</span>
            </div>
            <div className=" mx-auto ">
              <img src="/cloud.png" alt="cloud" className="size-32 object-cover " />
            </div>
            <div className="mx-auto font-semibold capitalize">
              <span>
                32°/<span className="text-sm text-muted-foreground">24°</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OthersCountries;
