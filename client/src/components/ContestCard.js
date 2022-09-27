import { useState, useEffect } from 'react'
import contestService from '../services/contestService'
import ContestList from './ContestList'


function ContestCard() {  
    // const based on a list of contests.

    const [contests, setContests] = useState([])
  
    useEffect(() => {
      contestService.getContests().then((contests) => setContests(contests))
    }, [])

    return (
        <>
          <div >
            <><ContestList contests={contests} /></>
          </div>
        </>
      )
}

export default ContestCard;