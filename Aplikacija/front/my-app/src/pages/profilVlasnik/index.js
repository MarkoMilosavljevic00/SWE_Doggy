
import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NavBar from '../headerVlasnik';
import PetsIcon from '@mui/icons-material/Pets';
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
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import Footer from '../../components/Footer'
import { Refresh } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import Card from '@mui/material/Card';
const ProfilVlasnik =(props)=>{

const {loged}=props;
const [logovan,setLogovan]=useState('')
const[handle,setHandle1]=useState('')
const[tokencic,setToken]=useState('false')

const token=localStorage.getItem('token')


  // useEffect(()=>
  // {
  //   async function fetchData(){
  //   const TOKEN=localStorage.getItem('token')
  //   await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
  //   {
  //     headers:{ Authorization: `Bearer ${TOKEN}`
  // }}).then(res=>
  //   {
  //      setLogovan(res.data)
  //      console.log(res.data.id)
  //      setHandle1(!handle)
  //     //  window.location.reload(false)
  //     //  setToken(!tokencic)
  //   }).catch(err=>
  //     {
  //       // window.location.reload(false)
  //     })}
  //     fetchData();
  // },[])
  
  // useEffect(()=>
  // {
  //   const TOKEN=localStorage.getItem('token')
  //   Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
  //   {
  //     headers:{ Authorization: `Bearer ${TOKEN}`
  // }}).then(res=>
  //   {
  //      setLogovan(res.data)
  //      console.log(res.data.id)
       
  //   }).catch(err=>
  //     {
  //       return <Navigate to={'/'}/>
  //     })
  // },[tokencic])
    const[ch,setCh]=useState(true)
    const handleCh=()=>
    {
      const TOKEN=localStorage.getItem('token')
      if(token!=TOKEN || !TOKEN)
      {
        window.location.reload(false)
        return
      }
      setCh(!ch)
    }
    // const vlasnikId=localStorage.getItem('idVlasnika')
      const classes = classStyles();
      const[usluga0,setUsluga0]=useState([])
      const[usluga1,setUsluga1]=useState([])
      const[usluga2,setUsluga2]=useState([])
      const[uslugaX,setUslugaX]=useState([])
      const[sve_usluge,setSveUsluge]=useState([])



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
const prihvaceni_zahtevi=async()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
       await Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusuSaPsom?idVlasnika='  + loged.id + '&status=1',
        {
          headers:{ Authorization: `Bearer ${TOKEN}`}
        }).then(
            res=>
            {
              res.data.forEach(x=>
                {
                  console.log(x.pas.ime)
                })
              const provera= res.data + 'nista'
                if(provera==='nista')
            {
                  alert('Trenutno nema prihvacenih zahteva.Budite strpljivi!')
            }
                setPrihvaceni(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        ).catch(err=>
          {
            if(err.response.status)
            {
              alert(err.response.data)
            }
            window.location.reload(false)
          }
          )
}
const odbijeni_zahtevi=async()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
  await Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusuSaPsom?idVlasnika=' + loged.id + '&status=2',
  {
    headers:{ Authorization: `Bearer ${TOKEN}`}
  }).then(
            res=>
            {
              res.data.forEach(x=>
                {
                  console.log(x.pas.ime)
                })
              const provera= res.data + 'nista'
                if(provera==='nista')
            {
                  alert('Trenutno nema Vasih zahteva koje je sitter odbio.')
            }
                setNeprihvaceni(res.data)
                // if(res.data.id==null)
                // {
                //   alert('Ne postoji nijedan takav zahtev')
                // }
            }
        ).catch(err=>
          {
            if(err.response.status)
            {
              alert(err.response.data)
            }
          }
          )
}

const date = new Date();
date.setHours(0)
{console.log(
  date.toLocaleDateString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
);}

const pending_zahtevi=async()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
  await Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusuSaPsom?idVlasnika=' + loged.id + '&status=0',
   { headers:{ Authorization: `Bearer ${TOKEN}`
  }}).then(
            res=>
            {
              res.data.forEach(x=>
                {
                  console.log(x.pas.ime)
                })
                
                const provera= res.data + 'nista'
                  if(provera==='nista')
              {
                    alert('Siter jos uvek nije ocenio Vaseg psa.Molimo Vas budite strpljivi, cim oceni Vaseg psa bicete u mogucnosti da ocenite sitera.')
              }
              setPending(res.data)
            }
        )
}

