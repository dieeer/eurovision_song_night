import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import YoutubeEmbed from './YoutubeEmbed';

export default function ControlledAccordions({song, deleteSongFromPlaylist}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const {flag} = require('country-emoji');

  const flagForCountry = flag(song.to_country)

  return (
    <div>
    <div style={{ width: '25%'}}>song</div>
    <div style={{ width: '25%'}}>country</div>
    <div style={{ width: '25%'}}>artist</div>
    <div style={{ width: '25%'}}>year</div>
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '30%', flexShrink: 0 }}>
          {song.song}
          </Typography>
          <Typography sx={{ width: '10%', flexShrink: 0 }}>
          {flagForCountry}
          </Typography>
          <Typography sx={{ color: 'text.secondary', width: '30%' }}>{song.performer}</Typography>
          <Typography sx={{ width: '15%', align: 'right' }}>{song.year}</Typography><Typography sx={{ width: '5%', align: 'right' }}><form onSubmit={deleteSongFromPlaylist}><input type='submit'/></form></Typography>
        </AccordionSummary>
        <AccordionDetails>   

       <YoutubeEmbed url={song.youtube_url} />

        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
