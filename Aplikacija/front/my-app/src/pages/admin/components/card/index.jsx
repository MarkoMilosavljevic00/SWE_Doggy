import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import classStyles from './styles';
import CardDialog from '../../cardDialog';
import Admin from '../../index';
import { useState, useEffect, useContext } from 'react';

export default function BasicCard(props) {
  const token=localStorage.getItem('token')
  const {
    ime,
    prezime,
    korisnicko_ime,
    telefon,
    grad,
    adresa,
    cenaPoSatu,
    bio,
    validan,
    dugme,
    idSitera,
  } = props;
  const obrisiSitera = () => {
    const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    fetch('https://localhost:5001/Siter/obrisiSitera?id=' + idSitera, {
      method: 'DELETE',
    },
    {
      headers:{'Authorization':`Bearer ${TOKEN}`}
    }).then(async response => {
      if (response.ok) {
        const res = await response.json();
        window.location.reload(false)
      } else {
        alert('greska');
      }
    });
  };

  const uradi = () => {
    const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    fetch('https://localhost:5001/Siter/prihvatiSitera?idSiter=' + idSitera, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${TOKEN}`
      },
      body: JSON.stringify(idSitera),
    }).then(async response => {
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        alert('Sitter:' + res.ime + ' ' + res.prezime + ' ' + 'je prihvaćen');
        setDostupan(res);
        window.location.reload(false);
      } else {
        alert('greskaa');
      }
    });
  };
  const [dostupan, setDostupan] = useState([]);
  const classes = classStyles();

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
            Korisnicko ime: {korisnicko_ime}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Broj telefona: {telefon}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Grad: {grad}</Typography>
          <Typography sx={{ fontSize: 20 }}>Adresa: {adresa}</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Cena po satu: {cenaPoSatu}
          </Typography>

          <Typography sx={{ fontSize: 20 }}>Opis: {bio}</Typography>
        </CardContent>

        <div className={classes.divButton}>
          {dugme ? (
            <CardActions style={{ display: 'inherit' }}>
              <CardDialog idSitera={idSitera} />
              <Button
                style={{
                  color: 'white',
                  backgroundColor: '#07a607',
                  marginTop: 20,
                }}
                onClick={()=>{obrisiSitera();}}
              >
                Obrisi sitera{' '}
              </Button>
            </CardActions>
          ) : (
            <CardActions>
              <Button
                style={{ color: 'white', backgroundColor: '#07a607' }}
                onClick={()=>{uradi();}}
              >
                Prihvati sittera{' '}
              </Button>
            </CardActions>
          )}
        </div>
      </Card>
    </div>
  );
}
