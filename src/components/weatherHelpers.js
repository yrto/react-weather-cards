const uppercaseFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const generateWeatherApiUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

const generateAirPollutionApiUrl = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

const fetchRawWeatherData = async (city) => {
  const response = await fetch(generateWeatherApiUrl(city));
  let rawWeatherData = await response.json();
  return rawWeatherData;
};

const fetchRawAirData = async (lat, lon) => {
  const response = await fetch(generateAirPollutionApiUrl(lat, lon));
  const rawAirData = await response.json();
  return rawAirData;
};

const formatWeatherData = (rawWeatherData, rawAirData) => ({
  name: rawWeatherData.name,
  description: uppercaseFirstLetter(rawWeatherData.weather[0].description),
  icon: `https://openweathermap.org/img/wn/${rawWeatherData.weather[0].icon}@4x.png`,
  iconName: rawWeatherData.weather[0].main,
  // temp: Math.round(rawWeatherData.main.temp),
  tempMax: Math.round(rawWeatherData.main.temp_max),
  tempMin: Math.round(rawWeatherData.main.temp_min),
  aqi: rawAirData.list[0].main.aqi === 2 ? 3 : rawAirData.list[0].main.aqi,
});

export const fetchWeather = async (city) => {
  const rawWeatherData = await fetchRawWeatherData(city);
  const rawAirData = await fetchRawAirData(
    rawWeatherData.coord.lat,
    rawWeatherData.coord.lon
  );
  const cleanData = formatWeatherData(rawWeatherData, rawAirData);
  //
  // console.log(cleanData);
  //
  return cleanData;
};
