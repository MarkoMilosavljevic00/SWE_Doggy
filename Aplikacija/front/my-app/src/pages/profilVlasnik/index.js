

import React from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
//import HeaderSitter from '../../components/HeaderSitter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../headerVlasnik';
import CardSlika from './card';

import Axios from 'axios';
import axios from '../../api/axios';
const ProfilVlasnik =()=>{
    console.log(1)

    
    
      //const navigate = useNavigate();
      const classes = classStyles();
          return(
           <>
           <NavBar />
           <div className={classes.container}>
             <div className={classes.glavni}>
    
                
             <CardSlika/>
             <Paper className={classes.paper} elevation={8}>
             <h4 className={classes.naslov2}>Opšti podaci</h4>
             <div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
             <Grid item xs={6}>
                <label>Ime:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Prezime:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Korisničko Ime:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Sifra:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Broj telefona:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6}>
             <input></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Drzava :</label>
            </Grid>
            <Grid item xs={6}>
             <input></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Grad:</label>
            </Grid>
            <Grid item xs={6}>
             <input></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Adresa:</label>
            </Grid>
            <Grid item xs={6}>
             <input></input>
             </Grid>
         </Grid>
             </div>
             </Paper>
             <Paper className={classes.paper} elevation={8}>
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
             </Paper>
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

       </>
          );
    }
  


export default ProfilVlasnik