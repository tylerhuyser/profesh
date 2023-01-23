import React from 'react'
import { Link } from 'react-router-dom'

import "./Navigation.css"

export default function Navigation(props) {
  
  const { viewNav, setViewNav } = props

  return (
    <div className='navigation-container'  id={viewNav ? 'desktop-nav-visible' : 'nav-hidden'}>

      <Link className="mobile-navigation" to="/">
        <i className="fas fa-home" id="home-navigation-icon" alt="home-navigation-icon" width="50px" height="50px" />
      </Link>
      
      <Link className="mobile-navigation" to="/tracker">
        <i className="fas fa-list-alt" id="tracker-navigation-icon" alt="tracker-navigation-icon" />
      </Link>

      <Link className="mobile-navigation" to="/jobs">
         <i className="fas fa-briefcase" id="jobs-navigation-icon" alt="jobs-navigation-icon" />
      </Link>


      <Link className="desktop-navigation" to="/" onMouseUp={() => setViewNav(false)}>
        Home
      </Link>
          
      <Link className="desktop-navigation" to="/tracker" onMouseUp={() => setViewNav(false)}>
        Track Opportunities
      </Link>

      <Link className="desktop-navigation" to="/jobs" onMouseUp={() => setViewNav(false)}>
        Browse Jobs
      </Link>
      
    </div>
  )
}