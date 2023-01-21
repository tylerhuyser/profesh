export default function initializeInputValues (job, formMode) {
  if (formMode === "manually add new job") {
    let initialValues = {
      id: Math.random(),
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
  } else if (formMode === "update tracked job" || formMode === "add new job from LinkedIn") {
    console.log(job)
    let initialValues = {
      id: job.id,
      companyName: job.fields.companyName,
      jobTitle: job.fields.jobTitle,
      seniorityLevel: job.fields.seniorityLevel,
      employmentType: job.fields.employmentType,
      location: job.fields.location,
      jobDescription: job.fields.jobDescription,
      opportunityStatus: job.fields.opportunityStatus,
      actionItems: job.fields.actionItems,
      dateOfLastContact: job.fields.dateOfLastContact,
      contactName: job.fields.contactName,
      contactEmail: job.fields.contactEmail,
      contactPhoneNumber: job.fields.contactPhoneNumber,
      companyLogo: job.fields.companyLogo
    }
    return initialValues
  }
}