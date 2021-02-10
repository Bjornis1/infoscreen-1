import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState([]);

  function getWeather() {
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.6253064&lon=6.3903381"
    )
      .then((response) => response.json())
      .then((json) => setWeather(json.properties.timeseries))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return weather.length > 0 ? (
    <div className="weather">
      <div className="temprature-now">
        {weather.slice(0, 6).map((hour) => (
          <Hour hourWeather={hour} />
        ))}
      </div>
      <div className="next-6-hours"></div>
    </div>
  ) : (
    <div>Something went wrong with the weather!</div>
  );
}

export default Weather;

function Hour(props) {
  const hourWeather = props.hourWeather;

  console.log(hourWeather);

  return <div>{hourWeather.data.instant.details.air_temperature}</div>;
}
