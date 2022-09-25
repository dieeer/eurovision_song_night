import {useParams} from 'react-router-dom';
import { useState } from 'react';

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

    return (
        <div>
            {playlist.name}
            <br/>
            {playlist.songs}
            <br/>
        </div>
    )
}