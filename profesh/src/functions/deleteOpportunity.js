import Axios from 'axios';

//Below function handles deletion of an opportunity from the Airtable API.

export default async function deleteOpportunity (idx, fetchOpportunities, setFetchOpportunities) {
  console.log(idx)
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${idx}`

  await Axios.delete(airtableURL, {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
    },
  });
  setFetchOpportunities(!fetchOpportunities);
};