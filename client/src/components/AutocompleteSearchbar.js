import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import SongCard from './SongCard'

export default function AutocompleteSearchbar({ songs }) {
  const [chosenSong, setChosenSong] = React.useState('')

  const handleChange = (value) => {
    const selectedSong = value
    setChosenSong(selectedSong)
    console.log('chosenSong' + chosenSong)
  }

  return (
    <div>
      <div className='stacked-song-group'>
        <div className='stacked-song-list'>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={songs}
            getOptionLabel={(songs) => songs.song + ' - ' + songs.performer}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label='Search for a song' />}
            onChange={(event, value, reason) => handleChange(value)}
          />
          <SongCard song={chosenSong} />
        </div>
      </div>
    </div>
  )
}
