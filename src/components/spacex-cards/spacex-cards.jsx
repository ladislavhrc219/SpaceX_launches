import React from 'react';
import ReactPlayer from "react-player";

import './spacex-cards.css';
// curly braces then return in components otherwise error 
// without return normal braces after props 
export const Cards = (props) => {
    return (
    <>
   
            <div className="card-container">
            <h4> Flight Number: {props.launch.flight_number} </h4> 
            <h1> Mission Name: {props.launch.mission_name}</h1> 
            <h2> Mission Patch </h2> 
            <div className="missionpatches">
           
                <img src={props.launch.links.mission_patch_small} alt="patch" /> 

                </div> 
            
            {/* mission_patch_small */}
            {/* <div class=""> Article:
                <a href={props.launch.links.article_link}> Click to Read </a>
            </div> */}
            <h2> Rocket details</h2> 
            <p>  ID: {props.launch.rocket.rocket_id}</p>
            <p>  Name: {props.launch.rocket.rocket_name}</p>
            <p>  Type: {props.launch.rocket.rocket_type}</p>
            <h2> Launch site</h2>
            <p> {props.launch.launch_site.site_name_long}</p>
            <h2> Failure details </h2> 
            <p> {props.launch.details}</p>

           <h2> Payload </h2>
            <p> {props.launch.rocket.second_stage.payloads[1]}</p>

            {/* <h2> Links    </h2>     */}
            <h2> 
                Read the article on  
                <a href={props.launch.links.article_link}> Space.com </a> 

                Or Watch it on
                <a href={props.launch.links.video_link}>  Youtube </a>
                {/* <br> </br>  */}
            </h2>
            
           <div className="ReactPlayer"> 
            <ReactPlayer url={props.launch.links.video_link}/>
            </div>
           
       
            </div>
            
    </>
    )
}