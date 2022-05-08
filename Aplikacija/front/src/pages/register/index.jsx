import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox"
import classStyles from './styles';

import HeaderLogin from "../../components/HeaderLogin"

const Registracija = () => {
    const navigate=useNavigate();
    const classes = classStyles();

  return (
   
    <div className={classes.container}>
    <HeaderLogin />
    <div className={classes.divRegister}>
        <div className={classes.divInput}>
            <label className="form__label" for="firstName">Ime: </label>
            <input className="form__input" type="text" id="firstName" placeholder="Ime"/>
        </div>
        <div className={classes.divInput}>
            <label className="form__label" for="lastName">Prezime: </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="Prezime"/>
        </div>
        <div className={classes.divInput}>
            <label className="form__label" for="email">Email: </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className={classes.divInput}>
            <label className="form__label" for="password">Lozinka: </label>
            <input className="form__input" type="password" required id="password" placeholder="Lozinka"/>
        </div>
        <div className={classes.divInput}>
            <label className="form__label" for="confirmPassword">Potvrdite lozinku: </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Potvrdite lozinku"/>
            <Checkbox
                value="checkedA"
                inputProps={{
                    'aria-label': 'Checkbox A',
                }}
                />
        </div> 
        <div className={classes.divButton}>
        <Button style={{backgroundColor: "#00FA9A"}} variant="contained"  onClick={()=>navigate('../')}>Cancel</Button>
        <Button style={{backgroundColor: "#00FA9A"}} variant="contained" onClick={()=>navigate('../')}>Registruj se</Button>
        </div>
    </div>
   
</div>      

  )
}

export default Registracija