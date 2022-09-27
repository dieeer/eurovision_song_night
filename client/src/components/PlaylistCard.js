import { useState, useEffect } from "react";
import PlaylistList from '../components/PlaylistList'
import playlistService from '../services/playlistService'


const PlaylistCard = () => {
    const [playlistInfo, setPlaylistInfo] = useState([])

useEffect(() => {
    playlistService.getPlaylists().then(data => setPlaylistInfo(data))}
    , [])
  
  return (
    <>
      <div className='playlist-wrapper'>
      <PlaylistList playlists={playlistInfo} />
      </div>
    </>
  )
}

export default PlaylistCard;