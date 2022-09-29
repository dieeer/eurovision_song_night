import ScoreCard from '../components/ScoreCard'
import scoreService from '../services/scoreService'
import { useState, useEffect } from 'react'

const ScoreContainer = ({ contests }) => {
  const [scoreInfo, setScoreInfo] = useState([])

  const createScore = () => {
    scoreService.createScore().then(() => {
      scoreService.getScore().then((data) => {
        setScoreInfo(data)
      })
    })
  }

  const updateScore = (scoreId, updatedScore) => {
    scoreService.updateScore(scoreId, updatedScore).then(() => {
      scoreService.getScore().then((data) => {
        setScoreInfo(data)
      })
    })
  }

  const deleteScore = (_id) => {
    scoreService.deleteScore(_id).then(() => {
      scoreService.deleteScore().then((data) => {
        setScoreInfo(data)
      })
    })
  }

  useEffect(() => {
    scoreService.getScore().then((data) => {
      setScoreInfo(data)
    })
  }, [])

  return (
    <div className='score-wrapper'>
      <ScoreCard
        scores={scoreInfo}
        createScore={createScore}
        deleteScore={deleteScore}
        updateScore={updateScore}
      />
    </div>
  )
}

export default ScoreContainer
