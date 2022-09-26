import SongCard from "./SongCard";

const SongList = ({songs}) => {

    const songData = songs.map((song) =>{ 
    return <SongCard song={song} key={song._id}/>
});

return (
    <>
        {songData}
    </>
);

}
export default SongList;