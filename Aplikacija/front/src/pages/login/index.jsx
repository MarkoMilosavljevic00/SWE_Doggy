import React from "react";
import classStyles from './styles';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox"
import HeaderLogin from "../../components/HeaderLogin"

const Login = () => {
    const navigate=useNavigate();
    const classes=classStyles();
    
    return (
        <div className={classes.container}>
            <HeaderLogin />
            <div className={classes.glavni}>
            <div className={classes.divLogIn}>
                <div className={classes.labela}>
                    <label className= {classes.lbl}>Korisničko ime: </label>
                    <label className= {classes.lbl}>Lozinka: </label>
                </div>

                <div className={classes.divInput}>
                <input className={classes.inputKorisnickoIme} placeholder="Korisničko ime" type="text" required/>
                <input className={classes.inputLozinka} placeholder="Lozinka" type="text" required/>
                <Checkbox
                    value="checkedA"
                    inputProps={{
                        'aria-label': 'Checkbox A',
                    }}
                    /> 
                </div> 
            
            </div>
            {/* <div className={classes.divLogIn}>
                <div className={classes.divKorisnickoIme}>
                <label className= {classes.lbl}>Korisničko ime: </label>
                <input className={classes.inputKorisnickoIme} placeholder="Korisničko ime" type="text" required/>
                </div>

                <div className={classes.divLozinka}>
                <label className= {classes.lbl}>Lozinka: </label>
                    <input className={classes.inputLozinka} placeholder="Lozinka" type="text" required/> 

                <Checkbox
                value="checkedA"
                inputProps={{
                    'aria-label': 'Checkbox A',
                }}
                />
                
                

            </div> */}
            <div className= {classes.divButton}>
            <Button style={{backgroundColor: "#00FA9A"}} variant="contained">Log in</Button>
            <Button style={{backgroundColor: "#00FA9A"}} variant="contained">Cancel</Button>

            </div>
            </div>  
          
            
        </div>
    )
}

export default Login;