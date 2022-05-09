import React from 'react'
//import { useNavigate } from "react-router-dom";
//import Button from '@mui/material/Button';
//import Checkbox from "@mui/material/Checkbox"
//import classStyles from './styles';
//import HeaderLogin from "../../components/HeaderLogin"
import { useRef, useState, useEffect } from 'react'
import axios from '../../api/axios';
/*const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;*/
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

const REGISTER_URL = '/registracija';

const Registracija = () => {
   // const navigate=useNavigate();
   // const classes = classStyles();

   const userRef = useRef();
   const errRef = useRef();

  /* const [user, setUser] = useState('');
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const [pwd, setPwd] = useState('');
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState('');
   const [validMatch, setValidMatch] = useState(false);
   const [matchFocus, setMatchFocus] = useState(false);*/
   const [firstName, setFirstName] = useState('');
   const [validFirstName, setValidFirstName] = useState(false);
   const [firstNameFocus, setFirstNameFocus] = useState(false);

   const [lastName, setLastName] = useState('');
   const [validLastName, setValidLastName] = useState(false);
   const [lastNameFocus, setLastNameFocus] = useState(false);

   
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
 /*  useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(true);
    const match = pwd === matchPwd;
    setValidMatch(match);
   },[pwd, matchPwd])*/

   useEffect(()=>{
    setErrMsg('');
   }, [firstName, lastName])

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

   return (
       <>
           {success ? (
               <section>
                   <h1> Uspesno ste registrovani</h1>
               </section>
           ) : (
     <section >
         <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
         <h1>Registracija</h1>
         <form onSubmit={handleSubmit}>
             <label htmlFor="firstname">Ime:</label>
             <input 
                type="text"
                id="firstname" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedly = "uidnote"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
             />
           <p id="uidnote" className={firstNameFocus && firstName && !validFirstName ? "instructions" : "offscreen"}>
                 <h3>Morate uneti od 4 do 24 karaktera</h3>
            </p>
            <label htmlFor="lastname">Prezime:</label>
             <input 
                type="text"
                id="lastname" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedly = "uidnote"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
             />
           <p id="uidnote" className={lastNameFocus && lastName && !validLastName ? "instructions" : "offscreen"}>
                 <h3>Morate uneti od 4 do 24 karaktera</h3>
            </p>
             {/* <label htmlFor="password">Password:</label>
             <input 
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedly = "pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
             />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                 <h3>Morate uneti od 8 do 25 karaktera, koji sadrze velika i mala slova, spec karaktere i brojeve</h3>
             </p> */}
           
             {/* <label htmlFor="confrim_pwd">Confrim Password:</label>
             <input 
                // type="password"
                id="confrim_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedly = "confrimnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
             />  */}
            {/* <p id="confrimnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}> */}
                 {/* <h3>Unesite prvo lozinku</h3>
              </p> */}
            <button disabled={!validFirstName || !validLastName ? true : false}>Registruj se</button>
         </form>
        
    </section>      
        )}
         </>
  )
}

export default Registracija