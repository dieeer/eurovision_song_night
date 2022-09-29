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
      <div class='stacked-group'>
        <div class='stacked-playlist-list'>
          {singleContest ? (
            <Contest contest={singleContest} />
          ) : (
            <p>loading...</p>
          )}
          {/* <Game contest={singleContest}/> */}
        </div>
      </div>
    </div>
  )
}

export default ContestDetail
