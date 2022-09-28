import HomeSongCard from './HomeSongCard'

const HomeSongList = ({ randomSongs }) => {
  return randomSongs.slice(0, 5).map((randomSongs, index) => (
    <>
      <li className='dash-list-item' key={index}>
        <HomeSongCard song={randomSongs} />
      </li>
      <hr />
    </>
  ))
}

export default HomeSongList
