import { useEffect, useState } from "react";
import { fetchWeather } from "./weatherHelpers";
import { ArrowUpIcon, ArrowDownIcon } from "@primer/octicons-react";
import WeatherAQI from "./WeatherAQI";

const WeatherCard = ({ city }) => {
  //
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather(city)
      .then((data) => setWeatherData(data))
      .catch(console.log);
  }, [city]);

  const [highlight, setHighlight] = useState(false);

  return (
    <>
      {weatherData && (
        <li
          key={city}
          className={`bg-white rounded-md shadow-sm flex flex-col justify-between hover:cursor-pointer hover:shadow-md transition select-none ${
            highlight ? "opacity-100 shadow-md" : "opacity-50"
          }`}
          onClick={() => setHighlight(!highlight)}
        >
          <div className="flex flex-grow flex-shrink-0 pr-4">
            <div className="flex flex-col flex-grow p-6 justify-between">
              <div>
                <h2 className="text-xl font-medium">{weatherData.name}</h2>
                <p className="text-gray-500 font-medium">
                  {weatherData.description}
                </p>
              </div>
              <div className="flex mt-4 text-sm font-medium">
                <div className="mr-4 flex items-center">
                  <ArrowUpIcon />
                  <span className="ml-1">{weatherData.tempMax}°C</span>
                </div>
                <div className="flex items-center">
                  <ArrowDownIcon />
                  <span className="ml-1">{weatherData.tempMin}°C</span>
                </div>
              </div>
            </div>
            <div className="flex-none w-32 self-center">
              <img src={weatherData.icon} alt={weatherData.iconName} />
            </div>
          </div>
          <WeatherAQI aqi={weatherData.aqi} />
        </li>
      )}
    </>
  );
};

export default WeatherCard;
