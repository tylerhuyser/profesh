import React from 'react';


import AddJobForm from "../AddJob/AddJobForm"
import AddJobButton from "../AddJob/AddJobButton";


export default function JobCard(props) {
  
  const {idx, job, formattedDescription, toggleAddJobMenu, toggleExpand, handleAddJob, addJobVisibility} = props
  
  // Below deconstructs the fetchJobs state variables
  const { fetchJobs, setFetchJobs } = props

  const { expanded } = props

  return (
    <div key={idx} id={idx} onClick={() => toggleExpand(idx)} style={{
              
      // Job Card appearance properties
      backgroundColor: "white",
      boxShadow: '0px 8px 10px darkgray',

      //Job Card position properties
      padding: "5px",
      margin: "10px 20px",

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
          
            <div className="expanded-contents" style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <label forhtml="jobType">Job Type:</label>
              <p name="jobType">{job.type}</p>
            <label forhtml="publicationDate">Posting Date</label>
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
}