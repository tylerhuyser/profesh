import React, {useState} from 'react';
import "./OpportunityCard.css"

import UpdateOpportunity from '../UpdateOpportunity/UpdateOpportunity';
import UpdateOpportunityButton from "../UpdateOpportunity/UpdateOpportunityButton"
import toggleExpand from '../../../functions/toggleExpand';
import deleteOpportunity from '../../../functions/deleteOpportunity';

export default function OpportunityCard(props) {

  const { fetchOpportunities, setFetchOpportunities } = props
  // const { updateVisibility, setUpdateVisibility } = props
  const { expanded, setExpanded } = props
  const { idx, opportunity } = props

  const [updateVisibility, setUpdateVisibility] = useState(false);

  const opportunityStatus = (opportunity.fields.opportunityStatus.charAt(0).toLowerCase() + opportunity.fields.opportunityStatus.slice(1)).split("/").join("-").split(" ").join("-")
  const actionItem = (opportunity.fields.actionItems.charAt(0).toLowerCase() + opportunity.fields.actionItems.slice(1)).split("/").join("-").split(" ").join("-")

  return (
    <>
    <div className={`opportunity-card`} key={opportunity.id} id={idx} onClick={() => toggleExpand(idx, expanded, setExpanded)} style={{
              
      // Opportunity Card appearance properties
      backgroundColor: "white",
      boxShadow: '0px 8px 10px darkgray',

      //Opportunity Card position properties
      padding: "5px",
      margin: "10px 20px",
  
      // Opportunity Card containter properties
      display: "flex",
      flexDirection: "column",
    }}>

      <div className="companyInfo" id={opportunity.fields.companyName} style={{

        margin: "10px",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    
      }} >
        <img src={opportunity.fields.companyLogo} onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }} alt={opportunity.fields.companyName} style={{
    
          width: "10%",
          height: "auto",
          alignSelf: "flex-start",

        }} />
        <h1 style={{

          width: "50%",
          maxWidth: "200px",

          margin: "0px 0px 0px 10px",

          textAlign: "left",
          verticalAlign: "middle",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",

        }}> {opportunity.fields.companyName}</h1>
      </div>
  
      <div className="opportunityInfo" id={opportunity.fields.jobTitle} style={{

        margin: "10px",
    
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",

      }} >
        <h3 style={{

          maxWidth: "300px",
          textAlign: "left",
          margin: "0px",
          textDecoration: "none",
          textDecorationLine: "none",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",

        }}> {opportunity.fields.jobTitle}</h3>
    
    
        {(expanded.length === 0 || (!expanded.includes(idx))) ?
      
          (
            <div className="tracker-container" style={{

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px 0px 15px 0px",

            }}>
              <div className={`opportunity-status`} id={opportunityStatus}>
                {opportunity.fields.opportunityStatus}
              </div>
              <div className={`action-item`} id={actionItem}>
                {opportunity.fields.actionItems}
              </div>
            </div>
          )

          :

          <div className="expanded-container">
        
            <div className="tracker-container" style={{

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px 0px 15px 0px",

            }}>
              <div className={`opportunity-status`} id={opportunityStatus}>
                {opportunity.fields.opportunityStatus}
              </div>
              <div className={`action-item`} id={actionItem}>
                {opportunity.fields.actionItems}
              </div>
            </div>

            <p className="job-description" style={{

              textAlign: "left",
              fontSize: "10px",
              textWrap: "none",
              textOverflow: "ellipsis",
            
            }}> {opportunity.fields.jobDescription}  </p>
        
            <div className="expanded-contents" style={{
              display: "flex",
              flexDirection: "column",
            }}>
              <label forhtml="dateOfLastContact">Date of Last Contact:</label>
              <p name="dateOflastContact">{opportunity.fields.dateOfLastContact}</p>
              <label forhtml="contactName">Contact Name:</label>
              <p name="contactName">{opportunity.fields.contactName}</p>
              <label forhtml="contactPhoneNumber">Contact Phone Number:</label>
              <p name="contactPhoneNumber">{opportunity.fields.contactPhoneNumber}</p>
              <label forhtml="contactEmail">Contact Email:</label>
              <p name="contactEmail">{opportunity.fields.contactEmail}</p>
          
              <div className="opportunityCRUDButtons" style={{
            
                display: "flex",
                justifyContent: "space-evenly",

              }}>
                <UpdateOpportunityButton updateVisibility={updateVisibility} setUpdateVisibility={setUpdateVisibility} />
                <button className="updateOpportunityButton" onClick={() => deleteOpportunity(opportunity.id, fetchOpportunities, setFetchOpportunities)} style={{
                  width: "100px",
                  textAlign: "center",
                  border: "5px solid #F7116B",
                  borderRadius: "18px",
                  background: "white",
                  color: "#F7116B",
                  padding: "10px",

                }} >Delete</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
      
    <UpdateOpportunity
      opportunity={opportunity}
      fetchOpportunities={fetchOpportunities}
      setFetchOpportunities={setFetchOpportunities}
      updateVisibility={updateVisibility}
      setUpdateVisibility={setUpdateVisibility}
    />
  </>
    
  )
}
  