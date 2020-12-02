import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SnowboardList from './Components/SnowboardList';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import queries from './Resources/Queries'


export const SnowboardContext = React.createContext(null);

export const QueryArgumentContext = React.createContext(null);

const App = () => {

  const [snowboards, setSnowboards] = useState([])
  const [queryArguments, setQueryArguments] = useState({});

  const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URI,
    cache: new InMemoryCache()
  });

  useEffect(() => {
    client.query({
      query: queries.GET_SNOWBOARDS,
      variables: queryArguments
    })
    .then(response => { 
      console.log(response);
      setSnowboards(response.data.snowboards);
    })
    .catch(e => { console.log(e)})
  }, [queryArguments])

  return (
    <div className="App">
      <SnowboardContext.Provider value={{ snowboards, setSnowboards }}>
        <QueryArgumentContext.Provider value={{ queryArguments, setQueryArguments }}>

        <Router>

          <Navigation />

            <main>
                
              <Switch>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route path="/manufacturer/:manufacturer" children={
                  <SnowboardList snowboards={snowboards} />
                } />
                <Route path="/type/:type" children={
                  <SnowboardList snowboards={snowboards} />
                } />
              </Switch>
              
            </main>

          </Router>

        </QueryArgumentContext.Provider>
      </SnowboardContext.Provider>
    </div>
    
  );
}

export default App;
