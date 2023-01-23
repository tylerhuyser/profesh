import React from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import "./SearchBar.css"

export default function SearchBar(props) {

  const { viewNav, setViewNav } = props
  const { searchQuery, setSearchQuery } = props
  const location = useLocation()

  return (
    <div className={location.pathname === "/" ? 'search-bar-container hidden' : 'search-bar-container scale-in-ver-top'}>

      <FontAwesomeIcon icon={faBars} className={ viewNav ? 'fa-solid fa-bars hidden-icon' : 'fa-solid fa-bars' } onClick={() => setViewNav(true)} />

      <FontAwesomeIcon icon={faXmark} className={ viewNav? "fa-solid fa-xmark" : "fa-solid fa-xmark hidden-icon"} onClick={() => setViewNav(false)} />

      <img className="profesh-logo" id="search-bar-logo" src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" alt="proFreshLogoOppsSearch" />

      <input className='search-bar-input' name="search-bar-input" value={searchQuery} placeholder={location.pathname === "/tracker" ? 'Search Saved Opportunities (company, job title, location, etc.)' : 'Find New Jobs (by company, job title, location, etc.)' } onChange={(e) => setSearchQuery(e.target.value)} />
      
     </div>
   )
}