import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import classStyles from './styles';
import FirstName from './components/firstName';
import LastName from './components/lastName';
import PhoneNumber from './components/phoneNumber';
import Email from './components/email';
import Username from './components/username';
import Password from './components/password';
import { dodajSiteraUrl } from '../../backendAddress';

const Registracija = () => {
  const navigate = useNavigate();
  const classes = classStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [brojTelefona, setBrojTelefona] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');

  const [success, setSuccess] = useState(false);

  const registracija = () => {
    let DTO = {
      ime: firstName,
      prezime: lastName,
      email: email,
      korisnickoIme: 'string',
      sifra: 'string',
      brojTelefona: 'string',
      drzava: 'string',
      grad: 'string',
      adresa: 'string',
      bio: 'string',
      slika: 'string',
      dostupan: true,
      obavljeneUsluge: 0,
      cenaPoSatu: 0,
    };

    fetch(dodajSiteraUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DTO),
    })
      .then(async res => {
        const result = await res.json();
        // console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      {success ? (
        <section>
          <h1> Uspesno ste registrovani</h1>
        </section>
      ) : (
        <section>
          <h1 className={classes.naslov}>Registracija</h1>

          <div className={classes.container}>
            <div className={classes.divContainer}>
              <div className={classes.divIme}>
                <FirstName firstName={firstName} setFirstName={setFirstName} />
                <LastName lastName={lastName} setLastName={setLastName} />
              </div>
              <PhoneNumber
                brojTelefona={brojTelefona}
                setBrojTelefona={setBrojTelefona}
              />
              <Email email={email} setEmail={setEmail} />
              <Username user={user} setUser={setUser} />
              <Password
                pwd={pwd}
                setPwd={setPwd}
                matchPwd={matchPwd}
                setMatchPwd={setMatchPwd}
              />
            </div>

            <div className={classes.divButton}>
              <Button
                style={{ backgroundColor: 'green' }}
                variant="contained"
                onClick={registracija}
                // onClick={() => registracija()}
              >
                Registruj se
              </Button>

              <Button
                style={{ backgroundColor: 'green' }}
                variant="contained"
                onClick={() => navigate('../')}
              >
                Nazad
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registracija;
