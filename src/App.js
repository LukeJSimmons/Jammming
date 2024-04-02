import logo from './logo.svg';
import {React, useState} from 'react';
import { generateId } from './utilities';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import SpotifyTracks from './SpotifyTracks';
import TokenGetter from './TokenGetter';

function App() {
  const [tracks, setTracks] = useState([
      
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    
  ]);

function addTrack(track) {
  if (!playlistTracks.includes(track)) {
    setPlaylistTracks((prev) => [track, ...prev]);
  }
}

function removeTrack(track) {
  setPlaylistTracks((tracks) =>
      tracks.filter((newTrack) => newTrack.id !== track.id)
  );
}

const [title, setTitle] = useState('');

function handleTitleChange(event) {
  setTitle(event.target.value);
}

async function savePlaylist() {
  const user = await getUsername().then(data => data.id);
  console.log(user);
  const newPlaylist = [];
  playlistTracks.forEach((i) => {newPlaylist.push(i.uri)});
  setPlaylistTracks([]);

  const response = await createPlaylist(user);

  if (response.ok) {
    alert('LETS GO');
  } else {
    alert('FRICK');
  }

  const jsonResponse = await response.json();

  addTracksToPlaylist(user, jsonResponse.id, newPlaylist);
}

const [token, setToken] = useState('');

function handleSearch(search) {
  const accessToken = token;
  const searchQuery = search;

  const encodedSearchQuery = encodeURIComponent(searchQuery);

  fetch(`https://api.spotify.com/v1/search?q=${encodedSearchQuery}&type=track`, {
      headers: {
          'Authorization': `Bearer ${accessToken}`
      }
  })
  .then(response => response.json())
  .then(data => {
      setTracks(data.tracks.items);
  })
  .catch(error => {
      console.error('Error:', error);
  })
}

  function getUsername() {
    const accessToken = token;

    return fetch(`https://api.spotify.com/v1/me`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
  }

  function createPlaylist(userId) {
    const accessToken = token;

    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        name: title})
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function addTracksToPlaylist(userId, playlistId, newPlaylist) {
    const accessToken = token;

    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        uris: newPlaylist,
        position: 0
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <TokenGetter token={token} setToken={setToken} />
        <Header />
        <SearchBar handleClick={handleSearch} />
        <div className="flex">
          <SearchResults searchResults={tracks} addTrack={addTrack} />
          <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack} savePlaylist={savePlaylist} handleChange={handleTitleChange} title={title} />
        </div>
      </header>
    </div>
  );
}

export default App;
