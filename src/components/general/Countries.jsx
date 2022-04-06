import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <article className="countries">
      {countries.map((item, index) => {
        return <Country key={index} country={item}></Country>;
      })}
    </article>
  );
};

export default Countries;
