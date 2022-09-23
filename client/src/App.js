import { useState, useEffect } from "react";
import './App.css';
import './services/EuroServices';
import { getAll } from './services/EuroServices';
import './components/SongList';
import EuroSongsList from  './components/SongList';
function App() {

  const [SongsList, setSongsList] = useState([]);

  useEffect(()=>{
    getAll().then((allSongs)=>{
      setSongsList(allSongs);
    })
  }, []);

  return (
    <EuroSongsList songs={SongsList}/>
  );
}

export default App;
