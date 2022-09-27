import playlistService from "../services/playlistService";
import { useEffect, useState } from "react";


const PlaylistSongCard = ({song}) => {

  return (
    <div className='PlaylistSongCard'>
        <p>Song: {song.song}</p>
        <p>artist: {song.performer}</p>
        <p>Year: {song.year}</p>
    </div>
)};

export default PlaylistSongCard;