const gotovi_zahtevi=async()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
 await Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasnikuPoStatusuSaPsom?idVlasnika=' + loged.id +'&status=3',
  {
  headers:{ Authorization: `Bearer ${TOKEN}`
}}).then(
            res=>
            { 
              // console.log(res.data.status + 'a')
             res.data.forEach(x=>
              {
                console.log(x.pas.ime)
              })
              
              const provera= res.data + 'nista'
                if(provera==='nista')
            {
                  alert('Siter jos uvek nije ocenio Vaseg psa.Molimo Vas budite strpljivi, cim oceni Vaseg psa bicete u mogucnosti da ocenite sitera.')
            }
                setGotovi(res.data)            
            }
        ).catch((error)=>
        {
          if(error.response.status)
          alert(error.response.data)
        })
}
const buttons = [
  <Button style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}key="one" onClick={()=>{prihvaceni_zahtevi();handlePrihvaceni();}}>Prihvaceni</Button>,
  <Button key="two"onClick={()=>{odbijeni_zahtevi();handleNeprihvaceni();}}>Odbijeni</Button>,
  <Button key="three" onClick={()=>{pending_zahtevi();handlePending();}}>Na cekanju</Button>,
  <Button style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}}key="four"onClick={()=>{gotovi_zahtevi();handleGotovi();}}>Gotovi</Button>,
];

const [komentar,setKomentar]=useState('');
const [ocena,setOcena]=useState('');

