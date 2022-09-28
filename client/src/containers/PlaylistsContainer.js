import React from 'react'
import PlaylistList from '../components/PlaylistList'
import playlistService from '../services/playlistService'
import {useEffect, useState} from 'react';

const PlaylistsContainer = ({playlists}) => {

  // Set the use state of a playlist.
  const [playlistInfo, setPlaylistInfo] = useState([])

  // create a new playlist
  const createPlaylist = () => {
    playlistService.createPlaylist()
      .then(() => {
        playlistService.getPlaylists()
          .then(data => setPlaylistInfo(data))
    })}   

    // update playlist
    const updatePlaylist = (playlistId, updatedPlaylist) => {
      playlistService.updatePlaylist(playlistId, updatedPlaylist)
        .then(() => {
          playlistService.getPlaylists()
            .then(data => setPlaylistInfo(data))
        })
    }


  // deletes a playlist
  const deletePlaylist = (_id) => {
    playlistService.deletePlaylist(_id).then(() => {
      playlistService.getPlaylists().then(data => setPlaylistInfo(data))
    })
  }
  
  // get all available playlists
  useEffect(() => {
    playlistService.getPlaylists().then(data => setPlaylistInfo(data))}
    , [])
  
  return (
    <>
      <div className='playlist-wrapper'>
      <PlaylistList playlists={playlistInfo} createPlaylist={createPlaylist} deletePlaylist={deletePlaylist}
        updatePlaylist={updatePlaylist} />
      </div> 
    </>
  )
}

export default PlaylistsContainer;