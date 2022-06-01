// import React from 'react';
// import classStyles from './styles';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar'
// //import HeaderSitter from '../../components/HeaderSitter';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import NavBar from '../headerVlasnik';
// import CardSlika from './card';



// const DodajPsa = ()=>
// {/*import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';

// const Input = styled('input')({
//   display: 'none',
// });

// export default function UploadButtons() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <label htmlFor="contained-button-file">
//         <Input accept="image/*" id="contained-button-file" multiple type="file" />
//         <Button variant="contained" component="span">
//           Upload
//         </Button>
//       </label>
//       <label htmlFor="icon-button-file">
//         <Input accept="image/*" id="icon-button-file" type="file" />
//         <IconButton color="primary" aria-label="upload picture" component="span">
//           <PhotoCamera />
//         </IconButton>
//       </label>
//     </Stack>
//   );
// }
//  */
//     console.log(1);
//     const classes = classStyles();
//     return(
//      <>
//      <NavBar />
//      <div className={classes.container}>
//        <div className={classes.glavni}>
//      <CardSlika/>

//        <Paper className={classes.paper} elevation={8}>
//        <h4 className={classes.naslov2}>Opšti podaci</h4>
//        <div>
//        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
//        <Grid item xs={6}>
//           <label>Ime:</label>
//        </Grid>
//        <Grid item xs={6}>
//           <input></input>
//        </Grid>
//        <Grid item xs={6}>
//              <label>Rasa:</label>
//        </Grid>
//        <Grid item xs={6}>
//        <input></input>
//        </Grid>
//        <Grid item xs={6}>
//              <label>Pol:</label>
//        </Grid>
//        <Grid item xs={6}>
//        <input></input>
//        </Grid>
//        <Grid item xs={6}>
//              <label>Opis:</label>
//        </Grid>
//        <Grid item xs={6}>
//        <input></input>
//        </Grid>
//        <Grid item xs={6}>
//              <label>Visina:</label>
//        </Grid>
//        <Grid item xs={6}>
//        <input></input>
//        </Grid>
//    </Grid>
//        </div>
//        </Paper>
    
      
     
//              <Paper className={classes.paper} elevation={8}>
//              <h4 className={classes.naslov2}>Izmeni pristupne parametre</h4>
//              <div>
//              <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
//              <Grid item xs={6}>
//                 <label>Novo Visina:</label>
//              </Grid>
//              <Grid item xs={6}>
//                 <input></input>
//              </Grid>
//              <Grid item xs={6}>
//                 <label>Nova tezina:</label>
//              </Grid>
//              <Grid item xs={6}>
//                 <input></input>
//              </Grid>
//              </Grid>
//              </div>                                          
//              </Paper>
         
//       <div className='dugme1'>
//       <Button classname = 'dugme' type='text' variant = 'contained'>Dodaj psa </Button>
//       </div>
//       </div>
//       <div className='contact-card'>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aafGt0LRhdmy4NTfLq7gO7U7XMR-P2VT3w&usqp=CAU' />
//         <h3>Mr shiske</h3>
//         <div className='info-group'>
//           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aafGt0LRhdmy4NTfLq7gO7U7XMR-P2VT3w&usqp=CAU'/>
//           <p>123@gmail.com</p>
//         </div>
//         <div className='info-group'>
//           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aafGt0LRhdmy4NTfLq7gO7U7XMR-P2VT3w&usqp=CAU'/>

//         <p>Mr goody</p>
//       </div>
//       </div>

//       </div>
//       </>
//       );
//     }
//     export default DodajPsa
import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import Kartica from './kartice/index.js';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import IkonicaHome from '../../components/ikonicaHome';
import { vratiSveSitereUrl, filtrirajSitere, vratiSvePse } from '../../backendAddress';
import Gradovi from '../sitter/gradovi';
import CenaPoSatu from '../sitter/cenaPoSatu';
import CardSlika from './card.js';
import ProsecnaOcena from '../sitter/prosecnaOcena';
import BrojeviStranica from '../sitter/broj';
import { Grid } from '@mui/material';
import Axios from 'axios'
import NavBar from '../headerVlasnik';

