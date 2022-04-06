import React from "react";
import "../../styles/selectfilter.css";
const RegionFilter = ({ filterHandler }) => {
  return (
    <select
      className="filter_select"
      onChange={(e) => filterHandler(e.target.value)}
    >
      <option value="none">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
