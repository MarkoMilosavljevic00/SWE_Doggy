// import { styles } from './styles';
// import React, { useState,useEffect } from 'react';
// import classStyles from './styles';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar'
// //import HeaderSitter from '../../components/HeaderSitter';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import NavBar from '../headerVlasnik';
// import Card from '@mui/material/Card';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles';
// import Fab from '@mui/material/Fab';
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import EditIcon from '@mui/icons-material/Edit';
// import Axios from 'axios';
// import axios from '../../api/axios';
// import { ButtonGroup, Typography } from '@mui/material';
// import AppFooter from '../../components/futer';
// import Footer from '../../components/Footer'
// import { alpha } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';
// import NavBarSiter from '../headerSiter';
// const PristigliZahtevi=()=>
// {  const[data1,setData]=useState([])
//     const[data2,setData2]=useState([])
//     const GreenSwitch = styled(Switch)(({ theme }) => ({
//         '& .MuiSwitch-switchBase.Mui-checked': {
//           color: pink[600],
//           '&:hover': {
//             backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
//           },
//         },
//         '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//           backgroundColor: pink[600],
//         },
//       }));
//       const label = { inputProps: { 'aria-label': 'Switch demo' } };
//     const fja=(props)=>{

//     Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + props).then(res=>
//         {
//             console.log(res)
//             setData2(res.data)
              
//             })
//         }
// let podaci=[]
//     const idSitera=localStorage.getItem('idSitera')
//     const pristigle =()=>{
   
//           Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera='+ idSitera + '&status=0').then(
//               res=>
//               {
//                 console.log(res)
//                 setData(res.data)
//               }
//           )
          
//     }
//     const ExpandMore = styled((props) => {
//         const { expand, ...other } = props;
//         return <IconButton {...other} />;
//       })(({ theme, expand }) => ({
//         transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//           duration: theme.transitions.duration.shortest,
//         }),
//       }));

// let pasId=[];
// const [tip_usluge,setTip]=useState('')
// const ispitaj_uslugu =(props)=>
// {
//     if(props===1) setTip('Setnja psa po gradu')
//     else if(props===2) setTip('Cuvanje psa u kuci zatrazioca usluge')
//     else if(props===3)  setTip('Cuvanje psa u vasoj kuci')
//     console.log('1')
    
// }
// const prihvati_uslugu =(props) =>
// {
//     Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=1').then(
//         res =>
//         {
//             console.log(res)
//             console.log('Uspesno prihvacena usluga sa idejem: ' + props)
//         }
//     )
// }
// const odbij_uslugu=(props) =>
// {
//     Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=2').then(
//         res =>
//         {
//             console.log(res)
//             console.log('Odbijena usluga sa idejem: ' + props)
//         }
//     )
// }
// const[accept,setAccept]=useState([])
// const prihvacene =()=>
// {
// Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + idSitera + '&status=1').then(
//     res=>{
//         console.log(res)
//         console.log(idSitera + 'jesam')
//         setAccept(res.data)
//     }
// )
// }
// const odbijene =()=>
// {
// Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + idSitera + '&status=2').then(
//     res=>{
//         console.log(res)
//     }
// )
// }
// const [rec,setRec]=useState('')
// const recenzije=(props)=>
// {
//    Axios.get('https://localhost:5001/Recenzija/vratiRecenzijeZaPsa?id=' + props).then(
//      res=>
//      {
//        console.log('uspesna recenzija')
//        console.log(res.data)
//        setRec(res.data)
//      }
//    )
// }

//     const [expanded, setExpanded] = React.useState(false);
//   const[f,setChecked]=useState(false)
//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };
//     const [open, setOpen] = React.useState(false);
//     const obavljena=(props)=>
//     {
//         Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=3').then(
//             res=>
//             {
//                 console.log('Uspesno obavljena usluga xd')
//                 console.log(res)
//             }
//             )
//         }
//         const[komentar,setKomentar]=useState('')
//         const[ocena,setOcena]=useState('')
//         const[hajd,setHajd]=useState(true)

