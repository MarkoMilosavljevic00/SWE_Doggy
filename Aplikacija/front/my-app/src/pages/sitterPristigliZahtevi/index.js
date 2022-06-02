import { styles } from './styles';
import React, { useState,useEffect } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
//import HeaderSitter from '../../components/HeaderSitter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NavBar from '../headerVlasnik';
import DeleteIcon from '@mui/icons-material/Delete';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Axios from 'axios';
import axios from '../../api/axios';
import { ButtonGroup, Typography } from '@mui/material';
import AppFooter from '../../components/futer';
import Footer from '../../components/Footer'

const PristigliZahtevi=()=>
{  const[data1,setData]=useState([])
    const[data2,setData2]=useState([])
    const fja=(props)=>{

    Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + props).then(res=>
        {
            console.log(res)
            setData2(res.data)
              
            })
        }
let podaci=[]
    const idSitera=localStorage.getItem('idSitera')
    useEffect(()=>{
   
          Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera='+ idSitera + '&status=0').then(
              res=>
              {
                console.log(res)
                setData(res.data)
              }
          )
          
    },[])
//     useEffect(()=>{
//    {data1.map(x=>(
       
//         Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + {x.pasId} ).then(
//             res=>
//             {
//               console.log(res)
//               setData(res.data)
//             }
//         )
        
//     ))},[])
// useEffect(()=>
//     Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + {pasId}).then(res=>
//     {
//         console.log(res)
          
//         })
// ,[])
let pasId=[];
const [tip_usluge,setTip]=useState('')
const ispitaj_uslugu =(props)=>
{
    if(props===1) setTip('Setnja psa po gradu')
    else if(props===2) setTip('Cuvanje psa u kuci zatrazioca usluge')
    else if(props===3)  setTip('Cuvanje psa u vasoj kuci')
    console.log('1')
    
}
const prihvati_uslugu =(props) =>
{
    Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=1').then(
        res =>
        {
            console.log(res)
            console.log('Uspesno prihvacena usluga sa idejem: ' + props)
        }
    )
}
const odbij_uslugu=(props) =>
{
    Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=2').then(
        res =>
        {
            console.log(res)
            console.log('Odbijena usluga sa idejem: ' + props)
        }
    )
}
    return(
        <div>
<div className="zahtevi">
    {data1.map(x=>
    (   
        <div>
            <h3>{x.id}</h3>
        <h3>Zahtev je poslao:{x.vlasnik.ime} {x.vlasnik.prezime}</h3>
        <h3>Zivi u gradu: {x.vlasnik.grad} na adresi {x.adresaPreuzimanjaPsa}</h3>
        <h3> Tip usluge je {x.vrsta} sa pocetkom {x.pocetak} i zavrsetkom {x.kraj}</h3>
        <h3>Broj telefona zatrazioca usluge je : {x.vlasnik.brojTelefona}</h3>
        <h3>Email zatrazioca usluge je : {x.vlasnik.email}</h3>
        <h3>Napomena koju je zatrazilac usluge poslao : {x.napomena}</h3>
        <h3>Klikni da vidis informacije o psu:</h3>
        <h3>Status usluge:{x.status}</h3>
        {pasId=x.pasId}
<Button color='primary' onClick={()=>{fja(pasId)}}> klik</Button>
<h3>Ime psa je:{data2.ime}</h3>
<h3>Rasa psa je:{data2.rasa}</h3>
<h3>Pol psa je:{data2.pol}</h3>
<h3>Visina psa je:{data2.visina}</h3>
<h3>Tezina psa je:{data2.tezina}</h3>
<h3>Ocena psa je:{data2.prosecnaOcena}</h3>
<h3>Recenzije psa su:</h3>
<Button color='success' onClick={()=>{prihvati_uslugu(x.id)}}>Prihvati uslugu</Button>

<Button color='warning' onClick={()=>{odbij_uslugu(x.id)}}>Odbij uslugu</Button>
{/* <Button color='primary' onClick={fja(x.pasI)} >Klikni me</Button> */}

        </div>
    )
    )}
    </div>
    </div>

    
    

)
}
export default PristigliZahtevi