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
const SitterProfil =(props)=>
{

const[profil,setProfil]=useState([])
{console.log(profil)}
const {user}=props;
const token=localStorage.getItem('token')
let niz=[]
useEffect(()=>
{async function vrati(){
   const TOKEN=localStorage.getItem('token')
   await Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + user.id,
   {
    headers:{ Authorization: `Bearer ${TOKEN}`
}}).then(
       res=>
       {
           console.log(res)
          setProfil(res.data)
          setData(res.data)
          
       }
    )}
    vrati();
},[])

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
const azuriraj=async()=>
{  {console.log('2')}
   {console.log(profil)}
   const TOKEN=localStorage.getItem('token')
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
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
},{
    headers:{ Authorization: `Bearer ${TOKEN}`
}}
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
   const izmeniime=async()=>{
if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.ime==='')
   {
     alert('Polje ime ne sme biti prazno!')
     return
   }
   if(profil.ime.length>20)
   {
      alert('Duzina imena ne sme biti duze od 20 karaktera!')
      return
   }
   const TOKEN=localStorage.getItem('token')
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   ime:profil.ime,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
const izmeniprezime=async()=>{
const TOKEN=localStorage.getItem('token')
if(user.id==='')
   {
      alert('Greska!!!')
   }
if(profil.prezime==='')
          {
            alert('Polje prezime ne sme biti prazno!')
            return
          }
          if(profil.prezime.length>30)
          {
             alert('Duzina prezimena ne sme biti duze od 30 karaktera!')
             return
          }
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   prezime:profil.prezime,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmenikorisnickoime=async()=>
{  
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.korisnickoIme==='')
   {
     alert('Polje korisnicko ime ne sme biti prazno!!!')
     return
   }
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   korisnickoIme:profil.korisnickoIme,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`
}}
   ).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
         window.location.reload(false)
         
      }
      ).catch((error)=>
      {
         if(error.response.status)
         {
            alert(error.response.data)
         }
      })
   }
//    const izmeniemail=()=>
// {  
//    const TOKEN=localStorage.getItem('token')
//    // {console.log('2')}
//    // {console.log(profil)}
//    if(user.id==='')
//    {
//       alert('Greska!!!')
//    }
//    if(profil.email==='')
//    {
//      alert('Polje email ne sme biti prazno!!!')
//      return
//    }
//    Axios.put('https://localhost:5001/Siter/azurirajSitera',
// {
//    id:user.id,
//  email:profil.email
   
// },
// {
//     headers:{ Authorization: `Bearer ${TOKEN}`}
// }
//    ).then(
//       res=>
//       {
//          console.log(res.data)
//          setProfil(res.data)
//          setData(res.data)
//          window.location.reload(false)
       
//       }
//       ).catch((error)=>
//       {
//         if(error.response.status)
//         {
//          alert(error.response.data)
//         }
//       })
//    }
   const izmenisifru=async()=>
{ 
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.sifra==='')
   {
     alert('Polje sifra ne sme biti prazno!!!')
     return
   }
   if(profil.sifra.length>=20)
   {
     alert('Polje sifra ne sme imati vise od 20 karaktera!!!')
     return
   }
  await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   sifra:profil.sifra,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmenibrojtelefona=async()=>
   {  
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.brojTelefona==='')
   {
     alert('Polje broj telefona ne sme biti prazno!!!')
     return
   }
  await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   brojTelefona:profil.brojTelefona,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmenigrad=async()=>
{ 
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.grad==='')
   {
     alert('Polje grad ne sme biti prazno!!!')
     return
   }
  await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   grad:profil.grad,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmeniadresu=async()=>
{  
   // {console.log('2')}
   // {console.log(profil)}
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
   }
   if(profil.adresa==='')
   {
     alert('Polje adresa ne sme biti prazno!!!')
     return
   }
  await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   adresa:profil.adresa,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmenicenuposatu=async()=>{
const TOKEN=localStorage.getItem('token')
if(user.id==='')
   {
      alert('Greska!!!')
      return
   }
if(profil.cenaPoSatu<=0)
{
   alert('Molimo Vas unesite validan broj veci od nule!!!')
   return
}
if(profil.cenaPoSatu==='')
{
   alert('Polje cena po satu ne sme biti prazno!!!')
   return
}
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   cenaPoSatu:profil.cenaPoSatu,
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
   const izmenibio=async()=>
   { 
   const TOKEN=localStorage.getItem('token')
   if(user.id==='')
   {
      alert('Greska!!!')
      return
   }
   if(profil.bio==='')
   {
      alert('Polje biografija ne sme biti prazno!!!')
      return
   }
   await Axios.put('https://localhost:5001/Siter/azurirajSitera',
{
   id:user.id,
   bio:profil.bio
},
{
    headers:{ Authorization: `Bearer ${TOKEN}`}
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
  const HandleCh=()=>
   {
      const TOKEN=localStorage.getItem('token')
      if(token!=TOKEN || !TOKEN)
      {
         window.location.reload(false)

         return
      }
      setCh(!ch)

   }
      const classes = classStyles();
          return(
           <>
           <div className={classes.container}>
           <NavBarSiter />
             <div className={classes.glavni}>
             <CardSlika korisnik={user}/>
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
                <Button style={{marginLeft:'110px'}}onClick={()=>{izmeniime();}}startIcon={<EditIcon/>}> Izmeni </Button>
                <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Prezime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.prezime} onChange={ (e) =>  setProfil((profil)=>({...profil,prezime:e.target.value})) }  disabled={ch}></input>
           
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmeniprezime();}}startIcon={<EditIcon/>}> Izmeni </Button>
             {/* <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.email} onChange={ (e) =>  setProfil((profil)=>({...profil,email:e.target.value})) }  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmeniemail();}}startIcon={<EditIcon/>}> Izmeni </Button> */}
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Korisničko Ime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.korisnickoIme} onChange={ (e) =>  setProfil((profil)=>({...profil,korisnickoIme:e.target.value})) }  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmenikorisnickoime();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Sifra:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='password' id='opis'  onChange={ (e) => setProfil((profil)=>({...profil,sifra:e.target.value}))}  disabled={ch}></input>
            
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmenisifru();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Broj telefona:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.brojTelefona} onChange={ (e) =>  setProfil((profil)=>({...profil,brojTelefona:e.target.value})) }  disabled={ch}></input>
            
             </Grid> 
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmenibrojtelefona();}}startIcon={<EditIcon/>}> Izmeni </Button>
             
             
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Grad:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.grad} onChange={ (e) =>  setProfil((profil)=>({...profil,grad:e.target.value}))}  disabled={ch}></input>
           
             </Grid> 
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmenigrad();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Adresa:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.adresa} onChange={ (e) =>  setProfil((profil)=>({...profil,adresa:e.target.value}))}   disabled={ch}></input>
             
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmeniadresu();}}startIcon={<EditIcon/>}> Izmeni </Button>
      
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label>Cena po satu:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='number' id='opis'  value={profil.cenaPoSatu} onChange={ (e) =>  setProfil((profil)=>({...profil,cenaPoSatu:e.target.value}))}  disabled={ch}></input>
           
             </Grid>
             <Button style={{marginLeft:'110px'}}onClick={()=>{izmenicenuposatu();}}startIcon={<EditIcon/>}> Izmeni </Button>
             </Grid>
             <TextField 
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={profil.bio}
          style={{display:'flex',marginTop:'20px'}}
          onChange={ (e) =>  setProfil((profil)=>({...profil,bio:e.target.value})) }
        />
             </div>
              <Button style={{textAlign:'center'}}onClick={()=>{izmenibio();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <div className='izmeniVlasnika' style={{display:'flex',marginTop:'20px',justifyContent:'center'}}>
      <Button variant="outlined" startIcon={<EditIcon />} onClick = {() => { HandleCh(); }} style={{backgroundColor:'rgb(93, 224, 100)',color:'black',borderRadius:'25px',margin:'10px'}}>
  Edituj podatke
    </Button>
  </div>
</Card>
 </div>
  </div>
 <div className={classes.divButton}>
</div>
       </>
          );
    }
  

export default  SitterProfil