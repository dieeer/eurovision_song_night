import { useState, useEffect } from "react";
import './App.css';
import './Components/EuroDB_Connection';
import { getAll } from './Components/EuroDB_Connection';
import './Components/EuroSongsList';
import EuroSongsList from  './Components/EuroSongsList';
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
