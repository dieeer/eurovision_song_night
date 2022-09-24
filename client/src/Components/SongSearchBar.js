import React, {useState} from 'react'

const SongSearchBar = (SongsList) => {

  const [value, setValue] = useState("");


  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };
  
  const SongData = SongsList.song;
  console.log(SongData);

  return (
    
    <div>
        <div>
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div>
          {SongData
            .filter((songs) => {
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
    </div>
  );
  
}

export default SongSearchBar;