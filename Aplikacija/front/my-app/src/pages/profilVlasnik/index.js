

import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
//import HeaderSitter from '../../components/HeaderSitter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../headerVlasnik';
import DeleteIcon from '@mui/icons-material/Delete';
import CardSlika from './card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Axios from 'axios';
import TextField from '../../components/TextField';
import { ButtonGroup } from '@mui/material';
import axios from '../../api/axios';
import { Typography } from '@mui/material';
import AppFooter from '../../components/futer';
import Footer from '../../components/Footer'
import { Refresh } from '@mui/icons-material';
const ProfilVlasnik =()=>{
console.log(1)

    const[ch,setCh]=useState(true)
    const vlasnikId=localStorage.getItem('idVlasnika')
      //const navigate = useNavigate();
      const classes = classStyles();
      const[usluga0,setUsluga0]=useState([])
      const[usluga1,setUsluga1]=useState([])
      const[usluga2,setUsluga2]=useState([])
      const[uslugaX,setUslugaX]=useState([])
      const[sve_usluge,setSveUsluge]=useState([])
  // useEffect(()=>
  // {
  //   Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasniku?idVlasnika=' + idVlasnika).then(
  //     res=>
  //     {
  //       console.log(res.data)
  //       setSveUsluge(res.data)
  //     }
  //   )
  // },[])



const [prihvaceni,setPrihvaceni]=useState([])
const [neprihvaceni,setNeprihvaceni]=useState([])
const [pending,setPending]=useState([])
const[gotovi,setGotovi]=useState([])

const [otvoriPrihvaceni,setP]=useState(false)
const [otvoriNeprihvaceni,setN]=useState(false)
const [otvoriPending,setOp]=useState(false)
const [otvoriGotovi,setG]=useState(false)


const handlePrihvaceni=()=>
{
     setP(!otvoriPrihvaceni)
}
const handleNeprihvaceni=()=>
{
   setN(!otvoriNeprihvaceni)
}
const handlePending=()=>
{
  setOp(!otvoriPending)
}
const handleGotovi=()=>
{
  setG(!otvoriGotovi)
}
let pasId=[]
const prihvaceni_zahtevi=()=>
{
        Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusu?idVlasnika=' + vlasnikId + '&status=1').then(
            res=>

            {
                console.log(res)
                setPrihvaceni(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        )
}
const odbijeni_zahtevi=()=>
{
  Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusu?idVlasnika=' + vlasnikId + '&status=2').then(
            res=>

            {
                console.log(res)
                setNeprihvaceni(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        )
}
const pending_zahtevi=()=>
{
  Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusu?idVlasnika=' + vlasnikId + '&status=0').then(
            res=>

            {
                console.log(res)
                setPending(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        )
}
const gotovi_zahtevi=async()=>
{
 await  Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusu?idVlasnika=' + vlasnikId + '&status=3').then(
            res=>

            {
                console.log(res)
                setGotovi(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        )
}
const buttons = [
  <Button style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}key="one" onClick={()=>{prihvaceni_zahtevi();handlePrihvaceni();}}>Prihvaceni</Button>,
  <Button key="two"onClick={()=>{odbijeni_zahtevi();handleNeprihvaceni();}}>Odbijeni</Button>,
  <Button key="three" onClick={()=>{pending_zahtevi();handlePending();}}>Na cekanju</Button>,
  <Button style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}}key="four"onClick={()=>{gotovi_zahtevi();handleGotovi();}}>Gotovi</Button>,
];
  const [ker,setKer]=useState('')
const vrati_psa=(props)=>
{
    Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas='+ props).then(
        res=>
        {
            console.log(res.data)
            setKer(res.data.ime)
        }
    )
}
const [komentar,setKomentar]=useState('');
const [ocena,setOcena]=useState('');

const oceni =(siterId,pasId,komentar,ocena)=>
{ console.log(siterId,pasId,komentar,ocena)
  //RADI
  Axios.post('https://localhost:5001/Recenzija/dodajRecenzijuSiteru',
  {
     vlasnikId,
     siterId,
     pasId,
     komentar,
     ocena
  }).then(res=>{
       console.log(res.data)
       console.log('Uspesno poslat komentar')
       alert('uspeh')
     })
}
// useEffect(()=>{
//   console.log(pasId+'ovo je id osa')
// Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas='+ pasId).then(
//         res=>
//         {
//             console.log(res.data + 'ovo je id psa ')
//             setKer(res.data.ime)
//         })
//       },[]);
const [profil,setProfil]=useState([])
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
      
      
   })
   const izmeni=()=>
   {
      Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
      {
        id:profil.id,
        ime:profil.ime,
        prezime:profil.prezime,
        email:profil.email,
        korisnickoIme:profil.korisnickoIme,
        sifra:profil.sifra,
        brojTelefona:profil.brojTelefona,
        grad:profil.grad,
        adresa:profil.adresa,
   
      }).then(res=>
        {
           console.log(res + 'zasto')
           setProfil(res.data)
           setData(res.data)
          })
        }
        const[refresh,setRefresh]=useState(false)
