import Header from "./_components/Header";
import WeatherCard from "./_components/WeatherCard";

import TodayHighlights from "./_components/TodayHighlights";
import OthersCountries from "./_components/OthersCountries";
import Forecast from "./_components/Forecast";
import { useCurrentLocation } from "./_Hooks/useCurrentLocation";

const Dashboard = () => {
  const { dataLocation, loading, error } = useCurrentLocation();
  if (!dataLocation) return loading ? <p>Loading...</p> : <p>{error}</p>;
  const { location, current } = dataLocation;

  return (
    <div className="container mx-auto p-5 max-w-7xl">
      <div className="mx-auto space-y-3 mt-3 ">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <WeatherCard location={location} current={current} />
          {/* Current Weather Card */}

          <TodayHighlights current={current} />
          <OthersCountries location={location} current={current} />
          <Forecast location={location} current={current} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
