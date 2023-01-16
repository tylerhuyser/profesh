import React, { useState } from 'react';
import "./OpportunityResults.css"

import UpdateOpportunity from "../UpdateOpportunity/UpdateOpportunity"
import OpportunityCard from "../OpportunityResults/OpportunityCard"

function OpportunityResults (props) {
  
  // Below deconstructs the fetchOpportunities state variables
  const { fetchOpportunities, setFetchOpportunities } = props

  //Below creates a state variable to store "expanded" opportunity cards
  const [expanded, setExpanded] = useState([])

  //Below creates a state variable to control the visibility of the Update Opportunity Form
  // const [updateVisibility, setUpdateVisibility] = useState(false);
  
  const { opportunities, searchQuery } = props;
  const lowerCaseQuery = searchQuery.toLowerCase()

  return (
    <div className="opportunitiesResults">
      
        <div className="placeholderTop" style={{
            
          height: "20px",
          
          }}>

        </div>
      
      {opportunities.filter(opportunity => opportunity.fields.companyName.toLowerCase().includes(lowerCaseQuery) || opportunity.fields.jobTitle.toLowerCase().includes(lowerCaseQuery)).map((opportunity, idx) => {
          
        // Documentation for Filter w/ Maps: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

        return (
          <div className="opportunity-card-container" key={opportunity.id}>
              <OpportunityCard 
                idx={idx}
                opportunity={opportunity}
                fetchOpportunities={fetchOpportunities}
                setFetchOpportunities={setFetchOpportunities}
                // updateVisibility={updateVisibility}
                // setUpdateVisibility={setUpdateVisibility}
                expanded={expanded}
                setExpanded={setExpanded}
              />

            {/* <UpdateOpportunity
                opportunity={opportunity}
                fetchOpportunities={fetchOpportunities}
                setFetchOpportunities={setFetchOpportunities}
                updateVisibility={updateVisibility}
                setUpdateVisibility={setUpdateVisibility}
              /> */}
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