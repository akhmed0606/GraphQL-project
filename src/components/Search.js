import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

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
  const [searchCountry, { data, loading, error }] = useLazyQuery(
    QUIERY_SEARCH,
    { 
      variables: { code: name.toUpperCase() } 
    }
  );

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="search">
      <div className="inputs">
        <input type="text" placeholder="E.g RU" onChange={handleChange} />
        <button onClick={searchCountry}>Search Country</button>
      </div>
      <div className="searchCountry">
        {data && (
          <div className="countryDisplay">
            <h1>{data.country.name} {data.country.emoji}</h1>
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
