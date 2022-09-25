import SongCard from "./SongCard";

const SongList = ({songs, playlists}) => {


    const songData = songs.map((song) =>{ 
    return <SongCard song={song} key={song._id} playlists={playlists}/>
});
console.log(songData)

return (
    <>
        {songData}
    </>
);

}
export default SongList;