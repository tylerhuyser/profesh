import React, { Component } from 'react';

class Nav extends Component {
  
  render() {
    return (
      <div className="nav">

        <nav>

          <div className="homeIcon">
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/home-charlestonGreen.png" key="home" className="visible" />
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/home-sage.png" key="home" className="hidden" />
          </div>

          <div className="jobsIcon">
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/bag-charlestonGreen.png" key="jobs" className="visible" />
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/bag-sage.png" key="jobs" className="hidden" />
          </div>

          <div className="trackerIcon">
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/paper-charlestonGreen.png" key="tracker" className="visible" />
            <img src="/Users/tylerhuyser/General_Assembly/Unit_2/Week_5/Friday/homework/profesh/profesh/Icons/paper-sage.png" key="tracker" className="hidden" />
          </div>
        
        </nav>

      </div>
    )
  }
}

export default Nav;