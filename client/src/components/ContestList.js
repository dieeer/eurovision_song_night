import React from 'react'
import Contest from './Contest'
import { useState } from 'react'

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

    const handleSubmit = (event) => { 
        event.preventDefault();
        createContest(name, playlist);
        setName('');
        setPlaylist('');
    }

    const handleDeleteContest = (_id) => {
        deleteContest(contests._id)
    } 

  return (
    <div 
    className="contest-wrapper">
        <h2>Contests</h2>
        <form onSubmit={handleSubmit} >
            <input type='submit' name='submit'  value='Create Contest'/>
        </form>
        <br/>
    {contestData}
    </div>
  )
}

export default ContestList;