import React, { useState, useEffect } from 'react';
import JobsResults from "./Search/JobsResults"
import Axios from 'axios';

export default function SearchJobs (props) {

  // Below sets a state variable for "jobs", which will hold the API Data.
  const [jobs, setJobs] = useState([]);

  // Below sets a state variable for "query", which will hold user's search query.
  const [searchQuery, setSearchQuery] = useState("");

  // Below deconstructs the fetchJobs & setFetchJobs props (handed down from parent). These props will allow the page to load jobs on load & upon form submission.
  const { fetchJobs, setFetchJobs } = props

  // Below calls upon the API to obtain Jobs data on load. 
  useEffect(() => {
    async function jobsAPICall() {
      const apiURL = `https://www.themuse.com/api/public/jobs?page=75`
      const response = await Axios.get(apiURL);
      setJobs(response.data.results)
    }
    jobsAPICall();
  }, [fetchJobs]);

  console.log(jobs);


  return (
    <div>
      <form className="JobsSearchForm scale-in-ver-top" id="jobsSearchForm" style={{

        // Below describes position properties for the Jobs search bar.
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",

        // Below describes the physical appearance for the search bar.
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',
        
        // Below describes the display properties of the Jobs container.
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

      }}>

        <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" alt="formBackground" width="100px" height="50px" style={{
                
          objectFit: "cover",
          margin: "10px",
          marginRight: "10px",

       }} />

        <input type="text" id="JobsSearchInput" name="jobSearchInput" placeholder="Find New Jobs (by company, job title, location, etc.)" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{

          marginTop: "25px",
          marginBottom: "25px",
          marginRight: "10px",
          width: "40%",
          fontSize: "13px",
    

        }} />
        <button style={{

          width: "75px",
          fontSize: "10px",
          textAlign: "center",
          border: "5px solid #F7116B",
          borderRadius: "18px",
          background: "white",
          color: "#F7116B",
          maxHeight: "25px",

          }}>Submit</button>
      </form>
  
        <JobsResults  jobs={jobs} searchQuery={searchQuery} fetchJobs={ fetchJobs } setFetchJobs={ setFetchJobs } />

    </div>
  )
}