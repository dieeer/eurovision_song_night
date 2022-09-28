import React from 'react'
import { useState, useEffect } from 'react'
import { getAll } from '../services/EuroServices'
import AutocompleteSearchbar from '../components/AutocompleteSearchbar'

  const SongsContainer = ({songs}) => {


  



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
      <AutocompleteSearchbar songs={songs}/>
    </>
  )
}

export default SongsContainer