const oceni =async(id,siterId,pasId,komentar,ocena)=>
{ console.log(siterId,pasId,komentar,ocena)
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
  //RADI
  if(komentar==='' || ocena <=0 || ocena >5 || ocena ==='' )
  {
    alert('Molimo Vas lepo popunite formu')
    return
  }
  let vlasnikAJDI=loged.id
  await Axios.post('https://localhost:5001/Recenzija/dodajRecenzijuSiteru',
  {
    vlasnikAJDI,
     siterId,
     pasId,
     komentar,
     ocena
  },
  {
    headers:{Authorization:`Bearer ${TOKEN}`}
  }).then(res=>{
       console.log(res.data)
       console.log('Uspesno poslat komentar')
       alert('Uspesno ste podelili Vase misljenje o izvrsenoj usluzi i ocenili sitter-a!')
       brisi_uslugu(id)
       window.location.reload(false)
     }).catch((error)=>
     {
      if(error.response.status)
      {
        alert(error.response.data)
      }
      else
      {
        alert('Greska!')
      }
     })
}

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
  const izmeni_ime=async()=>
   {
     const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    if(loged.id==='')
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
     await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
      {
        id:loged.id,
        ime:profil.ime 
      },
      {
        headers:{ Authorization: `Bearer ${TOKEN}`}
      }).then(res=>
        {
           console.log(res + 'zasto')
           setProfil(res.data)
           setData(res.data)
           window.location.reload(false)
          })
        }
        const izmeni_prezime=async()=>
        {
          const TOKEN=localStorage.getItem('token')
          if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
          if(loged.id==='')
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
          await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
           {
             id:loged.id,
            
             prezime:profil.prezime
        
           },{
            headers:{ Authorization: `Bearer ${TOKEN}`}
          }).then(res=>
             {
                console.log(res + 'zasto')
                setProfil(res.data)
                setData(res.data)
                window.location.reload(false)
               })
             }
  //            const izmeni_email=()=>
  //            { const TOKEN=localStorage.getItem('token')
  //            if(token!=TOKEN || !TOKEN)
  //   {
  //     window.location.reload(false)
  //     return
  //   }
  //             if(loged.id==='')
  //  {
  //     alert('Greska!!!')
  //  }
  //             if(profil.email==='')
  //             {
  //               alert('Polje email ne sme biti prazno!!!')
  //               return
  //             }
  //               Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
  //               {
  //                 id:loged.id,
                 
  //                 email:profil.email
                
             
  //               },{
  //                 headers:{ Authorization: `Bearer ${TOKEN}`}
  //               }).then(res=>
  //                 {
  //                    console.log(res + 'zasto')
  //                    setProfil(res.data)
  //                    setData(res.data)
  //                    window.location.reload(false)
                    
  //                   }).catch((error)=>
  //                   {
  //                     if(error.response.status)
  //                     {
  //                       alert(error.response.data)
  //                     }
  //                   })
  //                 }
                  const izmeni_korisnicko_ime=async()=>
                  { const TOKEN=localStorage.getItem('token')
                  if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
                    if(loged.id==='')
   {
      alert('Greska!!!')
   }
                    if(profil.korisnickoIme==='')
              { const TOKEN=localStorage.getItem('token')
                alert('Polje korisnicko ime ne sme biti prazno!!!')
                return
              }
                   await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
                     {
                       id:loged.id,                    
                       korisnickoIme:profil.korisnickoIme,
                     },{
                      headers:{ Authorization: `Bearer ${TOKEN}`}
                    }).then(res=>
                       {
                          console.log(res + 'zasto')
                          setProfil(res.data)
                          setData(res.data)
                          window.location.reload(false)
                         }).catch((error)=>
                         {
                           if(error.response.status)
                           {
                             alert(error.response.data)
                           }
                         })
                       }
                       const [pwd, setPwd] = useState('');
                       const validatePwd = pass => {
                        return pass.match(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                        );
                      };
                       const handleSifra=()=>
                       {
                        if (!validatePwd(pwd)) {
                          alert(
                            'Niste uneli validnu sifru. Sifra mora da sadrzi: 1 malo slovo, 1 veliko slovo, 1 broj i mora da bude najmanje duzine 8'
                          );
                          return;
                        }
                       }
                       const izmeni_sifru=async()=>
                       {
                        const TOKEN=localStorage.getItem('token')
                        if(loged.id==='')
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
              // if (!validatePwd(pwd)) {
              //   alert(
              //     'Niste uneli validnu sifru. Sifra mora da sadrzi: 1 malo slovo, 1 veliko slovo, 1 broj i mora da bude najmanje duzine 8'
              //   );
              //   return;
              // }
          
                          await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
                          {
                            id:loged.id,                         
                            sifra:profil.sifra                            
                       
                          }, { headers:{ Authorization: `Bearer ${TOKEN}`}
                        }).then(res=>
                            {
                               console.log(res + 'zasto')
                               setProfil(res.data)
                               setData(res.data)
                               alert('Uspesno ste izmenili sifru!')
                               window.location.reload(false)
                              })
                            }
                            const izmeni_broj_telefona=async()=>
                            { const TOKEN=localStorage.getItem('token')
                            if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
                              if(loged.id==='')
                              {
                               alert('Greska!!!')
                               }
                              if(profil.brojTelefona==='')
              {
                alert('Polje broj telefona ne sme biti prazno!!!')
                return
              }           
                              await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
                               {
                                 id:loged.id,                            
                                 brojTelefona:profil.brojTelefona,                                                           
                               },{
                                headers:{ Authorization: `Bearer ${TOKEN}`}
                              }).then(res=>
                                 {
                                    console.log(res + 'zasto')
                                    setProfil(res.data)
                                    setData(res.data)
                                    window.location.reload(false)
                                   })
                                 }
                                 const izmeni_grad=async()=>
                                 { 
                                  const TOKEN=localStorage.getItem('token')
                                  if(token!=TOKEN || !TOKEN)
                                  {
                                    window.location.reload(false)
                                    return
                                  }
                                  if(loged.id==='')
                                 {
                                  alert('Greska!!!')
                                   }
                                  if(profil.grad==='')
                                   {
                                       alert('Polje grad ne sme biti prazno!!!')
                                          return
                                            }
                                   await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
                                    {
                                      id:loged.id,                               
                                      grad:profil.grad
                                    },{
                                      headers:{ Authorization: `Bearer ${TOKEN}`}
                                    }).then(res=>
                                      {
                                         console.log(res + 'zasto')
                                         setProfil(res.data)
                                         setData(res.data)
                                         window.location.reload(false)
                                        })
                                      }
                                      const izmeni_adresu=async()=>
                                      { const TOKEN=localStorage.getItem('token')
                                      if(token!=TOKEN || !TOKEN)
                                      {
                                        window.location.reload(false)
                                        return
                                      }
                                        if(loged.id==='')
                                        {
                                          alert('Greska!!!')
                                          }
                                        if(profil.adresa==='')
                                         {
                                             alert('Polje adresa ne sme biti prazno!!!')
                                            return
                                           }
                                         await Axios.put('https://localhost:5001/Vlasnik/azurirajVlasnika',
                                         {
                                           id:loged.id,                             
                                           adresa:profil.adresa                                      
                                         },{
                                          headers:{ Authorization: `Bearer ${TOKEN}`}
                                        }).then(res=>
                                           {
                                              console.log(res + 'zasto')
                                              setProfil(res.data)
                                              setData(res.data)
                                              window.location.reload(false)
                                             })
                                           }
                                     const[refresh,setRefresh]=useState(false)
