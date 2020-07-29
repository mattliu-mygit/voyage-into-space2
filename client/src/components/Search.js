import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Search = () => {
  return (
    <div className="search">
      <h2 style={{ color: 'white', margin: '1rem', marginLeft: '2rem' }}>
        How can we help?
      </h2>
      <SearchBar />
      <SearchList />
    </div>
  );
};

export default Search;
