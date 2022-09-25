import { useState } from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const Game = ({ playedGame }) => {
const startSong = playedGame.playlist[0]['youtube_url']
const [currentSong, setCurrentSong] = useState(startSong)

const nextSong = () => {
  setCurrentSong(playedGame.playlist[1]['youtube_url'])
}

  return (
    <div>
      <h1>Game played: {playedGame.name}</h1>
      <p>Song: {currentSong}</p>
      <button onClick={nextSong}>Next Song</button>
    </div>
  )
}

export default Game
