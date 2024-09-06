import api from "./api-config"

export default async function deleteJob(jobID, setJobs) {
  try {
    await api.delete(`${jobID}`);
    setJobs((prevState) => prevState.filter((job) => job.id !== jobID))
   }
  catch (error) {
    throw error
  }

};