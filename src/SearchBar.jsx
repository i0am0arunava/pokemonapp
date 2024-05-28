// src/SearchBar.js

import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
   
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleInputChange}
      />
    </div>
   
  );
};

export default SearchBar;
