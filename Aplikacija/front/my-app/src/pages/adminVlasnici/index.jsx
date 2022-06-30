import React, { useState, useEffect, useContext } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import { adminRoute } from '../../router/routes';
import Card from '../adminVlasnici/card/index.jsx';
import { vratiSveSitereUrl } from '../../backendAddress';
import { vratiSveNevalidneSittere } from '../../backendAddress';
import Button from '@mui/material/Button';
import BrojeviStranica from '../adminVlasnici/brojevi/index.jsx';
import HeaderAdmin from '../../components/HeaderAdmin'
const AdminVlasnici = () => {
  const navigate = useNavigate();
  const classes = classStyles();
  const [siteriKojiSePrikazuju, postaviSitereKojiSePrikazuju] = useState([]);
  const [stranica, postaviStranicu] = useState(1);
  const [ukupanBrojStranica, postaviUkupanBrojStranica] = useState(1);
  const [brojObjavaPoStrani, postaviBrojObjavaPoStrani] = useState(2);
  const [vlasnici, setVlasnici] = useState([]);

  useEffect(() => {
    const TOKEN=localStorage.getItem('token')
    fetch('https://localhost:5001/Vlasnik/vratiSveVlasnike',
    {
      headers:{ Authorization: `Bearer ${TOKEN}`}
    }).then(async res => {
      const rez = await res.json();
      setVlasnici(rez);
      const objave = [];
      if (rez.length > brojObjavaPoStrani) {
        for (let i = 0; i < brojObjavaPoStrani; i++) {
          objave.push(rez[i]);
        }
      } else {
        for (let i = 0; i < rez.length; i++) {
          objave.push(rez[i]);
        }
      }
      postaviSitereKojiSePrikazuju(objave);
      if ((rez.length / brojObjavaPoStrani) % 1 != 0) {
        //check if number have decimal places, example: 23 % 1 = 0, 23.5 % 1 = 0.5
        postaviUkupanBrojStranica(Math.ceil(rez.length / brojObjavaPoStrani));
      } else {
        postaviUkupanBrojStranica(rez.length / brojObjavaPoStrani);
      }
    });
  }, []);

  useEffect(() => {
    const objave = [];
    const start = brojObjavaPoStrani * (stranica - 1);
    if (vlasnici.length > start + brojObjavaPoStrani) {
      for (let i = start; i < start + brojObjavaPoStrani; i++) {
        objave.push(vlasnici[i]);
      }
    } else {
      for (let i = start; i < vlasnici.length; i++) {
        objave.push(vlasnici[i]);
      }
    }
    postaviSitereKojiSePrikazuju(objave);
  }, [stranica]);
  return (
    <div className={classes.container}>
      <HeaderAdmin />
      <div style={{ display: 'flex', marginTop: '10px', marginLeft: ' 850px' }}>
        <Button
          style={{ color: 'white', backgroundColor: 'green' }}
          onClick={() => navigate(adminRoute)}
        >
          Nazad
        </Button>
      </div>
      {siteriKojiSePrikazuju.map((vlasnik, index) => {
        return (
          <Card
            ime={vlasnik.ime}
            prezime={vlasnik.prezime}
            korisnickoIme={vlasnik.korisnickoIme}
            adresa={vlasnik.adresa}
            grad={vlasnik.grad}
            telefon={vlasnik.brojTelefona}
            id={vlasnik.id}
          />
        );
      })}

      <div className={classes.pagination}>
        <BrojeviStranica
          ukupanBrojStranica={ukupanBrojStranica}
          postaviStranicu={postaviStranicu}
        />
      </div>
      
    </div>
  );
};
export default AdminVlasnici;
