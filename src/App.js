import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import SnowboardList from './Components/SnowboardList';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import ManufacturerHeader from './Components/ManufacturerHeader'
import SnowboardShowcase from './Components/SnowboardShowcase'
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

  const { data } = useQuery(
    queries.GET_SNOWBOARDS, {
    variables: queryArguments
  })

  useEffect(() => {
    if((queryArguments.type || queryArguments.manufacturer) && data) {
      setSnowboards(data.snowboards)
    }
  }, [data, queryArguments])

  return (
    <div className="App">
      <SnowboardContext.Provider value={{ snowboards, setSnowboards }}>
        <QueryArgumentContext.Provider value={{ queryArguments, setQueryArguments }}>

        <Router>

          <Navigation />
              
            <Switch>

              <Route exact path="/">
                <div className='layout layout--100pct'>
                  <Landing />
                </div>
              </Route>

              <Route path="/manufacturer/:manufacturer" children={
                <div className='layout layout--90pct'>
                  <ManufacturerHeader />
                  <SnowboardList snowboards={snowboards} />
                </div>
              } />

              <Route path="/type/:type" children={
                <div className='layout layout--90pct'>
                  <div className='header__type'>{ queryArguments.type } Snowboards</div>
                  <SnowboardList snowboards={snowboards} />
                </div>
              } />

              <Route path="/snowboard/:name" children={
                <SnowboardShowcase />
              } />
              
            </Switch>

          </Router>

        </QueryArgumentContext.Provider>
      </SnowboardContext.Provider>
    </div>
    
  );
}

export default App;
