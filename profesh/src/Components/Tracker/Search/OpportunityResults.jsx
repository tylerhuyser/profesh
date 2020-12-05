import React, { useState } from 'react';
import "./OpportunityResults.css"
import UpdateOpportunity from "./UpdateOpportunity"
import OpportunityCard from "./OpportunityCard"

function OpportunityResults (props) {
  
  // Below deconstructs the fetchOpportunities state variables
  const { fetchOpportunities, setFetchOpportunities } = props

  //Below creates a state variable to control the visibility of the Update Opportunity Form
  const [updateVisibility, setUpdateVisibility] = useState(false);
  
  const { opportunities } = props;
  const { searchQuery } = props


  // Below handles selection of the "Add Job" button
  function handleEdit(e) {
    toggleUpdateMenu();
       e.stopPropagation();
  }

  // Below toggles visibility of the Update Opportunity Menu
  function toggleUpdateMenu() {
    setUpdateVisibility(!updateVisibility);
  };


  return (
    <div className="opportunitiesResults">
      
        <div className="placeholderTop" style={{
            
          height: "70px",
          
          }}>

        </div>
      
        {opportunities.filter(opportunity => opportunity.fields.companyName.includes(searchQuery) || opportunity.fields.jobTitle.includes(searchQuery) ).map((opportunity, idx) => {
          
          // Documentation for Filter w/ Maps: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

          return (
            <>
              <OpportunityCard 
              idx={idx}
              opportunity={opportunity}
              fetchOpportunities={fetchOpportunities}
              setFetchOpportunities={setFetchOpportunities}
              updateVisibility={updateVisibility}
              setUpdateVisibility={setUpdateVisibility}
              handleEdit={handleEdit}
              />

              <UpdateOpportunity
                          fetchOpportunities={fetchOpportunities}
                          setFetchOpportunities={setFetchOpportunities}
                          opportunity={opportunity}
                          handleEdit={ (e)=> handleEdit(e) }
                          toggleUpdateMenu={toggleUpdateMenu}
                updateVisibility={updateVisibility}
              />
          </>
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