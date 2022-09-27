
import { Link } from "react-router-dom";


const Contest = ({ contest }) => {
  return (
    <div className='contest-item'>
      <h3>{contest.name}</h3>
      <Link to={contest._id}>{contest.name}</Link>
    </div>
  )
}

export default Contest;
