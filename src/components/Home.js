import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const QUERY_LIST_OF_COUNTRIES = gql`
{countries {
  name,
  capital,
  emoji,
  currency,
  code
}
} 
`

const Home = () => {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES)
  return (
  <div className='home'>
    <div className='title'>
    <h1>List of Countries</h1>
    <Link to='/search'className='link'>Search for Country</Link>
    </div>
      <div className='listOfCountries'>
       {loading && <h3>Loading...</h3>}
       {error && <h3>{error.message}</h3>}
       {data && data.countries.map((country,id) => {
         return (
         <div key={id}> 
              <h2>{country.name}  <label>{country.emoji}</label></h2>
              <h4 className='border'>{country.capital} | {country.code}</h4>
         </div>
       )
       })}
      </div>
  </div>
  )
};

export default Home;
