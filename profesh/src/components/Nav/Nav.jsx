import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  render() {
    return (
      <div className="nav" id="navContainer">

        <nav className="scale-in-ver-bottom" id="nav" style={{
          // The className above enables the onLoad animation linkedin the stylesheet.

          // Nav Bar Positioning
          position: "fixed", //Nav Bar position never moves
          bottom: "0", //Nav Bar is 0px away from the bottom of the page
          left: "0",

          // Nav Bar Visual Properties
          height: "100px", // Height is 100 Pixels
          width: "100vw", // Width is 100% of the viewport
          backgroundColor: "#2c404b", // Sets background color to dark gray
          // opacity: "30%", // Sets the opacity
          zIndex: "1", // Sets the Position on the Z-axis
          boxShadow: '0px -1px 10px darkgray', //Includes shadows above the nave bar

          // Nav Bar Display Container Properties
          display: "flex", //Items will display flexbox
          alignItems: "center", //Items will be center (vertically)
          justifyContent: "space-around", //Items will distribute equal space around each element.
          

        }}>

          {/* Below creates the link for the "home" section */}
          <Link to="/">
            <div id="homeIconContainer">
            
              <i className="fas fa-home" id="homeIcon" alt="homeIcon" width="50px" height="50px" />

            </div>
          </Link>

          <Link to="/tracker">
            <div id="trackerIconContainer" >
            
            <i className="fas fa-list-alt" id="trackerIcon" alt="trackerIcon" />

            </div>
          </Link>

          <Link to="/jobs">
            <div id="jobsIconContainer" >
              
              <i className="fas fa-briefcase" id="jobsIcon" alt="jobsIcon" />
              
            </div>
          </Link>
        
        </nav>

      </div>
    )
  }
}

export default Nav;