import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import classStyles from './styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const { vreme, komentar, ocena } = props;
  const classes = classStyles();
  return (
    <div className={classes.divKartica}>
      <Card style={{ border: '1px solid black' }} sx={{ minWidth: 1000 }}>
        <CardContent>
          <Typography
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {vreme}
            <ThumbUpTwoToneIcon style={{ color: '#2ecd18' }} />
            <ThumbDownAltTwoToneIcon style={{ color: '#2ecd18' }} />
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">{komentar}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
