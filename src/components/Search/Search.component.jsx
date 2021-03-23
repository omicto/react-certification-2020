import React, { useState } from 'react';
import TextInput from '../styled';

// TODO Add some Search Logic here

const SearchBar = ({ initialValue }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <TextInput
      type="text"
      name="search"
      id="search"
      placeholder="Search..."
      value={searchValue}
      onChange={handleChange}
      disabled
    />
  );
};

export default SearchBar;
