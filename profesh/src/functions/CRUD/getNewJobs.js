import Axios from 'axios';

export default async function getNewJobs() {
  const apiURL = `https://www.themuse.com/api/public/jobs?page=75`
  const response = await Axios.get(apiURL)
  console.log(response)

  return response.data.results
}