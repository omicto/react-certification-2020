import React, { useState } from 'react';
import { useVideoContext } from 'providers/video';
import { TextInput } from 'components/styled';

const SearchBar = () => {
  const { lastSearch, doSearch } = useVideoContext();
  const [searchValue, setSearchValue] = useState(lastSearch);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      doSearch(searchValue);
    }
  };

  return (
    <TextInput
      type="text"
      name="search"
      id="search"
      placeholder="Search..."
      value={searchValue}
      onChange={handleChange}
      onKeyUp={handleEnter}
    />
  );
};

export default SearchBar;
