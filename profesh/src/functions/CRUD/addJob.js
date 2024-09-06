import api from './api-config'
import handleCloseForm from '../handleCloseForm';

export default async function addJob(inputValues, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob) {
  try {
    const newJob = await api.post( "",
      { fields: inputValues.fields },
    )
    setJobs(prevState => 
      [...prevState, newJob.data]
    )
    handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
  } catch (error) {
      throw error
  }
}