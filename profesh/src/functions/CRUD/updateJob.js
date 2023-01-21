import Axios from 'axios';
import handleCloseForm from '../handleCloseForm';

export default async function updateJob(inputValues, formMode, setFormMode, visibility, setVisibility, setActiveJob) {

  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${inputValues.id}`;
  console.log(airtableURL)
  await Axios.put(
    airtableURL,
    { fields: inputValues.fields },
    {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
        "Content-Type": "application/json",
      },
    }
  )
  // Below triggers a refresh of the Opportunties Results
    handleCloseForm(formMode, setFormMode, visibility, setVisibility, setActiveJob)
}