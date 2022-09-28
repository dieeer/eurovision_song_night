import React from 'react'
import PlaylistHome from './PlaylistHome'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { flag, code, name, countries } = require('country-emoji')

const PlaylistList = ({ playlists, deletePlaylist, createPlaylist }) => {
  const [name, setName] = useState('')
  const [songs, setSongs] = useState([])

  const playlistData = playlists.map((playlist) => {
    return (
     
      <Link to={"/playlists/" + playlist._id}>
        <li className='dash-list-item'>
          <PlaylistHome key={playlist._id} playlist={playlist} />
          {/* <button onClick={() => deletePlaylist(playlist._id)}>delete</button> */}
        </li>
        <hr />
      </Link>
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
      {/* <form onSubmit={handleSubmit}>
        <input type='submit' name='submit' value='Create Playlist' />
      </form> */}
      <ul role='list' className='dash-list'>
        {playlistData}
      </ul>
    </>
  )
}

export default PlaylistList
