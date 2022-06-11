import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from'@mui/icons-material/ExpandMore';
import CardDialog from './cardDialog.js';
import classStyles from './styles';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CardPristigliZahtevi(props) {
      const{P1,id, ime, prezime, korisnickoIme, brojTelefona, email, grad, adresa, pasId, napomena}=props;
      const navigate = useNavigate();
      const classes = classStyles();
      const[data2,setData2]=useState([]);
  
      useEffect(() => {
        Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + pasId).then(res=>
        {
          setData2(res.data)

       })
       }, []);

      const prihvati_uslugu = idUsluge  =>
{
    Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + idUsluge + '&status=1').then(
        res =>
        {
            console.log(res)
        }
    )
}
const odbij_uslugu=(id) =>
{
    Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + id + '&status=2').then(
        res =>
        {
            console.log('Odbijena usluga sa idejem: ' + props)
        }
    )
}

      return(
          <div className={classes.miniContainer} >
<Card sx={{ maxWidth: 600 }} style={{margin:'25px',borderRadius:'25px',backgroundColor:'khaki'}} >

       <CardContent>
         <Typography color="black" sx={{ fontSize: 30 }} component="div">Zahtev od {ime} {prezime}</Typography>
         <Typography sx={{ fontSize: 25 }}component="div" >Informacije o korisniku: </Typography> 
         <Typography variant="body1" > Korisnicko ime: {korisnickoIme}</Typography>
         <Typography variant="body1" > Broj telefona: {brojTelefona}</Typography>
         <Typography variant="body1" > Email: {email} </Typography>
         <Typography variant="body1" > Grad: {grad}  </Typography>
         <Typography variant="body1" > Adresa: {adresa}</Typography> 
         <Typography variant="body1">Napomena: {napomena}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        
          <DoneOutlineIcon style={{color:'rgb(93, 224, 100)'}} onClick={()=> prihvati_uslugu(id)} />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon style={{color:'black'}} onClick={()=> odbij_uslugu(id)}/>
        </IconButton>
        
        <CardDialog idPsa={pasId} ime={data2.ime} rasa={data2.rasa} pol={data2.pol} visina={data2.visina} tezina={data2.tezina} prosecnaOcena={data2.prosecnaOcena} opis={data2.opis}  />
        </CardActions>
   
    </Card> 
</div>
);                                           
}