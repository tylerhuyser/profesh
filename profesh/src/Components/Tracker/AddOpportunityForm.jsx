import React, { useState } from 'react';
import Axios from 'axios';
import "./AddOpportunityForm.css"

function AddOpportunityForm (props) {
  
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [seniorityLevel, setSeniorityLevel] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [opportunityStatus, setOpportunityStatus] = useState("");
  const [actionItems, setActionItems] = useState([]);
  const [dateOfLastContact, setDateOfLastContact] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  const [companyLogo, setCompanyLogo] = useState("");

  let visibilityClass = "hidden";

  if (props.visibility) {
    visibilityClass = "visible";
  }

  const handlePost = async (e) => {
    e.preventDefault();
    setCompanyLogo(`https://logo.clearbit.com/${companyName}`);
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
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities`;
    await Axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.setFetchReviews(!props.fetchReviews);
    setCompanyName("");
    setCompanyLogo("");
    setSeniorityLevel("");
    setEmploymentType("");
    setLocation("");
    setJobDescription("");
    setOpportunityStatus("");
    setActionItems([]);
    setDateOfLastContact("");
    setContactName("");
    setContactEmail("");
    setContactPhoneNumber("");
    }



    return (

      <div className={visibilityClass} id="addOpportunityForm" onSubmit={handlePost} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }} >
        <button onClick={ props.toggleMenu }>X</button>
        <h2>Add a New Opportunity</h2>
        <label htmlFor="companyName">Company Name:</label>
          <input type="text" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <label htmlFor="seniorityLevel">Seniority Level:</label>
          <input type="text" name="seniorityLevel" value={seniorityLevel} onChange={(e) => setSeniorityLevel(e.target.value)} />
        <label htmlFor="employmentType">Employment Type:</label>
          <input type="text" name="employmentType" value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} />
        <label htmlFor="location">Location:</label>
          <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <label htmlFor="jobDescription">Job Description:</label>
          <input type="text" name="jobDescription" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        <label htmlFor="opportunityStatus">Opportunity Status</label>
        <select name="opportunityStatus" value={opportunityStatus} onChange={(e) => setOpportunityStatus(e.target.value)}>
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
        <select type="text" name="actionItems" value={actionItems} onChange={(e) => setActionItems(e.target.value)} multiple>
          <option value="">   </option>
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
        <button type="submit">Submit</button>
      </div>
  );
 }

export default AddOpportunityForm;