import ContestList from '../components/ContestList';
import contestService from '../services/contestService'
import {useState, useEffect} from 'react';


const ContestsContainer = ({contests}) => {

  const [contestInfo, setContestInfo] = useState([])

  const createContest = () => {
    contestService.createContest()
    .then(() => {
      contestService.getContests()
      .then((data) => {
        setContestInfo(data)
      })
    }
    )
  }
  
  const updateContest = (contestId, updatedContest) => {
    contestService.updateContest(contestId, updatedContest)
    .then(() => {
      contestService.getContests()
      .then((data) => {
        setContestInfo(data)
      })
    })
  }

  const deleteContest = (_id) => {
    contestService.deleteContest(_id)
    .then(() => {
      contestService.getContests()
      .then((data) => {
        setContestInfo(data)
      })
    })
  }

  useEffect(() => {
    contestService.getContests()
    .then((data) => {
      setContestInfo(data)
    })
  }, [])


  return (
    <div className='contest-wrapper'>
      <ContestList 
      contests={contestInfo} 
      createContest={createContest}
      deleteContest={deleteContest}
      updateContest={updateContest} />
    </div>
  )
}

export default ContestsContainer