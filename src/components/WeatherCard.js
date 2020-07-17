import React from 'react';
import Temperature from './Temperature';
import WeatherDetails from './WeatherDetails';

const WeatherCard = ({ fetchData }) => {
  console.log(fetchData);
  return (
    <div>
      {fetchData.isFetching && <div>...</div>}
      {fetchData.status === 200 && <WeatherDetails weatherData={fetchData.data} />}
      {fetchData.status === 400 && <div>Invalid City Name</div>}
      {fetchData.status === 404 && <div>This city doesn't exist</div>}
    </div>
  );
}

export default WeatherCard;