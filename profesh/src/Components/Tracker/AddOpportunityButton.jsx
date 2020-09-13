import React from 'react';

// Below Function creates the floating Add Opportunity Button, which triggers the Add Opportunity Form/Menu to either hide or display.
export default function AddOpportunityButton (props) {

  return (
    <div>
      <button className="addOpportunityButton fade-in-fwd" id="addOpportunityButton" onMouseDown = { props.handleMouseDown } style={{

        //Circle Button Properties
        height: "75px", // defines height
        width: "75px", // defines width
        backgroundColor: "#F7116B", // makes circle blue
        borderRadius: "50%", //trims edges into circle shape
        boxShadow: '0px 2px 5px darkgray',

        // Button Text Properties
        color: "white", // Font Color
        fontSize: "24px", // Font Size
        fontWeight: "bold", //Font Weight

        // Button Postion Properties
        zIndex: "3", // Allows button to "float" over other elements
        position: "fixed", // Allows button to stay put, regardless of scroll
        bottom: "110px", // positions button at the bottom
        right: "25px", // positions button at the right

      }}>

        <i className="fas fa-plus" />
        
      </button>
    </div>
  )
}