import YoutubeEmbed from "./YoutubeEmbed";
import { useState, useEffect } from 'react'
import * as React from 'react';
import {useParams} from 'react-router-dom';
import playlistService from '../services/playlistService'
const { flag } = require('country-emoji')

const SongDetail = ({}) => {


    const [song, setSong] = useState({})
   const [playlists, setPlaylists] = useState([])
   const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
   const [playlist, setPlaylist] = useState({})
    const [SongLyrics, setSongLyrics] = useState("")
    const [youtubeUrl, setYouTubeUrl] = useState('song.youtube_url')

    const {id} = useParams()

    useEffect(() => {
        const url = `http://localhost:9000/api/all/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSong(data)
            setYouTubeUrl(data.youtube_url)
            const splittedLryics = data.lyrics.split("\\n")
            const spacedJsxLryics = splittedLryics.map((string) => {
                return (
                <>
                <br/>
                    {string}
                </>
                )
            })
            setSongLyrics(spacedJsxLryics)
        })
    }, [id])

    useEffect(() => {
      playlistService.getPlaylists().then((data) => setPlaylists(data))
    }, [])

     const handleSelect = (e) => {
       console.log('This is the value of the playlist option: ', e.target.value)
       setSelectedPlaylistId(e.target.value)
     }

     const handleSubmit = (e) => {
       e.preventDefault()
       const selectedPlaylist = playlists.find(
         (playlist) => playlist._id === selectedPlaylistId
       )
       playlistService.addSongToPlaylist(selectedPlaylist, song)
       playlistService
         .getPlaylists()
         .then((playlists) => setPlaylists(playlists))
     }

      const playlistOptions = playlists.map((playlist) => {
        return (
          <option key={playlist._id} value={playlist._id}>
            {playlist.name}
          </option>
        )
      })

     const countryFlag = flag(song.to_country)
    
    return (
      <>
        <div className='SongList'>
          <section>
            <h1 className='main-title'>
              <span className='dash-list-text country-emoji'>
                {countryFlag}
              </span>{' '}
              {song.song} -{song.performer}
            </h1>
            <span className='country-name'>{song.to_country}</span>
          </section>
          <div className='stacked-group'>
            <div className='stacked-playlist-list'>
              <YoutubeEmbed url={youtubeUrl} />

              <form onSubmit={handleSubmit}>
                <select onChange={handleSelect}>
                <option value=''>Select Playlist</option>
                  {playlistOptions}
                </select>
                <input type='submit' value='+' />
              </form>

              <button className='button primary padding right'>
                Add to playlist
              </button>
              <div className='video-caption-container'>
                <h3 className='main-title'>Song Stats</h3>
                <dl className='stacked-group'>
                  <div className='stacked-list'>
                    <dt>
                      <div className=''>
                        <svg
                          className='icon'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            sstrokelinejoin='round'
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                          />
                        </svg>
                      </div>

                      <h4 className=''>Final</h4>
                    </dt>
                    <dd className=''>
                      <p className=''>Place: {song.place_contest}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Jury Points: {song.points_jury_final}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Tele Points: {song.points_tele_final}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Total Points: {song.points_final}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Running order: {song.running_final}</p>
                    </dd>
                  </div>

                  <div className='stacked-list'>
                    <dt>
                      <div className=''>
                        <svg
                          className='icon'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            sstrokelinejoin='round'
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                          />
                        </svg>
                      </div>
                      <h4 className=''>Semi Final</h4>
                    </dt>
                    <dd className=''>
                      <p className=''>Place: {song.place_sf}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Jury Points: {song.points_jury_sf}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Tele Points: {song.points_tele_sf}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Total Points: {song.points_sf}</p>
                    </dd>
                    <dd className=''>
                      <p className=''>Running order: {song.running_sf}</p>
                    </dd>
                  </div>

                  <div className='stacked-list'>
                    <dt>
                      <div className=''>
                        <svg
                          className='icon'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            sstrokelinejoin='round'
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                          />
                        </svg>
                      </div>
                      <p className=''>Composer</p>
                    </dt>
                    <dd className=''>
                      <p className=''>{song.composers}</p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div class='lyrics-container'>
            <h3 class='main-title'>Lyrics</h3>
            <p class='lyric-text'>{SongLyrics ? SongLyrics : 'Empty'}</p>
          </div>
        </div>
      </>
    )
}

export default SongDetail;