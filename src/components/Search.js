import React from "react";

function Search({searchByName, setSearchByName}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchByName}
        onChange={(e) => {setSearchByName(e.target.value)}}
      />
    </div>
  );
}

export default Search;
