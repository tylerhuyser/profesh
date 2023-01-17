import React from 'react';
import { useEffect } from 'react';

import "./Home.css"

export default function Home(props) {

  const {activePage, setActivePage} = props

  useEffect(() => {
    if (activePage !== "home") {
      setActivePage("home")
    }
  }, [])

  return (
    <div className="home-container">
      <div className="fade-in-fwd home-title-container">

        <p className='home-copy' id="home-title">Welcome to</p>
        
        <img className="profesh-logo" id="home-logo" src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" alt="proFreshLogoHome" />

        <p className='home-copy' id="home-subtitle">Make the Most of Every Opportunity</p>
        
      </div>
    </div>
  )

}