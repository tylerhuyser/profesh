import React from 'react'
import "./TrackNewJobsButton.css"

import handleOpenForm from "../functions/handleOpenForm.js"

export default function TrackNewJobButton(props) {

  const { setFormMode } = props
  const { visibility, setVisibility } = props

  return (

    <button className="track-new-job-button" onMouseDown={() => handleOpenForm("manually add new job", setFormMode, visibility, setVisibility, null, null)}>
      <i className="fas fa-plus" />
    </button>
    
  )
}