useEffect(()=>
{
  async function fetch(){
  const TOKEN=localStorage.getItem('token')
  await Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + loged.id,
   {
 
      headers:{ Authorization: `Bearer ${TOKEN}`
}
   }).then(
      res=>
      {
         console.log(res)
         setProfil(res.data)
         setData(res.data)
       
      }
   )}
   fetch()
},[handle])
const[stanje,setStanje]=useState(-1)
const[skrij,setSkrij]=useState(false)
const handleklik=()=>
{
  setSkrij(!skrij)
}
const brisi_uslugu=async(props)=>
{ 
const TOKEN=localStorage.getItem('token')
if(token!=TOKEN || !TOKEN)
{
  window.location.reload(false)
  return
}
 await Axios.delete('https://localhost:5001/Usluga/obrisiUslugu?idUsluge=' + props,
  {
    headers:{ Authorization: `Bearer ${TOKEN}`}
  }).then(
    res=>
    { 
      console.log(res.data + 'AHAHHAAH BRISANO')
      window.location.reload(false)
    }
    )
    // window.location.reload(false)
}
// const window=()=>
// {
//   window.location.reload();
// }
const handleRefresh=()=>
{
  setRefresh(!refresh);
}
const [j,setJ]=useState(false)
const handlej=()=>
{
  setJ(!j)
}
const [x,setX]=useState(false)
const handlex=()=>
{
  setX(!x)
}
const [y,setY]=useState(false)
const handley=()=>
{
  setY(!y)
}
const [z,setZ]=useState(false)
const handlez=()=>
{
  setZ(!z)
}
let PocetakDatumPrihvaceni=null
let PocetakVremePrihvaceni=null
let PocetakDatumOdbijeni=null
let PocetakVremeOdbijeni=null
let PocetakDatumPending=null
let PocetakVremePending=null

      return(
           <div className='a' >
           <div className={classes.container}>
           <NavBar />
             <div className={classes.glavni}>  
             <CardSlika loged={loged}/>            
             <Card className={classes.paper} elevation={8}style={{display:'grid',backgroundColor:'khaki',minWidth:'475px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
            <div className='jedan'>            
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

{prihvaceni && prihvaceni.map((x,index5)=>

      (<div className='prihvaceni' hidden={otvoriPrihvaceni}style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'200px'}}>
      <h6 hidden={true}>{PocetakDatumPrihvaceni= new Date(x.pocetak).toLocaleDateString()}</h6>
     <h6 hidden={true}>{ PocetakVremePrihvaceni= new Date(x.pocetak).toLocaleTimeString(['hr-HR'],{hour:'2-digit',minute:'2-digit'})}</h6>
     
     <h6 hidden={true}>{pasId=x.pasId}</h6>
        <Typography>Siter je prihvatio Vas zahtev za uslugu {x.vrsta == 0 ? <a> setanje psa</a>:
        x.vrsta == 1?<a> cuvanje psa u kuci vlasnika</a>:
        x.vrsta==2 ? <a> poseta sittera</a>:<a> cuvanje psa u kuci sittera</a>} za vaseg psa {x.pas.ime}!
         Spremite se, sitter dolazi {PocetakDatumPrihvaceni}  u  {PocetakVremePrihvaceni}. </Typography>               
             <Button onClick={()=>{brisi_uslugu(x.id);}}>Brisi</Button>
          </div>))}

{neprihvaceni && neprihvaceni.map((l,index1)=>
  (   <div className='neprihvaceni' hidden={otvoriNeprihvaceni}style={{borderRadius:'10px',backgroundColor:'cornsilk'}}>
      <h6 hidden={true}>{PocetakDatumOdbijeni= new Date(l.pocetak).toLocaleDateString()}</h6>
     <h6 hidden={true}>{ PocetakVremeOdbijeni= new Date(l.pocetak).toLocaleTimeString(['hr-HR'],{hour:'2-digit',minute:'2-digit'})}</h6>
     <Typography>Sitter {l.siter.ime} {l.siter.prezime} je nazalost odbio uslugu 
     {x.vrsta == 0 ? <a> setanje psa</a>:
        x.vrsta == 1?<a> cuvanje psa u kuci vlasnika</a>:
        x.vrsta==2 ? <a> poseta sittera</a>:<a> cuvanje psa u kuci sittera</a>} 
              , datuma {PocetakDatumOdbijeni} u {PocetakVremeOdbijeni} za Vaseg psa {l.pas.ime}.Molimo Vas ne dajte da Vas ovo obeshrabri, vec potrazite novog sittera!</Typography>
      <Button onClick={()=>{brisi_uslugu(l.id);}}>Brisi</Button>  
</div>
  ))

}
{pending && pending.map((k,index2)=>
(  <div className='pending' hidden={otvoriPending} style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'100px'}}>
    <h6 hidden={true}>{PocetakDatumPending= new Date(k.pocetak).toLocaleDateString()}</h6>
     <h6 hidden={true}>{ PocetakVremePending= new Date(k.pocetak).toLocaleTimeString(['hr-HR'],{hour:'2-digit',minute:'2-digit'})}</h6>
<Typography>Molimo Vas budite strpljivi sitter {k.siter.ime} {k.siter.prezime} jos uvek nije video Vasu uslugu 
{k.vrsta == 0 ? <a> setanje psa</a>:
        k.vrsta == 1?<a> cuvanje psa u kuci vlasnika</a>:
        k.vrsta==2 ? <a> poseta sittera</a>:<a> cuvanje psa u kuci sittera</a>} za psa {k.pas.ime} datuma {PocetakDatumPending} u {PocetakVremePending}. </Typography>
<Button onClick={()=>{brisi_uslugu(k.id);}}>Brisi</Button>
</div>
  ))}
  
