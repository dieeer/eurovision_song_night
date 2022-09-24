import SongSearchBar from "./SongSearchBar";
import SongList from "./SongList";

const SongCard = ({song}) => {

const youTube = song.youtube_url;
  return (
    <>
      <div>
        <SongSearchBar song={song} key={song._id}/>
      </div>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        <p><iframe width="560" height="315" src={youTube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
        <p>Country: {song.to_country}</p>
        <p>Year: {song.year}</p>
    </div>
    </>
)};

export default SongCard;