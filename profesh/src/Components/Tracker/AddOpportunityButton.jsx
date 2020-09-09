import React from 'react';
// import axios from 'axios';

export default function AddOpportunityButton (props) {

  return (
    <div>
      <button className="addOpportunityButton" id="addOpportunityButton" onMouseDown = { props.handleMouseDown } style={{

        //Circle Button Properties
        height: "75px", // defines height
        width: "75px", // defines width
        backgroundColor: "blue", // makes circle blue
        borderRadius: "50%", //trims edges into circle shape

        // Button Text Properties
        color: "white", // Font Color
        fontSize: "24px", // Font Size
        fontWeight: "bold", //Font Weight

        // Button Postion Properties
        zIndex: "3",
        position: "fixed",
        bottom: "110px",
        right: "25px",

      }}>
        +
      </button>
    </div>
  )
}