import React from 'react'
import { useState, useEffect } from "react";
import SongList from '../components/SongList';
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
    <div>SongsContainer</div>
      <SongList songs={SongsList} />
    </>
  )
}

export default SongsContainer;