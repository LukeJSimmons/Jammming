import logo from './logo.svg';
import {React, useState} from 'react';
import { generateId } from './utilities';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SpotifyTracks from './SpotifyTracks';

function App() {
  const [tracks, setTracks] = useState([
      {
          id: generateId(),
          name: 'name1',
          artist: 'artist',
          album: 'album',
      },
      {
          id: generateId(),
          name: 'name2',
          artist: 'artist',
          album: 'album',
      }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    
]);

function addTrack(track) {
  setTracks((tracks) =>
      tracks.filter((newTrack) => newTrack.id !== track.id)
  );
  setPlaylistTracks((prev) => [track, ...prev]);
}

function removeTrack(track) {
  setPlaylistTracks((tracks) =>
      tracks.filter((newTrack) => newTrack.id !== track.id)
  );
  setTracks((prev) => [track, ...prev]);
}


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
        <div className="flex">
          <SearchResults searchResults={tracks} addTrack={addTrack} />
          <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack} />
        </div>
      </header>
    </div>
  );
}

export default App;
