import React from 'react'
import Playlist from './Playlist'
import { useState } from 'react'

const { flag, code, name, countries } = require('country-emoji')

const PlaylistList = ({ playlists, deletePlaylist, createPlaylist }) => {
  const [name, setName] = useState('')
  const [songs, setSongs] = useState([])

  const playlistData = playlists.map((playlist, index) => {
    return (
      <>
        <li className='dash-list-item' key={index}>
          <Playlist playlist={playlist} />
          <a onClick={() => deletePlaylist(playlist._id)}>delete</a>
        </li>
        <hr />
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
    setName(name)
    setSongs([])
    window.location.reload(true)
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
          <button onClick={handleSubmit} className='button primary'>
            Create a new playlist
          </button>
        </div>
      </div>
    </>
  )
}

export default PlaylistList