useEffect(()=>
{
   Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + vlasnikId).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
      }
   )
},[])
const[stanje,setStanje]=useState(-1)
const[skrij,setSkrij]=useState(false)
const handleklik=()=>
{
  setSkrij(!skrij)
}
const brisi_uslugu=(props)=>
{ console.log('miloca' + props)
  Axios.delete('https://localhost:5001/Usluga/obrisiUslugu?idUsluge=' + props).then(
    res=>
    { 
      console.log(res.data + 'AHAHHAAH BRISANO')
     }
  )
}
const handleRefresh=()=>
{
  setRefresh(!refresh);
}
      return(
           <>
           
           <div className={classes.container}>
           <NavBar />
             <div className={classes.glavni}>
  
             <CardSlika/>
            
            
             <Paper elevation={8} style={{display:'grid',backgroundColor:'mediumspringgreen',minWidth:'50px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
            <div className='jedan'> 
     <div className='glavno_dugme'>
     </div>

            
            <div className='dugmici'  style={{display:'grid',justifyContent:'center'}}>
           
            
          </div>
          <div className='obavestenje'>
            <Typography variant='h6'style={{textAlign:'center'}}>Obavestenja o uslugama</Typography>
            <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
    
    <ButtonGroup size="medium" aria-label="large button group" >
        {buttons}
      </ButtonGroup>
    </Box>
              <div className='odgovor' style={{display:'grid'}}   >
{prihvaceni && prihvaceni.map(x=>
    (     <div className='prihvaceni' hidden={otvoriPrihvaceni}style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'200px'}}>
     <h6 hidden={true}>{pasId=x.pasId}</h6>
     <Typography paragraph  onClick={()=>vrati_psa(pasId)}>Vasa usluga je uspesno prihvacena!!!</Typography>
        <Typography paragraph  onClick={()=>vrati_psa(pasId)}>Sitter:{x.siter.ime} {x.siter.prezime} je prihvatio vas zahtev za kera {ker}. </Typography>
        <Typography paragraph>Ocekujte sitera u {x.pocetak}!!!</Typography>
     <Typography paragraph  onClick={()=>vrati_psa(pasId)}>Uzivajte!!!</Typography>
</div>
      ))}
{neprihvaceni && neprihvaceni.map(l=>
  (   <div className='neprihvaceni' hidden={otvoriNeprihvaceni}style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'100px'}}>
      <h6 hidden={true}>{pasId=l.pasId}</h6>
      <Typography paragraph onClick={()=>vrati_psa(pasId)}> Vasa usluga za psa {ker} je nazalost odbijena.</Typography>
      <Typography paragraph onClick={()=>vrati_psa(pasId)}>Sitter:{l.siter.ime} {l.siter.prezime} je odbio uslugu. </Typography>
      
</div>
  ))

}
{pending && pending.map(k=>
(  <div className='pending' hidden={otvoriPending} style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'100px'}}>
      <h6 hidden={true}>{pasId=k.pasId}</h6>
      <Typography paragraph onClick={()=>vrati_psa(pasId)}> Vasa usluga za psa {ker}, sa pocetkom u {k.pocetak} jos nije otvorena!</Typography>
      <Typography paragraph onClick={()=>vrati_psa(pasId)}>Sitter:{k.siter.ime} {k.siter.prezime} tek treba da vidi Vas zahtev!</Typography>


</div>
  ))

}
{gotovi && gotovi.map((g,index)=>
(  <div key={g.id} className='gotovi' hidden={otvoriGotovi} style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'500px'}}>
      <h6 hidden={true}>{pasId=g.pasId} {}  {}</h6>
      <Typography paragraph onClick={()=>{setGotovi(index);vrati_psa(pasId);}}> Vasa usluga za psa {ker}, je uspesno zavrsena!</Typography>
      <Typography paragraph onClick={()=>vrati_psa(pasId)}>Molimo Vas ocenite sitera:{g.siter.ime} {g.siter.prezime}</Typography>
     <div className='sakrij' hidden={skrij}>
      <TextField
     
          required
          id="outlined-required"
          label="Komentari"
          multiline
          value={stanje===index ? komentar: ' '}
          defaultValue="Hello World"
          onClick={(e)=>{setKomentar('');setOcena(0);setStanje(index);}}
          onChange={ (e) => { setKomentar(e.target.value)}}
          
        />
         <TextField
         
          id="outlined-number"
          label="Ocena"
          type="number"
          value={stanje===index ? ocena: 0}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 0, max: 5} }}
          onClick={(e)=>{setOcena(0);setStanje(index);}}
          //u on click stanje
          onChange={ (e) =>  { setOcena(e.target.value)}}
           
          
        />
  <Button color='primary' onClick={()=>{oceni(g.siterId,g.pasId,komentar,ocena);brisi_uslugu(g.id);handleRefresh();gotovi_zahtevi();}}>Posalji ocenu siteru</Button>
  {/* <Button color='success' onClick={obrisi_uslugu}></Button> */}
  {console.log(g.id + 'mjauuu')}
  </div>
