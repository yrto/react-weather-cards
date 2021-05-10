import WeatherCard from "./WeatherCard";

const WeatherContainer = () => {
  //
  const cityList = [
    "sao bernardo",
    "wuhan",
    "aracariguama",
    "tokyo",
    "1239999",
    "shenzhen",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      <ul className="max-w-sm mx-auto self-center grid grid-cols-1 gap-4 flex-1 md:grid-cols-2 md:max-w-screen-md xl:grid-cols-3 xl:max-w-screen-xl">
        {cityList.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherContainer;
