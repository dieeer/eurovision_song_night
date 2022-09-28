import {Link} from 'react-router-dom';
const {flag} = require('country-emoji');

const Playlist = ({playlist}) => {
    const songCount = playlist.songs.length

const songForCountries =  playlist.songs.map((songs) => {
        const countryWithFlag = flag(songs.to_country)
        return <>{countryWithFlag}</>
    })



    return (
      <>
        <span className='dash-list-text'>{playlist.name}</span>
        <span className='dash-list-text'>{songForCountries}</span>
        <span className='dash-list-text'>songs: {songCount}</span>
      </>
    )
}





export default Playlist;