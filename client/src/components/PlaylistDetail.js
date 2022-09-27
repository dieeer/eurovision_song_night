import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react';
import PlaylistSongCard from './PlaylistSongCard';
import playlistService from '../services/playlistService';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

const PlaylistDetail = ({getPlaylistForId}) => {
    const {id} = useParams()
    const singlePlaylist = getPlaylistForId(id);
    const [playlist, setPlaylist] = useState(singlePlaylist)

    useEffect(() => {
        const url = `http://localhost:9000/api/playlists/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPlaylist(data))
    }, [id])


// render SongCard for each object in playlist's 'songs' array
    console.log(singlePlaylist.songs)




const songData = singlePlaylist.songs.map((song) => {
    return (<>
        <li><PlaylistSongCard key={song._id} song={song} /></li>
    </>
    )
})

// delete playlist button
const handleDeletePlaylist = () => {
    playlistService.deletePlaylist(playlist._id)
}
        
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {songData}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}><YoutubeEmbed/></Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>

        </div>
    )
}



export default PlaylistDetail;