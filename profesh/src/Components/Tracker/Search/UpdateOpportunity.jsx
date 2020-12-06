import React, { useState } from 'react';
import Axios from 'axios';
import "./UpdateOpportunity.css"

// Below function creates and handles the an update (push) to an opporunity using the "Update Opportunity Form"
const UpdateOpportunity = (props) => {
  
  // Below destructures the "fetch opportunities" property -- allows the page to automatically refresh after a new opportunity is submitted
  const {fetchOpportunities, setFetchOpportunities} = props

  // Below create state variables for the Add Opportunity Form's various inputs.
  const [companyName, setCompanyName] = useState(props.opportunity.fields.companyName);
  const [jobTitle, setJobTitle] = useState(props.opportunity.fields.jobTitle);
  const [seniorityLevel, setSeniorityLevel] = useState(props.opportunity.fields.seniorityLevel);
  const [employmentType, setEmploymentType] = useState(props.opportunity.fields.employmentType);
  const [location, setLocation] = useState(props.opportunity.fields.location);
  const [jobDescription, setJobDescription] = useState(props.opportunity.fields.jobDescription);
  const [opportunityStatus, setOpportunityStatus] = useState(props.opportunity.fields.opportunityStatus);
  const [actionItems, setActionItems] = useState(props.opportunity.fields.actionItems);
  const [dateOfLastContact, setDateOfLastContact] = useState(props.opportunity.fields.dateOfLastContact);
  const [contactName, setContactName] = useState(props.opportunity.fields.contactName);
  const [contactEmail, setContactEmail] = useState(props.opportunity.fields.contactEmail);
  const [contactPhoneNumber, setContactPhoneNumber] = useState(props.opportunity.fields.contactPhoneNumber);

  const [companyLogo, setCompanyLogo] = useState(props.opportunity.fields.companyLogo);

  // Below sets visibility of the form to "hidden". CSS for the "hidden" class is contained the corresponding component stylesheet "UpdateOpportunityForm.css"
  let updateVisibilityClass = "hidden";

  // Below toggles visibility to "visible" if the visibility prop (from parent Track Opportunities) is true.
  if (props.updateVisibility) {
    updateVisibilityClass = "visible";
  }

  // Below function handles pushing Update Opportunity Form Inputs to existing entries in the AirTable API (if they pass validation).
  const handleUpdatePost = async () => {
    const fields = {
      companyName,
      companyLogo,
      jobTitle,
      seniorityLevel,
      employmentType,
      location,
      jobDescription,
      opportunityStatus,
      actionItems,
      dateOfLastContact,
      contactName,
      contactEmail,
      contactPhoneNumber,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${props.opportunity.id}`;
    console.log(airtableURL)
    await Axios.put(
      airtableURL,
      { fields: fields },
      {
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    // Below triggers a refresh of the Opportunties Results
    setFetchOpportunities(!fetchOpportunities);
    // Below re-toggles the Update Opportunity Form back to hidden.
    props.toggleUpdateMenu();
  }
  
  // Below Function validates the Form Inputs for submission to API. If all tests are passed, the "handlePost" function is triggered.
  function validateUpdateForm(e) {
    
    // Below prevents the form from automatically refreshing upon hitting "submit".
    e.preventDefault();
    
    if (companyName === "") {
      let updateCompanyNameInput = document.querySelector('input[name=updateCompanyName]');
      updateCompanyNameInput.classList.add('invalid')
    }
    if (jobTitle === "") {
      let jobTitleInput = document.querySelector('input[name=jobTitle]');
      jobTitleInput.classList.add('invalid')
    }
    if (seniorityLevel === "") {
      let seniorityLevelInput = document.querySelector('select[name=seniorityLevel]');
      seniorityLevelInput.classList.add('invalid')
    }
    if (employmentType === "") {
      let employmentTypeInput = document.querySelector('select[name=employmentType]');
      employmentTypeInput.classList.add('invalid')
    }
    if (location === "") {
      let locationInput = document.querySelector('input[name=location]');
      locationInput.classList.add('invalid')
    }
    if (jobDescription === "") {
      setJobDescription("N/A");
    }
    if (opportunityStatus === "") {
      let opportunityStatusInput = document.querySelector('select[name=opportunityStatus]');
      opportunityStatusInput.classList.add('invalid')
    }
    if (actionItems === "") {
      let actionItemsInput = document.querySelector('select[name=actionItems]');
      actionItemsInput.classList.add('invalid')
    }
    if (dateOfLastContact === "") {
      let dateOfLastContactInput = document.querySelector('input[name=dateOfLastContact]');
      dateOfLastContactInput.classList.add('invalid')
    }
    if (contactName === "") {
      setContactName("N/A");
    }
    if (contactPhoneNumber === "") {
      setContactPhoneNumber("N/A");
    }
    if (contactEmail === "") {
      setContactEmail("N/A");
    }

    // If all tests are passed, the Handle Post function, which triggers the AirTable API Call is made.
    if (companyName !== "" && jobTitle !== "" && seniorityLevel !== "" && employmentType !== "" && location !== "" && opportunityStatus !== "" && actionItems !== "") {
      handleUpdatePost();
    }
  }

  // The Below function sets the Company Name and Logo depending on Company Name inputs. 
  function setNameAndLogo(e) {

    // Below sets the Company Name when the "Company Name" input changes
    setCompanyName(e);

    // Below parses special characters out of the Company Name in order to obtain a logo from the Clearbit Logo API.
    let companyInput = e
    let parsedCompanyName = companyInput.replace(" ", "").replace("'", "");
    setCompanyLogo(`https://logo.clearbit.com/${parsedCompanyName}.com`);
  }



  return (
    <div className={updateVisibilityClass} id="updateOpportunityFormContainer" >
         
      <h2>Update Opportunity</h2>
         
      <form id="updateOpportunityForm" onSubmit={(e) => validateUpdateForm(e)} style={{
          
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
          
      }}  >
        
        <label htmlFor="updateCompanyName">Company Name:</label>
          <input type="text" name="updateCompanyName" value={companyName} onChange={(e) => setNameAndLogo(e.target.value)} />
            
        <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            
        <label htmlFor="seniorityLevel">Seniority Level:</label>
        <select placeholder="Select option" name="seniorityLevel" value={seniorityLevel} onChange={(e) => setSeniorityLevel(e.target.value)} >
          <option disabled value="">Select An Option</option>
          <option value="Entry Level">Entry-Level</option>
          <option value="Associate">Associate</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
          <option value="CXO">CXO</option>
        </select>

        <label htmlFor="employmentType">Employment Type:</label>
        <select name="employmentType" value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} >
          <option disabled value="">Select An Option</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Temp">Temp</option>
          <option value="Internship">Internship</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        <label htmlFor="location">Location:</label>
        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        
        <label htmlFor="jobDescription">Job Description:</label>
        <input type="text" name="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        
        <label htmlFor="opportunityStatus">Opportunity Status</label>
        <select name="opportunityStatus" value={opportunityStatus} onChange={(e) => setOpportunityStatus(e.target.value)}>
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
        <select type="text" name="actionItems" value={actionItems} onChange={(e) => setActionItems(e.target.value)} >
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
          <input type="text" name="dateOfLastContact" value={dateOfLastContact} onChange={(e) => setDateOfLastContact(e.target.value)} />
        
        <label htmlFor="contactName">Contact Name:</label>
          <input type="text" name="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} />
            
        <label htmlFor="contactEmail">Contact E-Mail:</label>
          <input type="text" name="contactEmail" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
            
        <label htmlFor="contactPhoneNumber">Contact Phone Number:</label>
          <input type="text" name="contactPhoneNumber" value={contactPhoneNumber} onChange={(e) => setContactPhoneNumber(e.target.value)} />
      
      </form>
      
      <div className="updateOpportunityButtons" style={{
          
        display: "flex",
        justifyContent: "space-evenly",

      }}>
        <button className="updateOpportunityFormButton" type="submit" onClick={(e) => validateUpdateForm(e)} >
          Submit</button>
        
        <button className="updateOpportunityFormButton" onClick={props.toggleUpdateMenu} >
          Cancel</button>
        
      </div>
      
    </div>
  );
}

export default UpdateOpportunity;