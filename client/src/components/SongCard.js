import YoutubeEmbed from "./YoutubeEmbed";
import { useState, useEffect } from "react";
import playlistService from "../services/playlistService";

const SongCard = ({song, playlists}) => {


    const [playlist, setPlaylist] = useState(playlists)

    // Add a song to a playlist.
    const addSongToPlaylist = (playlists) => {
        const tempPlaylist = playlists[0]
        tempPlaylist.songs.push(song)
        playlistService.updatePlaylist(tempPlaylist)
    }


    // playlist options
    const playlistOptions = playlist.map((playlist) => {
        return (
            <option key={playlist._id} value={playlist._id}>{playlist.name}</option>
        )
    })



const youTube = song.youtube_url;
  return (
    <>
    <div className='SongList'>
        <h1>{song.performer}</h1>
        <YoutubeEmbed url = {youTube}/>
        <p>Song: {song.song}</p>
        <p>Composers: {song.composers}</p>
        <p>Country: {song.to_country}</p>
        <p>Year: {song.year}</p>
        <form onSubmit={addSongToPlaylist} playlists={playlists}>
        <select name='playlist'>
        {playlistOptions}
        </select>
        <input type='submit' name='submit'  value='Add to Playlist' />

        </form>

    </div>
    </>
)};

export default SongCard;