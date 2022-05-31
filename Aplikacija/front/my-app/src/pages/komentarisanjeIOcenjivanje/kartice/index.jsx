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
import Ocene from '../ocene/index.jsx';
import { Label } from '@mui/icons-material';

export default function BasicCard(props) {
  const { vreme, komentar, ocena } = props;
  const classes = classStyles();
  return (
    <div className={classes.divKartica}>
      <Card style={{ border: '1px solid black', flex: 1 }}>
        <Ocene style={{}} ocena={ocena} />
        <label style={{ margin: 10 }}>Jaja Turku</label>

        <CardContent>
          <Typography
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            {/* be{bull}nev{bull}o{bull}lent */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">{komentar}</Typography>
          <div className={classes.divVreme}>{vreme}</div>
        </CardContent>
      </Card>
    </div>
  );
}
