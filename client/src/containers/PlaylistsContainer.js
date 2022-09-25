import React from 'react'
import PlaylistList from '../components/PlaylistList'

const PlaylistsContainer = ({playlists}) => {
  return (
    <>
      <PlaylistList playlists={playlists}/>
    </>
  )
}

export default PlaylistsContainer