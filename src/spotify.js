export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientID = "63423c0378fe4efe88217a6f73a87fb8";

// Boundation on Users so that they dont exploit API by deleting stuff and Spotify Blocking use of API
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Below Code extracts the access token taht we receive from Spotify
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

