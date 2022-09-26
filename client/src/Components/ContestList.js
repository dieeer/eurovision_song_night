import React from 'react'
import Contest from './Contest'

const ContestList = ({ contests }) => {
  const contestData = contests.map((contest) => {
    return <Contest key={contest._id} contest={contest} />
  })
  return <div className='contest-wrapper'>{contestData}</div>
}

export default ContestList
