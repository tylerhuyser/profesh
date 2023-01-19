export default function initializeInputValues (job, formMode) {
  if (formMode === "new") {
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
  } else if (formMode === "update") {
    let initialValues = {
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      seniorityLevel: job.seniorityLevel,
      employmentName: job.employmentName,
      location: job.location,
      jobDescription: job.jobDescription,
      opportunityStatus: job.opportunityStatus,
      actionItems: job.actionItems,
      dateOfLastContact: job.dateOfLastContact,
      contactName: job.className,
      contactEmail: job.contactEmail,
      contactPhoneNumber: job.contactPhoneNumber,
      companyLogo: job.companyLogo
    }
  }
}