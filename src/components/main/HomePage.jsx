import React, { useState } from "react";
import Header from "../general/Header";
import data from "../../data/countriesAll.json";
import Countries from "../general/Countries";

const HomePage = () => {
  const [countries, setCountries] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const filterHandler = (value) => {
    if (value === "none") {
      setCountries(data);
    } else {
      const newArr = data.filter(
        (item) =>
          item["region"] === value &&
          item.name.common.toLowerCase().includes(searchValue)
      );
      setCountries(newArr);
    }
  };
  const searchHandler = (e) => {
    const arr = data.filter((item) => {
      if (item.name && item.capital) {
        return (
          item.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.capital
            .join(" , ")
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      } else {
        return null;
      }
    });
    setCountries(arr);
    setSearchValue(e.target.value);
  };
  return (
    <>
      <Header
        filterHandler={filterHandler}
        searchHandler={searchHandler}
      ></Header>
      <Countries countries={countries}></Countries>
    </>
  );
};

export default HomePage;
