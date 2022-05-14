import React from 'react'

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { useNavigate } from "react-router-dom";
//import Checkbox from "@mui/material/Checkbox"
import classStyles from './styles';
//import HeaderLogin from "../../components/HeaderLogin"
import { useRef, useState, useEffect } from 'react'
import axios from '../../api/axios';
import { green } from '@mui/material/colors';
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const BROJ_REGIX = /

const REGISTER_URL = '/registracija';

const Registracija = () => {
   const navigate=useNavigate();
   const classes = classStyles();

   const userRef = useRef();
   const errRef = useRef();




   const [firstName, setFirstName] = useState('');
   const [validFirstName, setValidFirstName] = useState(false);
   const [firstNameFocus, setFirstNameFocus] = useState(false);

   const [lastName, setLastName] = useState('');
   const [validLastName, setValidLastName] = useState(false);
   const [lastNameFocus, setLastNameFocus] = useState(false);

   const [brojTelefona , setBrojTelefona] = useState('');
   
   const [email, setEmail] = useState('');
//    const [validEmail, setValidEmail] = useState(false);
//    const [emailFocus, setEmailFocus] = useState(false);


       
   const [user, setUser] = useState('');
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const [pwd, setPwd] = useState('');
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState('');
   const [validMatch, setValidMatch] = useState(false);
   const [matchFocus, setMatchFocus] = useState(false);
   
   const[errMsg, setErrMsg] = useState('');
   const[success, setSuccess] = useState(false);

  


   useEffect(() => {
    userRef.current.focus();
   }, [])

   useEffect(()=>{
       const result = NAME_REGEX.test(firstName);
       console.log(result);
       console.log(firstName);
       setValidFirstName(true);
   },[firstName])

   useEffect(()=>{
    const result = NAME_REGEX.test(lastName);
    console.log(result);
    console.log(lastName);
    setValidLastName(true);
   },[lastName])


    useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(true);
    const match = pwd === matchPwd;
    setValidMatch(match);
   },[pwd, matchPwd])

   useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(true);
   },[user])


   useEffect(()=>{
    setErrMsg('');
   }, [firstName, lastName, email, user, brojTelefona, pwd])

   const handleSubmit = (e) =>{
       e.preventDefault();
    //    const v1 = USER_REGEX.test(user);
    //    const v2 = PWD_REGEX.test(pwd);
    //    if(!v1 || !v2){
    //        setErrMsg("Pogresan unos");
    //        return;
    //    }
    //    try
    //    {
    //        const response = await axios.post(REGISTER_URL,
    //         JSON.stringify({ user, pwd}),
    //         {
    //             headers : {'Content-Type' : 'application/json'},
    //             withCredentials : true
    //         });
    //         console.log(response.data);
    //        // console.log(accessToken);
    //         console.log(JSON.stringify(response)); 
    //         setSuccess(true);

    //    } catch(err) {
    //     if(!err?.response)
    //     {
    //         setErrMsg('No Server Response');
    //     }else if(err.response?.status === 409)
    //     {
    //         setErrMsg('Username Taken');
    //     }
    //     else setErrMsg('Registration Failed');
    //     errRef.current.focus();
    //    }
    setSuccess(true);
   }




   
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
                   <h1> Uspesno ste registrovani</h1>
               </section>
           ) : (
     <section >
         <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
         <h1 className= {classes.naslov}>Registracija</h1>


         <form className= {classes.container} onSubmit={handleSubmit}>
            <div className={classes.divContainer}>
                <div className={classes.divIme}>
             <ValidationTextField className={classes.inputIme}
                label="Ime"
                type="text"
                id="validation-outlined-input" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
                variant="outlined"

                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedly = "uidnote"
                // onFocus={() => setFirstNameFocus(true)}
                // onBlur={() => setFirstNameFocus(false)}
                // helperText="Unesite ime"
             />

            <ValidationTextField className={classes.inputPrezime}
                label="Prezime"
                type="text"
                id="validation-outlined-input" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
                variant="outlined"
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedly = "uidnote"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                />
     
                </div>

            <ValidationTextField
                label="Broj telefona"
                type="text"
                id="validation-outlined-input"  
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setBrojTelefona(e.target.value)}
                required
                variant="outlined"
                value={brojTelefona}
                // helperText="Unesite samo brojeve, bez teksta"

             />

            <ValidationTextField
                 label="Email"
                type="text"
                id="validation-outlined-input" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                value={email}
                // aria-invalid={validEmail? "false" : "true"}
                // aria-describedly = "uidnote"
                // onFocus={() => setEmailFocus(true)}
                // onBlur={() => setEmailFocus(false)}
             />

            <ValidationTextField
                label="Korisnicko ime"
                type="text"
                id="validation-outlined-input" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                variant="outlined"
                aria-invalid={validName ? "false" : "true"}
                // aria-describedly = "uidnote"
                // onFocus={() => setUserFocus(true)}
                // onBlur={() => setUserFocus(false)}
                helperText="Morate uneti od 4 do 24 karaktera"
             />
        
             <ValidationTextField
                label="Lozinka"
                type="password"
                id="validation-outlined-input" 
                onChange={(e) => setPwd(e.target.value)}
                required
                variant="outlined"
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedly = "pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                helperText=
                    "Mora da sadrzi velika i mala slova, karaktere i brojeve"
                />
   
             <ValidationTextField
                label="Potvrdite lozinku"
                type="password"
                id="validation-outlined-input" 
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                variant="outlined"
                aria-invalid={validMatch ? "false" : "true"}
                // aria-describedly = "confrimnote"
                // onFocus={() => setMatchFocus(true)}
                // onBlur={() => setMatchFocus(false)}

                helperText=
                "Unesite prvo lozinku"
            />
             
         </div>

         <div className={classes.divButton}>
             <Button style= {{ backgroundColor: 'green'}}variant="contained" color="success"  disabled={!validFirstName || !validLastName  ? true : false}>
              Registruj se
            </Button>

            <Button style= {{ backgroundColor: 'green'}}variant="contained" color="success" onClick={()=>navigate('../')}  >
              Nazad
            </Button>
        </div>
        </form>
    </section>      
        )}
         </>
  )
}

export default Registracija