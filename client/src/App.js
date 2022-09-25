import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import NavBar from './components/NavBar.js'
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import ContestsContainer from './containers/ContestsContainer'
import SongList from './components/SongList'
import Contest from './components/Contest'
import ContestService from './services/contestService'
import SongService from './services/songService'
import ContestDetail from './components/ContestDetail'
import Game from './components/Game'

function App() {
  const [contests, setContests] = useState([])

  useEffect(() => {
    ContestService.getContests().then((contests) => setContests(contests))
  }, [])

  const [songs, setSongs] = useState([])

  useEffect(() => {
    SongService.getSongs().then((songs) => setSongs(songs))
  }, [])

  const getContestForId = (contestId) => {
    return contests.find((contest) => contest._id === contestId)
  }

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/songs' element={<SongsContainer />} />
          <Route path='/playlists' element={<PlaylistsContainer />} />
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
