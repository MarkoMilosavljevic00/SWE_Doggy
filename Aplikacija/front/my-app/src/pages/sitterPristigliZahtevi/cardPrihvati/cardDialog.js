import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import classStyles from './styles';
import Axios from 'axios';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from'@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const CardDialog = props => {
  const classes = classStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [rec,setRec]=useState('');
  const[f,setChecked]=useState(false);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { idPsa, ime, rasa, pol, visina, tezina, prosecnaOcena, opis, idSittera, vlasnikId, id, napomena} = props;
  useEffect(() => {

   Axios.get('https://localhost:5001/Recenzija/vratiRecenzijeZaPsa?id=' + idPsa).then(
     res=>
     {
       
       setRec(res.data)
     }
   )
  }, []);

  const obavljena=(props)=>
    {
        Axios.put('https://localhost:5001/Usluga/azurirajStatusUsluge?idUsluge=' + props + '&status=3').then(
            res=>
            {
                console.log('Uspesno obavljena usluga xd')
                
            }
            )
        }
  const[komentar,setKomentar]=useState('')
  const[ocena,setOcena]=useState('')
  const[hajd,setHajd]=useState(true)

  const handleHajd=()=>
  {
    setHajd(!hajd)
  }
  const oceni=(vlasnikId,pasId,komentar,ocena)=>
  {
    Axios.post('https://localhost:5001/Recenzija/dodajRecenzijuPsu',
    {
      siterId:idSittera,
      vlasnikId:vlasnikId,
      pasId:idPsa,
      komentar,
      ocena
    }).then(
      res=>
      {
      alert('success')
      window.location.reload(false)
      }
    )
  }

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      {/* <Button style={{ color: 'green' }} onClick={handleClickOpen('paper')}>
        {tekstButton}
  </Button>*/}
      <Button
        style={{ color: 'white', backgroundColor: 'rgb(93, 224, 100)', borderRadius: '20px' , marginLeft:'20px'}}
        onClick={handleClickOpen('paper')}
      >
        Prikazi informacije o psu 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{ color: 'green' }} id="scroll-dialog-title">
          Informacije:
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <Typography variant="h6" color='black'>Osnovni podaci:</Typography>
          <Typography variant="body1" color='black'>Ime psa: {ime}</Typography>
          <Typography variant="body1" color='black'>Rasa psa: {rasa} </Typography>
          <Typography variant="body1" color='black'>Pol psa: {pol}</Typography>
          <Typography variant="body1" color='black'>Visina psa: {visina}</Typography>
          <Typography variant="body1" color='black'>Tezina psa: {tezina}</Typography>
          <Typography variant="body1" color='black'>Prosecna ocena psa: {prosecnaOcena}</Typography>
          <Typography variant="body1" color='black'>Komentari o psu:</Typography>
          {rec && rec.map((d,index)=>
          (
          <Typography variant="body1" color='black'>
            {index+1 + ". " + d.komentar} 
          </Typography>
            ))}
          <Typography variant="h6" color='black'>Opis psa:</Typography>
          <Typography variant="body1" color='black'>{opis}</Typography>
          {/* <Typography variant="h6" color='black'>Napomena: {napomena}</Typography> */}
          
          <div className='svecek' style={{marginTop:'15px',textAlign:'center'}}>
            <Typography variant='h6' color='black'>Usluga izvrsena?</Typography>
          <div className='cekirano' style={{display:'flex',justifyContent:'center'}}>

          <Typography paragraph>Nije izvrsena</Typography>
          <Switch {...label} checked={f} onClick={()=>{setChecked(!f);obavljena(id);handleHajd();}} color="secondary" name='jason'/>
          <Typography paragraph>Izvrsena</Typography>
          </div>
          </div>
          <div className={classes.divbox} hidden={hajd}>
    <div className='asda'>
        <Typography variant='h5'color='black' paragraph style={{textAlign:'center'}}> Oceni psa</Typography>
    </div>
          <TextField
          required
          id="outlined-required"
          label="Komentari"
          multiline
          value={komentar}
          defaultValue="Hello World"
          style={{marginBlockEnd:'10px'}}
          onChange={ (e) =>  setKomentar((e.target.value))}
        />
         <TextField
          id="outlined-number"
          label="Ocena"
          type="number"
          value={ocena}
          InputLabelProps={{
            shrink: true,
          }}
          style={{marginBlockEnd:'10px'}}
          InputProps={{ inputProps: { min: 0, max: 5} }}
          onChange={ (e) =>  setOcena((e.target.value))}
        />
        <Button style={{color: 'white', backgroundColor: 'rgb(93, 224, 100)' }} onClick={()=>{oceni(vlasnikId,idPsa,komentar,ocena)}}>Pošalji ocenu siteru</Button>
      </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{color: 'white', backgroundColor: 'rgb(93, 224, 100)' }} onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CardDialog;
