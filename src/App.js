import React, { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{token},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getPlaylist("37i9dQZEVXcTMQQqg1CAFG").then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      );

      spotify.getMyTopArtists().then((response) => 
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify
      });

    }
  }, [token,dispatch]);

  // console.log("Hello",user);
  // console.log("Token: ",token);
  // console.log("Playlists: ",playlists);
  return (
    <div className="app">
      {
        token ? ( <Player spotify={spotify}/> ) : ( <Login /> )
      }
      
    </div>
  );
}

export default App;
