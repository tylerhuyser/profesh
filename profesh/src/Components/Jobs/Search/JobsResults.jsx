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
                margin: "10px 5px",
                boxShadow: '0px 8px 10px darkgray',
                backgroundColor: "white",
  
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
                    
    
                <img src={`https://logo.clearbit.com/${job.company.name}.com`} alt={ job.company.name} style={{
                
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

                    }}> {(job.contents.length > 200) ? <span>{`${job.contents.slice(0, 198)}...`}</span> : job.contents}</p>) :
                    <div name="expandedContainer">
                      <p style={{

                        textAlign: "left",
                        fontSize: "10px",
                        textWrap: "none",
                        textOverflow: "ellipsis",
                        
                      }}> {job.contents}  </p>
                    
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
          marginTop: "40px",
            
            }}>
  
      </div>
    </div>
  )
}