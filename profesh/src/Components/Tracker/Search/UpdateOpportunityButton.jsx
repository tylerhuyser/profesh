import React from 'react';


export default function UpdateOpportunityButton(props) {

  return(

    <button className="updateOpportunityButton" id="updateOpportunityButton" onMouseDown={(e) => props.handleEdit(e) } style={{
      
      width: "100px",
      textAlign: "center",
      border: "5px solid #F7116B",
      borderRadius: "18px",
      background: "white",
      color: "#F7116B",
      padding: "10px",

      }} > Edit </button>
  )
}