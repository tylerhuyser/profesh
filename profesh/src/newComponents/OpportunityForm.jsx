import React, { useState } from 'react';
import "./OpportunityForm.css"

import initializeInputValues from '../functions/initializeInputValues';
import toggleMenu from '../functions/toggleMenu';
import handleInputChange from '../functions/handleInputChange'
import validateForm from '../functions/validateForm';

// Below function creates and handles the an update (push) to an opporunity using the "Update Opportunity Form"
export default function OpportunityForm (props) {

   // Below destructures the "fetch opportunities" property -- allows the page to automatically refresh after a new job is submitted
  const { activeJob, formMode } = props

  const { fetchOpportunities, setFetchOpportunities } = props
  const { visibility, setVisibility } = props

  const [inputValues, setInputValues] = useState(() => initializeInputValues(activeJob, formMode))


  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "UpdateOpportunityForm.css"
  let visibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  if (visibility) {
    visibilityClass = "visible";
  }

  return (
    <div className={`job-form-container ${visibilityClass}`} id={`${formMode}-job-form-container`} >
        
      <div className='job-form-inputs-container'>
      <div className='job-form-copy' id='job-form-title'>{formMode === "update tracked job" ? "Update Opportunity" : "Add a New Opportunity" }</div>
        {/* <label className='job-form-input-label' id={`company-name-label`} htmlFor="companyName">Company Name:</label> */}
            <input className="job-form-input" id={`company-name-input`} type="text" name="companyName" defaultValue={activeJob ? activeJob.fields.companyName : 'Company Name'} value={inputValues.companyName} onChange={(e) => handleInputChange(e, setInputValues)} />
              
        {/* <label className='job-form-input-label' id={`job-title-label`} htmlFor="jobTitle">Job Title:</label> */}
        <input className="job-form-input" id={`job-title-input`} type="text" name="jobTitle" defaultValue={activeJob ? activeJob.fields.jobTitle : 'Job Title'} value={inputValues.jobTitle} onChange={(e) => handleInputChange(e, setInputValues)} />
              
        {/* <label className='job-form-select-label' id={`seniority-level-label`} htmlFor="seniorityLevel">Seniority Level:</label> */}
          <select className="job-form-select" id={`seniority-level-select`} placeholder="Select option" name="seniorityLevel" defaultValue={activeJob ? activeJob.fields.seniorityLevel : 'Seniority Level'} value={inputValues.seniorityLevel} onChange={(e) => handleInputChange(e, setInputValues)} >
            <option className='job-form-select-option' id={`seniority-level-select-option-disabled-value`} disabled value={activeJob ? activeJob.fields.seniorityLevel : 'Seniority Level'}>{activeJob ? activeJob.fields.seniorityLevel : 'Seniority Level'}</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-entry-level`} value="Entry Level">Entry-Level</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-associate`} value="Associate">Associate</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-manager`} value="Manager">Manager</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-director`} value="Director">Director</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-vp`} value="VP">VP</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-cxo`} value="CXO">CXO</option>
          </select>

        {/* <label className='job-form-select-label' id={`employment-type-label`} htmlFor="employmentType">Employment Type:</label> */}
          <select className="job-form-select" id={`employment-type-input`} name="employmentType" defaultValue={activeJob ? activeJob.fields.employmentType : "Employment Type"} value={inputValues.employmentType} onChange={(e) => handleInputChange(e, setInputValues)} >
            <option className='job-form-select-option' id={`employment-type-select-option-disabled-value`} disabled value={activeJob ? activeJob.fields.employmentType : "Employment Type"}>{activeJob ? activeJob.fields.employmentType : "Employment Type"}</option>
            <option className='job-form-select-option' id={`employment-type-select-option-full-time`} value="Full-Time">Full-Time</option>
            <option className='job-form-select-option' id={`employment-type-select-option-part-time`} value="Part-Time">Part-Time</option>
            <option className='job-form-select-option' id={`employment-type-select-option-contract`} value="Contract">Contract</option>
            <option className='job-form-select-option' id={`employment-type-select-option-temp`} value="Temp">Temp</option>
            <option className='job-form-select-option' id={`employment-type-select-option-internship`} value="Internship">Internship</option>
            <option className='job-form-select-option' id={`employment-type-select-option-volunteer`} value="Volunteer">Volunteer</option>
          </select>

        {/* <label className='job-form-input-label' id={`location-label`} htmlFor="location">Location:</label> */}
          <input className="job-form-input" id={`location-input`} type="text" name="location" defaultValue={activeJob ? activeJob.fields.location  : 'Location'} value={inputValues.location} onChange={(e) => handleInputChange(e, setInputValues)} />
          
        {/* <label className='job-form-input-label' id={`job-description-label`} htmlFor="jobDescription">Job Description:</label> */}
          <input className="job-form-input" id={`job-description-input`} type="text" name="jobDescription" defaultValue={activeJob ? activeJob.fields.jobDescription : "Job Description"} value={inputValues.jobDescription} onChange={(e) => handleInputChange(e, setInputValues)} />
          
        {/* <label className='job-form-select-label' htmlFor="opportunityStatus">Opportunity Status</label> */}
          <select className="job-form-select" name="opportunityStatus" id={`job-status-input`} defaultValue={activeJob ? activeJob.fields.opportunityStatus : "Opportunity Status"} value={inputValues.opportunityStatus} onChange={(e) => handleInputChange(e, setInputValues)}>
            <option className='job-form-select-option' id={`job-status-disabled-value`}disabled value={activeJob ? activeJob.fields.opportunityStatus : "Opportunity Status"}> {activeJob ? activeJob.fields.opportunityStatus : "Opportunity Status"} </option>
            <option className='job-form-select-option' id={`job-status-applied`}value="Applied">Applied</option>
            <option className='job-form-select-option' id={`job-status-phone-screen`}value="Phone Screening">Phone Screening</option>
            <option className='job-form-select-option' id={`job-status-phone-screen-pending-descision`}value="Phone Screening, Pending Decision">Phone Screening, Pending Decision</option>
            <option className='job-form-select-option' id={`job-status-interview`} value="Interview">Interview</option>
            <option className='job-form-select-option' id={`job-status-interviewed-pending-descision`}value="Interviewed, Pending Decision">Interviewed, Pending Decision</option>
            <option className='job-form-select-option' id={`job-status-case-study`} value="Case Study">Case Study/Exercise</option>
            <option className='job-form-select-option' id={`job-status-offer`} value="Offer">Offer</option>
            <option className='job-form-select-option' id={`job-status-negotiation`} value="Negotiation">Negotiation</option>
          </select>
              
        {/* <label className='job-form-select-label' htmlFor="actionItems">Action Item(s):</label> */}
          <select className="job-form-select" id={`action-items-input`} type="text" name="actionItems" defaultValue={activeJob ? activeJob.fields.actionItems : 'Action Items'} value={inputValues.actionItems} onChange={(e) => handleInputChange(e, setInputValues)} >
            <option className='job-form-select-option' id={`action-items-disabled-value`} disabled value={activeJob ? activeJob.fields.actionItems : 'Action Items'}> Select An Option </option>
            <option className='job-form-select-option' id={`action-items-prepare-resume`} value="Prepare Resume">Prepare Resume</option>
            <option className='job-form-select-option' id={`action-items-write-cover-letter`} value="Write Cover Letter">Write Cover Letter</option>
            <option className='job-form-select-option' id={`action-items-submit-application`} value="Submit Application">Submit Application</option>
            <option className='job-form-select-option' id={`action-items-followup-email`} value="Follow-Up E-mail">Follow-Up E-mail</option>
            <option className='job-form-select-option' id={`action-items-phone-screen-prep`} value="Phone Screen Prep">Phone Screen Prep</option>
            <option className='job-form-select-option' id={`action-items-interview-prep`} value="Interview Prep">Interview Prep</option>
            <option className='job-form-select-option' id={`action-items-complete-project`} value="Complete Case Study/Project">Complete Case Study/Project</option>
          </select>
              
        {/* <label className='job-form-input-label' id={`date-of-last-contact-label`} htmlFor="dateOfLastContact">Date of Last Contact:</label> */}
          <input className="job-form-input" id={`date-of-last-contact-input`} type="text" name="dateOfLastContact" defaultValue={activeJob ? activeJob.fields.dateOfLastContact : 'Date of Last Contact'} value={inputValues.dateOfLastContact} onChange={(e) => handleInputChange(e, setInputValues)} />
          
        {/* <label className='job-form-input-label' id={`contact-name-label`} htmlFor="contactName">Contact Name:</label> */}
          <input className="job-form-input" id={`contact-name-input`} type="text" name="contactName" defaultValue={activeJob ? activeJob.fields.contactName : 'Contact Name'} value={inputValues.contactName} onChange={(e) => handleInputChange(e, setInputValues)} />
              
        {/* <label className='job-form-input-label' id={`contact-email-label`} htmlFor="contactEmail">Contact E-Mail:</label> */}
          <input className="job-form-input" id={`contact-email-input`} type="text" name="contactEmail" defaultValue={activeJob ? activeJob.fields.contactEmail : "Contact Email"} value={inputValues.contactEmail} onChange={(e) => handleInputChange(e, setInputValues)} />
              
        {/* <label className='job-form-input-label' id={`contact-phone-number-label`} htmlFor="contactPhoneNumber">Contact Phone Number:</label> */}
          <input className="job-form-input" id={`contact-phone-number-input`} type="text" name="contactPhoneNumber" defaultValue={activeJob ? activeJob.fields.contactPhoneNumber : "Contact Email"} value={inputValues.contactPhoneNumber} onChange={(e) => handleInputChange(e, setInputValues)} />
        
        
        <div className="job-form-buttons-container">
          <button className="job-form-button" id="job-form-submit-button" type="submit" onClick={(e) => validateForm(e, inputValues, fetchOpportunities, setFetchOpportunities, visibility, setVisibility)} >
            Submit</button>
          
          <button className="job-form-button" id="job-form-cancel-button" onClick={() => toggleMenu(visibility, setVisibility)} >
            Cancel</button>
          
        </div>
      </div>
    </div>
  );
}