import React, { useState, useEffect, useContext } from 'react';
import classStyles from './styles';
import HeaderLogin from '../../components/HeaderLogin';
import PetsIcon from '@mui/icons-material/Pets';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import CardDialog from './cardDialog';
import Header from '../../components/HeaderPomoc';
import Footer from '../../components/Footer';
import HeaderAdmin from '../../components/HeaderAdmin';
import NavbarVlasnik from '../headerVlasnik';
import NavBarSiter from '../headerSiter';
import NavBarVlasnik from '../headerVlasnik';


const Help = () => {
  const classes = classStyles();
  const navigate = useNavigate();
  const proveraSiter=localStorage.getItem('idSitera')
  const proveraVlasnik=localStorage.getItem('idVlasnika')
  const proveraAdmin=localStorage.getItem('idAdmina')



  return (
    <div className={classes.container}>
{ proveraSiter ? <NavBarSiter/> : (proveraVlasnik ? <NavbarVlasnik/>  :(proveraAdmin ? <HeaderAdmin/> : <Header/>))} 
      <div className={classes.divSlikaVelika}>
        <div className={classes.divSlika}></div>
        <div className={classes.divNaslov}>
          <h1 className={classes.naslov}> Doggy pomoć</h1>
          <h3 className={classes.naslov}>
            Ovde mozete naći odgovore na najčešće pitanja
          </h3>
        </div>
      </div>
      <div className={classes.miniContainer}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Kako da postanem sitter ili vlasnik psa?'}
                opis={
                  'Da bi na Doggy sajtu postali sitter ili vlasnik psa potrebno je da se registrujete, na taj način ste kreirali svoj nalog. Zatim, ukoliko ste sitter čekate da Vas administrator prihvati, a ukoliko ste vlasnik mozete odmah krenuti sa nalazenjem sittera.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Zašto bih trebao da postanem sitter?'}
                opis={
                  'Ukoliko ste osoba koja voli pse i želi da bude u njihovom prisustvu, a da pritom nemate stalni radni odnos,na ovom sajtu možete zaraditi neki novac.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={
                  'Kako da pošaljem zahtev sitteru?'
                }
                opis={
                  'Ukoliko ste vlasnik i zelite da Vam sitter čuva psa potrebno je odabrati sitter-a po želji,a nakon toga je potrebno popuniti formu za zahteve i poslati je sitter-u.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Kako mogu da komentarišem vlasnika ili sittera?'}
                opis={
                  'Posle (ne)uspesno zavrsene usluge sitter ce obeleziti da je odredjena usluga gotova, kada siter obelezi da je zavrsio sa uslugom, sitter moze komentarisati i ocenjivati psa, a takodje vlasnik moze komentarisati i ocenjivati sitter-a. '
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Kako da izmenim sliku na svom profilu?'}
                opis={
                  'Kada se nalazite na stranici svog profila, klikom na dugme Dodaj sliku možete da odaberete sliku iz Vašeg računara.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Kako da promenim podatke na svom profilu?'}
                opis={
                  'Kada se nalazite na stranici svog profila, klikom na dugme Izmeni podatke možete da izmenite podatke po želji.'
                }
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Help;
