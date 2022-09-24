import { useParams } from 'react-router-dom'

const ContestDetail = ({ getContestForId }) => {
  const { id } = useParams()
  const contest = getContestForId(id)

  return <div>{contest.name}</div>
}

export default ContestDetail