//         const handleHajd=()=>
//         {
//           setHajd(!hajd)
//         }
//         const oceni=(vlasnikId,pasId,komentar,ocena)=>
//         {
//           console.log(vlasnikId,pasId,komentar,ocena)
//           Axios.post('https://localhost:5001/Recenzija/dodajRecenzijuPsu',
//           {
//             siterId:idSitera,
//             vlasnikId,
//             pasId,
//             komentar,
//             ocena
//           }).then(
//             res=>
//             {console.log(res.data)
//             console.log('uspesno ocenjen ker')
//             alert('success')
//             }
//           )
//         }
//         return(
//             <div >
//             <div className='glavni' style={{backgroundColor:'cornsilk'}}>
//             {idSitera ? <NavBarSiter/>:<NavBar />}
//   <Button color='success'  style={{backgroundColor:'mediumspringgreen',borderRadius:'25px'}} onClick={pristigle}>Vidi sve pristigle usluge</Button>
  
//   <div className="zahtevi">
//   <div className='klasa_zahtevi' style={{display:'flex'}}>
//         {data1.map(x=>
//         (   
       
//  <Card sx={{ maxWidth: 600 }} style={{margin:'25px',borderRadius:'25px',backgroundColor:'mediumspringgreen'}} >
//       <CardHeader
//         // avatar={
//             //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//         //     R
//         //   </Avatar>
//         // }
       
//         title={`Novi zahtev od korisnika: ${x.vlasnik.ime} ${x.vlasnik.prezime}`}        
//         />
//        <CardContent>
//         <Typography variant="body2" color="text.secondary" >
//          Informacije o korisniku:  id usluge:{x.id}    ----- id psa:{x.pasId}
//          <Typography variant="body2" color="text.secondary" >  Korisnicko ime: {x.vlasnik.korisnickoIme}</Typography>
//          <Typography variant="body2" color="text.secondary" >   Broj telefona: {x.vlasnik.brojTelefona}</Typography>
//          <Typography variant="body2" color="text.secondary" > Email: {x.vlasnik.email} </Typography>
//          <Typography variant="body2" color="text.secondary" > Grad: {x.vlasnik.grad}  </Typography>
//          <Typography variant="body2" color="text.secondary" > Adresa: {x.vlasnik.adresa} {pasId=x.pasId}</Typography>
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon style={{color:'red'}} onClick={()=>{prihvati_uslugu(x.id); {console.log(x.id + '23')}}} />
//         </IconButton>
//         <IconButton aria-label="delete">
//           <DeleteIcon style={{color:'black'}} onClick={()=>{odbij_uslugu(x.id)}}/>
//         </IconButton>
    
//         <ExpandMore
//           expand={expanded}
          
//           onClick={() => { handleExpandClick();fja(pasId);{recenzije(pasId)};}}
//           aria-expanded={expanded}
//           aria-label="show more"
          
//           >
//             Informacije o psu
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography variant="h4">Osnovni podaci:</Typography>
//           <Typography paragraph>
//             Ime psa: {data2.ime}
//           </Typography>
//           <Typography paragraph>
//             Rasa psa: {data2.rasa}
//           </Typography>
//           <Typography paragraph>
//             Pol psa: {data2.pol}
//           </Typography>
//           <Typography paragraph>
//             Visina psa: {data2.visina}
//           </Typography>
//           <Typography paragraph>
//             Tezina psa: {data2.tezina}
//           </Typography>
//           <Typography paragraph>
//             Prosecna ocena psa: {data2.prosecnaOcena}
//           </Typography>
//           {rec && rec.map(d=>
//           (
//           <Typography paragraph>

//             Komentari psa:{d.komentar} 
//           </Typography>
//             ))}
//           <Typography variant='h4'>
//             Opis psa
//           </Typography>
//           <Typography paragraph>
//             {data2.opis}
//           </Typography>
//           <Typography variant='h4'>
//             Napomena:
//           </Typography>
//           <Typography paragraph>
//            {x.napomena}
//           </Typography>
          
//         </CardContent>
//       </Collapse>
//     </Card> 
//      )
//      )}
//     </div>
 
//      <Button color='success'  style={{borderRadius:'25px',backgroundColor:'mediumspringgreen'}} onClick={()=>{prihvacene();setOpen(!open)}}>Vidi sve prihvacene usluge{console.log(  'bla')}</Button>
// {accept.map(p=>
// (
//     <div className='prihvacene_usluge' style={{display:'flex'}} >
// <Card sx={{ maxWidth: 345 }} hidden={open} style={{margin:'25px',borderRadius:'25px',backgroundColor:'mediumspringgreen'}}>
//       <CardHeader
     
