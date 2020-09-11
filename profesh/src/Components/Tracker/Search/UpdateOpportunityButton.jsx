import React from 'react';


export default function UpdateOpportunityButton(props) {

  return(

    <button className="updateOpportunityButton" id="updateOpportunityButton" onMouseDown={(e) => props.handleEdit(e) }> Edit </button>
  )
}