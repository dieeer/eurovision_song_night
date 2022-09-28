import { Link } from 'react-router-dom'
const { flag } = require('country-emoji')

const Playlist = ({ playlist }) => {
  const songCount = playlist.songs.length

  const songForCountries = playlist.songs.map((songs) => {
    const countryWithFlag = flag(songs.to_country)
    return countryWithFlag
  })

  return (
    <>
      <Link to={playlist._id} key={playlist._id}>
        <span className='playlist-list-text'>{playlist.name}</span>
      </Link>
      <span className='playlist-list-text'>song count: {songCount}</span>
      <span className='playlist-list-text'>countries: {songForCountries}</span>
    </>
  )
}

export default Playlist
