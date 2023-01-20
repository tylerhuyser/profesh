import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import JobsResults from "../JobsResults"
import OpportunityForm from "../OpportunityForm"
import TrackNewJobButton from "../TrackNewJobButton"

import getNewJobs from "../../functions/getNewJobs"
import getTrackedJobs from "../../functions/getTrackedJobs.js"

export default function JobsContainer (props) {

  const { searchQuery, setSearchQuery } = props

  const [jobs, setJobs] = useState([])
  const [activeJob, setActiveJob] = useState(null)
  const [mount, setMount] = useState(false)
  
  const [formMode, setFormMode] = useState("")

  const [visibility, setVisibility] = useState(false);

  const location = useLocation()

  useEffect(() => {
    setMount(false)
  }, [location.pathname])

  useEffect(() => {
    setSearchQuery("")
  }, [location.pathname])

  useEffect(() => {
    console.log(`inside useEffect #1 -- (App.js)`)
    if (location.pathname === "/jobs") {
      console.log(`getting new jobs data from LINKEDIN`)
      const getNewJobsData = async () => {
        const newJobsData = await getNewJobs()
        console.log(newJobsData)
        setJobs(newJobsData)
      }
      getNewJobsData()
    } else if (location.pathname === "/tracker") {
      console.log(`getting tracked jobs data from AIRTABLE`)
      const getTrackedJobsData = async () => {
        const trackedJobsData = await getTrackedJobs()
        console.log(trackedJobsData)
        setJobs(trackedJobsData)
      }
      getTrackedJobsData()
    }
  }, [location.pathname])

  useEffect(() => {
    console.log(`inside useEffect #2 -- (App.js)`)
    console.log(`jobs value below`)
    console.log(jobs)
    console.log(jobs[0])
    console.log(jobs.length === 0)
    if (jobs[0]) {
      console.log(jobs)
      console.log('setting mount value true')
      setMount(true)
    }
  }, [jobs])

  return (

    <>
      { (jobs.length > 0) && (location.pathname === "/jobs" || "/tracker") && mount ?
      
        <div className="job-tracker-container">

          <JobsResults jobs={jobs} mount={mount} activeJob={activeJob} setActiveJob={setActiveJob} setFormMode={setFormMode} searchQuery={searchQuery} visibility={visibility} setVisibility={setVisibility} />
        
          {visibility && activeJob ?
            <OpportunityForm activeJob={activeJob} formMode={formMode} visibility={visibility} setVisibility={setVisibility} />
            
            :
            <></>
          }

          <TrackNewJobButton setFormMode={setFormMode} visibility={visibility} setVisibility={setVisibility} />

        </div>
    :
     
      <p>LOADING</p>
    
    }
    
  </>
  )
}