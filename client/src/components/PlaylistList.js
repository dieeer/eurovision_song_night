import React from 'react';
import Playlist from './Playlist';
import playlistService, {createPlaylist} from '../services/playlistService'
import {useEffect, useState} from 'react';

const PlaylistList = ({playlists, deletePlaylist, createPlaylist}) => {

    
    const [name, setName] = useState('');
    const [songs, setSongs] = useState([]);
    
    const handleNameChange = (event) => setName(event.target.value)
    const handleSongChange = (event) => setSongs(event.target.value)
    

    
    // const [playlistInfo, setPlaylistInfo] = useState(playlistService.getPlaylists())


    const playlistData = playlists.map((playlist) => {
        return (<>
            <Playlist key={playlist._id} playlist={playlist}/>
            <button onClick={() => deletePlaylist(playlist._id)}>delete</button>
            </>
            )
        })
    




    // Delete a playlist.
    const handleDeletePlaylist = (_id) => {
        deletePlaylist(playlists._id)
    }


    // handleSubmit so that page does not need to refresh to see new playlist
    const handleSubmit = (event) => {
        event.preventDefault();
        createPlaylist(name, songs);
        setName('');
        setSongs([]);
    }




    return (
        <>
        <div className='playlist-wrapper'>
        <h2>Playlists</h2>
        <form onSubmit={handleSubmit}>
        <input type='submit' name='submit'  value='Create Playlist' />
        </form>
        <ul>
        {playlistData}
        </ul>
        </div>
        </>
    )
}

export default PlaylistList;