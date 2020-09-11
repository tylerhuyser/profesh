import React from 'react';

export default function AddJobButton(props) {
  
  return (
    <button className="addJobButton" id="addJobButton" onMouseDown={(e) => props.handleAddJob(e)} style={{
      width: "100px",
      textAlign: "center",
      border: "5px solid #F7116B",
      borderRadius: "18px",
      background: "white",
      color: "#F7116B",
      padding: "10px",

      }}> Add Job </button>
  )
}