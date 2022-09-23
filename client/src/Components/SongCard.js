
const SongCard = ({song}) => {
  return (
    <>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
    </div>
    </>
)};

export default SongCard;