//      action={
//          <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={`Prihvacen zahtev od korisnika: ${p.vlasnik.ime} ${p.vlasnik.prezime}`}       
//         // subheader="September 14, 2016"
//         />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary" >
//          Informacije o korisniku: 
//          <Typography variant="body2" color="text.secondary" >  Korisnicko ime: {p.vlasnik.korisnickoIme}</Typography>
//          <Typography variant="body2" color="text.secondary" >   Broj telefona: {p.vlasnik.brojTelefona}</Typography>
//          <Typography variant="body2" color="text.secondary" > Email: {p.vlasnik.email} </Typography>
//          <Typography variant="body2" color="text.secondary" > Grad: {p.vlasnik.grad}  </Typography>
//          <Typography variant="body2" color="text.secondary" > Adresa: {p.vlasnik.adresa} {pasId=p.pasId}</Typography>
//         </Typography>
//       </CardContent>
     
//       <CardActions disableSpacing>
//         <ExpandMore
//           expand={expanded}
          
//           onClick={() => { handleExpandClick(); fja(pasId);recenzije(pasId);}}
//           aria-expanded={expanded}
//           aria-label="show more" 
// >
//         Informacije o psu
             
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography variant="h4">Osnovni podaci:</Typography>
//           <Typography paragraph>
//             Ime psa: {data2.ime}
//           </Typography>
//           <Typography paragraph>
//             Rasa psa: {data2.rasa}
//           </Typography>
//           <Typography paragraph>
//             Pol psa: {data2.pol}
//           </Typography>
//           <Typography paragraph>
//             Visina psa: {data2.visina}
//           </Typography>
//           <Typography paragraph>
//             Tezina psa: {data2.tezina}
//           </Typography>
//           <Typography paragraph>
//             Prosecna ocena psa: {data2.prosecnaOcena}
//           </Typography>
//           <Typography variant='h4'>
//             Opis psa
//           </Typography>
//           <Typography paragraph>
//             {data2.opis}
//           </Typography>
//           <Typography variant='h4'>
//             Napomena:
//           </Typography>
//           <Typography paragraph> 
//            {p.napomena}
//           </Typography>
//           <div className='cekirano' style={{display:'flex'}}>
//           <Typography paragraph>Nije izvrsena</Typography>
//           <Switch {...label} checked={f} onClick={()=>{setChecked(!f);obavljena(p.id);handleHajd();}} color="secondary" name='jason'/>
//           <Typography paragraph>Izvrsena</Typography>
//           </div>
//           <div className='hajd' hidden={hajd}>
//           <TextField
//           required
//           id="outlined-required"
//           label="Komentari"
//           multiline
//           value={komentar}
//           defaultValue="Hello World"
//           onChange={ (e) =>  setKomentar((e.target.value))}
//         />
//          <TextField
//           id="outlined-number"
//           label="Ocena"
//           type="number"
//           value={ocena}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           InputProps={{ inputProps: { min: 0, max: 5} }}
//           onChange={ (e) =>  setOcena((e.target.value))}
           
          
//         />
//   <Button color='primary' onClick={()=>{oceni(p.vlasnikId,p.pasId,komentar,ocena)}}>Posalji ocenu siteru</Button>
//   </div>
//           <Button color='warning' onClick={()=>{setOpen(!open)}}>Zatvori</Button>
//         </CardContent>
//       </Collapse>
//     </Card>
//     </div>
//     ))}

//         </div>
//    </div>
//         <Footer/>
//         </div>
//             )
//             }
//             export default PristigliZahtevi

import { styles } from './styles';
import React, { useState,useEffect } from 'react';
import classStyles from './styles';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import NavBar from '../headerVlasnik';
import Axios from 'axios';
import NavBarSiter from '../headerSiter';
import Typography from '@mui/material/Typography';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CardPristigliZahtevi from './card/index.js';
import CardPrihvaceneUsluge from './cardPrihvati/index.js';

