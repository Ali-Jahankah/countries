import React from "react";
import "../../styles/country.css";
const Country = ({ country }) => {
  return (
    <section className="country_section">
      <div className="flag_div">
        <img
          src={country.flags ? country.flags.svg : ""}
          alt={country.name + "flag"}
        />
      </div>

      <h1 className="country_name">{country.name.common}</h1>
      <h5 className="country_pop">
        <span className="country_titles">population: </span>
        {country.population ? country.population : " "}
      </h5>
      <h5 className="country_region">
        <span className="country_titles">region: </span>{" "}
        {country.region ? country.region : " "}
      </h5>
      <h5 className="country_capital">
        <span className="country_titles">capital: </span>{" "}
        {country.capital ? country.capital[0] : ""}
      </h5>
    </section>
  );
};

export default Country;
