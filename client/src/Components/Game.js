import { useState } from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const Game = ({ playedGame }) => {
  const startSong = playedGame.playlist[0]['youtube_url']
  const [currentSong, setCurrentSong] = useState(startSong)
  const [counterState, setCounterState] = useState(1)
  const [button, setButton] = useState(true)

  const playListArray = playedGame.playlist
  const playListLength = playListArray.length

  const nextSong = () => {
    if (counterState < playListLength) {
      //counterState += 1
      setCounterState(counterState + 1)
      console.log(counterState)
      setCurrentSong(playedGame.playlist[counterState]['youtube_url'])
    } else {
      //setButton(false)
    }
  }

  const prevSong = () => {
    if (counterState > 0) {
      //counterState -= 1
      setCounterState(counterState - 1)
      console.log(counterState)
      setCurrentSong(playedGame.playlist[counterState]['youtube_url'])
    } else {
      // setButton(true)
    }
  }

  const buttonDecor = () => {
    if (button === true) {
      return <button onClick={nextSong}>Next Song</button>
    } else {
      return <button onClick={prevSong}>Prev Song</button>
    }
  }
  return (
    <div>
      <h1>Game played: {playedGame.name}</h1>
      <YoutubeEmbed url={currentSong} />
      <p>Song: {currentSong}</p>
      <button onClick={prevSong}>Prev Song</button>

      <button onClick={nextSong}>Next Song</button>
    </div>
  )
}

export default Game
