import React from "react";
import styles from "./Track.css";


function Track(props) {
    const {track, moveTrack} = props;
    let inPlaylist = false;

    function handleClick() {
        if (!inPlaylist) {
            props.moveTrack(track);
        }
        
    }

    return (
        <div className="container">
            <div>
                <h4>{track.name}</h4>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Track;
