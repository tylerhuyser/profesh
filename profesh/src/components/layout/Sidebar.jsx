import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
     
    <div className="sidebar-container" style={{

      zIndex: "5",

    }}>

      <nav className="scale-in-hor-left" id="sidebar" style={{
          // The className above enables the onLoad animation linkedin the stylesheet.
        
          position: "fixed", //Nav Bar position never moves
          bottom: "0", //Nav Bar is 0px away from the bottom of the page
          left: "0",

          // Nav Bar Visual Properties
          height: "100vh", // Height is 100 Pixels
          width: "20vw", // Width is 100% of the viewport
          backgroundColor: "#F7116B", // Sets background color to dark gray
          // opacity: "30%", // Sets the opacity
          zIndex: "2", // Sets the Position on the Z-axis

          // Nav Bar Display Container Properties
          display: "flex", //Items will display flexbox
          flexDirection: "column",
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