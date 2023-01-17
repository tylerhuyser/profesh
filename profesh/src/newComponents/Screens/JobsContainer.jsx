import React, { useState, useEffect } from 'react';

import JobsResults from "../JobsResults"
import OpportunityForm from "../OpportunityForm"
import TrackNewJobButton from "../TrackNewJobButton"

import getNewJobs from "../../functions/getNewJobs"
import getTrackedJobs from "../../functions/getTrackedJobs.js"

export default function JobsContainer (props) {

  const { searchQuery } = props
  const { activePage, setActivePage } = props
  
  const [jobs, setJobs] = useState([])
  const [visibility, setVisibility] = useState(false);
  const [fetchOpportunities, setFetchOpportunities] = useState(false)
  
  useEffect(() => {
    if (activePage == "find new jobs") {
      setActivePage("new jobs")
    } else if (activePage == "jobs tracker") {
      setActivePage("track jobs")
    }
  }, [])

  useEffect(() => {
    if (activePage == "find new jobs" || " new jobs") {
      const getNewJobsData = async () => {
        const newJobsData = await getNewJobs()
        console.log(newJobsData)
        setJobs(newJobsData)
      }
    }
    else if (activePage == "jobs tracker" || "track jobs") {
      const getTrackedJobsData = async () => {
        const trackedJobsData = await getTrackedJobs()
        console.log(trackedJobsData)
        setJobs(trackedJobsData)
      }
      getTrackedJobsData()
    }
  }, [fetchOpportunities]);

  return (

    // Below passes props to the three child components, "Opportunities Search", "Add Opportunity Button", and "Add Opportunity Form"
    <div className="job-tracker-container">

      <JobsResults activePage={activePage} jobs={jobs} searchQuery={searchQuery} fetchOpportunities={fetchOpportunities} setFetchOpportunities={setFetchOpportunities} />
      
      <OpportunityForm opportunity={opportunity} mode={mode} visibility={visibility} setVisibility={setVisibility} fetchOpportunities={fetchOpportunities} setFetchOpportunities={setFetchOpportunities} />

      <TrackNewJobButton visibility={visibility} setVisibility={setVisibility} />

    </div>
  )

}