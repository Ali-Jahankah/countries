import React from "react";
import "../../styles/header.css";
import RegionFilter from "./RegionFilter";
import Searchbar from "./Searchbar";
const Header = ({ filterHandler, searchHandler }) => {
  return (
    <>
      <h1 className="header_title">Countries</h1>
      <Searchbar
        filterHandler={filterHandler}
        searchHandler={searchHandler}
      ></Searchbar>
      <RegionFilter filterHandler={filterHandler}></RegionFilter>
    </>
  );
};

export default Header;
