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
  const { ime, rasa,pol,opis,visina,tezina, id } = props;

  const classes = classStyles();
  // console.log(id, vreme, komentar, ocena);
  const [obrisiKomentar, setObrisiKomentar] = useState([]);

  const [recenzijaPsa, setRecenzijaPsa] = useState([]);
  const [prazno] = useState([]);
  useEffect(() => {
    fetch('https://localhost:5001/Recenzija/vratiRecenzijeZaPsa?id=' + id).then(
      async res => {
        const rez = await res.json();

        setRecenzijaPsa(rez);
      }
    );
  });

  // const obrisi = () => {
  //   fetch(
  //     'https://localhost:5001/Recenzija/obrisiRecenziju?idRecenzija=' + id,
  //     {
  //       method: 'DELETE',
  //     }
  //   ).then(async response => {
  //     if (response.ok) {
  //       const res = await response.json();
  //       console.log(res);
  //       setObrisiKomentar(res);
  //     } else {
  //       alert('greska');
  //     }
  //   });
  // };

  const obrisi = rec => {
    fetch(
      'https://localhost:5001/Recenzija/obrisiRecenziju?idRecenzija=' + rec,
      {
        method: 'DELETE',
      }
    ).then(async response => {
      if (response.ok) {
        const res = await response.json();
        window.location.reload(false)

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
          <Typography sx={{ fontSize: 18 }}>Ime:{ime}</Typography>
          <Typography sx={{ fontSize: 18 }}>Rasa: {rasa}</Typography>
          <Typography sx={{ fontSize: 18 }}>Pol:{pol}</Typography>
          <Typography sx={{ fontSize: 18 }}>Opis: {opis}</Typography>
          <Typography sx={{ fontSize: 18 }}>Visina:{visina}</Typography>
          <Typography sx={{ fontSize: 18 }}>Tezina: {tezina}</Typography>

          {recenzijaPsa.map((recenzija, index) => {
            return (
              <CardContent
                style={{
                  border: '1px solid green',
                  margin: '5px',
                  borderRadius: '10px',
                }}
              >
                <Typography sx={{ fontSize: 18 }}>
                  Vreme: {recenzija.vreme}
                </Typography>

                <Typography sx={{ fontSize: 18 }}>
                  Komentar: {recenzija.komentar}
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                  {' '}
                  Ocena: {recenzija.ocena}
                  {/* idrecnzije: {recenzija.id} */}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{ color: 'white', backgroundColor: '#07a607' }}
                    onClick={() => obrisi(recenzija.id)}
                  >
                    Obrisi
                  </Button>
                </div>
              </CardContent>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
