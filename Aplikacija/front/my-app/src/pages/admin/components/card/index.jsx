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
  const {
    ime,
    prezime,
    telefon,
    grad,
    cenaPoSatu,
    bio,
    validan,
    dugme,
    idSitera,
  } = props;

  const obrisiSitera = () => {
    fetch('https://localhost:5001/Siter/obrisiSitera?id=' + idSitera, {
      method: 'DELETE',
    }).then(async response => {
      if (response.ok) {
        const res = await response.json();
      } else {
        alert('greska');
      }
    });
  };

  const uradi = () => {
    fetch('https://localhost:5001/Siter/prihvatiSitera?idSiter=' + idSitera, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(idSitera),
    }).then(async response => {
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        alert('Sitter' + res.ime + ' ' + res.prezime + ' ' + 'je prihvaćen');
        setDostupan(res);
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
            Broj telefona: {telefon}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Grad: {grad}</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Cena po satu: {cenaPoSatu}
          </Typography>

          <Typography sx={{ fontSize: 16 }}>Opis: {bio}</Typography>
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
                onClick={obrisiSitera}
              >
                Obrisi sitera{' '}
              </Button>
            </CardActions>
          ) : (
            <CardActions>
              {/* <label>Validan: </label>
              <FormControlLabel control={<Android12Switch />} /> */}
              {/* {dostupan.map((d, index) => {
                return(
                  <MenuItem>
                  ime={d.ime}
                  prezime = {d.prezime}
                </MenuItem>
                );
              })}; */}
              <Button
                style={{ color: 'white', backgroundColor: '#07a607' }}
                onClick={uradi}
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
