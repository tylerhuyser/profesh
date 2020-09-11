import React from 'react';
// import axios from 'axios'

function Home() {

  return (
    <div className="home" style={{

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "86vh",

    }}>
      <div className="fade-in-fwd" id="welcomeText" style={{

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        backgroundColor: "#2c404b",
        color: "white",
        borderRadius: "12%",
        zIndex: "2",
        width: "65%",
        boxShadow: '0px 8px 10px darkgray',

      }}>
        <h2 style={{

          width: "40%",
          marginLeft: "0px",
          marginRight: "0px",
          marginBottom: "0px",
          marginTop: "20px",
          
        }}>Welcome to</h2>

        {/* <h1 style={{

          width: "40%",
          marginLeft: "0px",
          marginRight: "0px",
          fontFamily: "Roboto Condensed",
          fontSize: "35px",
          textAlign: "center",

        }}>Profesh</h1> */}
        
        <img src="https://github.com/tylerhuyser/profesh/blob/master/profesh/Icons/1a0a047a-c627-4ffb-845d-5215b22f1f78_200x200.png?raw=true" width="200px" height="75px" style={{
          
          objectFit: "cover",
          margin: "20px",

        }} />

        <h4 style={{

          width: "50%",
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "0px",

          }}>Make the Most of Every Opportunity</h4>
      </div>
    </div>
  )

}

export default Home;