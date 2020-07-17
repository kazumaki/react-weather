import React, { useState } from 'react';
import config from '../config';
import Axios from 'axios';

const SearchForm = ({setCurrentCity, setFetch}) => {
  const [cityName, setCityName] = useState("");

  const handleOnChange = event => setCityName(event.target.value);

  const fetchWeatherData = (event) => {
    event.preventDefault();
    setFetch({isFetching: true});
    const options = {
      url: `${config.WEATHER_API_URL}${cityName}&appid=${config.WEATHER_API_KEY}`,
      method: 'GET',
    }

    Axios(options).then(response => {
      setFetch({isFetching: false, status: response.status, data: response.data});
    }).catch(error => {
      setFetch({isFetching: false, status: error.response.status});
    });
  } 

  return (
    <form onSubmit={fetchWeatherData}>
      <input type="text" name="cityName" value={cityName} onChange={handleOnChange} />
      <input type="submit"  />
    </form>
  )
};

export default SearchForm;