import {React, useState} from "react";
import {generateId} from "./utilities";
import styles from './Playlist.css';
import Tracklist from "./Tracklist";
import Track from "./Track";
import UsernameGetter from './UsernameGetter';


function Playlist(props) {

    function removeTrack(track) {
        props.removeTrack(track);
    }

    function handleChange(event) {
        props.handleChange(event);
    }

    function savePlaylist() {
        props.savePlaylist();
    }

    return (
        <div className="tracklists">
            <h2>Playlist</h2>
            <Tracklist tracks={props.playlistTracks} moveTrack={removeTrack} buttonIcon='-' />
            <input onChange={handleChange} value={props.title}></input>
            <br></br>
            <button onClick={savePlaylist}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;
