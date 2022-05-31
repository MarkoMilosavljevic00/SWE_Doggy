
import * as React from 'react';
import {useState} from 'react';
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
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
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
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SwapVertSharp } from '@mui/icons-material';



const Vlasnik=(props)=> {
  const[value,setValue]=useState('')
  const[valuee,setValue1]=useState('')
  const inputProps = {
    step: 300,
  };
  //const[valueOcena,setValueOcena]=useState('')
  const navigate=useNavigate();
  // const [value, setValue] = React.useState<Date | null>(
    //   new Date('2014-08-18T21:11:54'),);
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
    
    
    // const handleChange = (newValue: Date | null) => {
      //   setValue(newValue);
      // };
      const valuetext=(value)=> {
        return `${value*5}DIN`;
      }
      
      // const RangeSlider=()=> {
        //   const [value, setValue] = React.useState([20, 37]);
        // }
        const handleChangee = (event, newValuee) => {
          setValue1(newValuee);
        };
    const valuetextt=(valuee)=> {
      return `${valuee}DIN`;
    }
    
    // const RangeSlider=()=> {
      //   const [value, setValue] = React.useState([20, 37]);
      // }
      const handleChange = (event, newValue) => {
        // setValue(newValue);
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
const funkcija_adresa=()=>
{
  console.log(adresaPreuzimanjaPsa)
}
const siterId=localStorage.getItem('idSitera');
const pasId=localStorage.getItem('idPsa');
const vlasnikId=localStorage.getItem('idVlasnika')
const funkcija_napomena=()=>
{
  console.log(siterId)
  console.log(pasId)
  console.log(vlasnikId)
}
const posalji_zahtev=()=>
{
  const podaci={
  vlasnikId,
  siterId,
  pasId,
  vrsta,
  pocetak,
  kraj,
  adresaPreuzimanjaPsa
}
  Axios.post('https://localhost:5001/Usluga/dodajUslugu',podaci,{

    }
  ).then(res=>
    {

      console.log(res)
    }).catch(err=>
    {
    
      
          console.log(err.response)
        
    })
}
    return (
      
    <div className={klase.bos}>
<NavBar />
<div className={klase.main}>
   <div className={klase.usluga}> 
   <div className={klase.selectbox}>
     <h3 style={{alignSelf:'center'}}>Odaberite vrstu usluge:   </h3>
     <div className={klase.vrsta}>
     <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" >Odaberite vrstu usluge</InputLabel>
      <h3>{vrsta}</h3>
      <Select style={{width:'250px'}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={vrsta}
        label="Age"
        onChange={(e)=>setSelect(e.target.value)}
        onClick={usluge}

        // onChange={handleChange}
      >
        <MenuItem   value={1}><i class="fa-solid fa-dog"><h2>    Setanje psa</h2><h4>Po gradu</h4></i></MenuItem>
        <MenuItem value={2}><i class="fa-solid fa-paw"><h2>Cuvanje psa</h2><h4>U vasoj kuci</h4></i></MenuItem>
        <MenuItem  value={3}><i class="fa-solid fa-dog"><h2>    Cuvanje psa </h2><h4>U kuci sittera</h4></i></MenuItem>
        <MenuItem  value={4}><i class="fa-solid fa-paw"><h2>  Poseta sittera</h2></i></MenuItem>
      </Select>
    </FormControl>
   
   </Box>
</div>
</div>

    <div className={klase.datepicker}>
      <h2>Odaberite vreme koje Vam odgovara</h2>
      <h3>{pocetak} do {kraj}</h3>

      <div className={klase.pikeri}>
    <form  noValidate>
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
       </form>

      <form  noValidate>
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
    </form>
    </div>
     </div>
    

    {/* <h2>Tezina psa u kilogramima</h2>
    <div className={klase.tezina}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& > *': {
          m: 1,
        },
      }}
      >
      </Box>
      <ButtonGroup size="large" aria-label="large button group">
        {tezina}
      </ButtonGroup>
      </div> */}
   

    <div className={klase.adresa}>
    <h3 style={{alignSelf:'flex-end'}}>Adresa</h3>
    <h3>{adresaPreuzimanjaPsa}</h3>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField id="standard-basic" label="Adresa" variant="standard" value={adresaPreuzimanjaPsa} onChange={e=>setAddr(e.target.value)} />
      {/* <Button color='primary' onClick={funkcija_adresa}>Klik</Button> */}
    </Box>
    </div>
    <div className={klase.napomena}>
      <h3>Napomena</h3>
      <h3>{napomena}</h3>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* {<TextField id="outlined-basic" label="Outlined" variant="outlined" /> } */}
      {/* { <TextField id="filled-basic" label="Napomena" variant="filled" required/> } */}
      <TextField  required variant='filled'type="text" multiline maxRows={50} inputProps={inputProps} value={napomena} onChange={e=>setNapomena(e.target.value)}/>;
     </Box>
     </div>
     {/* <Button color='primary' onClick={funkcija_napomena}>Klik napomena</Button> */}
     <div className={klase.dugme}>
     <Button variant="contained" onClick={posalji_zahtev} endIcon={<SendIcon />} style={{borderRadius:'50px',backgroundColor:'cornsilk',color:'black'}}>
      Prosledi zahtev sitteru
     </Button>
   
     </div>
  
    </div>
    </div>
    <Footer />
     </div>
 

     
  );
}

export default Vlasnik

