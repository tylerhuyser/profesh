import React, { useState } from 'react';
import "./OpportunityForm.css"

import initializeInputValues from '../functions/initializeInputValues';
import toggleMenu from '../../../functions/toggleMenu';
import handleInputChange from '../../../functions/handleInputChange';
import validateForm from '../../../functions/validateForm';

// Below function creates and handles the an update (push) to an opporunity using the "Update Opportunity Form"
export default function OpportunityForm (props) {

   // Below destructures the "fetch opportunities" property -- allows the page to automatically refresh after a new opportunity is submitted
  const { fetchOpportunities, setFetchOpportunities } = props
  const { updateVisibility, setUpdateVisibility } = props
  const { opportunity, mode } = props

  const [inputValues, setInputValues] = useState(() => initializeInputValues(opportunity, mode))


  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "UpdateOpportunityForm.css"
  let visibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  if (updateVisibility) {
    visibilityClass = "visible";
  }

  return (
    <div className={`opportunity-form-container ${visibilityClass}`} id={`${mode}-opportunity-form-container-${opportunity.id}`} >
         
      <div className='opportunity-form-copy' id='opportunity-form-title'>{mode == "new" ? "Add a New Opportunity" : "Update Opportunity" }</div>
        
      <label className='opportunity-form-input-label' id={`company-name-label-${opportunity.id}`} htmlFor="companyName">Company Name:</label>
          <input className="opportunity-form-input" id={`company-name-input-${opportunity.id}`} type="text" name="companyName" defaultValue={opportunity.fields.companyName} value={inputValues.companyName} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='opportunity-form-input-label' id={`job-title-label-${opportunity.id}`} htmlFor="jobTitle">Job Title:</label>
        <input className="opportunity-form-input" id={`job-title-input-${opportunity.id}`} type="text" name="jobTitle" defaultValue={opportunity.fields.jobTitle} value={inputValues.jobTitle} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='opportunity-form-select-label' id={`seniority-level-label-${opportunity.id}`} htmlFor="seniorityLevel">Seniority Level:</label>
        <select className="opportunity-form-select" id={`seniority-level-select-${opportunity.id}`} placeholder="Select option" name="seniorityLevel" defaultValue={opportunity.fields.seniorityLevel} value={inputValues.seniorityLevel} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-disabled-value-${opportunity.id}`} disabled value="">Select An Option</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-entry-level-${opportunity.id}`} value="Entry Level">Entry-Level</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-associate-${opportunity.id}`} value="Associate">Associate</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-manager-${opportunity.id}`} value="Manager">Manager</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-director-${opportunity.id}`} value="Director">Director</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-vp-${opportunity.id}`} value="VP">VP</option>
          <option className='opportunity-form-select-option' id={`seniority-level-select-option-cxo-${opportunity.id}`} value="CXO">CXO</option>
        </select>

      <label className='opportunity-form-select-label' id={`employment-type-label-${opportunity.id}`} htmlFor="employmentType">Employment Type:</label>
        <select className="opportunity-form-select" id={`employment-type-input-${opportunity.id}`} name="employmentType" defaultValue={opportunity.fields.employmentType} value={inputValues.employmentType} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='opportunity-form-select-option' id={`employment-type-select-option-disabled-value-${opportunity.id}`} disabled value="">Select An Option</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-full-time-${opportunity.id}`} value="Full-Time">Full-Time</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-part-time-${opportunity.id}`} value="Part-Time">Part-Time</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-contract-${opportunity.id}`} value="Contract">Contract</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-temp-${opportunity.id}`} value="Temp">Temp</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-internship-${opportunity.id}`} value="Internship">Internship</option>
          <option className='opportunity-form-select-option' id={`employment-type-select-option-volunteer-${opportunity.id}`} value="Volunteer">Volunteer</option>
        </select>

      <label className='opportunity-form-input-label' id={`location-label-${opportunity.id}`} htmlFor="location">Location:</label>
        <input className="opportunity-form-input" id={`location-input-${opportunity.id}`} type="text" name="location" defaultValue={opportunity.fields.location} value={inputValues.location} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='opportunity-form-input-label' id={`job-description-label-${opportunity.id}`} htmlFor="jobDescription">Job Description:</label>
        <input className="opportunity-form-input" id={`job-description-input ${opportunity.id}`} type="text" name="jobDescription" defaultValue={opportunity.fields.jobDescription} value={inputValues.jobDescription} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='opportunity-form-select-label' htmlFor="opportunityStatus">Opportunity Status</label>
        <select className="opportunity-form-select" name="opportunityStatus" id={`opportunity-status-input-${opportunity.id}`} defaultValue={opportunity.fields.opportunityStatus} value={inputValues.opportunityStatus} onChange={(e) => handleInputChange(e, setInputValues)}>
          <option className='opportunity-form-select-option' id={`opportunity-status-disabled-value-${opportunity.id}`}disabled value=""> Select An Option </option>
          <option className='opportunity-form-select-option' id={`opportunity-status-applied-${opportunity.id}`}value="Applied">Applied</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-phone-screen-${opportunity.id}`}value="Phone Screening">Phone Screening</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-phone-screen-pending-descision-${opportunity.id}`}value="Phone Screening, Pending Decision">Phone Screening, Pending Decision</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-interview-${opportunity.id}`} value="Interview">Interview</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-interviewed-pending-descision-${opportunity.id}`}value="Interviewed, Pending Decision">Interviewed, Pending Decision</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-case-study-${opportunity.id}`} value="Case Study">Case Study/Exercise</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-offer-${opportunity.id}`} value="Offer">Offer</option>
          <option className='opportunity-form-select-option' id={`opportunity-status-negotiation-${opportunity.id}`} value="Negotiation">Negotiation</option>
        </select>
            
      <label className='opportunity-form-select-label' htmlFor="actionItems">Action Item(s):</label>
        <select className="opportunity-form-select" id={`action-items-input-${opportunity.id}`} type="text" name="actionItems" defaultValue={opportunity.fields.actionItems} value={inputValues.actionItems} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option className='opportunity-form-select-option' id={`action-items-disabled-value-${opportunity.id}`} disabled value=""> Select An Option </option>
          <option className='opportunity-form-select-option' id={`action-items-prepare-resume-${opportunity.id}`} value="Prepare Resume">Prepare Resume</option>
          <option className='opportunity-form-select-option' id={`action-items-write-cover-letter-${opportunity.id}`} value="Write Cover Letter">Write Cover Letter</option>
          <option className='opportunity-form-select-option' id={`submit-application-complete-project-${opportunity.id}`} value="Submit Application">Submit Application</option>
          <option className='opportunity-form-select-option' id={`action-items-followup-email-${opportunity.id}`} value="Follow-Up E-mail">Follow-Up E-mail</option>
          <option className='opportunity-form-select-option' id={`action-items-phone-screen-prep-${opportunity.id}`} value="Phone Screen Prep">Phone Screen Prep</option>
          <option className='opportunity-form-select-option' id={`action-items-interview-prep-${opportunity.id}`} value="Interview Prep">Interview Prep</option>
          <option className='opportunity-form-select-option' id={`action-items-complete-project-${opportunity.id}`} value="Complete Case Study/Project">Complete Case Study/Project</option>
        </select>
            
      <label className='opportunity-form-input-label' id={`date-of-last-contact-label-${opportunity.id}`} htmlFor="dateOfLastContact">Date of Last Contact:</label>
        <input className="opportunity-form-input" id={`date-of-last-contact-input ${opportunity.id}`} type="text" name="dateOfLastContact" defaultValue={opportunity.fields.dateOfLastContact} value={inputValues.dateOfLastContact} onChange={(e) => handleInputChange(e, setInputValues)} />
        
      <label className='opportunity-form-input-label' id={`contact-name-label-${opportunity.id}`} htmlFor="contactName">Contact Name:</label>
        <input className="opportunity-form-input" id={`contact-name-input-${opportunity.id}`} type="text" name="contactName" defaultValue={opportunity.fields.contactName} value={inputValues.contactName} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='opportunity-form-input-label' id={`contact-email-label-${opportunity.id}`} htmlFor="contactEmail">Contact E-Mail:</label>
        <input className="opportunity-form-input" id={`contact-email-input-${opportunity.id}`} type="text" name="contactEmail" defaultValue={opportunity.fields.contactEmail} value={inputValues.contactEmail} onChange={(e) => handleInputChange(e, setInputValues)} />
            
      <label className='opportunity-form-input-label' id={`contact-phone-number-label-${opportunity.id}`} htmlFor="contactPhoneNumber">Contact Phone Number:</label>
        <input className="opportunity-form-input" id={`contact-phone-number-input-${opportunity.id}`} type="text" name="contactPhoneNumber" defaultValue={opportunity.fields.contactPhoneNumber} value={inputValues.contactPhoneNumber} onChange={(e) => handleInputChange(e, setInputValues)} />
      
      
      <div className="opportunity-form-buttons-container">
        <button className="opportunity-form-button" id="opportunity-form-submit-button" type="submit" onClick={(e) => validateForm(e, opportunity.id, inputValues, fetchOpportunities, setFetchOpportunities, updateVisibility, setUpdateVisibility)} >
          Submit</button>
        
        <button className="opportunity-form-button" id="opportunity-form-cancel-button" onClick={() => toggleMenu(updateVisibility, setUpdateVisibility)} >
          Cancel</button>
        
      </div>
      
    </div>
  );
}