import WeatherCard from "./WeatherCard";
import WeatherHeader from "./WeatherHeader";

const WeatherContainer = () => {
  //
  const cityList = [
    "sao bernardo",
    "wuhan",
    "aracariguama",
    "tokyo",
    "sao paulo",
    "shenzhen",
  ];

  return (
    <div className="p-6">
      <WeatherHeader />
      <ul className="max-w-sm mx-auto grid grid-cols-1 gap-6 flex-1 md:grid-cols-2 md:max-w-screen-md xl:grid-cols-3 xl:max-w-screen-xl">
        {cityList.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherContainer;
