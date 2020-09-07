import React from 'react';
// import axios from 'axios';
import OpportunityResults from "./Search/OpportunityResults"

export default function SearchOpportunities () {

  return (
    <div>
      <form className="OpportunitiesSearchForm">
        <input type="text">Search by Title, Company, etc. ...</input>
        <button>Submit</button>
      </form>
      <OpportunityResults />
    </div>
  )
}