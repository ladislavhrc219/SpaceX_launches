import React from 'react';
// import ReactPlayer from "react-player";

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";


import './spacex-cards.css';
// curly braces then return in components otherwise error 
// without return normal braces after props 
export const Cards = (props) => {
    return (
    <>
    
   
            {/* <div className="card-container">
            <h4> Flight Number: {props.launch.flight_number} </h4> 
            <h1> Mission Name: {props.launch.mission_name}</h1> 
            <h2> Mission Patch </h2> 
            <div className="missionpatches">
                <img src={props.launch.links.mission_patch_small} alt="patch" /> 
                </div> 

            <h2> Rocket details</h2> 
            <p>  ID: {props.launch.rocket.rocket_id}</p>
            <p>  Name: {props.launch.rocket.rocket_name}</p>
            <p>  Type: {props.launch.rocket.rocket_type}</p>
            <h2> Launch site</h2>
            <p> {props.launch.launch_site.site_name_long}</p>
            <h2> Failure details </h2> 
            <p> {props.launch.details}</p>
            <h2> 
                Read the article on  
                <a href={props.launch.links.article_link}> Space.com </a> 
                Or Watch it on
                <a href={props.launch.links.video_link}>  Youtube </a>
            </h2>
           <div className="ReactPlayer"> 
            <ReactPlayer url={props.launch.links.video_link}/>
            </div>
            </div> */}


            <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Flight Number: {props.launch.flight_number} </strong>
              {/* <strong>Mission Name: {props.launch.mission_name} </strong> */}
            </MDBCardTitle>
            <MDBCardTitle className="card-title h4 pb-2">
              {/* <strong>Flight Number: {props.launch.flight_number} </strong> */}
              <strong>Mission Name: {props.launch.mission_name} </strong>
            </MDBCardTitle>
            <MDBCardTitle className="indigo-text h5 m-4">
                MISSION PATCH
              </MDBCardTitle>

            <MDBContainer className="mt-5 center">
            <MDBCardImage
            src={props.launch.links.mission_patch_small} 
                        className="img-fluid" 
                        />
            </MDBContainer>
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
               <h2>Rocket details </h2> 
              </MDBCardTitle>
              <MDBCardText>
              

              <p>  ID: {props.launch.rocket.rocket_id}</p>
            <p>  Name: {props.launch.rocket.rocket_name}</p>
            <p>  Type: {props.launch.rocket.rocket_type}</p>


              <h2> Launch site</h2>
            <p> {props.launch.launch_site.site_name_long}</p>
            <h2> Failure details </h2> 
            <p> {props.launch.details}</p>
           
           
              </MDBCardText>


              <MDBCardText>
              <h2> 
                Read the article on  
                <a href={props.launch.links.article_link}> Space.com </a> 
                
            </h2>
            <h2> 
               
                Watch it on
                <a href={props.launch.links.video_link}>  Youtube </a>
            </h2>


              </MDBCardText>
              {/*  */}

            {/* <div className="ReactPlayer">  */}
            {/* <ReactPlayer url={props.launch.links.video_link}/> */}
               {/* </div> */}
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            
    </>
    )
}