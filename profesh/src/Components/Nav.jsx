import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  // handleHover (event) {
  //     event.target.className = 'hidden';
  //     event.target.style.opacity = "0%";
  // }

  //   handleMouseOut (event) {
  //     event.target.className = 'visible';
  //     event.target.style.opacity = "100%";
  // }


  render() {
    return (
      <div className="nav">

        <nav className="scale-in-ver-bottom" style={{
          
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

          // Nav Bar Display Container Properties
          display: "flex", //Items will display flexbox
          alignItems: "center", //Items will be center (vertically)
          justifyContent: "space-around", //Items will distribute equal space around each element.
          
          boxShadow: '0px -1px 10px darkgray',

        }}>

          <Link to="/">
          <div className="homeIcon"
            // onMouseOver={(event) => this.handleHover(event)}
            // onMouseOut={(event) => this.handleMouseOut(event)}
            style={{

            display: "grid",
            
              }} >
              
              {<i className="fas fa-home" alt="homeIcon" width="50px" height="50px" style={{

                zIndex: "3",
                gridColumn: "1",
                gridRow: "1",
                opacity: "100%",
                color: "white",

              }} />}
          </div>
          </Link>

          <Link to="/tracker">
          <div className="trackerIcon"
            // onMouseOver={(event) => this.handleHover(event)}
            // onMouseOut={(event) => this.handleMouseOut(event)}
            style={{

              display: "grid",

              }} >
            
            <i className="fas fa-list-alt"></i>

          </div>
          </Link>

          <Link to="/jobs">
          <div className="jobsIcon"
            // onMouseOver={(event) => this.handleHover(event)}
            // onMouseOut={(event) => this.handleMouseOut(event)}
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