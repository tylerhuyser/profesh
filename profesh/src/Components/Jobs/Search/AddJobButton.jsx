import React from 'react';

export default function AddJobButton(props) {
  
  return (
    <button className="addJobButton" id="addJobButton" onMouseDown={(e) => props.handleAddJob(e)}> Add Job </button>
  )
}