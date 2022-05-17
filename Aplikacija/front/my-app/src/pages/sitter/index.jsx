import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import Kartica from './kartice/index.jsx';
import Search from './search/koponentaSearch/index.jsx';
import Ocene from '../sitter/ocene/index.jsx';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import IkonicaHome from '../sitter/ikonicaHome';
import slika from '../../slike/s1.jpg';
import curentPage from '../sitter/curentPage/index.jsx';
import { vratiSveSitereUrl } from '../../backendAddress';
// const users = [
//   {
//     ime: "Milan Mikic",
//     opis: "Ja se zovem Milan",
//   },
//   {
//     ime: "Pera Peric",
//     opis: "Ja se zovem Pera"
//   },
//   {
//     ime: "Zika Zikic",
//     opis: "Ja se zovem Zika",
//   },
//   {
//     ime: "Stefan Stefanovic",
//     opis: "Ja se zovem Stefan"
//   }
// ]

const Sitter = () => {
  const navigate = useNavigate();
  const classes = classStyles();
  const [siteri, postaviSitere] = useState([]);
  // const [podaci, postaviPodatke] = useState([]);

  // console.log(siteri);

  useEffect(() => {
    fetch(vratiSveSitereUrl).then(async res => {
      const results = await res.json();
      // siteri = results;
      postaviSitere(results);
      // postaviPodatke(results);
      // console.log(results);
    });
  }, []);

  return (
    <div className={classes.container}>
      <HeaderLogin />

      <div className={classes.divSearch}>
        {/* <Search /> */}
        <Button
          className={classes.buttonPotvrdi}
          style={{ backgroundColor: '#2ac94d', margin: 15 }}
          variant="contained"
          color="success"
          onClick={() => navigate('../')}
        >
          Potvrdi
        </Button>

        <IkonicaHome style={{ backgroundColor: '#2ac94d' }} />
      </div>
      <div className={classes.miniContainer}>
        {/* {users.map((user, index) => <Kartica ime={user.ime} opis={user.opis} key={index } />)}   */}
        {siteri.map((siter, index) => {
          return (
            <Kartica
              ime={siter.ime}
              opis={siter.bio}
              slika={siter.slika}
              brojTelefona={siter.brojTelefona}
              key={index}
            />
          );
        })}
      </div>

      {/* <CurentPage/> */}
    </div>
  );
};

export default Sitter;
