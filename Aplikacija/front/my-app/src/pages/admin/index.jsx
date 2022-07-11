import React, { useState, useEffect, useContext } from 'react';
import classStyles from './styles';
import HeaderLogin from '../../components/HeaderLogin';
import Card from '../admin/components/card/index.jsx';
import { filtrirajSitere, vratiSveSitereUrl } from '../../backendAddress';
import { vratiSveNevalidneSittere } from '../../backendAddress';
import Button from '@mui/material/Button';
import BrojeviStranica from '../admin/components/brojevi/index.jsx';
import { adminVlasniciRoute } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin'
const Admin = () => {
  const token=localStorage.getItem('token')
  const [siteri, postaviSitere] = useState([]);
  const [dugme, setDugme] = useState([]);
  const [nevalidni, postaviNevalidneSittere] = useState([]);
  const [success, setSucess] = useState([]);
  const [siteriKojiSePrikazuju, postaviSitereKojiSePrikazuju] = useState([]);
  const [stranica, postaviStranicu] = useState(1);
  const [ukupanBrojStranica, postaviUkupanBrojStranica] = useState(1);
  const [brojObjavaPoStrani, postaviBrojObjavaPoStrani] = useState(3);

  const uradi = () => {
    const TOKEN=localStorage.getItem('token')
    fetch(vratiSveNevalidneSittere,
      {
        headers:{Authorization:`Bearer ${TOKEN}`}
      }).then(async res => {
      const rez = await res.json();
      postaviNevalidneSittere(rez);
      setSucess(true);
      setDugme(false);
    });
  };
  const navigate = useNavigate();
  
  useEffect(() => {
    const TOKEN=localStorage.getItem('token')

    fetch(filtrirajSitere,
      {
        headers:{Authorization: `Bearer ${TOKEN}`}
      }).then(async res => {
      const rezultat = await res.json();
      postaviSitere(rezultat);
      console.log(rezultat)
      setSucess(false);
      setDugme(true);

      const objave = [];
      if (rezultat.length > brojObjavaPoStrani) {
        for (let i = 0; i < brojObjavaPoStrani; i++) {
          objave.push(rezultat[i]);
        }
      } else {
        for (let i = 0; i < rezultat.length; i++) {
          objave.push(rezultat[i]);
        }
      }
      postaviSitereKojiSePrikazuju(objave);

      if ((rezultat.length / brojObjavaPoStrani) % 1 != 0) {
        //check if number have decimal places, example: 23 % 1 = 0, 23.5 % 1 = 0.5
        postaviUkupanBrojStranica(
          Math.ceil(rezultat.length / brojObjavaPoStrani)
        );
      } else {
        postaviUkupanBrojStranica(rezultat.length / brojObjavaPoStrani);
      }
    });
  }, []);

  useEffect(() => {
    const objave = [];
    const start = brojObjavaPoStrani * (stranica - 1);
    if (siteri.length > start + brojObjavaPoStrani) {
      for (let i = start; i < start + brojObjavaPoStrani; i++) {
        objave.push(siteri[i]);
      }
    } else {
      for (let i = start; i < siteri.length; i++) {
        objave.push(siteri[i]);
      }
    }
    postaviSitereKojiSePrikazuju(objave);
  }, [stranica]);

  const classes = classStyles();
  const nazad = () => {
    setSucess(false);
    setDugme(true);
  };

  return (
    <>
      {success ? (
        <div className={classes.container}>
      <HeaderAdmin/>
          <div className={classes.divNazad}>
          </div>
          <div style={{marginTop:'50px'}}>
            {nevalidni.map((nevalidan, index) => {
              return (
                <Card
                key={index}
                  ime={nevalidan.ime}
                  prezime={nevalidan.prezime}
                  telefon={nevalidan.brojTelefona}
                  grad={nevalidan.grad}
                  adresa={nevalidan.adresa}
                  cenaPoSatu={nevalidan.cenaPoSatu}
                  bio={nevalidan.bio}
                  validan={nevalidan.validan}
                  dugme={dugme}
                  idSitera={nevalidan.id}
                />
              );
            })}
          </div>
          <Button
              style={{ color: 'white', backgroundColor: '#07a607' }}
              onClick={()=>{nazad();}}
            >
              Nazad
            </Button>
        </div>
      ) : (
        <div className={classes.container}>
         <HeaderAdmin/>

          <div className={classes.divNevalidni}>
            <Button
              style={{
                color: 'white',
                backgroundColor: '#07a607',
                margin: '10px ',
              }}
              onClick={() => navigate(adminVlasniciRoute)}
            >
              Prikaži vlasnike
            </Button>
            <Button
              onClick={()=>{uradi();}}
              style={{
                color: 'white',
                backgroundColor: '#07a607',
                marginRight: '10px',
                margin: '10px ',
              }}
            >
              Nevalidni siteri
            </Button>
          </div>

          {siteriKojiSePrikazuju.map((siter, index) => {
            return (
              <Card
              key={index}
                ime={siter.ime}
                prezime={siter.prezime}
                korisnicko_ime={siter.korisnickoIme}
                telefon={siter.brojTelefona}
                grad={siter.grad}
                adresa={siter.adresa}
                cenaPoSatu={siter.cenaPoSatu}
                bio={siter.bio}
                dugme={dugme}
                // validan={a.validan}
                idSitera={siter.id}
              />
            );
          })}
          <div className={classes.pagination}>
            <BrojeviStranica
              ukupanBrojStranica={ukupanBrojStranica}
              postaviStranicu={postaviStranicu}
            />
          </div>
          {/* <Button
              style={{ color: 'white', backgroundColor: '#07a607' }}
              onClick={nazad}
            >
              Nazad
            </Button> */}
        </div>
      )}
    </>
  );
};
export default Admin;
