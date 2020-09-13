import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import Nav from './Components/Nav';
import FindJobs from "./Components/FindJobs";
import TrackOpportunities from "./Components/TrackOpportunities";
import Home from "./Components/Home";

function App() {
  return (

    // The Below builds the router for the Profesh App 

    <div className="App">
      
      {/* As Nav is listed outside of the "main", it will appear on every page. */}
      <Nav />
      
      <main>

        {/* The Main will switch between one of the three routes (home, jobs, or tracker) depending on user selection */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/jobs">
            <FindJobs />
          </Route>

          <Route path="/tracker">
            <TrackOpportunities />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
