import React from 'react';
import {Link, Router, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Nav from './Components/Nav';
import FindJobs from "./Components/FindJobs";
import TrackOpportunities from "./Components/TrackOpportunities";
import Home from "./Components/Home"

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

          <Route path="/track">
            <TrackOpportunities />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
