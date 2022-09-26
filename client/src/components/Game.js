import { useState } from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const Game = ({ playedGame }) => {
  const startSong = playedGame.playlist[0]['youtube_url']
  const [currentSong, setCurrentSong] = useState(startSong)
   const [counterState, setCounterState] = useState(0)
  const [button, setButton] = useState(true)

  //const playListArray = playedGame.playlist
  const playListArray = [0, 1, 2]
  const playListLength = playListArray.length
  //let counter = 0

  const nextSong = () => {
    if (counterState < playListLength) {
      //counterState += 1
      setCounterState(counterState + 1)
      setCurrentSong(playedGame.playlist[counterState]['youtube_url'])
    } else {
      setButton(false)
    }
  }

  const prevSong = () => {
    if (counterState > 0) {
      //counterState -= 1
      setCounterState(counterState - 1)
      setCurrentSong(playedGame.playlist[counterState]['youtube_url'])
    } else {
      setButton(true)
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
      <p>Song: {currentSong}</p>
      {buttonDecor()}
    </div>
  )
}

export default Game;
