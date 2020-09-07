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
    <div className="App">
      
      <Nav />
      
      <main>
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
