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
import Popper from '@mui/material/Popper';
import CardDialog from '../../card.js';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { komentarisanjeIOcenjivanjeRoute } from '../../../../../router/routes';
import { Restaurant } from '@mui/icons-material';
import { display } from '@mui/system';
import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import { Popover } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import CardSlika from '../../../card.js';
import Sitter from '../../../index.js';
import Modal from '@mui/material/Modal';
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
  const [logovan,setLogovan]=useState('')
  const[handle1,setHandle1]=useState('')
  const token=localStorage.getItem('token')
  useEffect(()=>
  {
    async function fetchData(){
    const TOKEN=localStorage.getItem('token')
    await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
    {
      headers:{ Authorization: `Bearer ${TOKEN}`
  }}).then(res=>
    {
       setLogovan(res.data)
       console.log(res.data.id)
       setHandle1(!handle1)
    })
  }
  fetchData();
  },[])
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
    const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [milica,setMilica]=useState('')
  const[brisi,setBrisi]=useState(false)
  const handleBrisi=()=>
  {
    setBrisi(!brisi);
    
  }
  useEffect(()=>
  {
    async function fetchData(){
    const TOKEN=localStorage.getItem('token')
    await Axios.get('https://localhost:5001/Pas/vratiPseZaVlasnika?idVlasnika=' + logovan.id,
      {
        headers:{ Authorization: `Bearer ${TOKEN}`}
      
    }).then(
      res=>
      {
      console.log(res.data + 'ahah')
      
      }
    )}
    fetchData();
  },[brisi,handle1])

  
  const obrisiPsa = async ()=>
  {
    
    const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
  
     await Axios.delete('https://localhost:5001/Pas/obrisiPsa?id=' + id,
      {
        headers:
        {
          Authorization: `Bearer ${TOKEN}`
        }
      }).then(res=>
      {   
      console.log(res);
      window.location.reload(false)
    })
   
}

const [izmena,setIzmena ] = useState(true)

const handle=(e)=>
{
    const newData={...data}
  newData[e.target.id]=e.target.value;
  setData(newData)
  console.log(newData)
  
  

}
const[input,setInput]=useState(false);
const[profil,setProfil]=useState('')
const [data,setData]=useState({
  id:id,
    ime:ime,
    rasa:rasa,
    pol:pol,
    opis:opis,
    visina:visina,
    tezina:tezina,
    slika:slika,
    vlasnikId:logovan.id
  
  })
  const izmeniPsa = async()=>
  {console.log(data)
    const TOKEN=localStorage.getItem('token')
  
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    if(data.id==='' || data.ime==='' || data.rasa==='' || data.pol===''|| data.opis===''||data.visina==='' || data.tezina==='' || data.visina <=0 || data.visina>=200|| data.tezina<=0 || data.tezina>=100)
    {

      alert('Molimo Vas unesite validne informacija na formi za izmenu podataka o psu!')
      return
    }
    await  Axios.put('https://localhost:5001/Pas/azurirajPsa',
      {  id:data.id,
         ime:data.ime,
         rasa:data.rasa,
         pol:data.pol,
         opis:data.opis,
         visina:data.visina,
         tezina:data.tezina,
         slika:data.slika,
         vlasnikId:logovan.id
      },
      {
      
        headers:{ Authorization: `Bearer ${TOKEN}`}
      })
         .then(response=>
          {
              if(response.status==200)
              {   
                  console.log('Uspesna promena podataka')
                 console.log(response)
                 setData(response.data)
                 window.location.reload(false)
                 alert('Uspesno ste izmenili podatke o psu')
              }
  
          }).catch((error)=>
          {
            if(error.response.status)
            {
              alert(error.response.data)
            }
          })
         
  }

