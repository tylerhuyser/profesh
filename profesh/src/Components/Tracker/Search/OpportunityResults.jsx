import React, { useState } from 'react';
import Axios from 'axios';
import "./OpportunityResults.css"
import UpdateOpportunity from "./UpdateOpportunity"
import UpdateOpportunityButton from "./UpdateOpportunityButton"

function OpportunityResults (props) {
  
  // Below deconstructs the fetchOpportunities state variables
  const { fetchOpportunities, setFetchOpportunities } = props
  
  //Below creates a state variable to store "expanded" opportunity cards
  const [expanded, setExpanded] = useState([])

  //Below creates a state variable to control the visibility of the Update Opportunity Form
  const [updateVisibility, setUpdateVisibility] = useState(false);
  
  const { opportunities } = props;
  const { searchQuery } = props

  //Below function enables opportunity card expansion. If the id IS contained in the UseState array, it is removed (collapsed), if not, it is added (and expanded)
  function toggleExpand(id) {
    let opportunitiesContainer = document.getElementById(`${id}`);
    opportunitiesContainer.classList.toggle('expanded');
    console.log(expanded)
    if (!expanded.includes(id)) {
      setExpanded(prevExpand => {
        return [...prevExpand, id]
      });
      console.log(expanded)
    }; 
    if (expanded.includes(id)) {
      setExpanded(prevExpand => {
        console.log(prevExpand);
        return (prevExpand.filter(e => e !== id))
      })
      console.log(expanded)
    };
  }
  
  //Below function handles deletion of an opportunity from the Airtable API.
  const handleDelete = async (e, idx) => {
    e.stopPropagation();
    console.log(idx)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE}/opportunities/${idx}`

    await Axios.delete(airtableURL, {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
      },
    });
    setFetchOpportunities(!fetchOpportunities);
  };

  // Below toggles visibility of the Update Opportunity Menu
  function toggleUpdateMenu() {
    setUpdateVisibility(!updateVisibility);
  };

  // Below handles selection of the "Add Job" button
  function handleEdit(e) {
    toggleUpdateMenu();
    e.stopPropagation();
  }



  return (
    <div className="opportunitiesResults">
      
        <div className="placeholderTop" style={{
            
          height: "70px",
          
          }}>

          </div>
        {opportunities.filter(opportunity => opportunity.fields.companyName.includes(searchQuery) || opportunity.fields.jobTitle.includes(searchQuery) ).map((opportunity, idx) => {
          
          // Documentation for Filter w/ Maps: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

          return (
            <div key={idx} id={idx} onClick={() => toggleExpand(idx)} style={{
              
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

              {/* <div className="trackerAlerts" id="trackerAlerts" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",

                position: "absolute",
                right: "15px",
                float: "right",
                textAlign: "right",
                // margin: "10px",
                width: "50%",
                backgroundColor: "transparent",
                fontSize: "10px",

              }}>
                <div className="opportunityStatus" id={opportunity.fields.opportunityStatus} >
                    
                  <div className="opportunityRibbon ribbon" style={{
                    display: "flex",
                    alignContent: "center",

                    width: "150px",
                    height: "30px",
                    top: "150px",
                    right: "0",
                    background: "#21759a",
                    marginTop: "20px"
                    
                  }} >
                    <h5 style={{

                      marginBottom: "0px",
                      // marginTop: "10px",
                      fontSize: "12px",
                      textAlign: "left",

                      height: "20px",
                      margin: "0px 0px 0px 10px",

                      
                    }} >{opportunity.fields.opportunityStatus}</h5>
                  </div>

                </div>

                <div className="actionItems" id={opportunity.fields.actionItems} >
                  <h5 style={{

                    marginBottom: "0px",
                    marginTop: "15px",
                    fontSize: "12px",


                    }}>{opportunity.fields.actionItems}</h5>
                </div>
              </div> */}
            
              <div className="companyInfo" id={opportunity.fields.companyName} style={{

                margin: "10px",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
                
              }} >
                <img src={opportunity.fields.companyLogo} onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }} alt={ opportunity.fields.companyName } style={{
                
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
                    <div className="tracker-container">
                      <div className="opportunity-status">
                        {opportunity.fields.opportunityStatus}
                      </div>
                      <div className="action-item">
                        {opportunity.fields.actionItems}
                      </div>
                    </div>
                  )

                  :

                  <div name="expandedContainer">
                    
                    <div className="tracker-container">
                      <div className="opportunity-status">
                        {opportunity.fields.opportunityStatus}
                      </div>
                      <div className="action-item">
                        {opportunity.fields.actionItems}
                      </div>
                    </div>

                      <p style={{

                        textAlign: "left",
                        fontSize: "10px",
                        textWrap: "none",
                        textOverflow: "ellipsis",
                        
                      }}> {opportunity.fields.jobDescription}  </p>
                    
                    <div className="expandedContents" style={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                        <label forHTML="dateOfLastContact">Date of Last Contact:</label>
                          <p name="dateOflastContact">{opportunity.fields.dateOfLastContact}</p>
                        <label forHTML="contactName">Contact Name:</label>
                          <p name="contactName">{opportunity.fields.contactName}</p>
                        <label forHTML="contactPhoneNumber">Contact Phone Number:</label>
                          <p name="contactPhoneNumber">{opportunity.fields.contactPhoneNumber}</p>
                        <label forHTML="contactEmail">Contact Email:</label>
                      <p name="contactEmail">{opportunity.fields.contactEmail}</p>
                      
                      <div className="opportunityCRUDButtons" style={{
                        
                        display: "flex",
                        justifyContent: "space-evenly",

                      }}>
                        <UpdateOpportunityButton
                          handleEdit={handleEdit}/>
                        <button className="updateOpportunityButton" onClick={(e) => handleDelete(e, opportunity.id)} style={{
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

              <UpdateOpportunity
                          fetchOpportunities={fetchOpportunities}
                          setFetchOpportunities={setFetchOpportunities}
                          opportunity={opportunity}
                          handleEdit={ (e)=> handleEdit(e) }
                          toggleUpdateMenu={toggleUpdateMenu}
                          updateVisibility= { updateVisibility } />
            </div>
          )
        })
      }
      <div className="placeholderBottom" style={{
            
        height: "70px",
        marginTop: "40px",
            
            }}>
  
            </div>
      </div>
    )
}

export default OpportunityResults;