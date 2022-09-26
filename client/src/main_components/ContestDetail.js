import { useParams } from 'react-router-dom'
import Game from './Game'
import { useState } from 'react'

const ContestDetail = ({ getContestForId }) => {
  const { id } = useParams()
  const singleContest = getContestForId(id)
  const [contest, setContest] = useState(singleContest)
  const [playedGame, setPlayedGame] = useState(contest)

  return (
    <div>
      {contest.name}
      <br />
      {contest.players}
      <br />
      {contest.playlist[0]['song']}

      <Game playedGame={playedGame} />
    </div>
  )
}

export default ContestDetail
