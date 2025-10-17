import Header from "./_components/Header";
import WeatherCard from "./_components/WeatherCard";
import TodayHighlights from "./_components/TodayHighlights";
import OthersCountries from "./_components/OthersCountries";
import Forecast from "./_components/Forecast";
import useForecast from "./_Hooks/useForecast";
import Loading from "@/components/Loading";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useForecast(searchQuery);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!data) return <p className="text-center mt-10">No data available</p>;

  const { location, current, forecast } = data;

  return (
    <div className="container mx-auto p-5 max-w-7xl">
      <div className="mx-auto space-y-3 mt-3">
        <Header setSearchQuery={setSearchQuery} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <WeatherCard location={location} current={current} loading={loading} />

          <TodayHighlights current={current} />

          <OthersCountries />

          <Forecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
