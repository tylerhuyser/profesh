import React, { useState } from 'react';
import JobCard from "../JobResults/JobCard"
import "./JobResults.css";
import "../AddJob/AddJobForm.css";

export default function JobsResults(props) {

  // Below deconstructs the fetchJobs state variables
  const { fetchJobs, setFetchJobs } = props
  
  const { jobs } = props;
  const { searchQuery } = props;
  const lowerCaseQuery = searchQuery.toLowerCase()

  //Below creates a state variable to store "expanded" job cards
  const [expanded, setExpanded] = useState([])

  //Below creates a state variable to control the visibility of the Add Job Form
  const [addJobVisibility, setAddJobVisibility] = useState(false);

  //Below function enables opportunity card expansion. If the id IS contained in the UseState array, it is removed (collapsed), if not, it is added (and expanded)
  function toggleExpand(id) {
    let opportunitiesContainer = document.getElementById(`${id}`);
    opportunitiesContainer.classList.toggle('expanded');
    console.log(expanded)
    if (!expanded.includes(id)) {
      setExpanded(prevExpand => {
        return [...prevExpand, id]
      });
      console.log(expanded)
    }; 
    if (expanded.includes(id)) {
      setExpanded(prevExpand => {
        console.log(prevExpand);
        return (prevExpand.filter(e => e !== id))
      })
        console.log(expanded)
    };
  }


  //Below toggles visibility of the Add Job Menu
  function toggleAddJobMenu() {
    setAddJobVisibility (!addJobVisibility)
  };
    
  // Below handles selection of the "Add Job" button
  function handleAddJob(e) {
    toggleAddJobMenu();
    e.stopPropagation();
  }

  return (
    <div className="jobsResults">

      <div className="placeholderTop" style={{
            
            height: "20px",
            
            }}>
  
      </div>

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
      <div className="placeholderBottom" style={{
            
          height: "70px",
          marginTop: "40px",
            
            }}>
  
      </div>
    </div>
  )
}