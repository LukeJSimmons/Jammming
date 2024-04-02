import {React, useState} from 'react';


function SearchBar(props) {
    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleClick() {
        props.handleClick(search);
    }
    
    return (
        <>
            <input onChange={handleChange} value={search}></input>
            <button onClick={handleClick}>Search</button>
        </>
    );
}

export default SearchBar;
