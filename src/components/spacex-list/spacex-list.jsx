import React from 'react';

import {Cards} from '../spacex-cards/spacex-cards.jsx';
import './spacex-list.css';

export const SpaceXlist =(props)=> {
    return (
                <>
                <div className="space-img">
                    <h1 className="spacex-header bg-warning"> SpaceX Launches </h1>
                    <h2 class="spacex-dates">2006 - 2019</h2> 
                </div>

                <div className="card-list">
                        {props.launches.map(launch => (

                            <Cards launch={launch} />
                        )
                            )}
                    </div>
               
               
                <h2 class="spacex-footer"> All Rights Reserved @ 2020</h2> 
                
                </>
    )
   
}

