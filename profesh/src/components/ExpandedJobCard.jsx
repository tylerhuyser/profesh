import React from "react"

import deleteJob from "../functions/CRUD/deleteJob.js"
import handleOpenForm from "../functions/handleOpenForm"

export default function ExpandedJobCard(job, setJobs, location, expanded, visibility, setVisibility, setActiveJob, setFormMode) {
  
  if (expanded.includes(job.id) && location === "/tracker") {
    return (
      <div className="expanded-container">

        <p className="job-description"> {job.fields.jobDescription}</p>
  
          <label className="expanded-label" id="date-of-last-contact-label" forhtml="dateOfLastContact">Date of Last Contact:</label>
          <p className="expanded-copy" id="date-of-last-contact" name="dateOflastContact">{job.fields.dateOfLastContact}</p>
          <label className="expanded-label" id="contact-name-label" forhtml="contactName">Contact Name:</label>
          <p className="expanded-copy" id="contact-name" name="contactName">{job.fields.contactName}</p>
          <label className="expanded-label" id="contact-phone-number-label" forhtml="contactPhoneNumber">Contact Phone Number:</label>
          <p className="expanded-copy" id="contact-phone-number" name="contactPhoneNumber">{job.fields.contactPhoneNumber}</p>
          <label className="expanded-label" id="contact-email-label" forhtml="contactEmail">Contact Email:</label>
          <p className="expanded-copy" id="contact-email" name="contactEmail">{job.fields.contactEmail}</p>
    
          <div className="expanded-job-card-buttons-container">
            <button className="expanded-job-card-button" id="update-tracked-job-button" onMouseDown={() => handleOpenForm("update tracked job", setFormMode, visibility, setVisibility, job, setActiveJob)}> Edit </button>
            <button className="expanded-job-card-button" id="delete-tracked-job-button" onClick={() => deleteJob(job.id, setJobs)} >Delete</button>
          </div>
        
      </div>
    )
  } else if (expanded.includes(job.id) && location === "/jobs") {
    return (
      <>
        
        <div className="expanded-container">
            <label className="expanded-label" id="job-type-label" forhtml="jobType">Job Type:</label>
            <p className="expanded-copy" id="job-type" name="jobType">{job.fields.jobType}</p>
            <label className="expanded-label" id="posting-date-label" forhtml="positing-date">Posting Date</label>
            <p className="expanded-copy" id="posting-date" name="posting-date">{job.fields.postingDate}</p>
            <button className="expanded-job-card-button" id="add-tracked-job-button" onMouseDown={() => handleOpenForm("add new job from LinkedIn", setFormMode, visibility, setVisibility, job, setActiveJob)}> Add Job </button>
        </div>

        <div className="expanded-container-desktop">

          <div className="expanded-job-description-container">
            <p className="expanded-description-title">JOB DESCRIPTION:</p>
            <p className="job-description-desktop"> {job.fields.jobDescription}</p>
           </div>

          <div className="additional-job-details-expanded-container">
            <label className="expanded-label" id="job-type-label" forhtml="jobType">Job Type:</label>
            <p className="expanded-copy" id="job-type" name="jobType">{job.fields.jobType.charAt(0).toUpperCase()+ job.fields.jobType.slice(1)}</p>
            <label className="expanded-label" id="posting-date-label" forhtml="positing-date">Posting Date</label>
            <p className="expanded-copy" id="posting-date" name="posting-date">{job.fields.postingDate}</p>
            <button className="expanded-job-card-button" id="add-tracked-job-button" onMouseDown={() => handleOpenForm("add new job from LinkedIn", setFormMode, visibility, setVisibility, job, setActiveJob)}> Add Job </button>
          </div>

        </div>
      </>
    )
  }
}