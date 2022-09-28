import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react';
import playlistService from '../services/playlistService';
import * as React from 'react';
import PlaylistSongAccordion from './PlaylistSongAccordion';
import PlaylistList from './PlaylistHomeList';

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

    useEffect(() => {
        const url = `http://localhost:9000/api/playlists/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPlaylist(data))
    }, [id])

    useEffect(() => {
        setPlaylist(singlePlaylist)
    }, [singlePlaylist])
    


    // delete song from playlist

    const deleteSongFromPlaylist = (songToDelete) => {
        const updatedPlaylist = {...playlist, songs: playlist.songs.filter((song) => song._id !== songToDelete._id)}
        const {_id, ...updatedPlaylistWithoutId} = updatedPlaylist
        return fetch(`http://localhost:9000/api/playlists/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPlaylistWithoutId),
        }).then((res) => res.json())
    }




const songData = singlePlaylist.songs.map((song) => {
    return (<>
        <li><PlaylistSongAccordion key={song._id} song={song}/></li>
    </>
    )
})


// delete playlist button
const handleDeletePlaylist = () => {
    playlistService.deletePlaylist(playlist._id)
    window.location.href = "http://localhost:3000/playlists"
}
        
    return (
        <div className='playlist-detail-wrapper'>
            {/* <form onSubmit={handleDeletePlaylist}>
            <input type='submit' name='submit'  value='Delete Playlist' />
            </form> */}
            <button onClick={handleDeletePlaylist} class='button primary'>
                    Delete This Playlist
            </button>
            <br/>
            <ol>
                {songData}
            </ol>

        </div>
    )
}



export default PlaylistDetail;