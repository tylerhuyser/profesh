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
  const [updateVisibility, setUpdateVisibility] = useState(false);
  
  const { opportunities } = props;
  const { searchQuery } = props
  const lowerCaseQuery = searchQuery.toLowerCase()

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
                updateVisibility={updateVisibility}
                setUpdateVisibility={setUpdateVisibility}
                handleEdit={handleEdit}
                expanded={expanded}
                toggleExpand={toggleExpand}
              />

              <UpdateOpportunity
                fetchOpportunities={fetchOpportunities}
                setFetchOpportunities={setFetchOpportunities}
                opportunity={opportunity}
                handleEdit={ (e)=> handleEdit(e) }
                toggleUpdateMenu={toggleUpdateMenu}
                updateVisibility={updateVisibility}
              />
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