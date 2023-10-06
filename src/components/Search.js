import React from "react";

function Search({setQuery, query}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => setQuery(event.target.value)} value={query} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
