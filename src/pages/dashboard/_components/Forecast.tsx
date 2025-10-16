import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { WeatherCurrent, WeatherLocation } from "@/types";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Forecast = ({ location, current }: { location: WeatherLocation; current: WeatherCurrent }) => {
  return (
    <div>
      <Card className="bg-primary border-secondary p-4 size-full ">
        <CardHeader className="px-2">
          <h3 className="text-xl font-semibold mb-1">Other Countries</h3>
        </CardHeader>
        <CardContent className="px-2 ">
          <ul className="flex  gap-2 mx-auto text-sm text-muted-foreground font-semibold capitalize ">
            <li className="grow">
              <div className="flex flex-col bg-secondary items-center justify-center  rounded-xl p-2 w-fit">
                <h1 className="text-center text-white">today</h1>
                <Separator className=" bg-white w-12 h-0.5 rounded-md mt-1" />
                <img src="/cloud.png" alt="cloud" className="size-32 object-cover " />
                <span className="text-center text-white">28°C</span>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecast;
