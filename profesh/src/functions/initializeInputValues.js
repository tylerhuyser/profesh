export default function initializeInputValues (opportunity, mode) {
  if (mode == "new") {
    let initialValues = {
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
    return initialValues
  } else if (mode == "update") {
    let initialValues = {
      companyName: opportunity.companyName,
      jobTitle: opportunity.jobTitle,
      seniorityLevel: opportunity.seniorityLevel,
      employmentName: opportunity.employmentName,
      location: opportunity.location,
      jobDescription: opportunity.jobDescription,
      opportunityStatus: opportunity.opportunityStatus,
      actionItems: opportunity.actionItems,
      dateOfLastContact: opportunity.dateOfLastContact,
      contactName: opportunity.className,
      contactEmail: opportunity.contactEmail,
      contactPhoneNumber: opportunity.contactPhoneNumber,
      companyLogo: opportunity.companyLogo
    }
  }
}