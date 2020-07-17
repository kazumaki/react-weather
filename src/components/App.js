import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import CityCard from './CityCard';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <CityCard weatherInfo={{ cityName: 'Pitangui', temperature: 30 }}/>
    </div>
  );
}

export default App;
