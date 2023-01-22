import React from 'react'
import { useLocation } from 'react-router-dom'

import "./SearchBar.css"

export default function SearchBar(props) {

  const { viewNav, setViewNav } = props
  const { searchQuery, setSearchQuery } = props
  const location = useLocation()

  return (
    <div className={location.pathname === "/" ? 'search-bar-container hidden' : 'search-bar-container scale-in-ver-top'}>

      <i className={ viewNav ? 'fa-solid fa-bars hidden' : 'fa-solid fa-bars' } onClick={() => setViewNav(true)}></i>

      <i className={ viewNav? "fa-solid fa-x" : "fa-solid fa-x hidden"} onClick={() => setViewNav(false)}></i>

      <img className="profesh-logo" id="search-bar-logo" src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" alt="proFreshLogoOppsSearch" />

      <input className='search-bar-input' name="search-bar-input" value={searchQuery} placeholder={location.pathname === "/tracker" ? 'Search Saved Opportunities (company, job title, location, etc.)' : 'Find New Jobs (by company, job title, location, etc.)' } onChange={(e) => setSearchQuery(e.target.value)} />
      
     </div>
   )
}