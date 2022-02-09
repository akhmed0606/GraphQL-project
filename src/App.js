import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'

function App() {
  const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: 'https://countries.trevorblades.com'
  })
  return (
    <ApolloProvider client={client}>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
