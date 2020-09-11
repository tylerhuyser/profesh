import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import OpportunityResults from "./Search/OpportunityResults"
import Axios from 'axios';

export default function SearchOpportunities (props) {

  const [opportunities, setOpportunities] = useState([]);
  // const [fetchOpportunities, setFetchOpportunities] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { fetchOpportunities, setFetchOpportunities } = props

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
  }, [fetchOpportunities]);

  console.log(opportunities);

  return (
    <div>
      <form className="OpportunitiesSearchForm scale-in-ver-top" style={{

        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',

      }}>
        <input type="text" id="opportunitySearchInput" name="opportunitySearchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{

          marginTop: "25px",
          marginBottom: "25px",

        }} />
        <button >Submit</button>
      </form>
      {/* <Link to={`/tracker/opportunities/:${opportunities.id}`} key={opportunities.id} > */}
        <OpportunityResults opportunities={opportunities} searchQuery={searchQuery} fetchOpportunities={ fetchOpportunities } setFetchOpportunities={ setFetchOpportunities } />
      {/* </Link> */}
    </div>
  )
}