import React, { useState } from 'react';

const SearchForm = () => {
  const [cityName, setCityName] = useState("");

  const handleOnChange = event => setCityName(event.target.value);

  return (
    <form>
      <input type="text" name="cityName" value={cityName} onChange={handleOnChange} />
      <input type="submit" />
    </form>
  )
};

export default SearchForm;