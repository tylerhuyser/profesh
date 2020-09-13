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
      <form className="OpportunitiesSearchForm scale-in-ver-top" id="OpportunitiesSearchForm" style={{

        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',
        width: "105vw",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      
      }}>

        <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" alt="proFreshLogoOppsSearch" width="100px" height="50px" style={{
                
          objectFit: "cover",
          margin: "10px",
          marginRight: "10px",
      
          }} />

        <input type="text" id="opportunitySearchInput" name="opportunitySearchInput" placeholder="Search Saved Opportunities (company, job title, location, etc.)" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{

          marginTop: "25px",
          marginBottom: "25px",
          marginRight: "10px",
          width: "40%",
          fontSize: "13px",
          // border: "5px solid #F7116B",

        }} />
        <button className="searchOpportunitiesButton" style={{

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
        <OpportunityResults opportunities={opportunities} searchQuery={searchQuery} fetchOpportunities={ fetchOpportunities } setFetchOpportunities={ setFetchOpportunities } />
      {/* </Link> */}
    </div>
  )
}