import React from 'react';

const CLIENT_ID = '914a744c7d1145ce827e335b20b93c08';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Your redirect URI
const SCOPES = ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private']; // Scopes for accessing user data

function TokenGetter(props) {
    const handleLogin = () => {
    const params = {
        client_id: CLIENT_ID,
        response_type: 'token',
        redirect_uri: REDIRECT_URI,
        scope: SCOPES.join(' '),
    };
    const queryParams = new URLSearchParams(params).toString();
    window.location.href = `https://accounts.spotify.com/authorize?${queryParams}`;
    };

    let hash = window.location.hash;
    if (hash) {
        const sections = hash.split(/[=&]/);

        props.setToken(sections[1]);

        window.location.hash = '';
    }
    

    return (
    <div>
        <button onClick={handleLogin}>{props.token ? 'Logged In' : 'Login with Spotify'}</button>
    </div>
    );
};

export default TokenGetter;
