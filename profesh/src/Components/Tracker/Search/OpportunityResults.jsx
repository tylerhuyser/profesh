import React from 'react';
import { Link } from 'react-router-dom';

function OpportunityResults (props) {
  
  console.log(props)
  const { opportunities } = props;
  console.log(opportunities);
  const { searchQuery } = props
  console.log(searchQuery)


  return (
    <div className="opportunitiesResults" style={{
        
      textDecoration: "none",
      textDecorationLine: "none",

      }}>
        <div className="placeholderTop" style={{
            
          height: "70px",
          
          }}>

          </div>
        {opportunities.filter(opportunity => opportunity.fields.company_name.includes(searchQuery) || opportunity.fields.job_title.includes(searchQuery) ).map((opportunity, idx) => {
          
          // Documentation for Filter w/ Maps: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

          return (
            <div key={idx} id={idx} style={{
              
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
            
              <div className="companyInfo" id={opportunity.fields.company_name} style={{

                margin: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
                
              }} >
                <img src={opportunity.fields.company_logo} id={idx} style={{
                
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
          
                }}> {opportunity.fields.company_name}</h1>
              </div>
              
              <div className="opportunityInfo" id={opportunity.fields.job_title} style={{

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
          
                }}> {opportunity.fields.job_title}</h3>
                <p style={{

                  textAlign: "left",
                  fontSize: "10px",
                  textWrap: "none",
                  textOverflow: "ellipsis",
                  
                }}> {(opportunity.fields.job_description.length > 200) ? <span>{`${opportunity.fields.job_description.slice(0, 198)}...`}<button style={{
                  
                  fontSize: "10px",
                  marginLeft: "10px",

                }}>Read More</button></span> : opportunity.fields.job_description }</p>
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