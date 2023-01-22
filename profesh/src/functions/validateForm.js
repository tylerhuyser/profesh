import addJob from "./CRUD/addJob"
import updateJob from "./CRUD/updateJob";

export default function validateForm(e, inputValues, jobs, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob) {

  e.preventDefault();
  
  if (inputValues.fields.companyName === "") {
    let companyNameInput = document.querySelector(`company-name-input`);
    companyNameInput.classList.add('invalid')
  }
  if (inputValues.fields.jobTitle === "") {
    let jobTitleInput = document.querySelector(`job-title-input`);
    jobTitleInput.classList.add('invalid')
  }
  if (inputValues.fields.seniorityLevel === "") {
    let seniorityLevelInput = document.querySelector(`seniority-level-select`);
    seniorityLevelInput.classList.add('invalid')
  }
  if (inputValues.fields.employmentType === "") {
    let employmentTypeInput = document.querySelector(`employment-type-select`);
    employmentTypeInput.classList.add('invalid')
  }
  if (inputValues.fields.location === "") {
    let locationInput = document.querySelector(`location-input`);
    locationInput.classList.add('invalid')
  }
  if (inputValues.fields.jobDescription === "") {
    inputValues.fields.jobDescription ="N/A";
  }
  if (inputValues.fields.opportunityStatus === "") {
    let opportunityStatusInput = document.querySelector(`opportunity-status-input`);
    opportunityStatusInput.classList.add('invalid')
  }
  if (inputValues.fields.actionItems === "") {
    let actionItemsInput = document.querySelector(`action-items-input`);
    actionItemsInput.classList.add('invalid')
  }
  if (inputValues.fields.dateOfLastContact === "") {
    let dateOfLastContactInput = document.querySelector(`date-of-last-contact-input`);
    dateOfLastContactInput.classList.add('invalid')
  }
  if (inputValues.fields.contactName === "") {
    inputValues.fields.contactName ="N/A";
  }
  if (inputValues.fields.contactPhoneNumber === "") {
    inputValues.fields.contactPhoneNumber ="N/A";
  }
  if (inputValues.fields.contactEmail === "") {
    inputValues.fields.contactEmail ="N/A";
  }

  // If all tests are passed, the Handle Post function, which triggers the AirTable API Call is made.
  if (inputValues.fields.companyName !== "" && inputValues.fields.jobTitle !== "" && inputValues.fields.seniorityLevel !== "" && inputValues.fields.employmentType !== "" && inputValues.fields.location !== "" && inputValues.fields.opportunityStatus !== "" && inputValues.fields.actionItems !== "") {
    if (formMode === "add new job from LinkedIn" || formMode === "manually add new job") {
      addJob(inputValues, setJobs, setFormMode, visibility, setVisibility, setActiveJob)
    } else if (formMode === "update tracked job") {
      updateJob(inputValues, jobs, setJobs, setFormMode, visibility, setVisibility, setActiveJob);
    }
  }
}