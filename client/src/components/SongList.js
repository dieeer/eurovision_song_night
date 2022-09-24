import SongCard from "./SongCard";

const SongList = ({songs}) => {

    const songData = songs.map((song) =>{ 
    return <SongCard song={song} key={song._id}/>
});
console.log(songData)

return (
    <>
        {songData}
    </>
);

}
export default SongList;