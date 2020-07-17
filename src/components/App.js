import React, { useState } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';

const App = () => {
  const [fetchData, setFetch] = useState({isFetcing: false});

  return (
    <div className="App">
      <Header />
      <SearchForm setFetch={setFetch} />
      <WeatherCard fetchData={fetchData}/>
    </div>
  );
}

export default App;
