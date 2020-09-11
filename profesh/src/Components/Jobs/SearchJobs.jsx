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
      const apiURL = `https://www.themuse.com/api/public/jobs?page=1`
      const response = await Axios.get(apiURL);
      setJobs(response.data.results)
    }
    jobsAPICall();
  }, [fetchJobs]);

  console.log(jobs);

  return (
    <div>
      <form className="JobsSearchForm scale-in-ver-top" style={{

        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}>

        <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" width="100px" height="50px" style={{
                
          objectFit: "cover",
          margin: "10px",

       }} />

        <input type="text" id="JobsSearchInput" name="jobSearchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{

          marginTop: "25px",
          marginBottom: "25px",

        }} />
        <button>Submit</button>
      </form>
      {/* <Link to={`/tracker/opportunities/:${opportunities.id}`} key={opportunities.id} > */}
        <JobsResults  jobs={jobs} searchQuery={searchQuery} fetchJobs={ fetchJobs } setFetchJobs={ setFetchJobs } />
      {/* </Link> */}
    </div>
  )
}