import { useState } from 'react'
import { useLazyQuery, gql } from "@apollo/client";

const QUIERY_SEARCH = gql `
  query Country($code: ID!) {
         country(code: $code) {
           name
           capital
           emoji
           code
           currency
         }
  }

`


const Search = () => {
  const [ name, setName] = useState('')
  const [ searchCountry, { data, loading, error}] = useLazyQuery(QUIERY_SEARCH, {variables: {code: searchCountry}})
  
  function handleChange(e) {
     setName(e.target.value)
  }
  return <div className='search'>
    <div className='inputs'>
      <input type='text' placeholder='E.g RU' onChange={handleChange}/>
      <button onClick={searchCountry}>Search Country</button>
     
    </div>
   
  </div>;
};

export default Search;
