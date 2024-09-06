import api from './api-config'

export default async function getTrackedJobs() {
  try {
    const response = await api.get()
    // console.log(response)
    return response.data.records
  } catch (error) {
      throw error
  }
}