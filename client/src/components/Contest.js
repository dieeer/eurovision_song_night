import { Link } from 'react-router-dom'

const Contest = ({ contest }) => {
  return (
    <>
      <Link to={'/contests/' + contest._id}>
        <li className='dash-list-item'>
          <span className='dash-list-text'>{contest.name}</span>
        </li>
      </Link>
    </>
  )
}

export default Contest
