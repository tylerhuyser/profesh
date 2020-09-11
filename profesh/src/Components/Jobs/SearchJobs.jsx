import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import JobsResults from "./Search/JobsResults"
import Axios from 'axios';

export default function SearchJobs (props) {

  const [jobs, setJobs] = useState([]);
  // const [fetchOpportunities, setFetchOpportunities] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { fetchJobs, setFetchJobs } = props

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

        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',
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
          // border: "5px solid #F7116B",

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
      {/* <Link to={`/tracker/opportunities/:${opportunities.id}`} key={opportunities.id} > */}
        <JobsResults  jobs={jobs} searchQuery={searchQuery} fetchJobs={ fetchJobs } setFetchJobs={ setFetchJobs } />
      {/* </Link> */}
    </div>
  )
}