import Axios from 'axios';
import handleCloseForm from '../handleCloseForm';

export default async function updateJob(inputValues, jobs, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob) {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${inputValues.id}`;
  console.log(airtableURL)
  const updatedJob = await Axios.put(
    airtableURL,
    { fields: inputValues.fields },
    {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )
  setJobs(prevState => 
    prevState.map((job) => { return job.id === updatedJob.data.id ? updatedJob.data : job}
  ))
  handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
}