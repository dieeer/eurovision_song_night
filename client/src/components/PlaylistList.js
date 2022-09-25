import React from 'react';
import Playlist from './Playlist';

const PlaylistList = ({playlists}) => {
    const playlistData = playlists.map((playlist) => {
        return (
            <Playlist key={playlist._id} playlist={playlist}/>
        )
    })
    return (
        <div className='playlist-wrapper'>{playlistData}</div>
    )
}

export default PlaylistList;