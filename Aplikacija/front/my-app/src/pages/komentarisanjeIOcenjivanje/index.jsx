import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import HeaderLogin from '../../components/HeaderLogin';
import Kartice from '../komentarisanjeIOcenjivanje/kartice/index.jsx';
import { vratiSveSitereUrl } from '../../backendAddress';
import { useNavigate } from 'react-router-dom';
import { sitterRoute } from '../../router/routes';
import { Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Footer from '../../components/Footer.js'
import PojedinacnaKartica from '../komentarisanjeIOcenjivanje/pojedinacnaKartica/index.jsx';
import HeaderVlasnik from '../headerVlasnik/index.js'
const KomentariasnjeIOcenjivanje = props => {
  const classes = classStyles();
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { idSitera } = state;
  // console.log(idSitera);

  const idSitera = localStorage.getItem('idSitera');

  const [komentari, postaviKomentar] = useState([]);
  useEffect(() => {
    fetch(
      'https://localhost:5001/Recenzija/vratiRecenzijeZaSitera?id=' + idSitera
    ).then(async res => {
      const recenzijeSvihSitera = await res.json();

      const recenzije = recenzijeSvihSitera.filter(
        recenzijaSitera => recenzijaSitera.siterId == idSitera
      );

      postaviKomentar(recenzije);
    });
  }, []);

  const [siter, postaviSitera] = useState([]);
  useEffect(() => {
    fetch(vratiSveSitereUrl).then(async res => {
      const siteri = await res.json();
      const r = siteri.find(s => s.id == idSitera);
      postaviSitera(r);
    });
  }, []);

  return (<>
    <div className='a' style={{minHeight:'752px',backgroundColor:'#95e36e61'}}>
      <HeaderVlasnik />
    <div className={classes.container}>
      <div className={classes.divGore}>
        <div className={classes.naziv}>
          <h4 className={classes.divImeIPrezime}>
            {
              <Avatar
                className={classes.sapica}
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              >
                <PetsIcon style={{ color: 'white' }} />
              </Avatar>
            }
            {siter.ime + ' ' + siter.prezime + ' '}
          </h4>
          <h5 className={classes.divProsecnaOcena}>
            {' '}
            Prosecna ocena: {siter.prosecnaOcena}
          </h5>
        </div>
        <div className={classes.divButton}>
          <Button
            style={{
              backgroundColor: 'rgb(93, 224, 100)',
              color: 'white',
              marginRight: ' 100px',
            }}
            onClick={() => {
              navigate(sitterRoute);
            }}
          >
            Vrati se nazad
          </Button>
        </div>
      </div>

      <div className={classes.miniContainer}>
        {/* <PojedinacnaKartica /> */}
        {komentari.map((k, index) => {
          return (
            <Kartice
              vreme={k.vreme}
              komentar={k.komentar}
              ocena={k.ocena}
              key={index}
              vlasnikId={k.vlasnikId}
            />
          );
        })}
      </div>
    </div>
    </div>
  
    </>
  );
};
export default KomentariasnjeIOcenjivanje;
