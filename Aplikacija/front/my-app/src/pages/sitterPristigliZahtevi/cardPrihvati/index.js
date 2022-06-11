import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CardDialog from './cardDialog.js';
import classStyles from './styles';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CardPrihvaceneUsluge(props) {
      const{P2,id, ime, prezime, korisnickoIme, brojTelefona, email, grad, adresa, pasId, napomena, idSittera, vlasnikId}=props;
      const navigate = useNavigate();
      const classes = classStyles();
      const[data2,setData2]=useState([]);
      const [open, setOpen] = React.useState(false);
      
      useEffect(() => {
        Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + pasId).then(res=>
        {
          setData2(res.data)

       })
       }, []);

  return(
      <div className={classes.miniContainer} >
      <Card sx={{ maxWidth: 345 }} hidden={open} style={{margin:'25px',borderRadius:'25px',backgroundColor:'khaki'}}>
      <CardContent>
      <Typography color="black" sx={{ fontSize: 30 }} component="div">Zahtev od {ime} {prezime}</Typography>
      <Typography  sx={{ fontSize: 25 }} component="div" >Informacije o korisniku: </Typography> 
      <Typography variant="body1" > Korisnicko ime: {korisnickoIme}</Typography>
      <Typography variant="body1" > Broj telefona: {brojTelefona}</Typography>
      <Typography variant="body1" > Email: {email} </Typography>
      <Typography variant="body1" > Grad: {grad}  </Typography>
      <Typography variant="body1" > Adresa: {adresa} </Typography> 
      </CardContent>
     
      <CardActions disableSpacing>
        <CardDialog idPsa={pasId} ime={data2.ime} rasa={data2.rasa} pol={data2.pol} visina={data2.visina} tezina={data2.tezina} prosecnaOcena={data2.prosecnaOcena} opis={data2.opis} idSittera={idSittera} vlasnikId={vlasnikId} id={id} napomena={napomena}/>
      </CardActions>
    </Card>
    </div>
);                                           
}