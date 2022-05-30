import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import classStyles from './style.js';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { komentarisanjeIOcenjivanjeRoute } from '../../../../../router/routes';
import { Restaurant } from '@mui/icons-material';
import { display } from '@mui/system';
import { useState } from 'react';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = props => {
  const { children, onClose, ...other } = props;
  const { brojTelefona } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: theme => theme.palette.grey[500],
            color: 'green',
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const classes = classStyles();
  const [open, setOpen] = React.useState(false);
  const {  id,
    ime,
    rasa,
    pol,
    opis,
    visina,
    tezina,
    slika,
    vlasnikId} = props;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const obrisiPsa =()=>
  {
      Axios.delete('https://localhost:5001/Pas/obrisiPsa?id=' + id).then(res=>
      {   display='none'
      console.log(res);
    })
}
const [data,setData]=useState({
    ime:ime,
    rasa:rasa,
    pol:pol,
    opis:opis,
    visina:visina,
    tezina:tezina,
    slika:slika,
    vlasnikId:vlasnikId
  
  })

  const [izmena,setIzmena ] = useState(true)
  // const [ime,setIme] = useState("")
// const [rasa,setrace] = useState("")
// const [pol,setsex] = useState("")
// const [opis,setdescription] = useState("")
// const [visina,setheight] = useState("")
// const [tezina,setweight] = useState("")
  const handle=(e)=>
  {
      const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData)
    console.log(newData)
    
    
  
}
const[input,setInput]=useState(false);
const izmeniPsa =()=>
{
    Axios.put('https://localhost:5001/Pas/azurirajPsa',
    {
       ime:data.ime,
       rasa:data.rasa,
       pol:data.pol,
       opis:data.opis,
       visina:data.visina,
       tezina:data.tezina,
       slika:data.slika,
       vlasnikId:data.vlasnikId
    })
       .then(response=>
        {
            if(response.status==200)
            {
                console.log('Uspesna promena podataka')
            }

        })
       
}
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        size="small"
      >
        Informacije o psu
      </Button>
      <Button variant='contained' color='error' size='small' onClick={obrisiPsa} >Obrisi psa</Button>
      <Button variant='contained' color='warning' size='small' onClick={izmeniPsa}>Izmeni psa</Button>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Informacije o psu
        </BootstrapDialogTitle>
        <DialogContent dividers>
         
          <Typography gutterBottom>Ime  </Typography>
        <input  type='text' id='ime' value={data.ime} disabled={izmena} onChange={ (e) =>  handle(e) }/>

         
          
          <Typography gutterBottom>Rasa </Typography>
          <input  type='text' id='rasa'value={data.rasa} disabled={izmena} onChange={ (e) =>  handle(e) }/>
        
          <Typography gutterBottom>Pol </Typography>
          <input  type='text'id='pol' value={data.pol} disabled={izmena} onChange={ (e) => handle(e) }/>
   
          <Typography gutterBottom>Opis</Typography>
          <input  type='text' id='opis'value={data.opis} disabled={izmena} onChange={ (e) => handle(e) } />
  
          <Typography gutterBottom>Visina</Typography>
          <input  type='text'id='visina' value={data.visina  } disabled={izmena} onChange={ (e) =>  handle(e) } />
    
          <Typography gutterBottom>Tezina </Typography>
          <input  type='text' id='tezina'value={data.tezina} disabled={izmena} onChange={ (e) =>  handle(e) } />
        
        <button onClick = {() => { setIzmena(!izmena) }} > Izmeni ime </button>
          <Button variant='contained' onClick={izmeniPsa}>Azuriraj ime</Button>
          
          <div className={classes.divButton}>
            <Button
              style={{
                backgroundColor: 'green',
                color: 'white',
              }}
              onClick={() => {
                localStorage.setItem('idSitera', id);
                navigate(komentarisanjeIOcenjivanjeRoute);

                // navigate(komentarisanjeIOcenjivanjeRoute, {
                //   state: {
                //     idSitera: id,
                //   },
                // });
              }}
            >
              Komentari o psu
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          {/* style={{ backgroundColor: '#2ac94d', margin: 15 }} */}
          <Button autoFocus onClick={handleClose} style={{ color: 'green' }}>
            Zatvori
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
