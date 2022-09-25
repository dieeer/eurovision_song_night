import {Link} from 'react-router-dom';

const Playlist = ({playlist}) => {
    return (
        <div className='playlist-item'>
            <h3><Link to={playlist._id}>{playlist.name}</Link></h3>
            </div>
    )
};

export default Playlist;