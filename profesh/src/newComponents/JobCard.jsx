import toggleExpand from "../functions/toggleExpand"
import React from "./react"

import toggleExpand from "../functions/toggleExpand.js"

export default function JobCard(props) {
  
  const { idx, job, activePage } = props
  const { fetchOpportunities, setFetchOpportunities } = props
  const { expanded, setExpanded } = props

  const opportunityStatus = (job.fields.opportunityStatus.charAt(0).toLowerCase() + job.fields.opportunityStatus.slice(1)).split("/").join("-").split(" ").join("-")
  const actionItem = (job.fields.actionItems.charAt(0).toLowerCase() + job.fields.actionItems.slice(1)).split("/").join("-").split(" ").join("-")

  // const expandedJSX = 

  return (
    <div className={activePage == "job tracker" ? "tracked-job-card" : "job-card"} key={job.id} id={job.id} onClick={() => toggleExpand(idx, expanded, setExpanded)}>

      <div className="company-information-container">

        <img className="company-logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }} alt={opportunity.fields.companyName} />

        <p className="company-name">{job.fields.companyName}</p>

      </div>

      <div className="job-information-container">
        <p className="job-title">{job.fields.jobTitle}</p>
      </div>

      {activePage == "job tracker" ?
        
        <div className="tracker-container">
          <div className="opportunity-status-container">
            {job.fields.opportunityStatus}
          </div>
          <div className="action-item-container">
            {job.fields.actionItems}
          </div>
        </div>
      
      :
        
        <div className="abbreviated-job-description-container">
          {(job.contents.length > 200) ? <span>{`${job.contents.slice(0.197)}...`}</span> : job.contents}
        </div>
        
      }

      {/* {(expanded.length === 0 || (!expanded.includes(idx))) ?
        
        (

        ) */}

    </div>
  )
}