import React from 'react'
import PlaylistList from '../components/PlaylistList'
import playlistService from '../services/playlistService'

const PlaylistsContainer = ({playlists}) => {

  const createPlaylist = () => {
    playlistService.createPlaylist()
  }


  
  return (
    <>
      <div className='playlist-wrapper'>

      <PlaylistList playlists={playlists} createPlaylist={createPlaylist} />
      </div>

    </>
  )
}

export default PlaylistsContainer