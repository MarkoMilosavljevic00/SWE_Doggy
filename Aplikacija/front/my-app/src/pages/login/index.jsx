import React from 'react';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import classStyles from './styles';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
//import Checkbox from "@mui/material/Checkbox"
import HeaderLogin from '../../components/HeaderLogin';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../../api/axios';
const LOGIN_URL = './auth';

const Login = () => {
  const navigate = useNavigate();
  const classes = classStyles();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async e => {
    //e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else setErrMsg('Login Failed');
      errRef.current.focus();
    }
  };

  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'yellow',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });

  return (
    <>
      {success ? (
        <section>
          <h1>Uspesno ste ulogovani</h1>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className={classes.naslov}>Logovanje</h1>

          <form className={classes.container} onSubmit={handleSubmit}>
            {/* <img src={slika} alt="Ucitavanje"/>
             */}
            {/* <div style = {{backgroundImage: `url(../../slike/slika6.jpg")`}}></div> */}
            <div className={classes.glavni}>
              <ValidationTextField
                label="Korisnicko ime"
                type="text"
                id="validation-outlined-input"
                variant="outlined"
                ref={userRef}
                autoComplete="off"
                onChange={e => setUser(e.target.value)}
                value={user}
                required
              />
              <ValidationTextField
                label="Lozinka"
                type="password"
                id="validation-outlined-input"
                variant="outlined"
                onChange={e => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className={classes.divButton}>
              <Button
                style={{ backgroundColor: 'green' }}
                variant="contained"
                color="success"
                onClick={() => handleSubmit()}
              >
                Uloguj se
              </Button>

              <Button
                style={{ backgroundColor: 'green' }}
                variant="contained"
                color="success"
                onClick={() => navigate('../')}
              >
                Nazad
              </Button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};
export default Login;
