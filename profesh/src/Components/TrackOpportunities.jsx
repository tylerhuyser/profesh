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

  function handleMouseDown (e) {
    toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  return (
    <div className="tracker">
      <OpportunitiesSearch />
      <AddOpportunityButton handleMouseDown = { handleMouseDown }  />
      <AddOpportunityForm handleMouseDown = { handleMouseDown } visibility= { visibility } toggleMenu= { toggleMenu } />
    </div>
  )

}

export default TrackOpportunities;