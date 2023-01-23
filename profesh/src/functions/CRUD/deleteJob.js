import Axios from 'axios';

export default async function deleteJob(jobID, setJobs) {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${jobID}`
  await Axios.delete(airtableURL, {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
    },
  });
  setJobs((prevState) => prevState.filter((job) => job.id !== jobID))
};