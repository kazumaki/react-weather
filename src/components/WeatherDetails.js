import React from 'react';
import Temperature from './Temperature';

const WeatherDetails = ({weatherData}) => (
  <div>
    <div>{weatherData.cityName}</div>
    <div>
      <div>{weatherData.icon}</div>
      <Temperature temperature={weatherData.main.temp} />
    </div>
  </div>
)

export default WeatherDetails;