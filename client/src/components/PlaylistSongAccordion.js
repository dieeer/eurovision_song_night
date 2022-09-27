import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import YoutubeEmbed from './YoutubeEmbed';

export default function ControlledAccordions({song}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const {flag} = require('country-emoji');

  const flagForCountry = flag(song.to_country)

  return (
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
          <Typography sx={{ width: '20%', align: 'right' }}>{song.year}</Typography>
        </AccordionSummary>
        <AccordionDetails>   

       <YoutubeEmbed url={song.youtube_url} />

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
