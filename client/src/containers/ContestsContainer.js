import {useState, useEffect} from 'react'
import Contest from '../main_components/Contest'
import ContestList from '../main_components/ContestList'

const ContestsContainer = ({contests}) => {

  return (
    <><ContestList contests={contests} /></>
  )
}

export default ContestsContainer