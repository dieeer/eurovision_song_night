import { useParams } from 'react-router-dom'
import Game from './Game'
import { useState } from 'react'
import Contest from './Contest'

const ContestDetail = ({ getContestForId }) => {
  const { id } = useParams()
  const singleContest = getContestForId(id)
  const [contest, setContest] = useState(singleContest)

  return (
    <div>
    {singleContest ? <Contest contest={singleContest} /> : <p>loading...</p>}
      {/* <Game contest={singleContest}/> */}
    </div>
  )
}

export default ContestDetail