{gotovi && gotovi.map((g,index)=>
(  <div key={g.id} className='gotovi' hidden={otvoriGotovi} style={{borderRadius:'10px',backgroundColor:'cornsilk',maxHeight:'500px'}}>
      <h6 hidden={true}>{pasId=g.pasId} {}  {}</h6>
    <Typography>Vasa usluga {g.vrsta == 0 ? <a> setanje psa</a>:
        g.vrsta == 1?<a> cuvanje psa u kuci vlasnika</a>:
        g.vrsta==2 ? <a> poseta sittera</a>:<a> cuvanje psa u kuci sittera</a>} za psa:{g.pas.ime} je obavljena od strane sittera {g.siter.ime} {g.siter.prezime}  </Typography>
        <Typography style={{marginBottom:'20px',marginTop:'10px'}}>Molimo vas odvojite bar sekundi i ocenite sittera! </Typography>
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
          InputProps={{ inputProps: { min: 1, max: 5} }}
          onClick={(e)=>{setOcena(0);setStanje(index);}}
          onChange={ (e) =>  { setOcena(e.target.value)}}                
        />
  <Button color='primary' onClick={()=>{oceni(g.id,g.siterId,g.pasId,komentar,ocena);gotovi_zahtevi();}}>Posalji ocenu siteru</Button>
  {console.log(g.id + 'mjauuu')}
  </div>
</div>
  ))}
