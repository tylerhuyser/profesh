import React from "react"

import toggleMenu from "../functions/toggleMenu"
import deleteOpportunity from "../functions/deleteOpportunity.js"

export default function createExpandedJSX(idx, job, location, expanded, setExpanded, visibility, setVisibility) {
  
  if (expanded.includes(idx) && location === "/tracker") {
    return (
      <div className="expanded-container">
      
        <div className="tracker-container">
          
          <div className={`opportunity-status`} id={job.fields.opportunityStatus}>
            {job.fields.opportunityStatus}
          </div>
          
          <div className={`action-item`} id={job.fields.actionItems}>
            {job.fields.actionItems}
          </div>
          
        </div>

        <p className="job-description"> {job.fields.jobDescription}  </p>
  
        <div className="expanded-contents">
          <label forhtml="dateOfLastContact">Date of Last Contact:</label>
          <p name="dateOflastContact">{job.fields.dateOfLastContact}</p>
          <label forhtml="contactName">Contact Name:</label>
          <p name="contactName">{job.fields.contactName}</p>
          <label forhtml="contactPhoneNumber">Contact Phone Number:</label>
          <p name="contactPhoneNumber">{job.fields.contactPhoneNumber}</p>
          <label forhtml="contactEmail">Contact Email:</label>
          <p name="contactEmail">{job.fields.contactEmail}</p>
    
          <div className="opportunityCRUDButtons">
          <button className="updateOpportunityButton" id="updateOpportunityButton" onMouseDown={() => toggleMenu(visibility, setVisibility)} style={{
              
              width: "100px",
              textAlign: "center",
              border: "5px solid #F7116B",
              borderRadius: "18px",
              background: "white",
              color: "#F7116B",
              padding: "10px",

              }} > Edit </button>
            <button className="updateOpportunityButton" onClick={() => deleteOpportunity(job.id)} style={{
              width: "100px",
              textAlign: "center",
              border: "5px solid #F7116B",
              borderRadius: "18px",
              background: "white",
              color: "#F7116B",
              padding: "10px",

            }} >Delete</button>
          </div>
        </div>
      </div>
    )
  } else if (expanded.includes(idx) && location.pathname === "/jobs") {
    return (
      <div name="expandedContainer">
        <div className="expanded-contents">
          <label forhtml="jobType">Job Type:</label>
          <p name="jobType">{job.type}</p>
          <label forhtml="publicationDate">Posting Date</label>
          <p name="publicationDate">{job.publicaton_date}</p>
          <button className="addJobButton" id="addJobButton" onMouseDown={() => toggleMenu(visibility, setVisibility)} style={{
            width: "100px",
            textAlign: "center",
            border: "5px solid #F7116B",
            borderRadius: "18px",
            background: "white",
            color: "#F7116B",
            padding: "10px",

          }}> Add Job </button>
        </div>
      </div>
    )
  }
}