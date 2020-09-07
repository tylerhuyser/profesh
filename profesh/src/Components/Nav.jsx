import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  handleHover (event) {
      event.target.className = 'hidden';
      event.target.style.opacity = "0%";
  }

    handleMouseOut (event) {
      event.target.className = 'visible';
      event.target.style.opacity = "100%";
  }


  render() {
    return (
      <div className="nav">

        <nav style={{
          
          // Nav Bar Positioning
          position: "fixed", //Nav Bar position never moves
          bottom: "0", //Nav Bar is 0px away from the bottom of the page

          // Nav Bar Visual Properties
          height: "100px", // Height is 100 Pixels
          width: "100vw", // Width is 100% of the viewport
          backgroundColor: "#b0bbbf", // Sets background color to dark gray
          // opacity: "30%", // Sets the opacity
          // zIndex: "0", // Sets the Position on the Z-axis

          // Nav Bar Display Container Properties
          display: "flex", //Items will display flexbox
          alignItems: "center", //Items will be center (vertically)
          justifyContent: "space-around", //Items will distribute equal space around each element.
          

        }}>

          <Link to="/">
          <div className="homeIcon"
            onMouseOver={(event) => this.handleHover(event)}
            onMouseOut={(event) => this.handleMouseOut(event)}
            style={{

            display: "grid",
            
          }} >
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/home-charlestonGreen.png?raw=true" key="homeCharleston" alt="homeCharleston" className="visible" width="50px" height="auto" style={{

              zIndex: "2",
              gridColumn: "1",
              gridRow: "1",
              opacity: "90%",

            }} />
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/home-sage.png?raw=true" key="homeSage" alt="homeSage" className="hidden" width="50px" height="auto" style={{

              zIndex: "1",
              gridColumn: "1",
              gridRow: "1",
              opacity: "100%",

              }} />
          </div>
          </Link>

          <Link to="/tracker">
          <div className="trackerIcon"
            onMouseOver={(event) => this.handleHover(event)}
            onMouseOut={(event) => this.handleMouseOut(event)}
            style={{

              display: "grid",

              }} >
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/paper-charlestonGreen.png?raw=true" key="jobsCharleston" alt="jobsCharleston" className="visible" width="50px" height="auto" style={{

              zIndex: "2",
              gridColumn: "1",
              gridRow: "1",
              opacity: "90%",

              }}  />
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/paper-sage.png?raw=true" key="jobsSage" alt="jobsSage" className="hidden" width="50px" height="auto" style={{

              zIndex: "1",
              gridColumn: "1",
              gridRow: "1",
              opacity: "100%",

              }}  />
          </div>
          </Link>

          <Link to="/jobs">
          <div className="jobsIcon"
            onMouseOver={(event) => this.handleHover(event)}
            onMouseOut={(event) => this.handleMouseOut(event)}
            style={{

              display: "grid",

              }} >
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/bag-charlestonGreen.png?raw=true" key="trackerCharleston" alt="trackerCharleston" className="visible" width="50px" height="50px" style={{

              zIndex: "2",
              gridColumn: "1",
              gridRow: "1",
              opacity: "90%",

              }}  />
            <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/bag-sage.png?raw=true" key="trackerSage" alt="trackerSage" className="hidden" width="50px" height="50px" style={{

              zIndex: "1",
              gridColumn: "1",
              gridRow: "1",
              opacity: "100%",

              }}  />
          </div>
          </Link>
        
        </nav>

      </div>
    )
  }
}

export default Nav;