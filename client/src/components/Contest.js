
import { Link } from "react-router-dom";
import playlistService from "../services/playlistService";
import { useState, useEffect } from "react";


const Contest = ({ contest }) => {

  const [playlistInfo, setPlaylistInfo] = useState({});

  const { songs } = contest.playlist;

  const songsMap = songs.map((song) => {
    return (
      <div className="song">
        <Link to={`/songs/${song._id}`}>
          <h3>{song.song}</h3>
        </Link>
        <p>{song.to_country}</p>
        <p>{song.year}</p>
      </div>
    );
  });


  return (
    <>
      <Link to={'/contests/' + contest._id}>
        <li className='dash-list-item'>
          <span className='dash-list-text'>{contest.name}</span>
        </li>
          <div>
          <h3>{contest.playlist.name}</h3>
          {songsMap}
          </div>
      </Link>
    </>
  )
}

export default Contest
