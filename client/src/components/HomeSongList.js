import HomeSongCard from './HomeSongCard'

const HomeSongList = ({ randomSongs }) => {
  return randomSongs.slice(0, 5).map((randomSongs) => (

        <li class='dash-list-item'>
          <HomeSongCard song={randomSongs} />
        </li>

  ))
}

export default HomeSongList
