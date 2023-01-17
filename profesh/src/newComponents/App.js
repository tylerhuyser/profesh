import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import ".App.css"

import Layout from "./shared/Layout"

export default function App() {

const [activePage, setActivePage] = useState("home")
 
  
  return (
    <div className='app'>
      <Layout activePage={activePage}>

        <Switch>

          <Route exact path="/">
            <Home activePage={activePage} setActivePage={setActivePage} />
          </Route>

          <Route path="/jobs">
            <FindJobs activePage={"find new jobs"} setActivePage={setActivePage} />
          </Route>

          <Route path="/tracker">
            <TrackOpportunities activePage={"track jobs"} setActivePage={setActivePage} />
          </Route>

        </Switch>

      </Layout>
    </div>
  )
}