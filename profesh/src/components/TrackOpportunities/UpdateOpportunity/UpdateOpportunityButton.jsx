import React from 'react';

import toggleMenu from '../../../functions/toggleMenu';

export default function UpdateOpportunityButton(props) {

  const { updateVisibility, setUpdateVisibility} = props

  return(

    <button className="updateOpportunityButton" id="updateOpportunityButton" onMouseDown={(e) => toggleMenu(updateVisibility, setUpdateVisibility)} style={{
      
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