import React, { useState } from 'react';
import "./OpportunityForm.css"

import initializeInputValues from '../functions/initializeInputValues';
import handleCloseForm from '../functions/handleCloseForm';
import handleInputChange from '../functions/handleInputChange'
import validateForm from '../functions/validateForm';

export default function OpportunityForm (props) {

  const { jobs, setJobs } = props
  const { activeJob, setActiveJob } = props
  const { formMode, setFormMode } = props
  const { visibility, setVisibility } = props

  const [inputValues, setInputValues] = useState(() => initializeInputValues(activeJob, formMode))

  let visibilityClass = "hidden";

  if (visibility) {
    visibilityClass = "visible";
  }

  return (
    <div className={`job-form-container ${visibilityClass}`} id={`${formMode}-job-form-container`} >
        
      <div className='job-form-inputs-container'>
      <div className='job-form-copy' id='job-form-title'>{formMode === "update tracked job" ? "Update Opportunity" : "Add a New Opportunity" }</div>

            <input className="job-form-input" id={`company-name-input`} type="text" name="companyName" placeholder='Company Name' value={inputValues.fields.companyName} onChange={(e) => handleInputChange(e, setInputValues)} />
              
        <input className="job-form-input" id={`job-title-input`} type="text" name="jobTitle" placeholder='Job Title' value={inputValues.fields.jobTitle} onChange={(e) => handleInputChange(e, setInputValues)} />
              
          <select className="job-form-select" id={`seniority-level-select`} name="seniorityLevel" value={inputValues.fields.seniorityLevel} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='job-form-select-option' id={`seniority-level-select-option-disabled-value`} value='' disabled selected>{inputValues.fields.seniorityLevel ? inputValues.fields.seniorityLevel : '-- Select Seniority Level --'}</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-entry-level`} value="Entry Level">Entry-Level</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-associate`} value="Associate">Associate</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-manager`} value="Manager">Manager</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-director`} value="Director">Director</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-vp`} value="VP">VP</option>
            <option className='job-form-select-option' id={`seniority-level-select-option-cxo`} value="CXO">CXO</option>
          </select>

          <select className="job-form-select" id={`employment-type-input`} name="employmentType" value={inputValues.fields.employmentType} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='job-form-select-option' id={`employment-type-select-option-disabled-value`} value='' disabled selected>{inputValues.fields.employmentType ? inputValues.fields.employmentType : '-- Select Employment Type --'}</option>
            <option className='job-form-select-option' id={`employment-type-select-option-full-time`} value="Full-Time">Full-Time</option>
            <option className='job-form-select-option' id={`employment-type-select-option-part-time`} value="Part-Time">Part-Time</option>
            <option className='job-form-select-option' id={`employment-type-select-option-contract`} value="Contract">Contract</option>
            <option className='job-form-select-option' id={`employment-type-select-option-temp`} value="Temp">Temp</option>
            <option className='job-form-select-option' id={`employment-type-select-option-internship`} value="Internship">Internship</option>
            <option className='job-form-select-option' id={`employment-type-select-option-volunteer`} value="Volunteer">Volunteer</option>
          </select>

          <input className="job-form-input" id={`location-input`} type="text" name="location" placeholder='Location' value={inputValues.fields.location} onChange={(e) => handleInputChange(e, setInputValues)} />
          
          <input className="job-form-input" id={`job-description-input`} type="text" name="jobDescription" placeholder='Job Description' value={inputValues.fields.jobDescription} onChange={(e) => handleInputChange(e, setInputValues)} />
          
          <select className="job-form-select" name="opportunityStatus" id={`job-status-input`} value={inputValues.fields.opportunityStatus} onChange={(e) => handleInputChange(e, setInputValues)} required>
          <option className='job-form-select-option' id={`job-status-disabled-value`} value="" disabled selected>{inputValues.fields.opportunityStatus ? inputValues.fields.opportunityStatus : '-- Select Opportunity Status --'}</option>
            <option className='job-form-select-option' id={`job-status-applied`}value="Applied">Applied</option>
            <option className='job-form-select-option' id={`job-status-phone-screen`}value="Phone Screening">Phone Screening</option>
            <option className='job-form-select-option' id={`job-status-phone-screen-pending-descision`}value="Phone Screening, Pending Decision">Phone Screening, Pending Decision</option>
            <option className='job-form-select-option' id={`job-status-interview`} value="Interview">Interview</option>
            <option className='job-form-select-option' id={`job-status-interviewed-pending-descision`}value="Interviewed, Pending Decision">Interviewed, Pending Decision</option>
            <option className='job-form-select-option' id={`job-status-case-study`} value="Case Study">Case Study/Exercise</option>
            <option className='job-form-select-option' id={`job-status-offer`} value="Offer">Offer</option>
            <option className='job-form-select-option' id={`job-status-negotiation`} value="Negotiation">Negotiation</option>
          </select>
              
          <select className="job-form-select" id={`action-items-input`} type="text" name="actionItems" value={inputValues.fields.actionItems} onChange={(e) => handleInputChange(e, setInputValues)} >
            <option className='job-form-select-option' id={`action-items-disabled-value`} value='' disabled selected>{inputValues.fields.actionItems ? inputValues.fields.actionItems : '-- Select Action Item --'}</option>
            <option className='job-form-select-option' id={`action-items-prepare-resume`} value="Prepare Resume">Prepare Resume</option>
            <option className='job-form-select-option' id={`action-items-write-cover-letter`} value="Write Cover Letter">Write Cover Letter</option>
            <option className='job-form-select-option' id={`action-items-submit-application`} value="Submit Application">Submit Application</option>
            <option className='job-form-select-option' id={`action-items-followup-email`} value="Follow-Up E-mail">Follow-Up E-mail</option>
            <option className='job-form-select-option' id={`action-items-phone-screen-prep`} value="Phone Screen Prep">Phone Screen Prep</option>
            <option className='job-form-select-option' id={`action-items-interview-prep`} value="Interview Prep">Interview Prep</option>
            <option className='job-form-select-option' id={`action-items-complete-project`} value="Complete Case Study/Project">Complete Case Study/Project</option>
          </select>
              
          <input className="job-form-input" id={`date-of-last-contact-input`} type="text" name="dateOfLastContact" placeholder='Date of Last Contact' value={inputValues.fields.dateOfLastContact} onChange={(e) => handleInputChange(e, setInputValues)} />
          
          <input className="job-form-input" id={`contact-name-input`} type="text" name="contactName" placeholder='Contact Name' value={inputValues.fields.contactName} onChange={(e) => handleInputChange(e, setInputValues)} />
              
          <input className="job-form-input" id={`contact-email-input`} type="text" name="contactEmail" placeholder='Contact Email' value={inputValues.fields.contactEmail} onChange={(e) => handleInputChange(e, setInputValues)} />
              
          <input className="job-form-input" id={`contact-phone-number-input`} type="text" name="contactPhoneNumber" placeholder='Contact Phone Number'  value={inputValues.fields.contactPhoneNumber} onChange={(e) => handleInputChange(e, setInputValues)} />
        
        <div className="job-form-buttons-container">
          <button className="job-form-button" id="job-form-submit-button" type="submit" onClick={(e) => validateForm(e, inputValues, jobs, setJobs, formMode, setFormMode, visibility, setVisibility, setActiveJob)} >
            Submit</button>
          
          <button className="job-form-button" id="job-form-cancel-button" onClick={() => handleCloseForm(setFormMode, visibility, setVisibility, setActiveJob)} >
            Cancel</button>
          
        </div>
      </div>
    </div>
  );
}