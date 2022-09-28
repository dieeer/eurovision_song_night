import React, { useState, useEffect } from 'react'
import scoreService from '../services/scoreService'

const ScoreCard = ({ contest, currentSong }) => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    scoreService.getScores().then((scores) => {
      setScores(scores)
    })
  }, [])
  console.log(scores)

  //const numberOfFields = scores.scores.length

  const generateObjects = (fields) => {
    return Array.from({ length: fields }, (element, index) => ({
     // song: currentSong.song,
     // person: contest.players[index],
    }))
  }
  const [formValues, setFormValues] = useState(generateObjects(5))

  //   useEffect(() => {
  //     setFormValues(generateObjects(numberOfFields))
  //   }, [])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues]
    newFormValues[i][e.target.name] = e.target.value
    setFormValues(newFormValues)
  }

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        songId: '',
        personId: '',
        score: '',
      },
    ])
    console.log(formValues)
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues]
    newFormValues.splice(i, 1)
    setFormValues(newFormValues)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(formValues))
  }

  const handleNewChange = (i, e) => {
    let newFormValues = [...formValues]
    newFormValues[i][e.target.name] = e.target.value
    console.log(newFormValues)
    setFormValues(newFormValues)
  }

  const generateFields = (fields) => {
    return Array.from({ length: fields }, (element, index) => (
      <li key={`score-${index + 1}`} data={currentSong.song}>
        <label htmlFor={`score${index + 1}`}>
          {currentSong.song}-{contest.players[index]}
        </label>
        <input
          type='text'
          id={`score${index + 1}`}
          name='score'
          value={element}
          onChange={(e) => handleNewChange(index, e)}
        />
      </li>
      ////
    ))
  }

  return (
    <form onSubmit={handleSubmit}>
      {generateFields(5)}
      <div className='button-section'>
        <button className='button submit' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default ScoreCard
