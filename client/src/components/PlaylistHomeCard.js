import { useState, useEffect } from "react";
import PlaylistHomeList from '../components/PlaylistHomeList'
import playlistService from '../services/playlistService'


const PlaylistCard = () => {
    const [playlistInfo, setPlaylistInfo] = useState([])

useEffect(() => {
    playlistService.getPlaylists().then(data => setPlaylistInfo(data))}
    , [])
  
  return (
    <>
      
        <PlaylistHomeList playlists={playlistInfo} />
    
    </>
  )
}

export default PlaylistCard;