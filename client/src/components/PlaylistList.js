import React from 'react';
import Playlist from './Playlist';
import {createPlaylist} from '../services/playlistService'

const PlaylistList = ({playlists, deletePlaylist, createPlaylist}) => {
    const playlistData = playlists.map((playlist) => {
        return (
            <Playlist key={playlist._id} playlist={playlist}/>
            )
    })


    // get length of 'songs' array in each playlist
    const songCount = playlists.map((playlist) => {
        if (playlist.songs.length === false) {
            return 0
        }
        return playlist.songs.length
    })

    const handleDeletePlaylist = (_id) => {
        deletePlaylist(playlists._id)
    }

    const handleCreatePlaylist = () => {
        createPlaylist()
    }





    return (
        <>
        <div className='playlist-wrapper'>
        <h2>Playlists</h2>
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
        <ul>
        {playlistData}
        </ul>
        </div>
        </>
    )
}

export default PlaylistList;