</div>
</div>
 </div>
 </Card>
             <Card className={classes.paper} elevation={8} style={{backgroundColor:'khaki',display:'grid',minWidth:'500px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
             <h3 style={{textAlign:'center',color:'black'}} className={classes.naslov2}>Opšti podaci</h3>
             {/* <div className='inputi'> */}
             {/* <Button color='success'  onClick = {() => { setCh(!ch) }   }>Edituj podatke</Button> */}
             <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }} style={{display:'flex'}}>
              {/* <div className='prviinput'style={{display:'flex'}}> */}
             <Grid item xs={6} sm={6} md={4} lg={3}>
                <label >Ime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                <input type='text'  value={profil.ime} onChange={ (e) =>  setProfil((profil)=>({...profil,ime:e.target.value})) }disabled={ch}></input>
             </Grid>
              <Button style={{marginLeft:'120px'}}onClick={()=>{izmeni_ime();}}startIcon={<EditIcon/>}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Prezime:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.prezime} onChange={ (e) =>  setProfil((profil)=>({...profil,prezime:e.target.value})) }  disabled={ch}></input>
             </Grid>         
              <Button style={{marginLeft:'120px'}}onClick={()=>{izmeni_prezime();}}startIcon={<EditIcon/>}> Izmeni</Button>
             {/* <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Email:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.email} onChange={ (e) =>  setProfil((profil)=>({...profil,email:e.target.value})) } disabled={ch}></input>
             </Grid>
            
        <Button style={{marginLeft:'120px'}}onClick={()=>{izmeni_email();}}startIcon={<EditIcon/>}> Izmeni</Button>*/}
              <Grid item xs={6} sm={6} md={4} lg={3}>
                    <label style={{}}>Korisničko Ime:</label>
             </Grid> 
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis'  value={profil.korisnickoIme} onChange={ (e) =>  setProfil((profil)=>({...profil,korisnickoIme:e.target.value})) }disabled={ch}></input>
             </Grid>
              <Button style={{marginLeft:'120px'}}startIcon={<EditIcon/>}onClick={()=>{izmeni_korisnicko_ime();}}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Sifra:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='password' id='opis'   onChange={ (e) =>  setProfil((profil)=>({...profil,sifra:e.target.value})) }disabled={ch}></input>
             </Grid>
              <Button style={{marginLeft:'120px'}}startIcon={<EditIcon/>}onClick={()=>{izmeni_sifru();}}> Izmeni</Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Broj telefona:</label>
             </Grid>
             <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.brojTelefona} onChange={ (e) =>  setProfil((profil)=>({...profil,brojTelefona:e.target.value})) } disabled={ch}></input>
             </Grid> 
              <Button style={{marginLeft:'120px'}}startIcon={<EditIcon/>}onClick={()=>{izmeni_broj_telefona();}}> Izmeni </Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Grad:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.grad} onChange={ (e) =>  setProfil((profil)=>({...profil,grad:e.target.value})) } disabled={ch}></input>
             </Grid> 
              <Button style={{marginLeft:'120px'}}startIcon={<EditIcon/>}onClick={()=>{izmeni_grad();}}> Izmeni</Button>
             <Grid item xs={6} sm={6} md={4} lg={3}>
                   <label style={{}}>Adresa:</label>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3}>
             <input type='text' id='opis' value={profil.adresa} onChange={ (e) =>  setProfil((profil)=>({...profil,adresa:e.target.value})) } disabled={ch}></input>
             </Grid>
              <Button style={{marginLeft:'120px'}}startIcon={<EditIcon/>}onClick={()=>{izmeni_adresu();}}> Izmeni</Button>
         </Grid> <div className='izmeniVlasnika' style={{display:'flex',justifyContent:'center'}} >
             
       <Button variant="outlined" startIcon={<EditIcon />} onClick = {() =>{ handleCh() }} style={{backgroundColor:'rgb(93, 224, 100)',color:'black',borderRadius:'25px',marginTop:'20px'}}>
  Edituj podatke
 </Button>
  </div>
   </Card>
     </div>
    </div>
  <div className={classes.divButton}>
</div>
 </div>);}
  


export default ProfilVlasnik