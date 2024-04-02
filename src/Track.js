import React from "react";
import styles from "./Track.css";


function Track(props) {
    const {track, moveTrack} = props;

    function handleClick() {
        props.moveTrack(track);
    }

    return (
        <div className="container">
            <div>
                <h4>{track.name}</h4>
                <p>{track.artists[0].name} | {track.album.name}</p>
            </div>
            <button onClick={handleClick}>{props.buttonIcon}</button>
        </div>
    );
}

export default Track;
