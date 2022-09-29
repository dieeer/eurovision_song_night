
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
 const numberOfSongs = songsMap.length

  return (
    <>
      <Link to={'/contests/' + contest._id}>
        <span className='playlist-list-text'>
          <strong>Contest:</strong> {contest.name}
        </span>
        <span className='playlist-list-text'>
          <strong>Playlist:</strong> {contest.playlist.name}
        </span>
        <span className='playlist-list-text'>
          <strong>Songs:</strong> {numberOfSongs}
        </span>
      </Link>
    </>
  )
}

export default Contest
