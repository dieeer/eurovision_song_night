import HomePage from '../components/HomePage'
import { useState, useEffect } from 'react'
import { getAll } from '../services/EuroServices'
import PlaylistHomeCard from '../components/PlaylistHomeCard'
import ContestCard from '../components/ContestCard'
import { Link } from 'react-router-dom'

const HomeContainer = () => {
  const [homeSongsList, setHomeSongsList] = useState([])

  useEffect(() => {
    getAll().then((allSongs) => {
      setHomeSongsList(allSongs)
    })
  }, [])

  // if (!songs) {
  //     return;
  // }

  // console.log("HOMECONTAINER", songs)

  return (
    <div>
      <section>
        <h1 className='main-title'>Create a Eurovision Song Night</h1>
      </section>
      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Songs</h4>

          <HomePage randomSongs={homeSongsList} />
          <Link to='/songs' className='button primary dash'>
            More Songs
          </Link>
        </div>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Playlists</h4>

          <PlaylistHomeCard />
          <Link to='/playlists' className='button primary dash'>
            More Playlists
          </Link>
        </div>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Contests</h4>

          <ContestCard />

          <Link to='/contests' className='button primary dash'>
            More Contests
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
