import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SnowboardList from './Components/SnowboardList';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import ManufacturerHeader from './Components/ManufacturerHeader'
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

  const [snowboards, setSnowboards] = useState([]);
  const [queryArguments, setQueryArguments] = useState({});

  const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_URI,
    cache: new InMemoryCache()
  });

  const fetchSnowboards = () => {
    client.query({
      query: queries.GET_SNOWBOARDS,
      variables: queryArguments
    })
    .then(response => { 
      console.log(response);
      setSnowboards(response.data.snowboards);
    })
    .catch(e => { console.log(e)})
  }

  const fetchManufacturer = async (name) => {
    const data = client.query({
      query: queries.GET_MANUFACTURER,
      variables: { name }
    })
    .catch(e => { console.log(e)})
    return data;
  }

  useEffect(() => {
    if(queryArguments.type || queryArguments.manufacturer) fetchSnowboards();
  }, [queryArguments])

  return (
    <div className="App">
      <ApolloProvider client={client}>
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
                  <React.Fragment>
                    <ManufacturerHeader fetchManufacturer={fetchManufacturer} />
                    <SnowboardList snowboards={snowboards} />
                  </React.Fragment>
                } />

                <Route path="/type/:type" children={
                  <SnowboardList snowboards={snowboards} />
                } />
                
              </Switch>

            </main>

            </Router>

          </QueryArgumentContext.Provider>
        </SnowboardContext.Provider>
      </ApolloProvider>
    </div>
    
  );
}

export default App;
