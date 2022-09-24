import React from 'react'
import { useState, useEffect } from "react";
import SongList from '../components/SongList';
import SongSearchBar from '../components/SongSearchBar';
import { getAll } from '../services/EuroServices';


const SongsContainer = () => {

  const [SongsList, setSongsList] = useState([]);

  useEffect(()=>{
    getAll().then((allSongs)=>{
      setSongsList(allSongs);
    })
  }, []);


  return (
    <>
      <SongList songs={SongsList} />
    </>
  )
}

export default SongsContainer;