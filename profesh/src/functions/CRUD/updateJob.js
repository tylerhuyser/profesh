import api from "./api-config"
import handleCloseForm from '../handleCloseForm';

export default async function updateJob(inputValues, jobs, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob) {
  try {
    const updatedJob = await api.put(
      `${inputValues.id}`,
      { fields: inputValues.fields }
    )
    setJobs(prevState => 
      prevState.map((job) => { return job.id === updatedJob.data.id ? updatedJob.data : job}
    ))
    handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
  } catch (error) {
    throw error
  }
}