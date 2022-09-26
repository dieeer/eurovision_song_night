import React from 'react';
import Playlist from './Playlist';
import playlistService, {createPlaylist} from '../services/playlistService'
import {useEffect, useState} from 'react';

const PlaylistList = ({playlists, deletePlaylist, createPlaylist}) => {
    const [name, setName] = useState('');
    const [songs, setSongs] = useState([]);

    const handleNameChange = (event) => setName(event.target.value)
    const handleSongChange = (event) => setSongs(event.target.value)

    
    // map the data, then put the data into playlist info state 
    
    // const [playlistInfo, setPlaylistInfo] = useState(playlistService.getPlaylists())


    const playlistData = playlists.map((playlist) => {
        return (<>
            <Playlist key={playlist._id} playlist={playlist}/>
            <button onClick={() => deletePlaylist(playlist._id)}>delete</button>
            </>
            )
        })
    
    // useEffect(() => {
    //     playlistService.getPlaylists()
    //     }, [playlistInfo])
        




    // // get length of 'songs' array in each playlist
    // const songCount = playlists.map((playlist) => {
    //     if (playlist.songs.length === false) {
    //         return 0
    //     }
    //     return playlist.songs.length
    // })

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