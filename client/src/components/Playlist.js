const { flag } = require('country-emoji')

const Playlist = ({ playlist }) => {
  const songCount = playlist.songs.length

  const songForCountries = playlist.songs.map((songs) => {
    const countryWithFlag = flag(songs.to_country)
    return <>{countryWithFlag}</>
  })

  return (
    <>
      <span class='playlist-list-text'>
        {playlist.name}
      </span>
      <span class='playlist-list-text'>song count: {songCount}</span>
      <span class='playlist-list-text'>countries: {songForCountries}</span>
    </>
  )
}

export default Playlist
