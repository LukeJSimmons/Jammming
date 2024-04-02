import {React, useState} from "react";
import {generateId} from "./utilities";
import Track from "./Track";
import styles from "./Tracklist.css";
import Playlist from "./Playlist";



function Tracklist(props) {

    function moveTrack(track) {
        props.moveTrack(track);
    }


    return (
        <div id="container">
            {props.tracks.map((track) => (
            <Track key={track.id} track={track} moveTrack={moveTrack} buttonIcon={props.buttonIcon} />
          ))}
        </div>
    );
}

export default Tracklist;