const PristigliZahtevi=()=>
{
  const classes = classStyles();
    const[data1,setData]=useState([])
    const idSitera=localStorage.getItem('idSitera')
    const pristigle =()=>{
   
      const TOKEN=localStorage.getItem('token')
       Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera='+ idSitera + '&status=0',
       {
    headers:{ Authorization: `Bearer ${TOKEN}`
    }}).then(
            res=>
            {
              setData(res.data);
            }
        )
      }

    
const [tip_usluge,setTip]=useState('')
const ispitaj_uslugu =(props)=>
{
    if(props===1) setTip('Setnja psa po gradu')
    else if(props===2) setTip('Cuvanje psa u kuci zatrazioca usluge')
    else if(props===3)  setTip('Cuvanje psa u vasoj kuci')
   
    
}

const[accept,setAccept]=useState([])
const prihvacene =()=>
{
  const TOKEN=localStorage.getItem('token')
Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + idSitera + '&status=1',
{
headers:{ Authorization: `Bearer ${TOKEN}`
}
}).then(
    res=>{
       
        setAccept(res.data)
    }
)
}
const odbijene =()=>
{
  const TOKEN=localStorage.getItem('token')
Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + idSitera + '&status=2',
{
    headers:{ Authorization: `Bearer ${TOKEN}`
}}).then(
    res=>{
        console.log(res)
    }
)
}
  const [open, setOpen] = React.useState(false);
    const[p1,setP1]=useState(false)
    const[p2,setP2]=useState(false)
    const handlep1=()=>
    {
      setP1(!p1)
    }
    const handlep2=()=>
    {
      setP2(!p2)
    }
    return(
      <div className={classes.container}>
        <div className={classes.header}>
          {idSitera ? <NavBarSiter/>:<NavBar />}
        </div>
        <h1 style={{color:'rgb(93, 224, 100)',marginTop:'20px'}}>Pogledajte zahteve koji su vam pristigli</h1>
        <div className={classes.divButton}>
         <Button  style={{ color: 'white', backgroundColor: 'rgb(93, 224, 100)', marginRight: '20px' }} onClick={()=>{pristigle();handlep1();}}>Vidi sve pristigle usluge</Button>
         <Button  style={{ color: 'white', backgroundColor: 'rgb(93, 224, 100)' }} onClick={()=>{prihvacene();setOpen(!open);handlep2();}}>Vidi sve prihvacene usluge</Button>
       </div>  
       <div className={classes.miniPrikaz}>
         <div className={classes.divpristigli}>
         <Typography variant='h6' color='black' style={{textAlign:'center'}} hidden={!p1}>Ovde su vaši pristigli zahtevi:</Typography>
           <div className={classes.zahteviPristigli} hidden={!p1}>
         {data1.map((x) => {
              return (
                
                <CardPristigliZahtevi   
                  id={x.id}
                  ime={x.vlasnik.ime}
                  prezime={x.vlasnik.prezime}
                  korisnickoIme={x.vlasnik.korisnickoIme}
                  brojTelefona={x.vlasnik.brojTelefona}
                  email={x.vlasnik.email}
                  grad={x.vlasnik.grad}
                  adresa={x.vlasnik.adresa}
                  pasId={x.pasId}
                  napomena={x.napomena}
                  tip={x.vrsta}
                  begin={x.pocetak}
                  end={x.kraj}
                 
                />
              );
           })}
        </div>
        </div>
        <div className={classes.divpristigli}>
        <Typography variant='h6' color='black' style={{textAlign:'center'}}hidden={!p2}>Ovde su zahtevi koji ste prihvatili:</Typography>
       <div className={classes.zahteviPrihvaceni} hidden={!p2}>
       {accept.map((p) => {
          return (
            <CardPrihvaceneUsluge 
            P2={p2}
              id={p.id}
              ime={p.vlasnik.ime}
              prezime={p.vlasnik.prezime}
              korisnickoIme={p.vlasnik.korisnickoIme}
              brojTelefona={p.vlasnik.brojTelefona}
              email={p.vlasnik.email}
              grad={p.vlasnik.grad}
              adresa={p.vlasnik.adresa}
              pasId={p.pasId}
              napomena={p.napomena}
              idSittera={idSitera}
              vlasnikId={p.vlasnikId}
              tip={p.vrsta}
              begin={p.pocetak}
              end={p.kraj}
            />
          );
        })}
        </div>
      </div>
      </div>
   </div> 
  )
}
export default PristigliZahtevi


    
    


    
    

