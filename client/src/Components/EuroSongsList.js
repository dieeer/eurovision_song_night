import SongCard from "./SongCard";

const EuroSongsList = ({songs}) => {

    const songList = songs.map((song) =>{ 
    return <SongCard song={song} key={song._id}/>
});

return (
    <>
        {songList}
    </>
);

}
export default EuroSongsList;