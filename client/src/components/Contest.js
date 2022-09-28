
import { Link } from "react-router-dom";
import playlistService from "../services/playlistService";
import { useState, useEffect } from "react";



const Contest = ({ contest }) => {

  const [playlistInfo, setPlaylistInfo] = useState({});

  const currentPlaylist = contest.playlist


  return (
    <div className='contest-item'>
      <Link to={"/contests/" + contest._id}>{contest.name}</Link>
      <p></p>
    </div>
  )
}

export default Contest;
