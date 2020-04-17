import React from 'react';

import {Cards} from '../spacex-cards/spacex-cards.jsx';
import './spacex-list.css';
// 
import {SearchBox} from './../searchbox/searchbox.jsx';
// import {SearchBox} from './components/searchbox/searchbox.jsx';

export const SpaceXlist =(props)=> {
    return (
                <>
                <div className="space-img">
                    <h1 className="spacex-header bg-warning"> SpaceX Launches </h1>
                    
                    <h2 class="spacex-dates">2006 - 2019</h2> 
                    <h2 class="spacex-dates">search mission names </h2> 
                    
                </div>
                <SearchBox
                className='search'
                placeholder=' mission names'
                handleChange={e=>this.setState({searchField: e.target.value})}
                />
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

