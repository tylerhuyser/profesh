import React from 'react'
import "./TrackNewJobsButton.css"

import handleMouseDown from "../functions/handleMouseDown.js"

export default function TrackNewJobButton(props) {

  const { setFormMode } = props
  const { visibility, setVisibility } = props

  return (

    <button className="track-new-job-button" onMouseDown={() => handleMouseDown("manually add new job", setFormMode, visibility, setVisibility, null, null)}>
      <i className="fas fa-plus" />
    </button>
    
  )
}