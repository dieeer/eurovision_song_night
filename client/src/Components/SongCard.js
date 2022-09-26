import YoutubeEmbed from "./YoutubeEmbed";
import { useState, useEffect } from "react";
import playlistService from "../services/playlistService";
import { useThemeProps } from "@mui/material";

const SongCard = ({song}) => {

    const [playlistInfo, setPlaylistInfo] = useState([])

// Get all the available playlists.
    useEffect(() => {
        playlistService.getPlaylists().then(data => setPlaylistInfo(data))}
        , [])

    // allow you to select a playlist from drop down, then append current song to selected playlists 'songs' array
    const handleAddToPlaylist = (event) => {
        event.preventDefault();
        const playlistId = event.target.value;
        const songId = song._id;
        playlistService.addSongToPlaylist(playlistId, songId)
        .then(() => {
            playlistService.getPlaylists().then(data => setPlaylistInfo(data))
        })
    }



    const playlistOptions = playlistInfo.map((playlist) => {
        return (
            <option value={playlist._id}>{playlist.name}</option>
        )
    })

    



    



const youTube = song.youtube_url;
  return (
    <>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        {/* <YoutubeEmbed url = {youTube}/> */}
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
        <p>Country: {song.to_country}</p>
        <p>Year: {song.year}</p>
        <form onSubmit={handleAddToPlaylist} playlists={playlistInfo}>
        <select name='playlist'>
            {playlistOptions}
        </select>
        <input type='submit' name='submit'  value='Add to Playlist' />

        </form>

    </div>
    </>
)};

export default SongCard;