import React, { useState, useEffect, useContext } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import Card from '../admin/components/card/index.jsx';
import { vratiSveSitereUrl } from '../../backendAddress';
import aaa from '../admin/components/aaa/index.jsx';
import { vratiSveNevalidneSittere } from '../../backendAddress';
import Button from '@mui/material/Button';
import { adminRoute } from '../../router/routes';
const Admin = () => {
  const [siteri, postaviSitere] = useState([]);
  const [dugme, setDugme] = useState([]);
  const [nevalidni, postaviNevalidneSittere] = useState([]);
  const [success, setSucess] = useState([]);
  const uradi = () => {
    fetch(vratiSveNevalidneSittere).then(async res => {
      const rez = await res.json();
      postaviNevalidneSittere(rez);
      setSucess(true);
      setDugme(false);
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetch(vratiSveSitereUrl).then(async res => {
      const rezultat = await res.json();
      postaviSitere(rezultat);
      setSucess(false);
      setDugme(true);
    });
  }, []);
  const classes = classStyles();

  const nazad = () => {
    setSucess(false);
    setDugme(true);
  };

  return (
    <>
      {success ? (
        <div className={classes.container}>
          <HeaderLogin />
          <div className={classes.divNazad}>
            <Button
              style={{ color: 'white', backgroundColor: '#07a607' }}
              onClick={nazad}
            >
              Nazad
            </Button>
          </div>
          {nevalidni.map((nevalidan, index) => {
            return (
              <Card
                ime={nevalidan.ime}
                prezime={nevalidan.prezime}
                telefon={nevalidan.brojTelefona}
                grad={nevalidan.grad}
                cenaPoSatu={nevalidan.cenaPoSatu}
                bio={nevalidan.bio}
                validan={nevalidan.validan}
                dugme={dugme}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.container}>
          <HeaderLogin />
          <div className={classes.divNevalidni}>
            <Button
              onClick={uradi}
              style={{ color: 'white', backgroundColor: '#07a607' }}
            >
              Nevalidni siteri
            </Button>
          </div>
          {siteri.map((a, index) => {
            return (
              <Card
                ime={a.ime}
                prezime={a.prezime}
                telefon={a.brojTelefona}
                grad={a.grad}
                cenaPoSatu={a.cenaPoSatu}
                bio={a.bio}
                dugme={dugme}
                // validan={a.validan}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Admin;
