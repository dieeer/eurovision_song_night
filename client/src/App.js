// FUNCTIONAL IMPORTS
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// UNIVERSAL COMPONENT IMPORTS
import Home from './containers/Home'
import NavBar from './main_components/NavBar.js'

// CONTESTS IMPORTS.
import Contest from './main_components/Contest'
import ContestService from './services/contestService'
import ContestDetail from './main_components/ContestDetail'
import ContestsContainer from './containers/ContestsContainer'
// import IndividualSongCard from './components/IndividualSongCard'

// SONGS IMPORTS.
import SongList from './main_components/SongList'
import SongsContainer from './containers/SongsContainer'
import SongService from './services/songService'

// PLAYLISTS IMPORTS
import playlistService from './services/playlistService'
import PlaylistsContainer from './containers/PlaylistsContainer'
import PlaylistDetail from './main_components/PlaylistDetail'

// GAME IMPORT
import Game from './main_components/Game'
import PlayersContainer from './containers/PlayersContainer'
function App() {  
  // const based on a list of contests.
  
  const [contests, setContests] = useState([]);
  
  useEffect(() => {
    ContestService.getContests().then((contests) => setContests(contests))
  }, [])
  
  const getContestForId = (contestId) => {
    return contests.find((contest) => contest._id === contestId)
  }
  
  // const based on list of songs.
  const [songs, setSongs] = useState([])
  
  useEffect(() => {
    SongService.getSongs().then((songs) => setSongs(songs))
  }, [])
  
  // const based on a list of playlists.
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    playlistService.getPlaylists().then((playlists) => setPlaylists(playlists))
  }, [])

  const getPlaylistForId = (playlistId) => {
    return playlists.find((playlist) => playlist._id === playlistId)
  }

  

  return (
    <>
   
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />


          {/* SONG ROUTES */}
          <Route path='/songs' element={<SongsContainer playlists={playlists} />} />
          {/* <Route path="/song/:id" element={<IndividualSongCard/>} /> */}

          
          {/* PLAYLIST ROUTES */}
          <Route path='/playlists'
          element={<PlaylistsContainer playlists={playlists} />}
          />
          <Route path='/playlists/:id'
          element={
                <PlaylistDetail getPlaylistForId={getPlaylistForId}
              />
            }
          />
          <Route path='/players' element={<PlayersContainer />} />

          {/* CONTEST ROUTES */}
          <Route
            path='/contests'
            element={<ContestsContainer contests={contests} />}
          />
          <Route
            path='/contests/:id'
            element={
              <ContestDetail
                getContestForId={getContestForId}
              />
            }
          />

          {/* GAME ROUTES */}
          <Route
            path='/game'
            element={
              <Game
                getContestForId={getContestForId}
              />
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
