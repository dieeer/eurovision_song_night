import React from 'react'
import { useState, useEffect } from 'react'
import SongSearchBar from '../components/SongSearchBar'
import Filter from '../components/SongSearchBar'
import { getAll } from '../services/EuroServices'
import SongList from '../components/SongList'

const SongsContainer = ({ playlists }) => {
  const [SongsList, setSongsList] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])

  useEffect(() => {
    getAll().then((allSongs) => {
      setSongsList(allSongs)
    })
  }, [])

  const onSearchChange = (searchTerm) => {
    filterSongs(searchTerm)
  }

  const filterSongs = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase()
    const filteredSongs = SongsList.filter((song) => {
      return song.song.toLowerCase().indexOf(lowerSearch) > -1
    })
    setFilteredSongs(filteredSongs)
  }

  return (
    <>
      <SongSearchBar songs={filteredSongs} onSearchChange={onSearchChange} />
      <SongList songs={filteredSongs} />
    </>
  )
}

export default SongsContainer
