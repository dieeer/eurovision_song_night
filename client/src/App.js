import { useState, useEffect } from "react";
import './App.css';
import { getAll } from './services/EuroServices';
import SongList from  './components/SongList';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './containers/Home'
import NavBar from './components/NavBar.js'
import Error from './components/Error'
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import ContestsContainer from './containers/ContestsContainer'

function App() {

  const [SongsList, setSongsList] = useState([]);

  useEffect(()=>{
    getAll().then((allSongs)=>{
      setSongsList(allSongs);
    })
  }, []);

  return (
    <>
      <Router>
    <NavBar/>
        <Routes>
        <Route path ='/' element ={<Home/>}/>
          <Route path="/songs" element={<SongsContainer/>} />
          <Route path="/playlists" element={<PlaylistsContainer/>} />
          <Route path="/contests" element={<ContestsContainer/>}/>
        </Routes>
      </Router>
    </>
  );
  }

export default App;
