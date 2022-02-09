import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom"

const QUIERY_SEARCH = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [searchCountry, { data }] = useLazyQuery(QUIERY_SEARCH);

  function handleChange(e) {
    setName(e.target.value);
    e.target.reset()
  }
  return (
    <div className="search">
      <div className="inputs">
      <Link to="/"> List of Countries</Link>
        <input type="text" placeholder="E.g RU" onChange={handleChange} />
        <button
          onClick={() => {
            searchCountry({
              variables: { code: name.toUpperCase() },
            });
          }}
        >
          Search Country
        </button>
      </div>
      <div className="searchCountry">
        {data && (
          <div className="countryDisplay">
            <h1>
              {data.country.name} {data.country.emoji}
            </h1>
            <h1>Capital: {data.country.capital}</h1>
            <h1>Currency: {data.country.currency}</h1>
            <h1>Code: {data.country.code}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
