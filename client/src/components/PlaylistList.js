import React from 'react'
import Playlist from './Playlist'
import { useState } from 'react'
import { Link } from 'react-router-dom'
    
const { flag, code, name, countries } = require('country-emoji')

const PlaylistList = ({ playlists, deletePlaylist, createPlaylist }) => {
  const [name, setName] = useState('')
  const [songs, setSongs] = useState([])

  const playlistData = playlists.map((playlist) => {
    return (
      <>
        <Link to={playlist._id}>
          <li class='dash-list-item'>
            <Playlist key={playlist._id} playlist={playlist} />
          </li>
        </Link>
        <button onClick={() => deletePlaylist(playlist._id)}>delete</button>
      </>

    )
  })

  // Delete a playlist.
  const handleDeletePlaylist = (_id) => {
    deletePlaylist(playlists._id)
  }

  // handleSubmit so that page does not need to refresh to see new playlist
  const handleSubmit = (event) => {
    event.preventDefault()
    createPlaylist(name, songs)
    setName('')
    setSongs([])
  }

  return (
    <>
      <section>
        <h1 class='main-title'>Playlists</h1>
      </section>
      <form onSubmit={handleSubmit}>
        <input type='submit' name='submit' value='Create Playlist' />
      </form>
      <div class='stacked-group'>
        <div class='stacked-playlist-list'>
          <ul role='list' class='dash-list'>
            {playlistData}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PlaylistList
