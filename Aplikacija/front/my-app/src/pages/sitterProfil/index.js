import { styles } from './styles';
import React, { useEffect, useState } from 'react';
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
import CardSlika from './card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import axios from '../../api/axios';
import { Typography } from '@mui/material';
import AppFooter from '../../components/futer';
import Footer from '../../components/Footer'
import NavBarSiter from '../headerSiter';
import Card from '@mui/material/Card';
const SitterProfil =()=>
{
// console.log('1')

const id1=localStorage.getItem('idSitera')
const[profil,setProfil]=useState([])
{console.log(profil)}
// const [izmena,setIzmena ] = useState(true)
// const[id,set2]=useState('')
// const[ime,set1]=useState('')
// const[prezime,set3]=useState('')

// const[email,setx]=useState('')
// const[korisnickoIme,sett]=useState('')

// const[sifra,seth]=useState('')

// const[brojTelefona,setj]=useState('')
// const[grad,set23]=useState('')
// const[adresa,set16]=useState('')
// const[cenaPoSatu,set1gt]=useState('')
// const[bio,set1h]=useState('')

let niz=[]
useEffect(()=>
{
    Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + id1).then(
       res=>
       {
           console.log(res)
          setProfil(res.data)
          setData(res.data)
          
       }
    )
},[])

// {console.log(profil.ime)}

const [data,setData]=useState(
   {
      id:0,
      ime:'',
      prezime:'',
      email:'',
      korisnickoIme:'',
      sifra:'',
      brojTelefona:'',
      grad:'',
      adresa:'',
      cenaPoSatu:'',
      bio:''
      
   })
  const cancel =()=>
  {
     const newData={...data}
     setData(newData)
  }
const azuriraj=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   ime:profil.ime,
   prezime:profil.prezime,
   korisnickoIme:profil.korisnickoIme,
   sifra:profil.sifra,
   brojTelefona:profil.brojTelefona,
   grad:profil.grad,
   adresa:profil.adresa,
   cenaPoSatu:profil.cenaPoSatu,
   bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmeniime=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmeniprezime=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
         
      }
      )
   }
   const izmenikorisnickoime=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   korisnickoIme:profil.korisnickoIme,
