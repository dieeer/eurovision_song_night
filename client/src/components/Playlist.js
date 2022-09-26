import {Link} from 'react-router-dom';

const Playlist = ({playlist}) => {
    const songCount = playlist.songs.length


    return (
        <div className='playlist-item'>
            <h3><Link to={playlist._id}>{playlist.name}</Link></h3>
            <p>{songCount} songs</p>
            </div>
    )
};

export default Playlist;