</div>
  ))
  
}

</div>
                  </div>
                
             </div>
  
             </Paper>



             <Paper className={classes.paper} elevation={8} style={{backgroundColor:'mediumspringgreen',display:'grid',minWidth:'500px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
             <h4 className={classes.naslov2}>Opšti podaci</h4>
             <div>
             <Button color='success'  onClick = {() => { setCh(!ch) }   }>Edituj podatke</Button>
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
             <Grid item xs={6}>
                <label>Ime:</label>
             </Grid>
             <Grid item xs={6}>
                <input type='text' id='opis' style={{display:'flex'}} value={profil.ime} onChange={ (e) =>  setProfil((profil)=>({...profil,ime:e.target.value})) }disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Prezime:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis'style={{display:'flex'}} value={profil.prezime} onChange={ (e) =>  setProfil((profil)=>({...profil,prezime:e.target.value})) }  disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Email:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis' style={{display:'flex'}}value={profil.email} onChange={ (e) =>  setProfil((profil)=>({...profil,email:e.target.value})) } disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Korisničko Ime:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis'style={{display:'flex'}}  value={profil.korisnickoIme} onChange={ (e) =>  setProfil((profil)=>({...profil,korisnickoIme:e.target.value})) }disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Sifra:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis'style={{display:'flex'}}  value={profil.sifra} onChange={ (e) =>  setProfil((profil)=>({...profil,sifra:e.target.value})) }disabled={ch}></input>
             </Grid>
             <Grid item xs={6}>
                   <label>Broj telefona:</label>
             </Grid>
             <Grid item xs={6}>
             <input type='text' id='opis'style={{display:'flex'}} value={profil.brojTelefona} onChange={ (e) =>  setProfil((profil)=>({...profil,brojTelefona:e.target.value})) } disabled={ch}></input>
             </Grid> 
            
            
             <Grid item xs={6}>
                   <label>Grad:</label>
            </Grid>
            <Grid item xs={6}>
             <input type='text' id='opis' style={{display:'flex'}}value={profil.grad} onChange={ (e) =>  setProfil((profil)=>({...profil,grad:e.target.value})) } disabled={ch}></input>
             </Grid> 
             <Grid item xs={6}>
                   <label>Adresa:</label>
            </Grid>
            <Grid item xs={6}>
             <input type='text' id='opis' style={{display:'flex'}}value={profil.adresa} onChange={ (e) =>  setProfil((profil)=>({...profil,adresa:e.target.value})) } disabled={ch}></input>
             </Grid>
         </Grid>
             </div>
             <div className='izmeniVlasnika' style={{display:'flex',marginTop:'20px',alignSelf:'flex-start'}}>
             <Fab color="secondary" aria-label="edit" onClick = {() => { setCh(!ch);izmeni(); }} style={{backgroundColor:'cornsilk',color:'black'}}>
        <EditIcon />
      </Fab>
      <Typography gutterTop style={{fontSize:'large',alignSelf:'center'}}>Izmeni podatke</Typography>
      <Button variant="outlined" startIcon={<DeleteIcon />} style={{backgroundColor:'cornsilk',color:'black',borderRadius:'25px',marginLeft:'65px'}}>
  Obrisi svoj profil
</Button>
      </div>
             </Paper>
           
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
<Footer />
       </>
          );
    }
  


export default ProfilVlasnik