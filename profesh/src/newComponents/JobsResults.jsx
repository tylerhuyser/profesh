import React, { useState } from "react"
import { useLocation } from 'react-router-dom'

import JobCard from './JobCard'
import filterJobs from "../functions/filterJobs.js"

import "./JobResults.css"

export default function JobsResults(props) {

  const { mount, jobs, searchQuery, setFormMode } = props
  const { activeJob, setActiveJob } = props
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
        id: job.id,
        fields: {
          companyName: job.company.name,
          jobTitle: job.name,
          seniorityLevel: null,
          employmentType: null,
          location: job.locations[0].name,
          jobDescription: job.contents.replace(/(<([^>]+)>)/gi, ""),
          opportunityStatus: null,
          actionItems: null,
          dateOfLastContact: null,
          contactName: null,
          contactPhoneNumber: null,
          contactEmail: null,
          postingDate: job.publication_date.slice(0,10),
          jobType: job.type,
        }
      }
      return (
        <JobCard job={jobData} expanded={expanded} setExpanded={setExpanded} visibility={visibility} setVisibility={setVisibility} activeJob={activeJob} setActiveJob={setActiveJob} setFormMode={setFormMode} key={jobData.id} />
      )
    } else if (location.pathname === "/tracker") {
      return (
        <JobCard job={job} expanded={expanded} setExpanded={setExpanded} visibility={visibility} setVisibility={setVisibility} activeJob={activeJob} setActiveJob={setActiveJob} setFormMode={setFormMode}  key={job.id} />
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