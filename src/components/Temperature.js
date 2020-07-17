import React, { useState } from 'react';

const Temperature = ({ temperature }) => {
  const [temperatureScale, setTemperatureScale] = useState('C');

  const getTemperature = () => {
    if(temperatureScale === 'F') {
      return temperature * 9/5 + 32;
    }
    return temperature;
  }

  const onClickScale = (scale) => {
    console.log(temperatureScale);
    setTemperatureScale(scale);
  }

  return (
    <div>
      <div>{getTemperature()}</div>
      <div>
        <div onClick={() => onClickScale('C')}>°C</div>
        <div onClick={() => onClickScale('F')}>°F</div>
      </div>
    </div>
  );
}

export default Temperature;