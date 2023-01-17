import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from "./newComponents/shared/Layout"
import Home from "../src/screens/Home";
import FindJobs from "../src/screens/FindJobs";
import TrackOpportunities from "../src/screens/TrackOpportunities";

function App() {
  
  const [activePage, setActivePage] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className='app'>
      <Layout activePage={activePage}>

        <Switch>

          <Route exact path="/">
            <Home activePage={activePage} setActivePage={setActivePage} />
          </Route>

          <Route path="/jobs">
            <FindJobs activePage={"find new jobs"} setActivePage={setActivePage} searchQuery={searchQuery} />
          </Route>

          <Route path="/tracker">
            <TrackOpportunities activePage={"job tracker"} setActivePage={setActivePage} searchQuery={searchQuery} />
          </Route>

        </Switch>

      </Layout>
    </div>
  );
}

export default App;
