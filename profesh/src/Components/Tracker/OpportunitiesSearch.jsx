import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import OpportunityResults from "./Search/OpportunityResults"
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';

export default function SearchOpportunities () {

  const [opportunities, setOpportunities] = useState([]);
  const [fetchOpportunities, setFetchOpportunities] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function apiCall() {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities`
      const response = await Axios.get(airtableURL, {
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
        },
      });
      setOpportunities(response.data.records)
    }
    apiCall();
  }, []);

  console.log(opportunities);

  return (
    <div>
      <form className="OpportunitiesSearchForm" style={{

        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",
        background: "gray",

      }}>
        <input type="text" id="opportunitySearchInput" name="opportunitySearchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{

          marginTop: "25px",
          marginBottom: "25px",

        }} />
        <button>Submit</button>
      </form>
      {/* <Link to={`/tracker/opportunities/:${opportunities.id}`} key={opportunities.id} > */}
        <OpportunityResults opportunities={opportunities} searchQuery={searchQuery} />
      {/* </Link> */}
    </div>
  )
}