const[usluga,setUsluga]=useState([])
 useEffect(()=>{
async function fetchData(){
   const TOKEN=localStorage.getItem('token')
  console.log('id psa je:' + id)
  // console.log('id vlasnika je:' + idVlasnika)
 await Axios.get('https://localhost:5001/Usluga/vratiUslugeVlasniku?idVlasnika=' + vlasnikId,
  { 
    
    headers:{ Authorization: `Bearer ${TOKEN}`}
    
  }).then(
    res=>
    {
      console.log(res)
      setUsluga(res.data)
    }
  )
}
fetchData();
},[handle1])

  const navigate = useNavigate();
  const[otkriven,setOtkriven]=useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick1= (event) => {
    setAnchorEl(1);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const open1 = Boolean(anchorEl);
  const id1 = open ? 'simple-popover' : undefined;
const handleIzmena=()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
  setIzmena(!izmena)
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
    <div className={classes.container}>
      <div className='dugmici' style={{display:'grid'}}>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        size="small"
      >
        Informacije o psu
      </Button>
      <Button variant='contained' color='error' size='small' onClick={handleOpenModal} >Obrisi psa</Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
           Da li zaiste zelite da obrisete Vaseg psa?
          </Typography>
                  <button type='button' className="btn btn-primary" onClick={()=>{obrisiPsa();}} >Potvrdi</button>
        <button type='button' className="btn btn-outline-primary ms-1" onClick={handleCloseModal} >Zatvori</button>
                
        </Box>
      </Modal>
    {usluga.map(x=>
    (
      <CardDialog  imesitera={x.siter.ime} />    
     ) )}
      <div>
      <Popover
      id={id1}
      open={open1}
      anchorEl={anchorEl}
      onClose={handleClose1}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      >
      {usluga.map(p=>(         
          <h3>{p.siter.ime} je prihvatio vasu uslugu</h3>
        )
        )
        }
      </Popover>
    </div>
      </div>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // onClick={}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Informacije o psu
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className='izmena'style={{display:'inital',maxWidth:'425px'}}>
            <div className='prvideoizmena'>
          <div className='dugmeizmena' style={{display:'grid',marginBottom:'20px'}}>
        <button onClick = {() => { handleIzmena();}} style={{maxWidth:'377px',minWidth:'377px',marginLeft:'25px'}}> Izmeni podatke </button>
         </div>
         <div className='1p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Ime:  </Typography>
        <input  type='text' id='ime' value={data.ime} style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) =>  handle(e) }/>
        </div>
         
        <div className='2p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Rasa: </Typography>
          <input  type='text' id='rasa'value={data.rasa} style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) =>  handle(e) }/>
          </div>
          <div className='3p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Pol: </Typography>
          <input  type='text'id='pol' value={data.pol} style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) => handle(e) }/>
          </div>
          <div className='4p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Opis:</Typography>
          <input  type='text' id='opis'value={data.opis} style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) => handle(e) } />
          </div>
          <div className='5p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Visina:</Typography>
          <input  type='number'id='visina' value={data.visina  } style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) =>  handle(e) } />
          </div>
          <div className='6p'style={{display:'flex',justifyContent:'space-between',margin:'25px'}}>
          <Typography gutterBottom>Tezina: </Typography>
          <input  type='number' id='tezina'value={data.tezina} style={{minWidth:'250px',maxWidth:'350px'}}disabled={izmena} onChange={ (e) =>  handle(e) } />
          </div>
          </div>
          <div className='cardslika'>
            <div className='azurirajj' style={{textAlign:'center'}}>
          <Button variant='contained'  style={{marginBottom:'20px',backgroundColor:'rgb(93, 224, 100)'}}onClick={()=>{handleIzmena();izmeniPsa();}}>Azuriraj podatke</Button>
          </div>
        <CardSlika id={id}/>
        {/* <Sitter brisi={brisi}/> */}
        </div>
        </div>
          <div className={classes.divButton}>
          {/* <div className='krajdugmici' style={{display:'grid',marginTop:'20px'}}>
          
            <Button
              style={{
                backgroundColor: 'rgb(93, 224, 100)',
                color: 'white',
              }}
              onClick={() => {
                // localStorage.setItem('idSitera', id);
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
            </div> */}
          </div>
        </DialogContent>
        <DialogActions>
          {/* style={{ backgroundColor: '#2ac94d', margin: 15 }} */}
          <Button autoFocus onClick={handleClose} style={{ color: 'rgb(93, 224, 100)' }}>
            Zatvori
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    </>
  );
}
