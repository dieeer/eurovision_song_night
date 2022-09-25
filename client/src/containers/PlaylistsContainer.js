import React from 'react'
import PlaylistList from '../components/PlaylistList'
import playlistService from '../services/playlistService'
import {useEffect, useState} from 'react';

const PlaylistsContainer = ({playlists}) => {

  
  // Create a new playlist.
  const createPlaylist = () => {
    playlistService.createPlaylist()
  }
  
  // Deletes a playlist.
  const deletePlaylist = (_id) => {
    playlistService.deletePlaylist(_id)
  }
  
  // Get all the available playlists.
  useEffect(() => {
    playlistService.getPlaylists()}
    , [])
  
  return (
    <>
      <div className='playlist-wrapper'>

      <PlaylistList playlists={playlists} createPlaylist={createPlaylist} deletePlaylist={deletePlaylist}/>
      </div>

    </>
  )
}

export default PlaylistsContainer