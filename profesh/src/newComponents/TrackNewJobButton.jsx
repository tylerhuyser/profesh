import React from 'react'
import "./TrackNewJobsButton.css"

import handleMouseDown from "../functions/handleMouseDown.js"

export default function TrackNewJobButton(props) {

  const { setFormMode } = props
  const { visibility, setVisibility } = props

  return (

    <button className="track-new-job-button" onMouseDown={() => handleMouseDown("new", setFormMode, visibility, setVisibility)}>
      <i className="fas fa-plus" />
    </button>
    
  )
}