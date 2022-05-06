import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox"
import { useNavigate } from "react-router-dom";
import classStyles from './styles';

const Login = () => {
    const navigate=useNavigate();
    const classes = classStyles();


    return (
            <div>
                <button className={classes.dugme}>TEST</button>
                <div>
                <label >Korisničko ime: </label>
                <input
                    type="text"
                    required
                />
                </div>
                <div >

                <label > Lozinka:</label>
                <input 
                    type="password"
                
                    required
                />

                <Checkbox
                value="checkedA"
                inputProps={{
                    'aria-label': 'Checkbox A',
                }}
                />

                </div>
                <div >
                <Button variant="contained" onClick={()=>navigate('../')}>Log in</Button>
                <Button variant="contained"  onClick={()=>navigate('../')}>Cancel</Button>
                <p>Ukoliko nemate nalog, molimo Vas registrujte se</p>
                <Button onClick={()=>navigate('/RegisterRoute')}>Registruj se</Button>

                </div>

            </div>

                
    )
}

export default Login