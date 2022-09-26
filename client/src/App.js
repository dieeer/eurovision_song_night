import { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './containers/Home'
import NavBar from './components/NavBar.js'
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import ContestsContainer from './containers/ContestsContainer'
import IndividualSongCard from './components/IndividualSongCard'

function App() {

  return (
    <>
      <Router>
    <NavBar/>
        <Routes>
        <Route path ='/' element ={<Home/>}/>
          <Route path="/songs" element={<SongsContainer/>} />
          <Route path="/playlists" element={<PlaylistsContainer/>} />
          <Route path="/contests" element={<ContestsContainer/>}/>
          <Route path="/song/:id" element={<IndividualSongCard/>} />
        </Routes>
      </Router>
    </>
  );
  }

export default App;
