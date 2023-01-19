import React, { useState } from 'react';
import "./OpportunityForm.css"

import initializeInputValues from '../functions/initializeInputValues';
import toggleMenu from '../functions/toggleMenu';
import handleInputChange from '../functions/handleInputChange'
import validateForm from '../functions/validateForm';

// Below function creates and handles the an update (push) to an opporunity using the "Update Opportunity Form"
export default function OpportunityForm (props) {

   // Below destructures the "fetch opportunities" property -- allows the page to automatically refresh after a new job is submitted
  const { idx, job, formMode } = props

  const { fetchOpportunities, setFetchOpportunities } = props
  const { visibility, setVisibility } = props

  const [inputValues, setInputValues] = useState(() => initializeInputValues(job, formMode))


  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "UpdateOpportunityForm.css"
  let visibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  if (visibility) {
    visibilityClass = "visible";
  }

  return (
    <div className={`job-form-container ${visibilityClass}`} id={`${formMode}-job-form-container-${idx}`} >
         
      <div className='job-form-copy' id='job-form-title'>{formMode === "new" ? "Add a New Opportunity" : "Update Opportunity" }</div>
        
      <label className='job-form-input-label' id={`company-name-label-${idx}`} htmlFor="companyName">Company Name:</label>
          <input className="job-form-input" id={`company-name-input-${idx}`} type="text" name="companyName" defaultValue={job.fields.companyName} value={inputValues.companyName} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='job-form-input-label' id={`job-title-label-${idx}`} htmlFor="jobTitle">Job Title:</label>
        <input className="job-form-input" id={`job-title-input-${idx}`} type="text" name="jobTitle" defaultValue={job.fields.jobTitle} value={inputValues.jobTitle} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='job-form-select-label' id={`seniority-level-label-${idx}`} htmlFor="seniorityLevel">Seniority Level:</label>
        <select className="job-form-select" id={`seniority-level-select-${idx}`} placeholder="Select option" name="seniorityLevel" defaultValue={job.fields.seniorityLevel} value={inputValues.seniorityLevel} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='job-form-select-option' id={`seniority-level-select-option-disabled-value-${idx}`} disabled value="">Select An Option</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-entry-level-${idx}`} value="Entry Level">Entry-Level</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-associate-${idx}`} value="Associate">Associate</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-manager-${idx}`} value="Manager">Manager</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-director-${idx}`} value="Director">Director</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-vp-${idx}`} value="VP">VP</option>
          <option className='job-form-select-option' id={`seniority-level-select-option-cxo-${idx}`} value="CXO">CXO</option>
        </select>

      <label className='job-form-select-label' id={`employment-type-label-${idx}`} htmlFor="employmentType">Employment Type:</label>
        <select className="job-form-select" id={`employment-type-input-${idx}`} name="employmentType" defaultValue={job.fields.employmentType} value={inputValues.employmentType} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='job-form-select-option' id={`employment-type-select-option-disabled-value-${idx}`} disabled value="">Select An Option</option>
          <option className='job-form-select-option' id={`employment-type-select-option-full-time-${idx}`} value="Full-Time">Full-Time</option>
          <option className='job-form-select-option' id={`employment-type-select-option-part-time-${idx}`} value="Part-Time">Part-Time</option>
          <option className='job-form-select-option' id={`employment-type-select-option-contract-${idx}`} value="Contract">Contract</option>
          <option className='job-form-select-option' id={`employment-type-select-option-temp-${idx}`} value="Temp">Temp</option>
          <option className='job-form-select-option' id={`employment-type-select-option-internship-${idx}`} value="Internship">Internship</option>
          <option className='job-form-select-option' id={`employment-type-select-option-volunteer-${idx}`} value="Volunteer">Volunteer</option>
        </select>

      <label className='job-form-input-label' id={`location-label-${idx}`} htmlFor="location">Location:</label>
        <input className="job-form-input" id={`location-input-${idx}`} type="text" name="location" defaultValue={job.fields.location} value={inputValues.location} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='job-form-input-label' id={`job-description-label-${idx}`} htmlFor="jobDescription">Job Description:</label>
        <input className="job-form-input" id={`job-description-input ${idx}`} type="text" name="jobDescription" defaultValue={job.fields.jobDescription} value={inputValues.jobDescription} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='job-form-select-label' htmlFor="opportunityStatus">Opportunity Status</label>
        <select className="job-form-select" name="opportunityStatus" id={`job-status-input-${idx}`} defaultValue={job.fields.opportunityStatus} value={inputValues.opportunityStatus} onChange={(e) => handleInputChange(e, setInputValues)}>
          <option className='job-form-select-option' id={`job-status-disabled-value-${idx}`}disabled value=""> Select An Option </option>
          <option className='job-form-select-option' id={`job-status-applied-${idx}`}value="Applied">Applied</option>
          <option className='job-form-select-option' id={`job-status-phone-screen-${idx}`}value="Phone Screening">Phone Screening</option>
          <option className='job-form-select-option' id={`job-status-phone-screen-pending-descision-${idx}`}value="Phone Screening, Pending Decision">Phone Screening, Pending Decision</option>
          <option className='job-form-select-option' id={`job-status-interview-${idx}`} value="Interview">Interview</option>
          <option className='job-form-select-option' id={`job-status-interviewed-pending-descision-${idx}`}value="Interviewed, Pending Decision">Interviewed, Pending Decision</option>
          <option className='job-form-select-option' id={`job-status-case-study-${idx}`} value="Case Study">Case Study/Exercise</option>
          <option className='job-form-select-option' id={`job-status-offer-${idx}`} value="Offer">Offer</option>
          <option className='job-form-select-option' id={`job-status-negotiation-${idx}`} value="Negotiation">Negotiation</option>
        </select>
            
      <label className='job-form-select-label' htmlFor="actionItems">Action Item(s):</label>
        <select className="job-form-select" id={`action-items-input-${idx}`} type="text" name="actionItems" defaultValue={job.fields.actionItems} value={inputValues.actionItems} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='job-form-select-option' id={`action-items-disabled-value-${idx}`} disabled value=""> Select An Option </option>
          <option className='job-form-select-option' id={`action-items-prepare-resume-${idx}`} value="Prepare Resume">Prepare Resume</option>
          <option className='job-form-select-option' id={`action-items-write-cover-letter-${idx}`} value="Write Cover Letter">Write Cover Letter</option>
          <option className='job-form-select-option' id={`action-items-submit-application-${idx}`} value="Submit Application">Submit Application</option>
          <option className='job-form-select-option' id={`action-items-followup-email-${idx}`} value="Follow-Up E-mail">Follow-Up E-mail</option>
          <option className='job-form-select-option' id={`action-items-phone-screen-prep-${idx}`} value="Phone Screen Prep">Phone Screen Prep</option>
          <option className='job-form-select-option' id={`action-items-interview-prep-${idx}`} value="Interview Prep">Interview Prep</option>
          <option className='job-form-select-option' id={`action-items-complete-project-${idx}`} value="Complete Case Study/Project">Complete Case Study/Project</option>
        </select>
            
      <label className='job-form-input-label' id={`date-of-last-contact-label-${idx}`} htmlFor="dateOfLastContact">Date of Last Contact:</label>
        <input className="job-form-input" id={`date-of-last-contact-input ${idx}`} type="text" name="dateOfLastContact" defaultValue={job.fields.dateOfLastContact} value={inputValues.dateOfLastContact} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='job-form-input-label' id={`contact-name-label-${idx}`} htmlFor="contactName">Contact Name:</label>
        <input className="job-form-input" id={`contact-name-input-${idx}`} type="text" name="contactName" defaultValue={job.fields.contactName} value={inputValues.contactName} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='job-form-input-label' id={`contact-email-label-${idx}`} htmlFor="contactEmail">Contact E-Mail:</label>
        <input className="job-form-input" id={`contact-email-input-${idx}`} type="text" name="contactEmail" defaultValue={job.fields.contactEmail} value={inputValues.contactEmail} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='job-form-input-label' id={`contact-phone-number-label-${idx}`} htmlFor="contactPhoneNumber">Contact Phone Number:</label>
        <input className="job-form-input" id={`contact-phone-number-input-${idx}`} type="text" name="contactPhoneNumber" defaultValue={job.fields.contactPhoneNumber} value={inputValues.contactPhoneNumber} onChange={(e) => handleInputChange(e, setInputValues)} />
      
      
      <div className="job-form-buttons-container">
        <button className="job-form-button" id="job-form-submit-button" type="submit" onClick={(e) => validateForm(e, idx, inputValues, fetchOpportunities, setFetchOpportunities, visibility, setVisibility)} >
          Submit</button>
        
        <button className="job-form-button" id="job-form-cancel-button" onClick={() => toggleMenu(visibility, setVisibility)} >
          Cancel</button>
        
      </div>
      
    </div>
  );
}