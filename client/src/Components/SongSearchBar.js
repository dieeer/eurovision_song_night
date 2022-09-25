import React, {useState} from 'react'
import SongCard from './SongCard';
import SongList from './SongList';

const SongSearchBar = ({songs}) => {

  // console.log('Song in SearchBar', songs)

  const [value, setValue] = useState("");


  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("searchTerm", searchTerm);
  };

  const songArray = songs.map((song) => {
    return [song]
  })
    console.log('SongArray', songArray)
  
  // const SongData = songs;
  // console.log('SongData in SearchBar', songs);

  return (
    
    <div>
        <div>
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
         <div>
          {songs.filter((songs) => {
              const searchTerm = value.toLowerCase();
              const song = songs.song.toLowerCase();

              return (
                searchTerm &&
                song.startsWith(searchTerm) &&
                song !== searchTerm
              );
            })
            .slice(0, 10)
            .map((songs) => (
              <div
                onClick={() => onSearch(songs.song)} key={songs.song}>
                {songs.song}
              </div>
            ))}
            </div>
            {/* return <SongCard song={song} key={song._id}/> */}
    </div>
  );
  
}

export default SongSearchBar;


