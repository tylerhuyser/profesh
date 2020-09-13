import React, {useState} from 'react';
import OpportunitiesSearch from "./Tracker/OpportunitiesSearch";
import AddOpportunityButton from "./Tracker/AddOpportunityButton";
import AddOpportunityForm from "./Tracker/AddOpportunityForm";

// Below Function enables the "Tracker" functionality of Profesh.
function TrackOpportunities() {

  // Below declares the state variable, "visibility", which toggles the "Add Opportunity" menu. 
  const [visibility, setVisibility] = useState(false);

  // Below declares the state variable, "fetchOpportunities", which toggles an API Call whenever state is set (on page load AND whenever the setter is evoked).
  const [fetchOpportunities, setFetchOpportunities] = useState(false)

  // Below function toggles visibility for the Add Opportunity Form
  function toggleAddOpportunityMenu() {
    setVisibility(!visibility)
  };

  // Below function handles the clicking of the "Add Opportunity" and "Cancel" buttons.
  function handleMouseDown (e) {
    toggleAddOpportunityMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  // Documentation for above: Built using tutorial: https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

  return (

    // Below passes props to the three child components, "Opportunities Search", "Add Opportunity Button", and "Add Opportunity Form"
    <div className="tracker">
      <OpportunitiesSearch fetchOpportunities={fetchOpportunities} setFetchOpportunities={setFetchOpportunities} />
      <AddOpportunityButton handleMouseDown = { handleMouseDown }  />
      <AddOpportunityForm handleMouseDown = { handleMouseDown } visibility= { visibility } toggleAddOpportunityMenu= { toggleAddOpportunityMenu } fetchOpportunities={fetchOpportunities} setFetchOpportunities={ setFetchOpportunities } />
    </div>
  )

}

export default TrackOpportunities;