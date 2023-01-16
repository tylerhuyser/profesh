export default function gatherInputValues(opportunityID) {

  const inputValues = {
    companyName: null,
    jobTitle: null,
    seniorityLevel: null,
    employmentName: null,
    location: null,
    jobDescription: null,
    opportunityStatus: null,
    actionItems: null,
    dateOfLastContact: null,
    contactName: null,
    contactEmail: null,
    contactPhoneNumber: null,
    companyLogo: null
  }

  console.log(document.querySelector(`#company-name-input-${opportunityID}`))
  let inputCompanyName = document.querySelector(`#company-name-input-${opportunityID}`).value
  console.log(inputCompanyName)
  inputValues.companyName = inputCompanyName
  inputValues.companyLogo = `https://logo.clearbit.com/${inputCompanyName.replace(" ", "").replace("'", "")}.com`

  let inputJobTitle = document.querySelector('input[name=jobTitle]').value
  console.log(inputJobTitle)
  inputValues.jobTitle = inputJobTitle

  let inputSeniorityLevel = document.querySelector('select[name=seniorityLevel]').value
  inputValues.seniorityLevel = inputSeniorityLevel

  let inputEmploymentName = document.querySelector('select[name=employmentName]').value
  inputValues.employmentName = inputEmploymentName

  let inputLocation = document.querySelector('select[input=location]').value
  inputValues.location = inputLocation

  let inputJobDescription = document.querySelector('input[name=jobDescription]').value
  inputValues.jobDescription = inputJobDescription

  let inputOpportunityStatus = document.querySelector('select[name=opportunityStatus]').value
  inputValues.opportunityStatus = inputOpportunityStatus

  let inputActionItems = document.querySelector('select[name=actionItems]').value
  inputValues.actionItems = inputActionItems

  let inputDateOfLastContact = document.querySelector('input[name=dateOfLastContact]').value
  inputValues.dateOfLastContact = inputDateOfLastContact

  let inputContactName = document.querySelector('input[name=contactName]').value
  inputValues.contactName = inputContactName

  let inputContactEmail = document.querySelector('input[name=contactEmail]').value
  inputValues.contactEmail = inputContactEmail

  let inputContactPhoneNumber = document.querySelector('input[name=contactPhoneNumber]').value
  inputValues.contactPhoneNumber = inputContactPhoneNumber

  return inputValues
}