import { useState } from 'react'
import ScoreCard from './ScoreCard'
import YoutubeEmbed from './YoutubeEmbed'

const Game = ({ contest }) => {
  // const startSong = contest.playlist[0]
  // const [currentSong, setCurrentSong] = useState(startSong)
  const [counterState, setCounterState] = useState(0)
  // const [button, setButton] = useState(true)
  const [currentSongState, setCurrentSongState] = useState(
    contest.playlist[counterState]
  )

  const playListLength = contest.playlist.length
  // const playListLength = playListArray.length

  //let counter = 0

  const nextSong = () => {
    setCounterState(counterState + 1)
    setCurrentSongState(contest.playlist[counterState])
   // if (counterState < playListLength) {
    //  setCounterState(counterState + 1)
      // console.log('next' + counterState)
      // setCurrentSong(contest.playlist[counterState])
      // if (counterState === playListLength) {
      //   setButton(false)
      // }
      //   console.log('next' + counterState)
      //   console.log('button' + button)
      // } else {
      //   setButton(false)
      // }
   // }
  }

  const prevSong = () => {
    //if (counterState > 0) {
      //counterState -= 1
      setCounterState(counterState - 1)
      setCurrentSongState(contest.playlist[counterState])
      // console.log('prev' + counterState)
      // setCurrentSong(contest.playlist[counterState])
      // } else {
      //   setButton(true)
    //}
  }

  // const buttonDecor = () => {
  //   if (button === true) {
  //     return <button onClick={nextSong}>Next Song</button>
  //   } else {
  //     return <button onClick={prevSong}>Prev Song</button>
  //   }
  // }

  const shoudShowNextSongButton = counterState + 1 < playListLength
  const currentSong = contest.playlist[counterState]
  const shoudlShowPrevSongButton = Boolean(counterState)

  return (
    <div>
      <h1>Song: {currentSong.song}</h1>
      {/* {buttonDecor()}
       */}
      {shoudShowNextSongButton && <button onClick={nextSong}>Next Song</button>}
      {shoudlShowPrevSongButton && (
        <button onClick={prevSong}>Prev Song</button>
      )}
      <ScoreCard contest={contest} key={currentSong.song} currentSong={currentSong} nextSong={nextSong}/>
    </div>
  )
}

export default Game
