import React from 'react';
import axios from 'axios';
import OpportunitiesSearch from "./Tracker/OpportunitiesSearch.jsx";
import AddOpportunity from "./Tracker/AddOpportunity.jsx";

function TrackOpportunities() {

  return (
    <div className="trackOpportunities">
      <OpportunitiesSearch />
      <AddOpportunity />
    </div>
  )

}

export default TrackOpportunities;