import React, { useState, useEffect, useContext } from 'react';
import classStyles from './styles';
import HeaderLogin from '../../components/HeaderLogin';
import PetsIcon from '@mui/icons-material/Pets';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import CardDialog from './cardDialog';

const Help = () => {
  const classes = classStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <HeaderLogin />

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
                  'Da bi na Doggy sajtu postali sitter ili vlasnik psa potrebno je da se registrujete, na taj način ste kreirali svoj nalog. Zatim, čekate da Vas administrator prihvati.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Kako da znam da li je moj nalog odobren?'}
                opis={'Kako da postanem siter ili vlasnik psa?'}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={'Zašto bi trebao da postanem sitter?'}
                opis={
                  'Ukoliko si osoba koja voli pse i koja želi da bude u njihovom prisustvu, a da pritom nemaš stalni odnos možeš zaraditi novac.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={
                  'Kako da pošaljem zahtev sitteru ili vlasniku psa?'
                }
                opis={
                  'Ukoliko si vlasnik koji želi da ti sitter čuva tvog psa potrebno je da odabereš sitter-a po želji, nakon toga je potrebno da se zahtev pošalje.'
                }
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.divSlikaVelika}>
              <PetsIcon />
              <CardDialog
                tekstButton={
                  'Koje su mogućnosti ako postanem vlasnik psa na vašem sajtu?'
                }
                opis={
                  'Možete bez brige da odete bez Vašeg psa, zato što se on nalazi u sigurnim rukama.'
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
                  'Potrebno je da na sajtu nadjete sitter-a koji Vam je čuvao psa, zatim klikom na dugme Komentariši i oceni, možeš da vidiš sve komentare i ocene tog sitter-a i da dodaš svoj. '
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
                  'Kada se nalazite na stranici svog profila, klikom na dugme Promeni sliku možete da odaberete sliku iz Vašeg računara.'
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
