import HomePage from '../components/HomePage'
import { useState, useEffect } from 'react'
import { getAll } from '../services/EuroServices'


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
            </div>
        )
}

export default HomeContainer;