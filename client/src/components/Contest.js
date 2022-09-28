
import { Link } from "react-router-dom";
import playlistService from "../services/playlistService";
import { useState, useEffect } from "react";


const Contest = ({ contest }) => {

  const [playlistInfo, setPlaylistInfo] = useState({});

  const currentPlaylist = contest.playlist


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
