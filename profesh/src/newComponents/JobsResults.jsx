import React, { useState } from "react"
import { useLocation } from 'react-router-dom'

import JobCard from './JobCard'
import filterJobs from "../functions/filterJobs.js"

import "./JobResults.css"

export default function JobsResults(props) {

  const { mount, jobs, searchQuery, setActiveJob, setFormMode } = props
  const { visibility, setVisibility } = props
  
  const [expanded, setExpanded] = useState([])
  const location = useLocation()

  console.log(props)
  console.log("inside JobResults component")
  console.log(`The Value of Mount is ${mount}`)
  
  let filteredJobsData = filterJobs(jobs, mount, searchQuery.toLowerCase(), location.pathname)
  
  const jobCardsJSX = filteredJobsData?.map((job, idx) => {
    if (location.pathname === "/jobs") {
      let jobData = {
        fields: {
          companyName: job.company.name,
          jobTitle: job.name,
          jobDescription: job.contents.replace(/(<([^>]+)>)/gi, ""),
          location: job.locations[0].name,
          postingDate: job.publication_date.slice(0,10),
          jobType: job.type,
          actionItems: "",
          opportunityStatus: ""
        }
      }
      return (
        <JobCard idx={idx} job={jobData} expanded={expanded} setExpanded={setExpanded} visibility={visibility} setVisibility={setVisibility} />
      )
    } else if (location.pathname === "/tracker") {
      return (
        <JobCard idx={idx} job={job} expanded={expanded} setExpanded={setExpanded} visibility={visibility} setVisibility={setVisibility} />
      )
    }
  })
  
  console.log(jobCardsJSX)

  return (
    <div className="jobs-container" id={location.pathname === "/tracker" ? "tracked-jobs-container" : "new-jobs-container"}>

      {mount ?

        <>
      
          {jobCardsJSX}
          
        </>

        :
        
        <p>Loading...</p>
        
      }

    </div>
  )
}