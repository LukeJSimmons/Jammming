import {React, useState} from 'react';


function SearchBar(props) {
    function handleChange(event) {
        props.handleChange(event);
    }

    function handleClick() {
        props.handleClick();
    }
    
    return (
        <>
            <input onChange={handleChange} value={props.search}></input>
            <button onClick={handleClick}>Search</button>
        </>
    );
}

export default SearchBar;
