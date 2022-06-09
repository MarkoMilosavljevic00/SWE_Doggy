import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import classStyles from './styles';

export default function CardKomentari(props) {
  const { id, vreme, komentar, ocena } = props;

  const classes = classStyles();
  // console.log(id, vreme, komentar, ocena);
  const [obrisiKomentar, setObrisiKomentar] = useState([]);

  const obrisi = () => {
    fetch(
      'https://localhost:5001/Recenzija/obrisiRecenziju?idRecenzija=' + id,
      {
        method: 'DELETE',
      }
    ).then(async response => {
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        setObrisiKomentar(res);
      } else {
        alert('greska');
      }
    });
  };

  return (
    <div className={classes.miniContainer}>
      <Card
        style={{
          display: 'flex',
          margin: 10,
          width: '500px',
          borderRadius: '30px',
          backgroundColor: 'rgb(214 246 209)',
          border: '1px solid green',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography
            color="#006f03"
            sx={{ fontSize: 25 }}
            component="div"
            gutterBottom
          ></Typography>

          <Typography sx={{ fontSize: 18 }}>Vreme: {vreme}</Typography>
          <Typography sx={{ fontSize: 18 }}>Komentar: {komentar}</Typography>

          <Typography sx={{ fontSize: 18 }}>Ocena: {ocena}</Typography>
        </CardContent>

        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            marginBlockEnd: '5px',
          }}
        >
          <Button
            onClick={obrisi}
            style={{
              color: 'white',
              backgroundColor: 'green',
            }}
          >
            Obrisi
          </Button>
        </div>
      </Card>
    </div>
  );
}
