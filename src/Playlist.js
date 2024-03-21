import {React, useState} from "react";
import {generateId} from "./utilities";
import Tracklist from "./Tracklist";
import Track from "./Track";


function Playlist(props) {

    function removeTrack(track) {
        props.removeTrack(track);
    }

    return (
        <div>
            <h2>Playlist</h2>
            <Tracklist tracks={props.playlistTracks} moveTrack={removeTrack} />
            <input></input>
            <br></br>
            <button>Save to Spotify</button>
        </div>
    );
}

export default Playlist;
