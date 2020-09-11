import React, { useState } from 'react';
import Axios from 'axios';
import "./OpportunityResults.css"
import UpdateOpportunity from "./UpdateOpportunity"
import UpdateOpportunityButton from "./UpdateOpportunityButton"

function OpportunityResults (props) {
  
  const { fetchOpportunities, setFetchOpportunities } = props
  
  const [expanded, setExpanded] = useState([])
  const [updateVisibility, setUpdateVisibility] = useState(false);
  
  console.log(props)
  const { opportunities } = props;
  const { searchQuery } = props

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

  function toggleUpdateMenu() {
    setUpdateVisibility(!updateVisibility)
  };

  function handleEdit(e) {
    toggleUpdateMenu();
    console.log("clicked");
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
              
              // Job Card display properties
              // height: "25vh",
              padding: "5px",
              margin: "10px 5px",
              boxShadow: '0px 8px 10px darkgray',
              backgroundColor: "white",

              // Job Card containter properties
              display: "flex",
              // justifyContent: "flex-start",
              flexDirection: "column",
            }}>

              <div className="trackerAlerts" id="trackerAlerts" style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                right: "25px",
                float: "right",
                textAlign: "right",
                margin: "10px",
                width: "50%",
                backgroundColor: "transparent",
                fontSize: "10px",

              }}>
                <div className="opportunityStatus" id={opportunity.fields.opportunityStatus} >
                  <h5 style={{

                    marginBottom: "0px",
                    marginTop: "10px",
                    fontSize: "12px",

                    
                  }} >{opportunity.fields.opportunityStatus}</h5>
                </div>
                <div className="actionItems" id={opportunity.fields.actionItems} >
                  <h5 style={{

                    marginBottom: "0px",
                    marginTop: "15px",
                    fontSize: "12px",


                    }}>{opportunity.fields.actionItems}</h5>
                </div>
              </div>
            
              <div className="companyInfo" id={opportunity.fields.companyName} style={{

                margin: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
                
              }} >
                <img src={opportunity.fields.companyLogo} alt={ opportunity.fields.companyName } style={{
                
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
                textDecoration: "none",
                textDecorationLine: "none",
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
                
                
                {(expanded.length === 0 || (!expanded.includes(idx)) ) ? (
                  <p style={{

                    textAlign: "left",
                    fontSize: "10px",
                    textWrap: "none",
                    textOverflow: "ellipsis",

                    }}> {(opportunity.fields.jobDescription.length > 200) ? <span>{`${opportunity.fields.jobDescription.slice(0, 198)}...`}</span> : opportunity.fields.jobDescription}</p>) :
                    <div name="expandedContainer">
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
                          handleEdit={ (e)=> handleEdit(e) }/>
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