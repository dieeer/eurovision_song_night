import {Link} from 'react-router-dom';

const Playlist = ({playlist}) => {
    return (
        <div className='playlist-item'>
            <h3>{playlist.name}</h3>
            <Link to={playlist._id}>{playlist.name}</Link>
        </div>
    )
};

export default Playlist;