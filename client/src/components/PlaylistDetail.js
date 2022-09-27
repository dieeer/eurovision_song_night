import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react';
import SongCard from './SongCard';
import playlistService from '../services/playlistService';

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

    useEffect(() => {
        const url = `http://localhost:5000/api/playlists/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPlaylist(data))
    }, [id])


// render SongCard for each object in playlist's 'songs' array
    console.log(singlePlaylist.songs)




const songData = singlePlaylist.songs.map((song) => {
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
            {/* {playlist.name} */}
            <form onSubmit={handleDeletePlaylist}>
            <input type='submit' name='submit'  value='Delete Playlist' />
            </form>
            <br/>
            <ol>
                {songData}
            </ol>
            <br/>
        </div>
    )
}

export default PlaylistDetail;