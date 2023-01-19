import gatherInputValues from "./gatherInputValues";
import updateOpportunity from "./updateOpportunity";

export default function validateForm(e, jobID, inputValues, fetchOpportunities, setFetchOpportunities, visibility, setVisibility) {
    
  console.log(jobID)
  console.log(inputValues)

  // Below prevents the form from automatically refreshing upon hitting "submit".
  e.preventDefault();
  
  if (inputValues.companyName === "") {
    let companyNameInput = document.querySelector(`company-name-input-${jobID}`);
    companyNameInput.classList.add('invalid')
  }
  if (inputValues.jobTitle === "") {
    let jobTitleInput = document.querySelector(`job-title-input-${jobID}`);
    jobTitleInput.classList.add('invalid')
  }
  if (inputValues.seniorityLevel === "") {
    let seniorityLevelInput = document.querySelector(`seniority-level-select-${jobID}`);
    seniorityLevelInput.classList.add('invalid')
  }
  if (inputValues.employmentType === "") {
    let employmentTypeInput = document.querySelector(`employment-type-select-${jobID}`);
    employmentTypeInput.classList.add('invalid')
  }
  if (inputValues.location === "") {
    let locationInput = document.querySelector(`location-input-${jobID}`);
    locationInput.classList.add('invalid')
  }
  if (inputValues.jobDescription === "") {
    inputValues.jobDescription ="N/A";
  }
  if (inputValues.opportunityStatus === "") {
    let opportunityStatusInput = document.querySelector(`opportunity-status-input-${jobID}`);
    opportunityStatusInput.classList.add('invalid')
  }
  if (inputValues.actionItems === "") {
    let actionItemsInput = document.querySelector(`action-items-input-${jobID}`);
    actionItemsInput.classList.add('invalid')
  }
  if (inputValues.dateOfLastContact === "") {
    let dateOfLastContactInput = document.querySelector(`date-of-last-contact-input-${jobID}`);
    dateOfLastContactInput.classList.add('invalid')
  }
  if (inputValues.contactName === "") {
    inputValues.contactName ="N/A";
  }
  if (inputValues.contactPhoneNumber === "") {
    inputValues.contactPhoneNumber ="N/A";
  }
  if (inputValues.contactEmail === "") {
    inputValues.contactEmail ="N/A";
  }

  // If all tests are passed, the Handle Post function, which triggers the AirTable API Call is made.
  if (inputValues.companyName !== "" && inputValues.jobTitle !== "" && inputValues.seniorityLevel !== "" && inputValues.employmentType !== "" && inputValues.location !== "" && inputValues.opportunityStatus !== "" && inputValues.actionItems !== "") {
    updateOpportunity(jobID, inputValues, fetchOpportunities, setFetchOpportunities, visibility, setVisibility);
  }
}