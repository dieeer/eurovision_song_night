import HomePage from '../components/HomePage'
import { useState, useEffect } from 'react'
import { getAll } from '../services/EuroServices'
import PlaylistCard from '../components/PlaylistCard'

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
                <HomePage randomSongs={homeSongsList} />
                <PlaylistCard />
            </div>
        )
}

export default HomeContainer;