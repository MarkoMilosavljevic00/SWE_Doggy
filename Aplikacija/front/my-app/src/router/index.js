
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/login/index.jsx';
import Registracija from '../pages/register/index.jsx';
import Home from '../pages/home/index.jsx';
import Sitter from '../pages/sitter/index.jsx';
import KomentariasnjeIOcenjivanje from '../pages/komentarisanjeIOcenjivanje/index.jsx';
import Vlasnik from '../pages/vlasnik/index.js';
import ProfilVlasnik from '../pages/profilVlasnik/index.js';
import DodajPsa from '../pages/DodajPsa/index.js';
import Help from '../pages/help/index.jsx';
import Admin from '../pages/admin/index.jsx';
import React from 'react';

import { Alert } from '@mui/material';
import { useState,useEffect } from 'react';
import PristigliZahtevi from '../pages/sitterPristigliZahtevi/index.js';
import VlasnikZahtevi from '../pages/vlasnikZahtevi/index.js';
import SitterProfil from '../pages/sitterProfil/index.js';
import AdminVlasnici from '../pages/adminVlasnici/index.jsx';
import Axios from 'axios';
import * as routes from './routes';

import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Box';
import NotFound from './NotFound.js';

const Router = () => {

  const [logovan,setLogovan]=useState('')
  const[handle,setHandle1]=useState('')
  const[isLoading,setLoading]=useState(true)
  const TOKEN=localStorage.getItem('token')
  useEffect(()=>
  {
    async function fetchData(){
    setLoading(true)
await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
    {
     
      headers:{ Authorization: `Bearer ${TOKEN}`
  }}).then(res=>
    {
     
       setLogovan(res.data)
       setLoading(false)
      
    }).catch(err=>
      {
       

      setLoading(false)
     
      })}
      fetchData();
  
},[]);


if(isLoading)
{
return <Grid style={{display:'flex',justifyContent:'center',width:'100%',height:'100vh',alignItems:'center'}}>
<CircularProgress/>
</Grid>
}
else
  return (
   
    <>
   
    <BrowserRouter>
      <Routes>
       {/* <Route element={<ProtectedRouteLogovanTrue user={logovan} />}>

    
      
       
       </Route> */}
        <Route exact path={routes.loginRoute} element={logovan ? <Navigate to={'/'}/>:<Login />} />
       <Route exact path={routes.registerRoute} element={logovan ? <Navigate to={'/'}/>:<Registracija />} />
       <Route exact path={routes.helpRoute} element={logovan ? <Navigate to={'/'}/>: <Help />} />

  


<Route exact path={routes.adminRoute}  element={  logovan?.tip===2 ? <Admin /> :
 <Navigate to={'/'}/>

  }  />

<Route exact path={routes.DodajPsaRoute} element={ logovan?.tip===0 ? <DodajPsa doggy={logovan}/> :
   <Navigate to={'/'}/>}  />
        <Route
          exact
          path={routes.profilVlasnikRoute}
          element={ logovan?.tip===0 ? <ProfilVlasnik loged={logovan} /> : 
          <Navigate to={'/'}/> }
        />
        <Route exact path={routes.sitterRoute}
         element={
           logovan?.tip===0 ? 
           <Sitter siter={logovan}/>:
           <Navigate to={'/'}/>} />
        <Route exact path="/" element={<Home kuca={logovan} />} />
        <Route
          exact
          path={routes.adminVlasniciRoute}
          element={logovan?.tip===2  ?<AdminVlasnici /> :
          <Navigate to={'/'}/>}
        />
        
        <Route
          exact
          path={routes.komentarisanjeIOcenjivanjeRoute}
          element={
            logovan?.tip===0 ?
            <KomentariasnjeIOcenjivanje komentar={logovan}/>:
            <Navigate to={'/'}/>}
        />
        <Route exact path={routes.vlasnikRoute} element={  logovan?.tip===0 ? <Vlasnik vlasnik={logovan} />: 
          <Navigate to={'/'}/>} />
        <Route exact path ={routes.profilSitterRoute} element={  logovan?.tip===1 ?<SitterProfil user={logovan}/>:
         <Navigate to={'/'}/>}/>
          <Route exact path ={routes.pristigliZahteviRoute} element={logovan?.tip===1 ? <PristigliZahtevi pristigli={logovan}/>:
         <Navigate to={'/'}/>}/>
          <Route exact path ={routes.pristigliZahteviVlasnikRoute} element={logovan?.tip===1 ? <VlasnikZahtevi/>:
         <Navigate to={'/'}/>}/>
           <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Router;
