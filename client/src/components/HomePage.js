import SongCard from "./SongCard";

    const HomePage = ({randomSongs}) => { 
    


    console.log("HOMEPAGE_RANDOMSONGS", randomSongs)


        return (    
            randomSongs.slice(0, 5).map((randomSongs) => (
              <SongCard song={randomSongs} />
            ))
        )
    }

  export default HomePage;
