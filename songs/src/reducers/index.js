import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Serene', duration: '2:25' },
        { title: 'Dream Dealer', duration: '2:16' },
        { title: 'Majinbuu94', duration: '1:36' },
        { title: 'Being in Love with U', duration: '3:30' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED' ) return action.payload
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
