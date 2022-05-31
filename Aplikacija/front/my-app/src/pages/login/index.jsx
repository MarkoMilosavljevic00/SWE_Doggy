// import React from 'react';

// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Stack from '@mui/material/Stack';
// import classStyles from './styles';

// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// //import Checkbox from "@mui/material/Checkbox"
// import HeaderLogin from '../../components/HeaderLogin';
// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthProvider';
// import axios from '../../api/axios';
// const LOGIN_URL = './auth';

// const Login = () => {
//   const navigate = useNavigate();
//   const classes = classStyles();
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState();
//   const [pwd, setPwd] = useState();
//   const [errMsg, setErrMsg] = useState();
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg('');
//   }, [user, pwd]);

//   const handleSubmit = async e => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         }
//       );

//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       setAuth({ user, pwd, roles, accessToken });
//       setUser('');
//       setPwd('');
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No Server Response');
//       } else if (err.response?.status === 400) {
//         setErrMsg('Missing Username or Password');
//       } else if (err.response?.status === 401) {
//         setErrMsg('Unauthorized');
//       } else setErrMsg('Login Failed');
//       errRef.current.focus();
//     }
//   };

//   const ValidationTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//       borderColor: 'yellow',
//       borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//       borderColor: 'green',
//       borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//       borderLeftWidth: 6,
//       padding: '4px !important', // override inline-style
//     },
//   });

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Uspesno ste ulogovani</h1>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? 'errmsg' : 'offscreen'}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <h1 className={classes.naslov}>Logovanje</h1>

//           <form className={classes.container} onSubmit={handleSubmit}>
//             {/* <img src={slika} alt="Ucitavanje"/>
//              */}
//             {/* <div style = {{backgroundImage: `url(../../slike/slika6.jpg")`}}></div> */}
//             <div className={classes.glavni}>
//               <ValidationTextField
//                 label="Korisnicko ime"
//                 type="text"
//                 id="validation-outlined-input"
//                 variant="outlined"
//                 ref={userRef}
//                 autoComplete="off"
//                 onChange={e => setUser(e.target.value)}
//                 value={user}
//                 required
//               />
//               <ValidationTextField
//                 label="Lozinka"
//                 type="password"
//                 id="validation-outlined-input"
//                 variant="outlined"
//                 onChange={e => setPwd(e.target.value)}
//                 value={pwd}
//                 required
//               />
//             </div>
//             <div className={classes.divButton}>
//               <Button
//                 style={{ backgroundColor: 'green' }}
//                 variant="contained"
//                 color="success"
//               >
//                 Uloguj se
//               </Button>

//               <Button
//                 style={{ backgroundColor: 'green' }}
//                 variant="contained"
//                 color="success"
//                 onClick={() => navigate('../')}
//               >
//                 Nazad
//               </Button>
//             </div>
//           </form>
//         </section>
//       )}
//     </>
//   );
// };
// export default Login;
import * as React from 'react';
import { useEffect,useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios, * as others from 'axios';
import { Co2Sharp } from '@mui/icons-material';


const Login = () =>
{
const Copyright=(props)=> {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const accessToken='pintusharmaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqweqwefsadgsgfdgd'
const[email,setMejl]=useState('');
const[password,setSifra]=useState('');

// const token = localStorage.getItem('token') // Replace token with the right key
// if (!token) {
//   // handle no token case
//   return
// }

// axios.get(`${process.env.API_BASE_URL}/getquestions`, {
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// })
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpLkBnbWFpbC5jb20iLCJleHAiOjE2NTM5NTUzNjUsImlzcyI6IkRvZ2d5LmNvbSIsImF1ZCI6IkRvZ2d5LmNvbSJ9.2EEi7b-affIlLP1DR5EXXXyipfXLkXJLRpMGU54_VCI'
  const handleSubmit = (event) => {
    event.preventDefault();
//     const data =
//     {
//         email,
//         sifra
//     }
//     axios.post('https://localhost:5001/Auth/Login',data,
//     {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer '+token
//         }
//   })
//     .then(res=>console.log('Posting',res)).catch(err=>console.log(err))
const data =
{
    email,
    password
}

  axios.post('https://localhost:5001/Auth/Login',data,
 { 
      headers: {
        'Accept' : 'application/json',
          
         'Authorization': 'Bearer ' +  token
            }      
     }
 )
  .then(res=>
     {
       console.log(res)
       localStorage.setItem('idVlasnika',res.data.korisnik.id)
    })     .catch(err=>
    { 
         console.log(err.response)
     })
}
 
const handleSubmit1=(e)=>
{
  e.preventDefault();
  console.log(email)
  console.log(password)
}
    
  

  return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//             value={email}
//             onChange={(e)=>setMejl(e.target.value)}
//               margin="normal"
//               required
//               fullWidth
//               id="email"
              
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//             value={sifra}
//             onChange={(e)=>setSifra(e.target.value)}
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
              
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
<div className="App">
<h1>mrk</h1>
<form>
    <input type="text" value={email} onChange={(e)=>setMejl(e.target.value)}/>
    <input type="text" value={password} onChange={(e)=>setSifra(e.target.value)}/>
    
<button onClick={handleSubmit}>post</button>
</form>
</div>   
        )}
export default Login