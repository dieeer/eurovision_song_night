import YoutubeEmbed from "./YoutubeEmbed";
import { useState, useEffect } from 'react'
import * as React from 'react';
import {useParams} from 'react-router-dom';
import nl2br from 'react-newline-to-break';

const SongDetail = ({}) => {


    const [song, setSong] = useState({})
    const [SongLyrics, setSongLyrics] = useState("")

    const {id} = useParams()

    useEffect(() => {
        console.log(id)
        const url = `http://localhost:9000/api/all/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSong(data)
            console.log(data.lyrics)
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
    
    return (
        <>
        <div className='SongList'>

            <p>Song: {song.song}</p>
            <p>Country: {song.to_country}</p>
            <p>Year: {song.year}</p>

            <h1>Song Stats</h1>
            <h2>Final</h2>
            <p>Place: {song.place_contest}</p>
            <p>Jury Points: {song.points_jury_final}</p>
            <p>Tele Points: {song.points_tele_final}</p>
            <p>Total Points: {song.points_final}</p>
            <p>Running Order: {song.running_final}</p>

            <h2>Semi Final</h2>
            <p>Place: {song.place_sf}</p>
            <p>Jury Points: {song.points_jury_sf}</p>
            <p>Tele Points: {song.points_tele_sf}</p>
            <p>Total Points: {song.points_sf}</p>
            <p>Running Order: {song.running_sf}</p>

            <p>Composers: {song.composers}</p>

     
            <h1>Lyrics</h1>
            <p>{SongLyrics ? SongLyrics  : "Fuck"}</p>
        </div>
        </>
    )
}

export default SongDetail;