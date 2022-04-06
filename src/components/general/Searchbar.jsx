import React from "react";
import "../../styles/searchbar.css";
const Searchbar = ({ searchHandler }) => {
  return (
    <input
      type="text"
      onChange={(e) => searchHandler(e)}
      placeholder="search here..."
      className="searchbar"
    />
  );
};

export default Searchbar;
