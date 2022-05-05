import React from "react";
import classStyles from '../styles';
import { Kartica } from "./components/kartica";
import Navbar from "../../components/navbar";
import BottomBar from "../../components/bottombar";
import Spacer from "../../components/spacer";
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox"
import HttpsIcon from '@mui/icons-material/Https';
import Header from "../../Components/header";


const Jaja = () => {
    const classes = classStyles();
    
    const imena = ["Luks", "Aga", "Belja", "Bin"]

    return (
        <div className={classes.container}>

            <Header/>
            {/* <h1 className={classes.naslov}> Stranica home</h1> */}

            {/* <div className={classes.divKartice}  > //style={{display: "flex"}} - moglo je i ovo umesto className, ali izbegavaj inline stilove
                <Kartica ime="Luks"/>
                <Kartica ime="Aga"/>
                <Kartica ime="Belja"/>
                <Kartica ime="Bin"/>
            </div> */}
            {/* <div className={classes.divKartice}>
                {imena.map(imePsa => <Kartica ime={imePsa} key={imePsa}/>)}
            </div> */}
            <div className={classes.divLogIn}>
                <div className={classes.divKorisnickoIme}>
                <label className= {classes.lbl}>Username: </label>
                <input className={classes.inputKorisnickoIme}
                    type="text"
                    required
                />
                </div>
                <div className={classes.divLozinka}>

                <label className= {classes.inputLozinka}> Password:</label>
                <input className={classes.lbl}
                    type="text"
                    required
                />

                <Checkbox
                value="checkedA"
                inputProps={{
                    'aria-label': 'Checkbox A',
                }}
                />

                </div>
                <div className= {classes.divButton}>
                <Button variant="contained">Log in</Button>
                <Button variant="contained">Cancel</Button>

                </div>

            </div>

            {/* <Spacer/>
            <BottomBar/> */}
           
        </div>
    )
}

export default Jaja;