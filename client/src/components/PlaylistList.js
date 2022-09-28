import React from 'react'
import Playlist from './Playlist'
import { useState } from 'react'

const { flag, code, name, countries } = require('country-emoji')

const PlaylistList = ({ playlists, deletePlaylist, createPlaylist }) => {
  const [name, setName] = useState('')
  const [songs, setSongs] = useState([])

  const playlistData = playlists.map((playlist) => {
    return (
      <li className='dash-list-item'>
        <Playlist playlist={playlist} />
        <a onClick={() => deletePlaylist(playlist._id)}>delete</a>
      </li>
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
        <h1 className='main-title'>Playlists</h1>
      </section>

      <div className='stacked-group'>
        <div className='stacked-playlist-list'>
          <ul role='list' className='dash-list'>
            {playlistData}
          </ul>
          <button onClick={handleSubmit} class='button primary'>
            Create a new playlist
          </button>
        </div>
      </div>
    </>
  )
}

export default PlaylistList
