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

const Sitter = (props) => {
  const navigate = useNavigate();
  const classes = classStyles();
  const [siteri, postaviSitere] = useState([]);
  const [psiKojiSePrikazuju, postaviPseKojiSePrikazuju] = useState([]);
  const [stranica, postaviStranicu] = useState(1);
  const [ukupanBrojStranica, postaviUkupanBrojStranica] = useState(1);
  const [brojObjavaPoStrani, postaviBrojObjavaPoStrani] = useState(5);
  const [grad, postaviGrad] = useState('');
  const [Ocena, postaviOcenu] = useState('');
  const [cenaOd, postaviCenuOd] = useState('');
  const [cenaDo, postaviCenuDo] = useState('');
 
  const{doggy}=props;

  // console.log('ime je: ' + doggy.ime + ' || id je:' + doggy.id)

// const idVlasnika=localStorage.getItem('idVlasnika')
const [refresh,setRefresh]=useState('')
const [logovan,setLogovan]=useState('')
  const[handle1,setHandle1]=useState('')
  const token=localStorage.getItem('token')
  // useEffect(()=>
  // {
  //   async function fetchData(){
  //   const TOKEN=localStorage.getItem('token')
  // await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
  //   {
  //     headers:{ Authorization: `Bearer ${TOKEN}`
  // }}).then(res=>
  //   {
  //      setLogovan(res.data)
  //      console.log(res.data.id)
  //      setHandle1(!handle1)
  //   })
  // }
  // fetchData();
  // },[])
  useEffect(() => {
    
    const TOKEN=localStorage.getItem('token')
    fetch('https://localhost:5001/Pas/vratiPseZaVlasnika?idVlasnika=' + doggy.id,{
      headers:{
        Authorization: `Bearer ${TOKEN}`
      }
    }).then(async res => {
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
      postaviPseKojiSePrikazuju(objave);

      if ((results.length / brojObjavaPoStrani) % 1 != 0) {
        //check if number have decimal places, example: 23 % 1 = 0, 23.5 % 1 = 0.5
        postaviUkupanBrojStranica(
          Math.ceil(results.length / brojObjavaPoStrani)
        );
      } else {
        postaviUkupanBrojStranica(results.length / brojObjavaPoStrani);
      }
    }).catch(err=>
      {
        if(err.response.status)
        {
          alert(err.response.data)
        }
      });
  }, [refresh,handle1]);

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
    postaviPseKojiSePrikazuju(objave);
  }, [stranica]);
  const [dozvoli,setdozvoli ] = useState(true)
  const [milica,setMilica]=useState(false)
 const handleRefresh=()=>
  {
    setRefresh(!refresh)
  }
const dodajPsa=async ()=>
{

  const AJDI=doggy.id
const TOKEN=localStorage.getItem('token')

if(token!=TOKEN || !TOKEN)
{
  window.location.reload(false)
  return
}
if(data.ime==='' || data.rasa==='' || data.pol==='' || data.opis==='' || data.visina==='' || data.tezina==='' || data.visina<=0 || data.tezina <=0 || data.tezina>=100 || data.visina>=200)
{
  alert('Molimo Vas popunite pravilno formu!!!')
  return 
}
  await Axios.post('https://localhost:5001/Pas/dodajPsa',
    {
      ime:data.ime,
      rasa:data.rasa,
      pol:data.pol,
      opis:data.opis,
      visina:data.visina,
      tezina:data.tezina,
      vlasnikid:AJDI

    },{ headers: {
      'Authorization': 'Bearer ' + TOKEN
    }}).then(
      res=>
      {
        console.log(res)
        console.log(res.data.id)
        handleRefresh()
      }
    ).catch(err=>
      {
        if(err.response.status)
        {
          alert(err.response.data)
        }
      })
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
    <>
    
    <div className={classes.container}>
    <NavBar />
    <div className={classes.dodajPsa}>
       <h1>Dodajte vašeg novog psa:</h1>
       <div className='asdasd' style={{textAlign:'center'}}>
       <Fab className={classes.fab}style={{backgroundColor:'rgb(93,224,100)'}} size='large' aria-label="add" onClick={handleClickOpen('paper')}>
            <AddIcon />
        </Fab>           
        </div>
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
            <Grid container rowSpacing={1} style={{width:'400px',justifyContent:'center'}}columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
              <div className='asdas'>
              <h4>Informacije o Vasem psu</h4>
              </div>
              <div>
            <Grid item xs={6}>
              <label >Ime:</label>
            </Grid>
            <Grid item xs={8}>
              <input id='ime'onChange={(e)=>handle(e)} value={data.ime} type="text"></input>
            </Grid>
            </div>
            <div>
            <Grid item xs={6}>
                  <label>Rasa:</label>
            </Grid>
            <Grid item xs={8}>
            <input id='rasa' onChange={(e)=>handle(e)} value={data.rasa} type="text"></input>
            </Grid>
            </div>
            <div>
            <Grid item xs={6}>
                  <label>Pol:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)}id='pol' value={data.pol} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Opis:</label>
            </Grid>
            </div>
            <div>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)} id='opis' value={data.opis} type="text"></input>
            </Grid>
            <Grid item xs={6}>
                  <label>Visina:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)} id='visina' value={data.visina} type="number"></input>
            </Grid>
            </div>
            <div>
            <Grid item xs={6}>
                  <label>Tezina:</label>
            </Grid>
            <Grid item xs={8}>
            <input onChange={(e)=>handle(e)}  id='tezina' value={data.tezina} type="number"></input>
            </Grid> 
            </div>
        </Grid>
        </div>
        {/* <CardSlika/> */}
        </div>
      </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='text'onClick={()=>{dodajPsa();handleClose();}}>Dodaj</Button>
        </DialogActions>
      </Dialog>
            </div>
            </div>           
            </div>
      <div className={classes.miniContainer}>
        {psiKojiSePrikazuju.map((siter, index) => {
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
              vlasnikid={doggy.id}
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
    </>
  );
};

export default Sitter;
