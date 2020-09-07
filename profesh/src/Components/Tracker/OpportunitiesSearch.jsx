import React from 'react';
// import axios from 'axios';
import OpportunityResults from "./Search/OpportunityResults"

export default function SearchOpportunities () {

  return (
    <div style={{

      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "3",
      background: "gray",

    }}>
      <form className="OpportunitiesSearchForm" style={{

        margin: "25px",

      }}>
        <input type="text" id="opportunitySearchInput" name="opportunitySearchInput" />
        <button>Submit</button>
      </form>
      <OpportunityResults />
    </div>
  )
}