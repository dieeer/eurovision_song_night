import { useParams } from 'react-router-dom'
import YoutubeEmbed from './YoutubeEmbed'

const ContestDetail = ({ getContestForId, getSongsForContest }) => {
  const { id } = useParams()
  const contest = getContestForId(id)
  const song = getSongsForContest(contest.songs['song1'])

  return (
    <div>
      {contest.name}
      <br />
        <YoutubeEmbed url={song.youtube_url} />
    </div>
  )
}

export default ContestDetail
