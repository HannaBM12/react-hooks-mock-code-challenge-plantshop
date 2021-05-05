
import React from "react";

function Search({searchItem, setSearchItem}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
}

export default Search;
