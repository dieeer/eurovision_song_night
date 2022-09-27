import {Link} from 'react-router-dom';
const {flag} = require('country-emoji');

const Playlist = ({playlist}) => {
    const songCount = playlist.songs.length

//     const playlistData = playlists.map((playlist) => {
//         const songCount = playlists.map((playlist) => {
//             if (playlist.songs.length === false) {
//                 return 0
//             }
//             return playlist.songs.length
//         })


// // const songForCountries = playlists.map((playlist) => {
// //     playlist.songs.map((songs) => {
// //         songs.map((songs) => {
// //         return (
// //             <li>{songs.to_country}</li>
// //         )
// //         })
// //     })
// // })

const songForCountries =  playlist.songs.map((songs) => {
        const countryWithFlag = flag(songs.to_country)
        return (
            <li>{countryWithFlag}</li>
        )
    })



    return (
        <div className='playlist-item'>

            <h3><Link to={playlist._id}>{playlist.name}</Link></h3>
            <p>song count: {songCount}</p>
            <p>countries: <><ul>{songForCountries}</ul></></p>
        </div>
    )
}





export default Playlist;