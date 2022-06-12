import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import classStyles from './styles';
import CardDialog from '../cardDialog';
import { useState, useEffect, useContext } from 'react';

export default function BasicCard(props) {
  const { ime, prezime, korisnickoIme,adresa,grad, telefon, id } = props;

  const classes = classStyles();
  const obrisiVlasnika = () => {
    fetch('https://localhost:5001/Vlasnik/obrisiVlasnika?id=' + id, {
      method: 'DELETE',
    }).then(async response => {
      if (response.ok) {
        const res = await response.json();
        window.location.reload(false)
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
          width: '650px',
          borderRadius: '30px',

          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography
            color="#006f03"
            sx={{ fontSize: 25 }}
            component="div"
            gutterBottom
          >
            {ime} {prezime}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Korisnicko ime: {korisnickoIme}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Broj telefona: {telefon}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Grad: {grad}</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Adresa: {adresa}
          </Typography>
        </CardContent>

        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
          <CardDialog id={id} />
          <Button
            onClick={()=>{obrisiVlasnika();}}
            style={{
              color: 'white',
              backgroundColor: '#07a607',
              marginLeft: '10px',
            }}
          >
            Obrisi vlasnika{' '}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
