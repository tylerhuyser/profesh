import React, { useState } from 'react';
import "./UpdateOpportunity.css"

import toggleMenu from '../../../functions/toggleMenu';
import handleInputChange from '../../../functions/handleInputChange';
import validateForm from '../../../functions/validateForm';

// Below function creates and handles the an update (push) to an opporunity using the "Update Opportunity Form"
const UpdateOpportunity = (props) => {

   // Below destructures the "fetch opportunities" property -- allows the page to automatically refresh after a new opportunity is submitted
  const { fetchOpportunities, setFetchOpportunities } = props
  const { updateVisibility, setUpdateVisibility } = props
  const { opportunity } = props

  const [inputValues, setInputValues] = useState({
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
  })

  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "UpdateOpportunityForm.css"
  let updateVisibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  if (updateVisibility) {
    updateVisibilityClass = "visible";
  }

  return (
    <div className={updateVisibilityClass} id="updateOpportunityFormContainer" >
         
      <h2>Update Opportunity</h2>
         
      <form id={`updateOpportunityForm-${opportunity.id}`} onSubmit={(e) => validateForm(e, opportunity.id, inputValues, fetchOpportunities, setFetchOpportunities, updateVisibility, setUpdateVisibility)} style={{
          
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
          
      }}  >
        
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" name="companyName" defaultValue={opportunity.fields.companyName} value={inputValues.companyName} id={`company-name-input-${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
            
        <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" defaultValue={opportunity.fields.jobTitle} value={inputValues.jobTitle} id={`job-title-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
            
        <label htmlFor="seniorityLevel">Seniority Level:</label>
        <select placeholder="Select option" name="seniorityLevel" defaultValue={opportunity.fields.seniorityLevel} value={inputValues.seniorityLevel} id={`seniority-level-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option disabled value="">Select An Option</option>
          <option value="Entry Level">Entry-Level</option>
          <option value="Associate">Associate</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
          <option value="CXO">CXO</option>
        </select>

        <label htmlFor="employmentType">Employment Type:</label>
        <select name="employmentType" defaultValue={opportunity.fields.employmentType} value={inputValues.employmentType} id={`employment-type-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option disabled value="">Select An Option</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Temp">Temp</option>
          <option value="Internship">Internship</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        <label htmlFor="location">Location:</label>
        <input type="text" name="location" defaultValue={opportunity.fields.location} value={inputValues.location} id={`location-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
        
        <label htmlFor="jobDescription">Job Description:</label>
        <input type="text" name="jobDescription" defaultValue={opportunity.fields.jobDescription} value={inputValues.jobDescription} id={`job-description-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
        
        <label htmlFor="opportunityStatus">Opportunity Status</label>
        <select name="opportunityStatus" defaultValue={opportunity.fields.opportunityStatus} value={inputValues.opportunityStatus} id={`opportunity-status-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)}>
          <option disabled value=""> Select An Option </option>
          <option value="Applied">Applied</option>
          <option value="Phone Screening">Phone Screening</option>
          <option value="Phone Screening, Pending Decision">Phone Screening, Pending Decision</option>
          <option value="Interview">Interview</option>
          <option value="Interviewed, Pending Decision">Interviewed, Pending Decision</option>
          <option value="Case Study">Case Study/Exercise</option>
          <option value="Offer">Offer</option>
          <option value="Negotiation">Negotiation</option>
        </select>
            
        <label htmlFor="actionItems">Action Item(s):</label>
        <select type="text" name="actionItems" defaultValue={opportunity.fields.actionItems} value={inputValues.actionItems} id={`action-items-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} >
          <option disabled value=""> Select An Option </option>
          <option value="Prepare Resume">Prepare Resume</option>
          <option value="Write Cover Letter">Write Cover Letter</option>
          <option value="Submit Application">Submit Application</option>
          <option value="Follow-Up E-mail">Follow-Up E-mail</option>
          <option value="Phone Screen Prep">Phone Screen Prep</option>
          <option value="Interview Prep">Interview Prep</option>
          <option value="Complete Case Study/Project">Complete Case Study/Project</option>
        </select>
            
        <label htmlFor="dateOfLastContact">Date of Last Contact:</label>
          <input type="text" name="dateOfLastContact" defaultValue={opportunity.fields.dateOfLastContact} value={inputValues.dateOfLastContact} id={`date-of-last-contact-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
        
        <label htmlFor="contactName">Contact Name:</label>
          <input type="text" name="contactName" defaultValue={opportunity.fields.contactName} value={inputValues.contactName} id={`contact-name-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
            
        <label htmlFor="contactEmail">Contact E-Mail:</label>
          <input type="text" name="contactEmail" defaultValue={opportunity.fields.contactEmail} value={inputValues.contactEmail} id={`contact-email-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
            
        <label htmlFor="contactPhoneNumber">Contact Phone Number:</label>
          <input type="text" name="contactPhoneNumber" defaultValue={opportunity.fields.contactPhoneNumber} value={inputValues.contactPhoneNumber} id={`contact-phone-number-input ${opportunity.id}`} onChange={(e) => handleInputChange(e, setInputValues)} />
      
      </form>
      
      <div className="updateOpportunityButtons" style={{
          
        display: "flex",
        justifyContent: "space-evenly",

      }}>
        <button className="updateOpportunityFormButton" type="submit" onClick={(e) => validateForm(e, opportunity.id, inputValues, fetchOpportunities, setFetchOpportunities, updateVisibility, setUpdateVisibility)} >
          Submit</button>
        
        <button className="updateOpportunityFormButton" onClick={() => toggleMenu(updateVisibility, setUpdateVisibility)} >
          Cancel</button>
        
      </div>
      
    </div>
  );
}

export default UpdateOpportunity;