import React from "react";
//import classStyles from './styles';

import { useNavigate } from "react-router-dom";
//import Button from '@mui/material/Button';
//import Checkbox from "@mui/material/Checkbox"
//import HeaderLogin from "../../components/HeaderLogin"
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from '../../api/axios';
const LOGIN_URL = './auth';

const Login = () => {
    //const navigate=useNavigate();
    //const classes=classStyles();
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState();
    const[pwd, setPwd] = useState();
    const[errMsg, setErrMsg] = useState();
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []) 

    useEffect(()=>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, pwd}),
                {
                    headers : {'Content-Type' : 'application/json'},
                    withCredentials : true
                }
                );
                console.log(JSON.stringify(response?.data)); 
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
                setAuth({ user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch(err) {
            if(!err?.response)
            {
                setErrMsg('No Server Response');
            }else if(err.response?.status === 400)
            {
                setErrMsg('Missing Username or Password');
            }else if(err.response?.status === 401)
            {
                setErrMsg('Unauthorized');
            }else setErrMsg('Login Failed');
            errRef.current.focus();
        }
       
    }

    return (
        <>
             {success ? (
                 <section>
                     <h1>Uspesno ste ulogovani</h1>
                 </section>
             ) : (
       <section>
           <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
           <h1>Logovanje</h1> 
           <form onSubmit={handleSubmit}>
               <label htmlFor="korisnicko_ime">Korisničko ime:</label>
               <input 
                    type="text"
                    id="korisnicko_ime"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
               <label htmlFor="lozinka">Lozinka:</label>
               <input 
                    type="password"
                    id="lozinka"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Uloguj se</button>
           </form>
       </section>
             )}
             </>
    )
}
export default Login;