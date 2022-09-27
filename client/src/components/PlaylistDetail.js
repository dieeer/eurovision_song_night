import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react';
import PlaylistSongCard from './PlaylistSongCard';
import playlistService from '../services/playlistService';
import * as React from 'react';
import PlaylistSongAccordion from './PlaylistSongAccordion';

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


// render SongCard for each object in playlist's 'songs' array



const songData = singlePlaylist.songs.map((song) => {
    return (<>
        <li><PlaylistSongAccordion key={song._id} song={song} /></li>
    </>
    )
})

// delete playlist button
const handleDeletePlaylist = () => {
    playlistService.deletePlaylist(playlist._id)
}
        
    return (
        <div className='playlist-detail-wrapper'>
            <form onSubmit={handleDeletePlaylist}>
            <input type='submit' name='submit'  value='Delete Playlist' />
            </form>
            <br/>
            <ol>
                {songData}
            </ol>

        </div>
    )
}



export default PlaylistDetail;