import YoutubeEmbed from "./YoutubeEmbed";

const SongCard = ({song}) => {

const youTube = song.youtube_url;
  return (
    <>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        <YoutubeEmbed url = {youTube}/>
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
        <p>Country: {song.to_country}</p>
        <p>Year: {song.year}</p>
    </div>
    </>
)};

export default SongCard;