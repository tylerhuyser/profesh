import React from 'react'

export default function Footer() {
  

  return (
    <div className="footer" style={{
      
      //Footer Positioning
      position: "fixed", //Nav Bar position never moves
      bottom: "0", //Nav Bar is 0px away from the bottom of the page
      left: "0",

      // Footer Visual Properties
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
      
    </div>
  )
}