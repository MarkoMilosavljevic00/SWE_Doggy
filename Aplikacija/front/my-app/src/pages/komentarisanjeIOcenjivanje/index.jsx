import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import HeaderLogin from '../../components/HeaderLogin';
import { useNavigate, useLocation } from 'react-router-dom';
import Kartice from '../komentarisanjeIOcenjivanje/kartice/index.jsx';
import { recenzije } from '../../backendAddress';

const KomentariasnjeIOcenjivanje = props => {
  const classes = classStyles();
  // const { state } = useLocation();
  // const { idSitera } = state;
  // console.log(idSitera);

  const idSitera = localStorage.getItem('idSitera');

  const [komentari, postaviKomentar] = useState([]);
  useEffect(() => {
    fetch(
      'https://localhost:5001/Recenzija/vratiSveRecenzije?siterId=' + idSitera
    ).then(async res => {
      const recenzijeSvihSitera = await res.json();

      const recenzije = recenzijeSvihSitera.filter(
        recenzijaSitera => recenzijaSitera.siterId == idSitera
      );
      postaviKomentar(recenzije);
    });
  }, []);
  return (
    <div className={classes.container}>
      <HeaderLogin />;
      <div className={classes.miniContainer}>
        {komentari.map((k, index) => {
          return (
            <Kartice
              vreme={k.vreme}
              komentar={k.komentar}
              ocena={k.ocena}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );

  //   return <Kartice />;
};
export default KomentariasnjeIOcenjivanje;
