import React from 'react'
import { useState, useEffect } from "react";
import SongList from '../components/SongList';
import SongSearchBar from '../components/SongSearchBar';
import { getAll } from '../services/EuroServices';
import SongCard from '../components/SongCard';
import playlistService from '../services/playlistService'


const SongsContainer = ({playlists}) => {

  const [SongsList, setSongsList] = useState([]);

  useEffect(()=>{
    getAll().then((allSongs)=>{
      setSongsList(allSongs);
    })
  }, []);



// const filter = (searchTerm) => {
//   const lowerSearch = searchTerm.toLowerCase();
//   const filteredStories = stories.filter((story) => {
//     return story.title.toLowerCase().indexOf(lowerSearch) > -1;
//   });
//   setFilteredStories(filteredStories);
// }


  return (
    <>
      <SongSearchBar songs={SongsList}/>
      <SongList songs={SongsList} playlists={playlists}/>

    </>
  )
}

export default SongsContainer;