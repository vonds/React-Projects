import { combineReducers } from "redux"

// 1

// 2

// 3

// 4

// 5

const songsReducer = () => {
    return [
        { title: '4:20', duration: '4:20'},
        { title: 'Gone', duration: '2:01'},
        { title: 'Duck in a box', duration: '2:20'},
        { title: 'Jazzy Winter', duration: '1:46'}
    ]
}

// 1

// 2

// 3

// 4

// 5

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') return action.payload
    return selectedSong
}

// 1

// 2

// 3

// 4

// 5

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

// 1

// 2

// 3

// 4

// 5

