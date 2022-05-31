

import React, { useState } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
//import HeaderSitter from '../../components/HeaderSitter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../headerVlasnik';
import DeleteIcon from '@mui/icons-material/Delete';
import CardSlika from './card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Axios from 'axios';
import axios from '../../api/axios';
import { Typography } from '@mui/material';
import AppFooter from '../../components/futer';
import Footer from '../../components/Footer'
const ProfilVlasnik =()=>{
console.log(1)

    const[ch,setCh]=useState(true)
    
      //const navigate = useNavigate();
      const classes = classStyles();
          return(
           <>
           
           <div className={classes.container}>
           <NavBar />
             <div className={classes.glavni}>
    
             {/* <input  type='text' id='opis' disabled={ch} onChange={ (e) => handle(e) } /> */}
             {/* <button onClick = {() => { setCh(!ch) }} > Izmeni podatke </button> */}
             <CardSlika/>
             <Paper className={classes.paper} elevation={8} style={{backgroundColor:'mediumspringgreen',height:'610px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
             <h4 className={classes.naslov2}>Opšti podaci</h4>
             <div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
             <Grid item xs={6}>
                <label>Ime:</label>
             </Grid>
             <Grid item xs={6}>
                <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Prezime:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Korisničko Ime:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Sifra:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Broj telefona:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Drzava :</label>
            </Grid>
            <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Grad:</label>
            </Grid>
            <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Adresa:</label>
            </Grid>
            <Grid item xs={6}>
             <input type='text' id='opis' disabled={ch}></input>
             </Grid>
         </Grid>
             </div>
             <div className='izmeniVlasnika' style={{display:'flex',marginTop:'20px',alignSelf:'flex-start'}}>
             <Fab color="secondary" aria-label="edit" onClick = {() => { setCh(!ch) }} style={{backgroundColor:'cornsilk',color:'black'}}>
        <EditIcon />
      </Fab>
      <Typography gutterTop style={{fontSize:'large',alignSelf:'center'}}>Izmeni podatke</Typography>
      <Button variant="outlined" startIcon={<DeleteIcon />} style={{backgroundColor:'cornsilk',color:'black',borderRadius:'25px',marginLeft:'65px'}}>
  Obrisi svoj profil
</Button>
      </div>
             </Paper>
             {/* <Paper className={classes.paper} elevation={8}>
             <h4 className={classes.naslov2}>Izmeni pristupne parametre</h4>
             <div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
             <Grid item xs={6}>
                <label>Novo korisničko ime:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
             <Grid item xs={6}>
                <label>Trenutna šifra:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
             <Grid item xs={6}>
                <label>Nova šifra:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
                <Grid item xs={6}>
                <label>Novi broj telefona :</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Nova drzava:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Novi grad:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Nova adresa:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
             </Grid>
             </div>                                          
             </Paper> */}
             </div>
              
           </div>
           <div className={classes.divButton}>
          {/* <Button
             style={{ backgroundColor: 'green' }}
             variant="contained"
             color="success"
             >
             Sačuvaj
                </Button>*/}
          </div>
<Footer />
       </>
          );
    }
  


export default ProfilVlasnik