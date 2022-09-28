import React from 'react'
import { useState, useEffect } from 'react'

import SongSearchBar from '../components/SongSearchBar'
import { getAll } from '../services/EuroServices'
import SongList from '../components/SongList'
import AutocompleteSearchbar from '../components/AutocompleteSearchbar'
import SongCard from '../components/SongCard'

  const SongsContainer = ({ playlists }) => {
  const [SongsList, setSongsList] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [chosenSong, setChosenSong] = useState('')

  useEffect(() => {
    getAll().then((allSongs) => {
      setSongsList(allSongs)
    })
  }, [])


  // const onSearchChange = (searchTerm) => {
  //   filterSongs(searchTerm)
  // }

  // const filterSongs = (searchTerm) => {
  //   const lowerSearch = searchTerm.toLowerCase()
  //   const filteredSongs = SongsList.filter((song) => {
  //     return song.song.toLowerCase().indexOf(lowerSearch) > -1
  //   })
  //   setFilteredSongs(filteredSongs)
  // }



  return (
    <>
      <AutocompleteSearchbar songs={SongsList}/>
    </>
  )
}

export default SongsContainer
