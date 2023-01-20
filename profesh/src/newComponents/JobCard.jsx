import React from "react"
import { useLocation } from 'react-router-dom'

import toggleExpand from "../functions/toggleExpand.js"
import ExpandedJobCard from "./ExpandedJobCard"

import "./JobCard.css"

export default function JobCard (props) {
  
  const { job, setFormMode } = props
  const { activeJob, setActiveJob } = props
  const { visibility, setVisibility } = props
  const { expanded, setExpanded } = props
  const location = useLocation()

  const expandedJSX = ExpandedJobCard(job, location.pathname, expanded, visibility, setVisibility, activeJob, setActiveJob, setFormMode)

  return (
    <div className={location.pathname === "/tracker" ? "tracked-job-card" : "new-job-card"} key={job.id} id={job.id} onClick={() => toggleExpand(job.id, expanded, setExpanded)}>

      <div className="company-information-container">

        <img className="company-logo" src={`https://logo.clearbit.com/${job.fields.companyName}.com`} onError={(e) => { e.target.onerror = null; e.target.src = "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/60b5e3f25f9a6_json_image_1622533106.webp" }} alt={job.companyName} />

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
            {(job.fields.actionItems.charAt(0).toUpperCase() + job.fields.actionItems.slice(1)).split("/").join("-").split(" ").join("-")}
          </div>
        </div>
      
      :
        
        <div className={expanded.includes(job.id) ? "job-description" : "abbreviated-job-description"}>
          {(job.fields.jobDescription.length > 200 && !expanded.includes(job.id)) ? job.fields.jobDescription.substring(0,197) + "..." : job.fields.jobDescription}
        </div>
        
      }
      
      { expandedJSX}

    </div>
  )
}