
import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import classStyles from './styles';
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import NavBar from '../headerVlasnik';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Avatar } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SwapVertSharp } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '../../components/Typography';


const Vlasnik=(props)=> {
  const[psi,setPsi]=useState('')
  const {vlasnik}=props;

  const location=useLocation();
  console.log(location.state)
  const psici=async()=>
  {
    const TOKEN=localStorage.getItem('token')
   await Axios.get('https://localhost:5001/Pas/vratiPseZaVlasnika?idVlasnika=' + vlasnik.id,
    {
    headers:{ Authorization: `Bearer ${TOKEN}`}
    }).then(
      res=>
      {
        console.log(res.data + 'svi psi')
        setPsi(res.data)
      }
    )
  }
  const[value,setValue]=useState('')
  const[valuee,setValue1]=useState('')
  const inputProps = {
    step: 300,
  };
  const navigate=useNavigate();
  
    const klase = classStyles();
    const labels = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };
    const getLabelText=(valueOcena)=> {
      return `${valueOcena} Star${valueOcena !== 1 ? 's' : ''}, ${labels[valueOcena]}`;
    }
    
    
    const [valueOcena, setValueOcena] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    
    
   
      const valuetext=(value)=> {
        return `${value*5}DIN`;
      }
      
        const handleChangee = (event, newValuee) => {
          setValue1(newValuee);
        };
    const valuetextt=(valuee)=> {
      return `${valuee}DIN`;
    }
    
  
      const handleChange = (event, newValue) => {
     
        console.log('1')
    };
    const buttons = [
      <Button key="one">Jedan</Button>,
      <Button key="two">Dva</Button>,
      <Button key="three">Tri ili vise</Button>,
    ];
    const tezina = [
      <Button key="one">0-10</Button>,
      <Button key="two">10 - 20</Button>,
      <Button key="three">20+</Button>,
    ];
    const[vrsta,setSelect]=useState('');
    const[pocetak,setTajmerOd]=useState('');
    const[kraj,setTajmerDo]=useState('');
    const[adresaPreuzimanjaPsa,setAddr]=useState('');
    const[napomena,setNapomena]=useState('');
    const[pasId,setPasId]=useState('');
