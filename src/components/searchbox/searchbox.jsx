import React from 'react';

import './searchbox.css';

export const SearchBox = ({placeholder, handleChange }) => (

    // <h2></h2>
    <input 
    className='search'
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}/>


)