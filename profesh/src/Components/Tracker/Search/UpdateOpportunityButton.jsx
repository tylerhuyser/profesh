import React from 'react';


export default function AddOpportunityButton(props) {

  return(

    <button className="updateOpportunityButton" id="updateOpportunityButton" onMouseDown={(e) => props.handleEdit(e) }> Edit </button>
  )
}