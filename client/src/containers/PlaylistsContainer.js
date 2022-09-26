import React from 'react'
import PlaylistList from '../components/PlaylistList'
import playlistService from '../services/playlistService'
import {useEffect, useState} from 'react';

const PlaylistsContainer = ({playlists}) => {

  const [playlistInfo, setPlaylistInfo] = useState([])

  // Create a new playlist.
  const createPlaylist = () => {
    playlistService.createPlaylist()
    
      .then(() => {
        playlistService.getPlaylists()
          .then(data => setPlaylistInfo(data))
    // setPlaylistInfo([...playlistInfo, newPlaylistData])
    })}   

  // Deletes a playlist.
  const deletePlaylist = (_id) => {
    playlistService.deletePlaylist(_id).then(() => {
      playlistService.getPlaylists().then(data => setPlaylistInfo(data))
    })
  }
  
  // Get all the available playlists.
  useEffect(() => {
    playlistService.getPlaylists().then(data => setPlaylistInfo(data))}
    , [])
  
  return (
    <>
      <div className='playlist-wrapper'>

      <PlaylistList playlists={playlistInfo} createPlaylist={createPlaylist} deletePlaylist={deletePlaylist}/>
      </div>

    </>
  )
}

export default PlaylistsContainer