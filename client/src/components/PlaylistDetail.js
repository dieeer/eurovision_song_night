import {useParams} from 'react-router-dom';
import { useState } from 'react';
import SongCard from './SongCard';
import SongList from './SongList';
import {Link} from 'react-router-dom';
import playlistService from '../services/playlistService';

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

// show details for each song in 'songs' array
const songData = playlist.songs.map((song) => {
    return (<>
        <li><SongCard key={song._id} song={song} /></li>
    </>
    )
})

// delete playlist button
const handleDeletePlaylist = () => {
    playlistService.deletePlaylist(playlist._id)
}


        

    return (
        <div className='playlist-wrapper'>
            {playlist.name}
            <button onClick={handleDeletePlaylist} action='/playlists'>delete</button>
            <br/>
            <ol>
            {songData}
            </ol>
            <br/>
        </div>
    )
}

export default PlaylistDetail;