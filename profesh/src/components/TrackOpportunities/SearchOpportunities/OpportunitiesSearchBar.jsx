import React, { useState, useEffect } from 'react';
import OpportunityResults from "../OpportunityResults/OpportunityResults"
import Axios from 'axios';

export default function OpportunitiesSearchBar (props) {

  // Below sets a state variable for "opportunities", which will hold the API Data.
  const [opportunities, setOpportunities] = useState([]);

  // Below sets a state variable for "query", which will hold user's search query.
  const [searchQuery, setSearchQuery] = useState("");

  // Below deconstructs the fetchOpportunities & setFetchOpportunities props (handed down from parent). These props will allow the page to load opportunities on load & upon form submission.
  const { fetchOpportunities, setFetchOpportunities } = props

  // Below calls upon the API to obtain Opportunity Data from the API
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


  return (
    <div>
      <form className="OpportunitiesSearchForm scale-in-ver-top" id="OpportunitiesSearchForm" style={{

        // Below describes position properties for the Opportunities search bar.
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "3",

        // Below describes the physical appearance for the search bar.
        background: "#2C404B",
        boxShadow: '0px -1px 10px darkgray',
        
        // Below describes the display properties of the Opportuntities container.
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

        <OpportunityResults opportunities={opportunities} searchQuery={searchQuery} fetchOpportunities={ fetchOpportunities } setFetchOpportunities={ setFetchOpportunities } />
   
    </div>
  )
}