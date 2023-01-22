import React from 'react'
import { Link } from 'react-router-dom'

import "./Navigation.css"

export default function Navigation() {
  
  return (
    <div className='navigation-container'>

      <Link className="mobile-navigation" to="/">
        <i className="fas fa-home" id="home-navigation-icon" alt="home-navigation-icon" width="50px" height="50px" />
      </Link>
      
      <Link className="mobile-navigation" to="/tracker">
        <i className="fas fa-list-alt" id="tracker-navigation-icon" alt="tracker-navigation-icon" />
      </Link>

      <Link className="mobile-navigation" to="/jobs">
         <i className="fas fa-briefcase" id="jobs-navigation-icon" alt="jobs-navigation-icon" />
      </Link>

      <Link className="desktop-navigation" to="/">
        Home
      </Link>
      
      <Link className="desktop-navigation" to="/tracker">
        Track Opportunities
      </Link>

      <Link className="desktop-navigation" to="/jobs">
         Browse Jobs
      </Link>

    </div>
  )
}