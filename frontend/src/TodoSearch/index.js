import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import search from '../assets/img/search.png'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="search_container">
        <input
          className="TodoSearch"
          placeholder="Search. . . "
          value={searchValue}
          onChange={onSearchValueChange}
        />
        <img src={search} className="searchIcon" alt='Search Icon' />
      </div>
    </React.Fragment>

  );
}

export { TodoSearch };
