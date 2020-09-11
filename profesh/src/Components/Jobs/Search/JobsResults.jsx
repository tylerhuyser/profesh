import React, { useState } from 'react';
import AddJobButton from "./AddJobButton"
import AddJob from "./AddJob";
import "./JobResults.css"
import "./AddJob.css";

export default function JobsResults(props) {
  
  const { fetchJobs, setFetchJobs } = props
  
  const [expanded, setExpanded] = useState([])
  const [addJobVisibility, setAddJobVisibility] = useState(false);
  
  console.log(props)
  const { jobs } = props;
  const { searchQuery } = props;

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

  function toggleAddJobMenu() {
    setAddJobVisibility (!addJobVisibility)
  };

  function handleAddJob(e) {
    toggleAddJobMenu();
    console.log("addJob");
    e.stopPropagation();
  }


  return (
    <div className="jobsResults">

      <div className="placeholderTop" style={{
            
            height: "70px",
            
            }}>
  
      </div>

      {jobs.filter(job =>
        job.company.name.includes(searchQuery) ||
        job.name.includes(searchQuery) ||
        job.locations.name.includes(searchQuery)).map(
          (job, idx) => {

            return (
              <div key={idx} id={idx} onClick={() => toggleExpand(idx)} style={{
              
                // Job Card display properties
                // height: "25vh",
                padding: "5px",
                margin: "10px",
                boxShadow: '0px 8px 10px darkgray',
  
                // Job Card containter properties
                display: "flex",
                // justifyContent: "flex-start",
                flexDirection: "column",
              }}>
              
                <div className="jobCompanyInfo" id={job.company.name} style={{

                  margin: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  overflow: "hidden",

                  }} >
              
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

                    }}> {(job.contents.length > 200) ? <span>{`${job.contents.slice(0, 198)}...`}<button style={{

                    fontSize: "10px",
                    marginLeft: "10px",

                    }}>Read More</button></span> : job.contents}</p>) :
                    <div name="expandedContainer">
                      <p style={{

                        textAlign: "left",
                        fontSize: "10px",
                        textWrap: "none",
                        textOverflow: "ellipsis",
                        
                      }}> {job.contents}  </p>
                    
                      <div name="expandedContents">
                        <h6>{job.type}</h6>
                        <h6>{job.publicaton_date}</h6>
                        <AddJobButton
                          handleAddJob={ (e)=> handleAddJob(e) }/>
                      </div>
                  </div>
                  }
                </div>
                  <AddJob
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
            
            }}>
  
      </div>
    </div>
  )
}