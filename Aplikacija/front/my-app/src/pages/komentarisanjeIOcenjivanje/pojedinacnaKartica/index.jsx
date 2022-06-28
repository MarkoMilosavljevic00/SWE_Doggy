import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classStyles from './styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PostavljanjeOcene from '../pojedinacnaKartica/components/postavljanjeOcene/index.jsx';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';

export default function BasicCard() {
  const classes = classStyles();
  const [komentar, setKomentar] = useState('');
  const [ocena, setOcena] = useState(null);
  const idSitera = localStorage.getItem('idSitera');
    
    const idVlasnika = localStorage.getItem('idVlasnika');
    // const vreme = '2022-05-30T20:21:58.311Z';
 
  // const [pas, postaviPsa] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     'https://localhost:5001/Pas/vratiPseZaVlasnika?idVlasnika=' + idVlasnika
  //   ).then(async res => {
  //     const rez = await res.json();
  //     postaviPsa(rez);
  //   });
  // }, []);

  // const sacuvajOnClick = () => {
  //   const idSitera = localStorage.getItem('idSitera');
  // //   const classes = classStyles();
  // // const [komentar, setKomentar] = useState('');
  // // const [ocena, setOcena] = useState(null);
 
  //   const idVlasnika = localStorage.getItem('idVlasnika');
  //   const vreme = '2022-05-30T20:21:58.311Z';

  //   const DTO = {
  //     vreme: vreme,
  //     komentar: komentar,
  //     siterId: idSitera,
  //     pasId: 4, //ovo ne treba, jer vlasnik ne ocenjuje svog psa, vec sitera!
  //     vlasnikId: idVlasnika, //ovo fali, treba da se zna koji vlasnik ocenjuje kog sitera
  //     ocena: ocena,
  //   };

  //   fetch(
  //     'https://localhost:5001/Recenzija/dodajRecenzijuSiteru?idSiter=' +
  //       idSitera,
  //     {
  //       method: 'POST',
  //       headers: {
  //         // Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(DTO),
  //     }
  //   ).then(async res => {
  //     const r = await res.json();
  //     console.log(r);
  //   });
  // };

  const textareaOnChange = ev => {
    setKomentar(ev.target.value);
  };
  const [vlasnik, setVlasnici] = useState([]);
  useEffect(() => {
    const TOKEN=localStorage.getItem('token')
    fetch(
      'https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + idVlasnika,
      {
    headers:{ Authorization: `Bearer ${TOKEN}`}
      }
    ).then(async res => {
      const rez = await res.json();
      console.log(rez.data)
      setVlasnici(rez);
    
    });
  }, []);

  return (
    <Card sx={{ minWidth: 275 }} style={{ margin: 5 }}>
      <CardContent
        style={{ display: 'flex', border: '1px solid black', flex: 1 }}
      >
        <div className={classes.divSacuvaj}>
          <div className={classes.divOcena}>
            <div className={classes.lbl}>
              <Typography variant="h5" component="div">
                {vlasnik.ime + ' ' + vlasnik.prezime}
              </Typography>
            </div>
            <div className={classes.ocena}>
              <PostavljanjeOcene setOcena={setOcena} />
            </div>
          </div>

          <TextareaAutosize
            // placeholder="Unesi komentar..."
            placeholder={'Unesi komentar...'}
            onChange={textareaOnChange}
            style={{ width: '100%', height: 50, marginTop: ' 10px' }}
          />
          <Typography variant="h5" component="div"></Typography>
          <div className={classes.divKomentar}>
            <Button
              onClick={console.log('1')}
              style={{
                display: 'flex',
                width: '200px',
                backgroundColor: 'green',
                color: 'white',
                marginTop: '5px',
              }}
            >
              Sacuvaj komentar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
