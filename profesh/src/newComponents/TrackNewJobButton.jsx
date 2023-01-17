import React from './react'
import "./TrackNewJobsButton.css"

import toggleMenu from '../functions/toggleMenu.js'

export default function TrackNewJobButton(props) {

  const { visibility, setVisibility } = props

  return (

    <button className="track-new-job-button" onMouseDown={() => toggleMenu(visibility, setVisibility)}>
      <i className="fas fa-plus" />
    </button>
    
  )
}