//    sifra:profil.sifra,
//    brojTelefona:profil.brojTelefona,
//    grad:profil.grad,
//    adresa:profil.adresa,
//    cenaPoSatu:profil.cenaPoSatu,
//    bio:profil.bio
// }
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
         
      }
      )
   }
   const izmeniemail=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
 email:profil.email
   
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmenisifru=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmenibrojtelefona=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmenigrad=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
   const izmeniadresu=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
         
      }
      )
   }
   const izmenicenuposatu=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   cenaPoSatu:profil.cenaPoSatu,
   // bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
         
      }
      )
   }
   const izmenibio=()=>
{  {console.log('2')}
   {console.log(profil)}
   Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:profil.id,
   // ime:profil.ime,
   // prezime:profil.prezime,
   // korisnickoIme:profil.korisnickoIme,
   // sifra:profil.sifra,
   // brojTelefona:profil.brojTelefona,
   // grad:profil.grad,
   // adresa:profil.adresa,
   // cenaPoSatu:profil.cenaPoSatu,
   bio:profil.bio
}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
      }
      )
   }
    const[ch,setCh]=useState(true)
    
      //const navigate = useNavigate();
      const classes = classStyles();
          return(
           <>
         
           <div className={classes.container}>
           <NavBarSiter />
             <div className={classes.glavni}>
    
             {/* <input  type='text' id='opis' disabled={ch} onChange={ (e) => handle(e) } /> */}
             {/* <button onClick = {() => { setCh(!ch) }} > Izmeni podatke </button> */}
             <CardSlika/>
             <Card className={classes.paper} elevation={8} style={{display:'grid',backgroundColor:'khaki',minWidth:'50px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
            <div className='prvomajski'style={{textAlign:'center'}}>
             <h1 className={classes.naslov2}>Opšti podaci</h1>
             </div>
                {/* <Button color='success'  onClick = {() => { setCh(!ch) }   }>Edituj podatke</Button> */}
                {/* <Button color='success'  onClick = {() => { setCh(!ch); }} >Otkazi izmenu</Button> */}
             <div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
               
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <label>Ime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                <input type='text' id='opis' value={profil.ime} onChange={ (e) =>  setProfil((profil)=>({...profil,ime:e.target.value})) }  disabled={ch}></input>
            
             </Grid>
                <Button style={{marginLeft:'100px'}}onClick={()=>{izmeniime();}}startIcon={<EditIcon/>}> Izmeni </Button>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Prezime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.prezime} onChange={ (e) =>  setProfil((profil)=>({...profil,prezime:e.target.value})) }  disabled={ch}></input>
           
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmeniprezime();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.email} onChange={ (e) =>  setProfil((profil)=>({...profil,email:e.target.value})) }  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmeniemail();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Korisničko Ime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.korisnickoIme} onChange={ (e) =>  setProfil((profil)=>({...profil,korisnickoIme:e.target.value})) }  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmenikorisnickoime();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Sifra:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.sifra} onChange={ (e) => setProfil((profil)=>({...profil,sifra:e.target.value}))}  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmenisifru();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Broj telefona:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.brojTelefona} onChange={ (e) =>  setProfil((profil)=>({...profil,brojTelefona:e.target.value})) }  disabled={ch}></input>
            
             </Grid> 
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmenibrojtelefona();}}startIcon={<EditIcon/>}> Izmeni </Button>
             
             
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Grad:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.grad} onChange={ (e) =>  setProfil((profil)=>({...profil,grad:e.target.value}))}  disabled={ch}></input>
           
             </Grid> 
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmenigrad();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Adresa:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.adresa} onChange={ (e) =>  setProfil((profil)=>({...profil,adresa:e.target.value}))}   disabled={ch}></input>
             
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmeniadresu();}}startIcon={<EditIcon/>}> Izmeni </Button>
      
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Cena po satu:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis'  value={profil.cenaPoSatu} onChange={ (e) =>  setProfil((profil)=>({...profil,cenaPoSatu:e.target.value}))}  disabled={ch}></input>
           
             </Grid>
             <Button style={{marginLeft:'100px'}}onClick={()=>{izmenicenuposatu();}}startIcon={<EditIcon/>}> Izmeni </Button>
             </Grid>
             <TextField 
          id="outlined-multiline-static"
         //  label="Biografija"
          multiline
          rows={4}
          value={profil.bio}
          style={{width:'450px',marginTop:'20px'}}
          onChange={ (e) =>  setProfil((profil)=>({...profil,bio:e.target.value})) }
        />

             </div>
              <Button style={{textAlign:'center'}}onClick={()=>{izmenibio();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <div className='izmeniVlasnika' style={{display:'flex',marginTop:'20px',justifyContent:'center'}}>
             
      <Button variant="outlined" startIcon={<EditIcon />} onClick = {() => { setCh(!ch) }} style={{backgroundColor:'rgb(93, 224, 100)',color:'black',borderRadius:'25px',margin:'10px'}}>
  Edituj podatke
</Button>
      {/* <Button variant="outlined" startIcon={< DoneIcon/>} onClick = {() => { ;azuriraj(); }} style={{backgroundColor:'rgb(93, 224, 100)',color:'black',borderRadius:'25px',margin:'10px'}}>
  Potvrdi izmene
</Button> */}
      </div>
             </Card>
             {/* <Paper className={classes.paper} elevation={8}>
             <h4 className={classes.naslov2}>Izmeni pristupne parametre</h4>
             <div>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
             <Grid item xs={6}>
                <label>Novo korisničko ime:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
             <Grid item xs={6}>
                <label>Trenutna šifra:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
             <Grid item xs={6}>
                <label>Nova šifra:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
             </Grid>
                <Grid item xs={6}>
                <label>Novi broj telefona :</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Nova drzava:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Novi grad:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
                <Grid item xs={6}>
                <label>Nova adresa:</label>
             </Grid>
             <Grid item xs={6}>
                <input></input>
                </Grid>
             </Grid>
             </div>                                          
             </Paper> */}
             </div>
              
           </div>
           <div className={classes.divButton}>
          {/* <Button
             style={{ backgroundColor: 'green' }}
             variant="contained"
             color="success"
             >
             Sačuvaj
                </Button>*/}
          </div>

       </>
          );
    }
  

export default  SitterProfil