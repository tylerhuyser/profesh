import React, { useState } from "./react"

import JobCard from "./JobCard"

export default function JobsResults(props) {

  const { activePage, jobs, searchQuery } = props
  const { fetchOpportunities, setFetchOpportunities } = props
  const lowerCaseQuery = searchQuery.toLowerCase()
  
  const [expanded, setExpanded] = useState([])

  function createJobCardsJSX() {
    if (activePage == "new jobs" || "find new jobs") {
      {jobs.filter(job =>
        job.company.name.toLowerCase().includes(lowerCaseQuery) ||
        job.name.toLowerCase().includes(lowerCaseQuery) ||
        job.locations.name.toLowerCase().includes(lowerCaseQuery)).map(
          (job, idx) => {

            let jobDescription = job.contents;
            let formattedDescription = jobDescription.replace(/(<([^>]+)>)/gi, "")

            return (
              <div className="job-card-container">
                <JobCard
                  idx={idx}
                  job={job}
                  fetchJobs={fetchJobs}
                  setFetchJob={setFetchJobs}
                  formattedDescription={formattedDescription}
                  expanded={expanded}
                  toggleExpand={toggleExpand}
                  handleAddJob={handleAddJob}
                  addJobVisibility={addJobVisibility}
                
                />
              </div>

            )
          })
      }
    } else if (activePage == "jobs tracker" || "track jobs")
    {
      {jobs.filter(job => job.fields.companyName.toLowerCase().includes(lowerCaseQuery) || job.fields.jobTitle.toLowerCase().includes(lowerCaseQuery)).map((job, idx) => {
        return (
          <JobCard
            idx={idx}
            job={job}
            activePage={activePage}
            fetchOpportunities={fetchOpportunities}
            setFetchOpportunities={setFetchOpportunities}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )
      })}
}  }

  const jobCardsJSX = createJobCardsJSX()
  
  return (
    <div className="jobs-container" id={activePage == "jobs tracker" ? "tracked-jobs-container" : "new-jobs-container"}>

      {jobCardsJSX}
      
    </div>
  )
}