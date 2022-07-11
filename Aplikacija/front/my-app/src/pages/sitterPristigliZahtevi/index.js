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

const PristigliZahtevi=(props)=>
{
  const {pristigli}=props
  const token=localStorage.getItem('token')
  {console.log(pristigli.id)}
  const classes = classStyles();
    const[data1,setData]=useState([])
    const pristigle =async()=>{
   
      const TOKEN=localStorage.getItem('token')
      if(token!=TOKEN || !TOKEN)
      {
        window.location.reload(false)
        return
      }
       await Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera='+ pristigli.id + '&status=0',
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
const prihvacene =async()=>
{
  const TOKEN=localStorage.getItem('token')
  
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
await Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + pristigli.id + '&status=1',
{
headers:{ Authorization: `Bearer ${TOKEN}`
}
}).then(
    res=>{
       
        setAccept(res.data)
    }
)
}
const odbijene =async()=>
{
  const TOKEN=localStorage.getItem('token')
await Axios.get('https://localhost:5001/Usluga/vratiUslugeSiteruPoStatusu?idSitera=' + pristigli.id + '&status=2',
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
          {pristigli.id ? <NavBarSiter/>:<NavBar />}
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
         {data1.map((x,index) => {
              return (
                
                <CardPristigliZahtevi
                key={index}   
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
       {accept.map((p,index) => {
          return (
            <CardPrihvaceneUsluge 
            key={index}
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
              idSittera={pristigli.id}
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


    
    


    
    

