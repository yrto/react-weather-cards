const WeatherAQI = ({ aqi }) => {
  //
  return (
    <>
      {aqi === 3 && (
        <div className="p-2 text-sm text-center bg-gray-300 text-gray-600 font-medium rounded-b-md">
          Qualidade do ar ruim 😕
        </div>
      )}
      {aqi === 4 && (
        <div className="p-2 text-sm text-center bg-yellow-200 text-yellow-700 font-medium rounded-b-md">
          Qualidade do ar bem ruim 😰
        </div>
      )}
      {aqi === 5 && (
        <div className="p-2 text-sm text-center bg-orange-200 text-orange-700 font-medium rounded-b-md">
          Qualidade do ar horrível 💀
        </div>
      )}
    </>
  );
};

export default WeatherAQI;
