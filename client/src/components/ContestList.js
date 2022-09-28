import React from 'react'
import Contest from './Contest'
import { useState } from 'react'
import CreateContest from './CreateContest'

const ContestList = ({contests, createContest, deleteContest, updateContestd}) => {
  const [name, setName] = useState('')
  const [playlist, setPlaylist] = useState('')



    const contestData = contests.map((contest) => {
        return (
            <Contest 
            key={contest._id}
            contest={contest}
            />
        )
    })


  return (
    <div 
    className="contest-wrapper">
        <h2>Contests</h2>
        <CreateContest createContest={createContest}/>
        {/* <form onSubmit={handleSubmit} >
            <input type='submit' name='submit'  value='Create Contest'/>
        </form> */}
        <br/>
    {contestData}
    </div>
  )
}

export default ContestList
