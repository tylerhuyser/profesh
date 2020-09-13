import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  render() {
    return (
      <div className="nav">

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
          <div className="homeIcon" style={{

            display: "grid",
            
              }} >
              
              {<i className="fas fa-home" alt="homeIcon" width="50px" height="50px" style={{

                
                zIndex: "3", //The icon will rest ontop the nav background
                gridColumn: "1", // Centers icon
                gridRow: "1",  // Centers icon
                opacity: "100%", //The Icon will appear with 100% opacity
                color: "white", //The Icon will be white

              }} />}
          </div>
          </Link>

          <Link to="/tracker">
          <div className="trackerIcon"
            style={{

              display: "grid",

              }} >
            
            <i className="fas fa-list-alt"></i>

          </div>
          </Link>

          <Link to="/jobs">
          <div className="jobsIcon"
            style={{

              display: "grid",

              }} >
              
              <i className="fas fa-briefcase"></i>
              
            </div>
          </Link>
        
        </nav>

      </div>
    )
  }
}

export default Nav;