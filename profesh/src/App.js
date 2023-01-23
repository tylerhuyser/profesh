import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from "./components/shared/Layout"
import Home from "../src/screens/Home";
import JobsContainer from './components/containers/JobsContainer';

function App() {
  
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className='app'>
      <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
            
          <Route path="/jobs">
            <JobsContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Route>

          <Route path="/tracker">
            <JobsContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Route>
            
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
