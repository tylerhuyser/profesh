import React, { useState } from 'react';
import Axios from 'axios';
import "./UpdateOpportunity.css"

const UpdateOpportunity = (props) => {
  
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

  let visibilityClass = "hidden";

  if (props.updateVisibility) {
    visibilityClass = "visible";
  }

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
    props.setFetchOpportunities(!props.fetchOpportunities);
    props.toggleUpdateMenu();
  }
  
  function validateForm(e) {
    e.preventDefault();
    // setCompanyLogo(`https://logo.clearbit.com/${ companyName }.com`);
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
    if (companyName !== "" && jobTitle !== "" && seniorityLevel !== "" && employmentType !== "" && location !== "" && opportunityStatus !== "" && actionItems !== "") {
      handleUpdatePost();
    }
  }

  function setNameAndLogo(e) {
    setCompanyName(e);
    setCompanyLogo(`https://logo.clearbit.com/${e}.com`);
  }



  return (
    <div id="updateFormDiv">
      <div className={visibilityClass} id="updateOpportunityForm" style={{

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

      }} >
          <h2>Update Opportunity</h2>
          <form id="updateOpportunityForm" onSubmit={(e) => validateForm(e)} style={{
          display: "flex",
          flexDirection: "column",
        }}  >
            <label htmlFor="updateCompanyName">Company Name:</label>
              <input type="text" name="updateCompanyName" value={companyName} onChange={(e) => setNameAndLogo(e.target.value)} />
            <label htmlFor="jobTitle">Job Title:</label>
              <input type="text" name="jobTitle" value={ jobTitle } onChange={(e) => setJobTitle(e.target.value)} />
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
              <option value="Case Study/Exercise">Case Study/Exercise</option>
              <option value="Offer">Offer</option>
              <option value="Negotiation">Negotiation</option>
              </select>
            <label htmlFor="actionItems">Action Item(s):</label>
            <select type="text" name="actionItems" value={ actionItems } onChange={(e) => setActionItems(e.target.value)} >
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
          <div className="updateOpportunityButtons" style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}>
              <button type="submit"  style={{

                width: "100px",
                textAlign: "center",
                border: "5px solid #F7116B",
                borderRadius: "18px",
                background: "white",
                color: "#F7116B",

                margin: "10px 25px",
                height: "40px",

                }}>Submit</button>
              <button onClick={props.toggleUpdateMenu} style={{
                
                width: "100px",
                textAlign: "center",
                border: "5px solid #F7116B",
                borderRadius: "18px",
                background: "white",
                color: "#F7116B",
                
                margin: "10px 25px",
                height: "40px",

                  }}>Cancel</button>
              </div>
          </form>
        </div>
      </div>
  )
}

export default UpdateOpportunity;