
const SongCard = ({song}) => {
  return (
    <>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
        <p>Year: {song.year}</p>
    </div>
    </>
)};

export default SongCard;