import React from 'react';
import { Link } from 'react-router-dom';

function OpportunityResults (props) {
  
  console.log(props)
  const { opportunities } = props;
  console.log(opportunities);


  return (
      <div className="opportunitiesResults">
      <div className="placeholder" style={{
          
        height: "70px",
        
        }}>

        </div>
        {opportunities.map((opportunity, idx) => {
          return (
            <div id={idx} style={{
              
              boxShadow: '0px 8px 10px darkgray',
              padding: "5px",
              margin: "10px",

              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}>
              <h1>{opportunity.fields.company_name}</h1><br />
              <h3>{opportunity.fields.job_title}</h3>
            </div>
          )
        })
        }
      </div>
    )
}

export default OpportunityResults;