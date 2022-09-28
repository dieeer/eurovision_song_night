import playlistService from '../services/playlistService'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from '../components/YoutubeEmbed'
const { flag } = require('country-emoji')

const SongCard = ({ song }) => {
  // drop down menu to push song object to playlist 'songs' array
  const [playlists, setPlaylists] = useState([])
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [songId, setSongId] = useState(song._id)

  useEffect(() => {
    playlistService.getPlaylists().then((playlists) => setPlaylists(playlists))
  }, [])

  const handleSelect = (e) => {
    console.log('This is the value of the playlist option: ', e.target.value)
    setSelectedPlaylistId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedPlaylist = playlists.find(
      (playlist) => playlist._id === selectedPlaylistId
    )
    playlistService.addSongToPlaylist(selectedPlaylist, song)
    playlistService.getPlaylists().then((playlists) => setPlaylists(playlists))
  }

  // set existing playlists to drop down menu

  const playlistOptions = playlists.map((playlist) => {
    return (
      <option key={playlist._id} value={playlist._id}>
        {playlist.name}
      </option>
    )
  })

  // {
  //   /* <form onSubmit={handleSubmit}>
  //         <select onChange={handleSelect}>
  //           <option value=''>Select Playlist</option>
  //           {playlistOptions}
  //         </select>
  //         <input type='submit' value='+' />
  //       </form> */
  // }

  const countryFlag = flag(song.to_country)

  return (
    <>
      <div className='SongList'>
        <Link to={'/songs/' + song._id}>
          <h1>
            {countryFlag}
            {song.song}
          </h1>
        </Link>
        <p>{song.performer}</p>
        <p>{song.year}</p>
      </div>
    </>
  )
}

export default SongCard
