import Axios from 'axios';
import handleCloseForm from '../handleCloseForm';

export default async function addJob(inputValues, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob) {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/`;
  const newJob = await Axios.post(
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
    [...prevState, newJob.data]
  )
  handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
}