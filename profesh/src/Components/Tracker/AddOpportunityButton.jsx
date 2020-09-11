import React from 'react';
// import axios from 'axios';

export default function AddOpportunityButton (props) {

  return (
    <div>
      <button className="addOpportunityButton fade-in-fwd" id="addOpportunityButton" onMouseDown = { props.handleMouseDown } style={{

        //Circle Button Properties
        height: "75px", // defines height
        width: "75px", // defines width
        backgroundColor: "#F7116B", // makes circle blue
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

        boxShadow: '0px 2px 5px darkgray',

      }}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
}