import Axios from 'axios';

//Below function handles deletion of an opportunity from the Airtable API.

export default async function deleteJob(jobID, jobs, setJobs) {
  console.log(jobID)
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${jobID}`

  await Axios.delete(airtableURL, {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
    },
  });
  setJobs((prevState) =>
  prevState.filter((job) => job.id !== jobID))
};