import {useParams} from 'react-router-dom';
import { useState } from 'react';
import SongCard from './SongCard';
import SongList from './SongList';
import {Link} from 'react-router-dom';

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

    // const songsInPlaylist = ({playlist}) => {
    //     const allSongsInPlaylist = playlist.songs.map((songs) => {
    //         return (
    //             <ul>
    //                 <li>
    //                     <SongList key={songs._id} songs={songs}/>
    //                 </li>
    //             </ul>
    //         )
    //     })

        // }

        

    return (
        <div>
            {playlist.name}
            <br/>
            {playlist.songs[0]['song']}
            <br/>
        </div>
    )
}

export default PlaylistDetail;