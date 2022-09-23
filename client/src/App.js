import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <>
    <NavBar/>
      <Router>
        <Routes>
          <Route path="/"/>
          <Route path="/songs" element={<SongsContainer />} />
          <Route path="/playlists" element={<PlaylistsContainer />} />
          <Route path="/contests" element={<ContestsContainer/>}/>
          <Route path ="/*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
  }

export default App;
