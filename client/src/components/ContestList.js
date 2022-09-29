import React from 'react'
import Contest from './Contest'
import { useState } from 'react'
import CreateContest from './CreateContest'

const ContestList = ({contests, createContest, deleteContest, updateContestd}) => {
  const [name, setName] = useState('')
  const [playlist, setPlaylist] = useState('')



    const contestData = contests.map((contest) => {
        return (
          <li class="dash-list-item">
            <Contest 
            key={contest._id}
            contest={contest}
            />
            </li>
        )
    })


  return (
    <>
      {/* <form onSubmit={handleSubmit} >
            <input type='submit' name='submit'  value='Create Contest'/>
        </form> */}
      <ul role='list' className='dash-list'>
        {contestData}
      </ul>
      <br />
      <h5 className='title'>Create new contest</h5>
      <CreateContest createContest={createContest} />
    </>
  )
}

export default ContestList
