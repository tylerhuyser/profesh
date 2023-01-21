import Axios from 'axios';
import toggleMenu from "./toggleMenu";

export default async function updateOpportunity(jobID, inputValues, fetchOpportunities, setFetchOpportunities, visibility, setVisibility) {

  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${jobID}`;
  console.log(airtableURL)
  await Axios.put(
    airtableURL,
    { fields: inputValues },
    {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
        "Content-Type": "application/json",
      },
    }
  )
  // Below triggers a refresh of the Opportunties Results
  setFetchOpportunities(!fetchOpportunities);
  
  // Below re-toggles the Update Opportunity Form back to hidden.
  toggleMenu(visibility, setVisibility);
}