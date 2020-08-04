export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    playing: false,
    item: null,
    spotify: null,
    top_artists: null,
    // token: "BQAnsq1UpANCPt3uj8TQGKl_1gtXbk44bBN_Ca77FRYPBEvpjDIwMxW9mNk18SgtHqtyxs6HQXHUNA84ViER7E1668WWsaD2M7zD5bhD-lGp7gNCDuWYGFUdEQzGG1OyzfBDMXlJbw5JwUEcC3zByptLWPkTyxBn31cBhgAkLCvKWU42mueE",
}

const reducer = (state,action) => {
    switch(action.type){
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            };

        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            };
        
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            };
            
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };    
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            }    

        default:
            return state;
    }
}

export default reducer;