const Sitter = () => {
  const navigate = useNavigate();
  const classes = classStyles();
  const [siteri, postaviSitere] = useState([]);
  const [siteriKojiSePrikazuju, postaviSitereKojiSePrikazuju] = useState([]);
  const [stranica, postaviStranicu] = useState(1);
  const [ukupanBrojStranica, postaviUkupanBrojStranica] = useState(1);
  const [brojObjavaPoStrani, postaviBrojObjavaPoStrani] = useState(5);
  const [grad, postaviGrad] = useState('');
  const [Ocena, postaviOcenu] = useState('');
  const [cenaOd, postaviCenuOd] = useState('');
  const [cenaDo, postaviCenuDo] = useState('');

  useEffect(() => {
    fetch(vratiSvePse).then(async res => {
      const results = await res.json();
      postaviSitere(results);

      const objave = [];
      if (results.length > brojObjavaPoStrani) {
        for (let i = 0; i < brojObjavaPoStrani; i++) {
          objave.push(results[i]);
        }
      } else {
        for (let i = 0; i < results.length; i++) {
          objave.push(results[i]);
        }
      }
      postaviSitereKojiSePrikazuju(objave);

      if ((results.length / brojObjavaPoStrani) % 1 != 0) {
        //check if number have decimal places, example: 23 % 1 = 0, 23.5 % 1 = 0.5
        postaviUkupanBrojStranica(
          Math.ceil(results.length / brojObjavaPoStrani)
        );
      } else {
        postaviUkupanBrojStranica(results.length / brojObjavaPoStrani);
      }
    });
  }, []);

  useEffect(() => {
    const objave = [];
    const start = brojObjavaPoStrani * (stranica - 1);
    if (siteri.length > start + brojObjavaPoStrani) {
      for (let i = start; i < start + brojObjavaPoStrani; i++) {
        objave.push(siteri[i]);
      }
    } else {
      for (let i = start; i < siteri.length; i++) {
        objave.push(siteri[i]);
      }
    }
    postaviSitereKojiSePrikazuju(objave);
  }, [stranica]);
  const [dozvoli,setdozvoli ] = useState(true)
const dodajPsa=()=>
{const AJDI = localStorage.getItem('idVlasnika')

  Axios.post('https://localhost:5001/Pas/dodajPsa',
    {
      ime:data.ime,
      rasa:data.rasa,
      pol:data.pol,
      opis:data.opis,
      visina:data.visina,
      tezina:data.tezina,
    
      vlasnikid:AJDI

    }).then(
      res=>
      {
        console.log(res)
        console.log(res.data.id)
        localStorage.setItem('idPsa',res.data.id);
      }
    )
}
const [data,setData]=useState({
  ime:"",
  rasa:"",
  pol:"",
  opis:"",
  visina:0,
  tezina:0,
  vlasnikid:0

})
const handle=(e)=>
{
  const newData={...data}
  newData[e.target.id]=e.target.value;
  setData(newData)
  console.log(newData)
}
const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
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
    <div className={classes.container}>
    <NavBar />
    <div className={classes.dodajPsa}>
       <h4>Dodajte vašeg novog psa:</h4>
       <Fab style={{backgroundColor:'rgb(93,224,100)', marginLeft:100}} aria-label="add" onClick={handleClickOpen('paper')}>
            <AddIcon />
        </Fab>           
    <div>
    <div className='unosPsa' hidden={dozvoli}>
    <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Dodaj novog psa</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className={classes.glavni}>
              <div className={classes.grid}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
            <Grid item xs={6}>
              <label >Ime:</label>
            </Grid>
            <Grid item xs={8}>
              <input id='ime'onChange={(e)=>handle(e)} value={data.ime} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Rasa:</label>
            </Grid>
            <Grid item xs={8}>
            <input id='rasa' onChange={(e)=>handle(e)} value={data.rasa} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Pol:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)}id='pol' value={data.pol} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Opis:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)} id='opis' value={data.opis} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Visina:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)} id='visina' value={data.visina} type="number"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Tezina:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)}  id='tezina' value={data.tezina} type="number"></input>
            </Grid> 
            {/* <Grid item xs={6}>
            <Button variant="contained">Dodaj sliku</Button>
            </Grid> 
            
            <input placeholder='slika' onChange={(e)=>handle(e)} id='slika'value={data.slika} type="text"></input>
           
            {/* <Grid item xs={6}>
                  <label>Vas id:</label>
            </Grid>
            <Grid item xs={6}>
            <input placeholder='vlasnikid'onChange={(e)=>handle(e)} id='vlasnikid'value={data.vlasnikid}  type="number"></input>
            </Grid> 
            */}     
        </Grid>
        </div>
        <CardSlika/>
        </div>
      </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='text'onClick={dodajPsa}>Dodaj</Button>
        </DialogActions>
      </Dialog>
            </div>
            </div>
           
            </div>

      <div className={classes.miniContainer}>
        {/* {users.map((user, index) => <Kartica ime={user.ime} opis={user.opis} key={index } />)}   */}
        {siteriKojiSePrikazuju.map((siter, index) => {
          return (
            <Kartica
            id={siter.id}
              ime={siter.ime}
              rasa={siter.rasa}
              pol={siter.pol}
              opis={siter.opis}
              visina={siter.visina}
              tezina={siter.tezina}
              slika={siter.slika}

              key={index}
              vlasnikid={siter.vlasnikid}
            />
          );
        })}
      </div>
      <div className={classes.pagination}>
        <BrojeviStranica
          ukupanBrojStranica={ukupanBrojStranica}
          postaviStranicu={postaviStranicu}
        />
      </div>
    </div>
  );
};

export default Sitter;
