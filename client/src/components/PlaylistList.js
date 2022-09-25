import React from 'react';
import Playlist from './Playlist';
import playlistService from '../services/playlistService'

const PlaylistList = ({playlists, deletePlaylist}) => {
    const playlistData = playlists.map((playlist) => {
        return (
            <Playlist key={playlist._id} playlist={playlist}/>
            )
    })


    // get length of 'songs' array in each playlist
    const songCount = playlists.map((playlist) => {
        return playlist.songs.length
    })

    const handleDeletePlaylist = (_id) => {
        deletePlaylist(playlists._id)
    }




    return (
        <>
        <div className='playlist-wrapper'>{playlistData} number of songs: {songCount}</div>
        {/* button to delete playlist from db */}
        <button onClick={handleDeletePlaylist}>delete</button>
        </>
    )
}

export default PlaylistList;