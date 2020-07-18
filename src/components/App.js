import React, { useState } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';
import styles from '../styles/App.module.scss';

const App = () => {
  const [fetchData, setFetch] = useState({isFetcing: false});

  return (
    <div className="App">
      <Header />
      <div className={styles.mainContainer}>
        <SearchForm setFetch={setFetch} />
        <WeatherCard fetchData={fetchData}/>
      </div>
    </div>
  );
}

export default App;
