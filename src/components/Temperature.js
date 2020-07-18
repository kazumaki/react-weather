import React, { useState } from 'react';
import styles from '../styles/Temperature.module.scss';

const Temperature = ({ temperature }) => {
  const [temperatureScale, setTemperatureScale] = useState('C');

  const getTemperature = () => {
    if(temperatureScale === 'F') {
      return (temperature * 9/5 + 32).toFixed(2);
    }
    return temperature;
  }

  const onClickScale = (scale) => {
    const celsius = document.getElementById('celsius');
    const fahreneit = document.getElementById('fahreneit');

    if(scale === 'C') {
      fahreneit.classList.remove(styles.selected);
      celsius.classList.add(styles.selected);
    } else {
      celsius.classList.remove(styles.selected);
      fahreneit.classList.add(styles.selected);
    }
    setTemperatureScale(scale);
  }

  return (
    <div className={styles.temperatureBox}>
      <div className={styles.temperatureValue}>{getTemperature()}</div>
      <div className={styles.scaleBox}>
        <div id='celsius' className={styles.scale} onClick={() => onClickScale('C')}>°C</div>
        <div id='fahreneit' className={styles.scale} onClick={() => onClickScale('F')}>°F</div>
      </div>
    </div>
  );
}

export default Temperature;