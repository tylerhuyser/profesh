import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import Loader from "../shared/Loader"
import JobsResults from "../JobsResults"
import NewJobForm from "../NewJobForm.jsx"
import TrackNewJobButton from "../TrackNewJobButton"

import getNewJobs from "../../functions/CRUD/getNewJobs"
import getTrackedJobs from "../../functions/CRUD/getTrackedJobs.js"

export default function JobsContainer (props) {

  const { searchQuery, setSearchQuery } = props

  const [jobs, setJobs] = useState([])
  const [activeJob, setActiveJob] = useState(null)
  const [mount, setMount] = useState(false)
  const [formMode, setFormMode] = useState("")
  const [visibility, setVisibility] = useState(false);

  const location = useLocation()

  console.log(jobs)

  useEffect(() => {
    console.log('Resetting "Search Query" state to "" (EMPTY STRING)')
    setSearchQuery("")
  }, [location.pathname])

  useEffect(() => {
    console.log('Resetting "Mount" state to FALSE')
    setMount(false)
  }, [location.pathname])

  useEffect(() => {
    console.log('Resetting "Active Job" state to NULL')
    setActiveJob(null)
  }, [location.pathname])

  useEffect(() => {
    console.log('Resetting "Form Mode" state to "" (EMPTY STRING)')
    setFormMode("")
  }, [location.pathname])

  useEffect(() => {
    console.log('Resetting "Visibility" state to FALSE')
    setVisibility(false)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === "/jobs") {
      console.log(`GET request -- new jobs data from LINKEDIN API`)
      const getNewJobsData = async () => {
        const newJobsData = await getNewJobs()
        setJobs(newJobsData)
      }
      getNewJobsData()
    } else if (location.pathname === "/tracker") {
      console.log(`GET request -- tracked jobs data from AIRTABLE API`)
      const getTrackedJobsData = async () => {
        const trackedJobsData = await getTrackedJobs()
        setJobs(trackedJobsData)
      }
      getTrackedJobsData()
    }
  }, [location.pathname])

  useEffect(() => {
    if (jobs && jobs.length !== 0) {
      console.log('Setting "Mount" state from FALSE to TRUE')
      setMount(true)
    }
  }, [jobs])

  return (

    <>
      { jobs && (jobs.length > 0) && (location.pathname === "/jobs" || "/tracker") && mount ?
      
        <div className="job-tracker-container">

          <JobsResults jobs={jobs} setJobs={setJobs} mount={mount} setActiveJob={setActiveJob} setFormMode={setFormMode} searchQuery={searchQuery} visibility={visibility} setVisibility={setVisibility} />
        
          {visibility && formMode ?
            <NewJobForm jobs={jobs} setJobs={setJobs} activeJob={activeJob} setActiveJob={setActiveJob} formMode={formMode} setFormMode={setFormMode} visibility={visibility} setVisibility={setVisibility} />
            
            :
            <></>
          }

          <TrackNewJobButton setFormMode={setFormMode} visibility={visibility} setVisibility={setVisibility} />

        </div>
    :
     
      <Loader />
    
    }
    
  </>
  )
}