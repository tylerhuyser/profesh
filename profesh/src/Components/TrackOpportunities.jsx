import React from 'react';
// import axios from 'axios';
import OpportunitiesSearch from "./Tracker/OpportunitiesSearch";
import AddOpportunity from "./Tracker/AddOpportunity";

function TrackOpportunities() {

  return (
    <div className="tracker">
      <OpportunitiesSearch />
      <AddOpportunity />
    </div>
  )

}

export default TrackOpportunities;