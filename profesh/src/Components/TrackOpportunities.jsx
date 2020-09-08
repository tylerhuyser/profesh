import React, {useState} from 'react';
// import axios from 'axios';
import OpportunitiesSearch from "./Tracker/OpportunitiesSearch";
import AddOpportunityButton from "./Tracker/AddOpportunityButton";
import AddOpportunityForm from "./Tracker/AddOpportunityForm";

function TrackOpportunities() {

  const [visibility, setVisibility] = useState(false);

  function toggleMenu() {
    setVisibility(!visibility)
  };

  return (
    <div className="tracker">
      <OpportunitiesSearch />
      <AddOpportunityButton />
      <AddOpportunityForm />
    </div>
  )

}

export default TrackOpportunities;