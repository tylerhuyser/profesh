import React from "react"
import { useLocation } from 'react-router-dom'

import toggleExpand from "../functions/toggleExpand.js"
import ExpandedJobCard from "./ExpandedJobCard"
import handleOpenForm from "../functions/handleOpenForm"

import "./JobCard.css"

export default function JobCard (props) {
  
  const { job, setJobs, setFormMode } = props
  const { setActiveJob } = props
  const { visibility, setVisibility } = props
  const { expanded, setExpanded } = props
  const location = useLocation()

  const expandedJSX = ExpandedJobCard(job, setJobs, location.pathname, expanded, visibility, setVisibility, setActiveJob, setFormMode)

  return (
    <div className={location.pathname === "/tracker" ? "tracked-job-card" : "new-job-card"} key={job.id} id={job.id} onClick={() => toggleExpand(job.id, expanded, setExpanded)}>

      <div className="company-information-container">

        <img className="company-logo" src={`https://img.logo.dev/${job.fields.companyName}.com?token=${process.env.REACT_APP_LOGO_DEV_TOKEN}`} onError={(e) => { e.target.onerror = null; e.target.src = `https://img.logo.dev/404.com?token=${process.env.REACT_APP_LOGO_DEV_TOKEN}` }} alt={job.companyName} />

        <p className="company-name">{job.fields.companyName}</p>

      </div>

      <div className="job-information-container">
        <p className="job-title">{job.fields.jobTitle.replace("_", " ").replace("-", " ")}</p>
      </div>

      {location.pathname === "/tracker" ?
        
        <div className="tracker-container">
          <div className={`opportunity-status-container ${(job.fields.opportunityStatus.charAt(0).toLowerCase() + job.fields.opportunityStatus.slice(1)).split("/").join("-").split(" ").join("-")}`}>
            {(job.fields.opportunityStatus.charAt(0).toUpperCase() + job.fields.opportunityStatus.slice(1)).split("/").join("-").split(" ").join("-")}
          </div>
          <div className={`action-item-container ${(job.fields.actionItems.charAt(0).toLowerCase() + job.fields.actionItems.slice(1)).split("/").join("-").split(" ").join("-")}`}>
            {job.fields.actionItems}
          </div>
        </div>
      
      :
        <>
          <div className={expanded.includes(job.id) ? "job-description" : "abbreviated-job-description"}>
            {(job.fields.jobDescription.length > 300 && !expanded.includes(job.id)) ? job.fields.jobDescription.substring(0,297) + "..." : job.fields.jobDescription}
          </div>
        </>
        
      }
      
      { expandedJSX}

    </div>
  )
}