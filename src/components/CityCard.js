import React, { useState } from 'react';
import Temperature from './Temperature';

const CityCard = ({ weatherInfo }) => (
  <div>
    <div>{weatherInfo.cityName}</div>
    <div>
      <div>{weatherInfo.icon}</div>
      <Temperature temperature={30} />
    </div>
  </div>
)
export default CityCard;