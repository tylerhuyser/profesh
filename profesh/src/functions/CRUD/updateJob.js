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
        "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
        "Content-Type": "application/json",
      },
    }
  )

  console.log(updatedJob)

  setJobs(prevState => {
    let newState = []
    prevState.map((job) => {
      if (job.id !== updatedJob.data.id) {
        newState.push(job)
      } else if (job.id === updatedJob.data.id) {
        newState.push(updatedJob.data)
      }
    })
    return newState
  })

  handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
}