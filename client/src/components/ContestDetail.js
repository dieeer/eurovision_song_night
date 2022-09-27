import { useParams } from 'react-router-dom'
import Game from './Game'
import { useState } from 'react'

const ContestDetail = ({ getContestForId }) => {
  const { id } = useParams()
  const singleContest = getContestForId(id)
  const [contest, setContest] = useState(singleContest)
 // const [playedGame, setPlayedGame] = useState(contest)

  return (
    <div>
      <Game contest={contest} />
    </div>
  )
}

export default ContestDetail
