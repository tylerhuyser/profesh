import React, { useState } from 'react';

function OpportunityResults (props) {
  
  const [expanded, setExpanded] = useState(null)
  
  console.log(props)
  const { opportunities } = props;
  console.log(opportunities);
  const { searchQuery } = props
  console.log(searchQuery)


  function toggleExpand(e, id) {
    e.preventDefault();
    let opportunitiesContainer = document.getElementById(`${id}`);
    opportunitiesContainer.classList.toggle('expanded');
    setExpanded(id);
    }


  return (
    <div className="opportunitiesResults" style={{
        
      textDecoration: "none",
      textDecorationLine: "none",

      }}>
        <div className="placeholderTop" style={{
            
          height: "70px",
          
          }}>

          </div>
        {opportunities.filter(opportunity => opportunity.fields.companyName.includes(searchQuery) || opportunity.fields.jobTitle.includes(searchQuery) ).map((opportunity, idx) => {
          
          // Documentation for Filter w/ Maps: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

          return (
            <div key={idx} id={idx} onClick={(e) => toggleExpand(e, idx)} style={{
              
              // Job Card display properties
              height: "25vh",
              padding: "5px",
              margin: "10px",
              boxShadow: '0px 8px 10px darkgray',

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
                  <h5>{opportunity.fields.opportunityStatus}</h5>
                </div>
                <div className="actionItems" id={opportunity.fields.actionItems} >
                  <h5>{opportunity.fields.actionItems}</h5>
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
                
                
                {( expanded === idx) ? (
                    <div name="expandedContainer">
                      <p style={{

                        textAlign: "left",
                        fontSize: "10px",
                        textWrap: "none",
                        textOverflow: "ellipsis",
                        
                      }}> {opportunity.fields.jobDescription}  </p>
                    
                      <div name="expandedContents">
                        <h6>{opportunity.fields.dateOfLastContact}</h6>
                        <h6>{opportunity.fields.contactName}</h6>
                        <h6>{opportunity.fields.contactPhoneNumber}</h6>
                        <h6>{opportunity.fields.contactEmail}</h6>
                        {/* <UpdateOpportunity /> */}
                        <button>DELETE</button>
                      </div>
                  </div>) : 
                  (<p style={{

                    textAlign: "left",
                    fontSize: "10px",
                    textWrap: "none",
                    textOverflow: "ellipsis",
                    
                  }}> {(opportunity.fields.jobDescription.length > 200) ? <span>{`${opportunity.fields.jobDescription.slice(0, 198)}...`}<button style={{
                    
                    fontSize: "10px",
                    marginLeft: "10px",
  
                    }}>Read More</button></span> : opportunity.fields.jobDescription}</p>)
                  }
              </div>
            </div>
          )
        })
      }
      <div className="placeholderBottom" style={{
            
            height: "70px",
            
            }}>
  
            </div>
      </div>
    )
}

export default OpportunityResults;