import React, {useState} from 'react'


  const SongSearchBar = ({ onSearchChange, songs}) => {

  const [value, setValue] = useState("");

  const onChange = (searchTerm) => {
    setValue(searchTerm)
    onSearchChange(searchTerm)
  };
  
  return (
    
    <div>
        <div>
          <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>

          {/* {Checks if a song starts with a matching search term. */}
          {songs.map((songs) => (
              <div
                onClick={() => onChange(songs.song)} key={songs.song}>
                {songs.song}
              </div>
            ))}
          </div> 
  );
  
}

export default SongSearchBar;
