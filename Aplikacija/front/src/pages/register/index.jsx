import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox"
import classStyles from './styles';

const Registracija = () => {
    const navigate=useNavigate();
    const classes = classStyles();

  return (
   
    <div className="form">
    <div className="form-body">
        <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
        </div>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password" required id="password" placeholder="Password"/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            <Checkbox
                value="checkedA"
                inputProps={{
                    'aria-label': 'Checkbox A',
                }}
                />
        </div>
    </div>
    <div class="footer">
    <Button variant="contained"  onClick={()=>navigate('../')}>Cancel</Button>
        <button type="submit" class="btn" onClick={()=>navigate('../')}>Register</button>
    </div>
</div>      

  )
}

export default Registracija