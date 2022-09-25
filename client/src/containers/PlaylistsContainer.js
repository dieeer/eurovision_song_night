import React from 'react'
import PlaylistList from '../components/PlaylistList'

const PlaylistsContainer = ({playlists, deletePlaylist}) => {
  return (
    <>
      <PlaylistList playlists={playlists} deletePlaylist={deletePlaylist}/>
    </>
  )
}

export default PlaylistsContainer