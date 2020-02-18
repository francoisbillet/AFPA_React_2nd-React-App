import React, { useState } from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <React.Fragment>
      <input
        type="text"
        id="search"
        placeholder="rechercher"
        onChange={event => {
          {
            setSearch(event.target.value);
          }
        }}
      />
    </React.Fragment>
  );
};

export default SearchBar;
