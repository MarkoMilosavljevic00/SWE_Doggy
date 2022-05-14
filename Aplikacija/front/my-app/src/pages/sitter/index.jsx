import React from "react";
import classStyles from "./styles";
import Component from "./kartice/index.jsx"
import Search from "./search/index.jsx"
import Ocene from "../sitter/ocene/index.jsx"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin"





const Sitter= () => {

  const navigate=useNavigate();
  const classes= classStyles();
  const users = [
    {
      ime: "Milan Mikic",
      opis: "Ja se zovem Milan",
    },
    {
      ime: "Pera Peric",
      opis: "Ja se zovem Pera"
    },
    {
      ime: "Zika Zikic",
      opis: "Ja se zovem Zika",
    },
    {
      ime: "Stefan Stefanovic",
      opis: "Ja se zovem Stefan"
    }
  ]

  return (

    <div className={classes.container}>
              <HeaderLogin/>

            <div className={classes.divSearch}>

                 < Search/>
                <Button style= {{ backgroundColor: 'green'}}variant="contained" color="success" onClick={()=>navigate('../')}  >
                      Nazad
                </Button>
            </div>
            <div className={classes.miniContainer}>
              {users.map((user, index) => <Component ime={user.ime} opis={user.opis} key={index } />)}  
            </div>
           
    </div>
  )
}

export default Sitter;