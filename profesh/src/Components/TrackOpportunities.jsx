import React, {useState} from 'react';
// import axios from 'axios';
import OpportunitiesSearch from "./Tracker/OpportunitiesSearch";
import AddOpportunityButton from "./Tracker/AddOpportunityButton";
import AddOpportunityForm from "./Tracker/AddOpportunityForm";

function TrackOpportunities() {

  const [visibility, setVisibility] = useState(false);
  const [fetchOpportunities, setFetchOpportunities] = useState(false)

  function toggleMenu() {
    setVisibility(!visibility)
  };

  function handleMouseDown (e) {
    toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  // Documentation: From tutorial: https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

  return (
    <div className="tracker">
      <OpportunitiesSearch fetchOpportunities={fetchOpportunities} setFetchOpportunities={setFetchOpportunities} />
      <AddOpportunityButton handleMouseDown = { handleMouseDown }  />
      <AddOpportunityForm handleMouseDown = { handleMouseDown } visibility= { visibility } toggleMenu= { toggleMenu } fetchOpportunities={fetchOpportunities} setFetchOpportunities={ setFetchOpportunities } />
    </div>
  )

}

export default TrackOpportunities;