const usluge=()=>
{
console.log(vrsta)//radi :D
}   
const Od=()=>
{
  console.log(pocetak)
}
const Do =()=>
{
  console.log(kraj)
}
const dogs = (props)=>
{
  setPasId(props)
  console.log(pasId)
}
const dogs1 = ()=>
{
 
  console.log(pasId)
}
const funkcija_adresa=()=>
{
  console.log(adresaPreuzimanjaPsa)
}
// const siterId=localStorage.getItem('idSitera');
const funkcija_napomena=()=>
{
  // console.log(siterId)
  console.log(pasId)
  // console.log(vlasnikId)
}
const vlasnikId=vlasnik.id;
const posalji_zahtev=async()=>
{
  const TOKEN=localStorage.getItem('token')
if(pocetak>kraj)
{
  alert('Greska kod datuma!')
  return
}
const siterId=location.state;
  if(siterId===null){alert('Molimo Vas odaberite sitera!!!')}
  const podaci={
    
  vlasnikId,
  siterId,
  pasId,
  vrsta,
  pocetak,
  kraj,
  adresaPreuzimanjaPsa,
  napomena,
  
}
if(vrsta==='' || napomena==='' || pocetak==='' || kraj==='' ||  pasId==='' || adresaPreuzimanjaPsa==='')
{
  alert('Molimo Vas popunite formu do kraja!!!')
  return
}

 await Axios.post('https://localhost:5001/Usluga/dodajUslugu',podaci,{
    
    headers:{ Authorization: `Bearer ${TOKEN}`
  }
}).then(res=>
    {
    
      console.log(res.data)
      // localStorage.removeItem('idSitera')
      alert('Uspesno ste poslali sitter-u zahtev!!!')
      
    }).catch(err=>
    {
         
          if(err.response.data=='Siter je tada zauzet!')
          {
         alert('Siter je tada zauzet!')
          }
          else if(err.response.status){
            alert(err.response.data)
          }
        
        
    })
}

  // const brisiS=()=>
  // {
  //   const siter=localStorage.removeItem('idSitera')
  // }

  const zovifju=()=>
 {
    psici();
 } 
    return (
      
    <div className={klase.bos}>
<NavBar />

<div className={klase.main}>
   <Paper className={klase.usluga}  onClick={()=>{psici();}}elevation={8} style={{backgroundColor:'honeydew',height:'700px',marginBottom:'40px',marginTop:'40px',borderRadius:'50px'}}>
       <IconButton color='primary'  onClick={()=>{navigate('/sitterRoute')}}>
       <ArrowBackIosNewIcon/>
       <Typography variant='h6'color='black' onClick={()=>{navigate('/sitterRoute');}}>Nazad</Typography>
       </IconButton>
   <h1 className={klase.naslov}>Kreirajte zahtev</h1>
   <div className={klase.selectbox}>
     <div className={klase.vrsta}>
  
     <Box sx={{ minWidth: 150 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" >Odaberite vrstu usluge</InputLabel>
      {/* <h3>{vrsta}</h3> */}
      <Select style={{width:'300px'}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={vrsta}
        label="Age"
        onChange={(e)=>setSelect(e.target.value)}
        onClick={()=>{usluge();}}
        // psici();
      >
        <MenuItem   value={0}><i class="fa-solid fa-dog"><h5>Šetanje psa po gradu</h5></i></MenuItem>
        <MenuItem value={1}><i class="fa-solid fa-house"><h5>Čuvanje psa u vašoj kući</h5></i></MenuItem>
        <MenuItem  value={2}><i class="fa-solid fa-paw"><h5>Poseta sittera</h5></i></MenuItem>
        <MenuItem  value={3}><i class="fa-solid fa-bone"><h5>Čuvanje psa u kući sittera</h5></i></MenuItem>
      </Select>
    </FormControl>
   
   </Box>
</div>
</div>
<div className={klase.selectboxpsi}>
     <div className={klase.vrstapsi}>
  
     <Box sx={{ minWidth: 150 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label1" >Odaberite vaseg psa</InputLabel>
      {/* <h3>{}</h3> */}
      <Select style={{width:'300px'}}
        labelId="demo-simple-select-label1"
        id="demo-simple-select1"
        value={pasId}
        label="Age"
        onChange={(e)=>setPasId(e.target.value)}
       onClick={()=>{psici();dogs1();}}
      >
        {psi && psi.map(x=>
          (
        <MenuItem onClick={()=>{dogs(x.id)}} value={x.id}><i class="fa-solid fa-dog"><h5>{x.ime} </h5></i></MenuItem>
          ))}
          {console.log(pasId + 'pas id je')}
      </Select>
    </FormControl>
   </Box>
</div>
</div>

    <div className={klase.datepicker}>
      <div className={klase.pikeri}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
       <Grid item xs={6}>
        <TextField 
          id="datetime-local"
          label="Pocetak usluge"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          onChange={e=>setTajmerOd(e.target.value)}
          value={pocetak}
          onClick={Od}
          InputLabelProps={{
            shrink: true,
          }}
        />
       </Grid>
       
      <Grid item xs={6}>
      <TextField 
        id="datetime-local"
        label="Kraj usluge"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        onChange={e=>setTajmerDo(e.target.value)}
        onClick={Do}
        value={kraj}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid> 
    </Grid>
    </div>
     </div>
    <div className={klase.adresa}>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{width:'300px'}} id="outlined-size-small" label="Adresa" value={adresaPreuzimanjaPsa} onChange={e=>setAddr(e.target.value)} />
      {/* <Button color='primary' onClick={funkcija_adresa}>Klik</Button> */}
    </Box>
    </div>
    <div className={klase.napomena}>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{width:'300px'}} id='outlined-multiline-static'label='Napomena' type="text" multiline maxRows={4} inputProps={inputProps} value={napomena} onChange={e=>setNapomena(e.target.value)}/>
     </Box>
     </div>
     {/* <Button color='primary' onClick={funkcija_napomena}>Klik napomena</Button> */}
     <div className={klase.dugme}>
     <Button variant="contained" onClick={()=>{posalji_zahtev();}} endIcon={<SendIcon />} style={{borderRadius:'50px',backgroundColor:'rgb(93, 224, 100)',color:'black'}}>
      Prosledi zahtev sitteru
     </Button>
   
     </div>
    </Paper>
    </div>
     </div>
 
  );
}

export default Vlasnik

