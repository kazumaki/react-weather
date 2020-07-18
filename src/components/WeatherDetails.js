import React from 'react';
import Temperature from './Temperature';
import styles from '../styles/WeatherDetails.module.scss';

const WeatherDetails = ({weatherData}) => (
  <div className={styles.weatherDetails}>
    <div className={styles.header}>{weatherData.name}</div>
    <div className={styles.mainContainer}>
      <div className={styles.icon}>
        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon"/>
      </div>
      <Temperature temperature={weatherData.main.temp} />
      <div className={styles.description}>
        {weatherData.weather[0].description}
      </div>
      <div className={styles.date}>
        {Date(Date.now())}
      </div>
    </div>
  </div>
)

export default WeatherDetails;