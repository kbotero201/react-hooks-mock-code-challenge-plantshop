import React, {useState} from "react";

function Search({setSearch, search}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        type="text"
        id="search"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
