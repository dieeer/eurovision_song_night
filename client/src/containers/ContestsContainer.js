import {useState, useEffect} from 'react'
import Contest from '../components/Contest'
import ContestList from '../components/ContestList'

const ContestsContainer = ({contests}) => {

  return (
    <><ContestList contests={contests} /></>
  )
}

export default ContestsContainer