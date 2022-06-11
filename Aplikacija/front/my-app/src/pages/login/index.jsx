import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import HeaderLogin from '../../components/HeaderLogin';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Header from '../../components/HeaderPomoc';
import Footer from '../../components/Footer';

import NavbarVlasnik from '../headerVlasnik';
import NavBarSiter from '../headerSiter';
const Login = () => {
  const [milica,setMilica]=useState(false)
  const navigate = useNavigate();
  const classes = classStyles();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePwd = pass => {
    return pass.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    );
  };

  const handleLogin = () => {
    console.log('darjanaanannana');

    if (!validateEmail(email)) {
      alert('Niste uneli validan email');
      return;
    }

    if (!validatePwd(pwd)) {
      alert(
        'Niste uneli validnu sifru. Sifra mora da sadrzi: 1 malo slovo, 1 veliko slovo, 1 broj i mora da bude najmanje duzine 8'
      );
      return;
    }

    const DTO = {
      email: email,
      password: pwd,
    };

    fetch('https://localhost:5001/Auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DTO),
    })
      .then(async res => {
        if (res.ok) {
          res = await res.json();
          localStorage.setItem('korisnik', JSON.stringify(res.korisnik));
          localStorage.setItem('token', res.token);
          setMilica(true)
          if (res.korisnik.tip == 0) {
            localStorage.setItem('idVlasnika', JSON.stringify(res.korisnik.id));
            alert('Uspesno ste se ulogovali kao Vlasnik');
          } else if (res.korisnik.tip == 1) {
            localStorage.setItem('idSitera', JSON.stringify(res.korisnik.id));
            alert('Uspesno ste se ulogovali kao Siter');
          } else {
            localStorage.setItem('Admin', JSON.stringify(res.korisnik.id));
          }

          // localStorage.setItem('idVlasnika', JSON.stringify(res.korisnik.id));

        }
      })
      .catch(err => {
        alert(err);
        alert('Losa sifra')
      });
 
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const proveraSiter=localStorage.getItem('idSitera')
  const proveraVlasnik=localStorage.getItem('idVlasnika')
  return (
    <>
    {milica? navigate('/'): 

    (
    <div className='jedan'>
      { proveraSiter ? <NavBarSiter/> : (proveraVlasnik ? <NavbarVlasnik/> : <Header/>)} 
    <div className={classes.container}>
      
      <div className='dva' style={{ displey: 'flex', flexDirection: 'column',minHeight:'675px' }}>
        <h1 style={{ color: '#000000c2' }} className={classes.naslov}>
          Logovanje
        </h1>
        <div>
          <div className={classes.glavni}>
            <TextField
              label="Email"
              type="text"
              variant="outlined"
              autoComplete="off"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
              style={{ marginBottom: '20px', backgroundColor: 'white' }}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Potvrdite lozinku
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                style={{ marginBottom: '20px', backgroundColor: 'white' }}
                label="Lozinka"
                type={values.showPassword ? 'text' : 'password'}
                variant="outlined"
                onChange={e => setPwd(e.target.value)}
                value={pwd}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <div className={classes.divButton}>
            <Button
              style={{ backgroundColor: 'green' }}
              variant="contained"
              color="success"
              onClick={handleLogin}
            >
              Uloguj se
            </Button>

            <Button
              style={{ backgroundColor: 'green' }}
              variant="contained"
              color="success"
              onClick={()=>{navigate('/')}}
            >
              Nazad
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>)}
    </>
  );
};
export default Login;
