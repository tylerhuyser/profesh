import Axios from 'axios';

export default async function getTrackedJobs() {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities`
  const response = await Axios.get(airtableURL, {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
    },
  });
  console.log(response)

  return response.data.records
}