import React, {useState} from 'react';
import OpportunitiesSearch from "../components/TrackOpportunities/SearchOpportunities/OpportunitiesSearchBar";
import AddOpportunityForm from "../components/TrackOpportunities/AddOpportunity/AddOpportunityForm";
import AddOpportunityButton from "../components/TrackOpportunities/AddOpportunity/AddOpportunityButton";

import handleMouseDown from '../functions/handleMouseDown';

// Below Function enables the "Tracker" functionality of Profesh.
function TrackOpportunities() {

  // Below declares the state variable, "visibility", which toggles the "Add Opportunity" menu. 
  const [visibility, setVisibility] = useState(false);

  // Below declares the state variable, "fetchOpportunities", which toggles an API Call whenever state is set (on page load AND whenever the setter is evoked).
  const [fetchOpportunities, setFetchOpportunities] = useState(false)

  // Documentation for above: Built using tutorial: https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

  return (

    // Below passes props to the three child components, "Opportunities Search", "Add Opportunity Button", and "Add Opportunity Form"
    <div className="tracker">
      <OpportunitiesSearch fetchOpportunities={fetchOpportunities} setFetchOpportunities={setFetchOpportunities} />
      <AddOpportunityButton visibiliy={visibility} setVisibility={setVisibility}  />
      <AddOpportunityForm visibility={visibility} setVisibility={setVisibility} fetchOpportunities={fetchOpportunities} setFetchOpportunities={ setFetchOpportunities } />
    </div>
  )

}

export default TrackOpportunities;