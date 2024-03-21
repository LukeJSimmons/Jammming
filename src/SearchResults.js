import React from "react";
import Tracklist from "./Tracklist";


function SearchResults(props) {
    function addTrack(track) {
        props.addTrack(track);
    }
    
    return (
        <div>
            <h2>Results</h2>
            <Tracklist tracks={props.searchResults} moveTrack={addTrack} />
        </div>
    );
}

export default SearchResults;
