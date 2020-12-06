import React, { useState } from 'react';
import AddJobButton from "./AddJobButton"
import AddJobForm from "./AddJobForm";
import "./JobResults.css"
import "./AddJobForm.css";

export default function JobsResults(props) {

  // Below deconstructs the fetchJobs state variables
  const { fetchJobs, setFetchJobs } = props
  
  //Below creates a state variable to store "expanded" job cards
  const [expanded, setExpanded] = useState([])

  //Below creates a state variable to control the visibility of the Add Job Form
  const [addJobVisibility, setAddJobVisibility] = useState(false);
  
  const { jobs } = props;
  const { searchQuery } = props;
  const lowerCaseQuery = searchQuery.toLowerCase()

  //Below function enables job card expansion. If the id IS contained in the UseState array, it is removed (collapsed), if not, it is added (and expanded)
  function toggleExpand(id) {
    let jobContainer = document.getElementById(`${id}`);
    jobContainer.classList.toggle('expanded');
    console.log(expanded);
    if (!expanded.includes(id)) {
      setExpanded(prevExpand => {
        return [...prevExpand, id]
      });
    };
    if (expanded.includes(id)) {
      setExpanded(prevExpand => {
        return (prevExpand.filter (e => e !== id))
      })
    };
  }

  //Below toggles visibility of the Add Job Menu
  function toggleAddJobMenu() {
    setAddJobVisibility (!addJobVisibility)
  };

    // Below handles selection of the "Add Job" button
  function handleAddJob(e) {
    toggleAddJobMenu();
    e.stopPropagation();
  }


  return (
    <div className="jobsResults">

      <div className="placeholderTop" style={{
            
            height: "70px",
            
            }}>
  
      </div>

      {jobs.filter(job =>
        job.company.name.toLowerCase().includes(lowerCaseQuery) ||
        job.name.toLowerCase().includes(lowerCaseQuery) ||
        job.locations.name.toLowerCase().includes(lowerCaseQuery)).map(
          (job, idx) => {

            let jobDescription = job.contents;
            let formattedDescription = jobDescription.replace(/(<([^>]+)>)/gi, "")

            return (
              <div key={idx} id={idx} onClick={() => toggleExpand(idx)} style={{
              
                // Job Card appearance properties
                backgroundColor: "white",
                boxShadow: '0px 8px 10px darkgray',

                //Job Card position properties
                padding: "5px",
                margin: "10px 5px",

                // Job Card containter properties
                display: "flex",
                flexDirection: "column",
              }}>
              
                <div className="jobCompanyInfo" id={job.company.name} style={{

                  margin: "10px",

                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  overflow: "hidden",

                  }} >
                    
    
                  <img src={`https://logo.clearbit.com/${job.company.name}.com`} onError={(e) => { e.target.onerror = null; e.target.src = "https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" }}
                  alt={ job.company.name} style={{
                
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
          
                  }}> {job.company.name}</h1>
                </div>
                
                <div className="jobInfo" id={job.name} style={{

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
              
                  }}> {job.name}</h3>

                  {(expanded.length === 0 || (!expanded.includes(idx)) ) ? (
                  <p style={{

                    textAlign: "left",
                    fontSize: "10px",
                    textWrap: "none",
                    textOverflow: "ellipsis",

                    }}> {(job.contents.length > 200) ? <span>{`${formattedDescription.slice(0, 198)}...`}</span> : formattedDescription}</p>) :
                    <div name="expandedContainer">
                      <p style={{

                        textAlign: "left",
                        fontSize: "10px",
                        textWrap: "none",
                        textOverflow: "ellipsis",
                        
                      }}> {formattedDescription}  </p>
                    
                      <div className="expandedContents" style={{
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <label forHTML="jobType">Job Type:</label>
                        <p name="jobType">{job.type}</p>
                      <label forHTML="publicationDate">Posting Date</label>
                        <p name="publicationDate">{job.publicaton_date}</p>
                        <AddJobButton
                          handleAddJob={ (e)=> handleAddJob(e) }/>
                      </div>
                  </div>
                  }
                </div>

                  <AddJobForm
                    fetchJobs={fetchJobs}
                    setFetchJobs={setFetchJobs}
                    job={job}
                    handleAddJob={ (e)=> handleAddJob(e) }
                    toggleAddJobMenu={toggleAddJobMenu}
                    addJobVisibility= { addJobVisibility }
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