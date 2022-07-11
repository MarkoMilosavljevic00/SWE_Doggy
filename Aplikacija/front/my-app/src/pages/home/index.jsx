import React, { Component } from 'react'; 
import { useEffect, useState } from 'react';
import About from '../komponente/about';
import Recenzije from '../komponente/recenzije';
import Usluge from '../komponente/usluge';
import NadjiSittera from '../komponente/nadjisittera';
import PostaniSitter from '../komponente/postanisitter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classStyles from './styles';
import HeaderAdmin from '../../components/HeaderAdmin';
import NavbarVlasnik from '../headerVlasnik';
import NavBarSiter from '../headerSiter';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import PlayCircleFilledWhite from '@mui/icons-material/PlayCircleFilledWhite';

export const Home = (props) => {
  const[refresh,setRefresh]=useState('')
  const {kuca}=props
  const navigate=useNavigate();
  const [logovan,setLogovan]=useState('')

  // useEffect(()=>
  // {
  //   async function fetchData(){
  //   const TOKEN=localStorage.getItem('token')
  //  await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
  //   {
  //     headers:{ Authorization: `Bearer ${TOKEN}`
  // }}).then(res=>
  //   {
  //      setLogovan(res.data)
  //      console.log(res.data)
  //   }).catch(err=>
  //     {
  //       if(err.response.status)
  //       {
  //         //  alert('Niste logovani')
  //       }
  //     })}
  //     fetchData();
  // },[])
 
  return (
<div className='wrapper'>
{ kuca.tip==0 ? <NavbarVlasnik/>: (kuca.tip==1 ?  <NavBarSiter/> :(kuca.tip==2 ? <HeaderAdmin/> : <Header/>))} 
  <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Dobro došli na sajt Doggy</h1>
      <h2>Pravo mesto za vas i vašeg najboljeg prijatelja</h2>
      {kuca.tip==1?  <a href="#about"  hidden={true} className="btn-get-started">Zapocnite Doggy avanturu!</a> :
       (kuca.tip==0 ?  <a href="#about" hidden={true} className="btn-get-started">Zapocnite Doggy avanturu!</a>  :
       (kuca.tip==2?  <a href="#about" hidden={true} className="btn-get-started">Zapocnite Doggy avanturu!</a> : 
       <a hidden={false} className="btn-get-started" onClick={()=>{navigate('/registerRoute')}}>
        Zapocnite Doggy avanturu!
        </a> ))} 
    </div>
  </section>
  <main id="main">
<About/>
<NadjiSittera/>
<PostaniSitter/>
<Recenzije/>
<Usluge/>
    <section id="contact"  xs={12} md={6}>
      <div className="container" xs={12} md={6}>
        <div className="section-header">
          <h3 className="section-title">Kontakt</h3>
        </div>
      </div>
     
     <div className='mapa' style={{display:'flex'}} >
      {/* <iframe title='myfeame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameBorder="0" style={{border:0}} allowFullScreen></iframe> */}
      <iframe src="https://www.google.com/maps/d/embed?mid=1MHPHSMUMxGVcx5mMF587j5qzg6b5d0E&ehbc=2E312F" width="1520" height="480" style={{display:'flex'}}></iframe>
      </div>
      <div className="container mt-5" >
        <div className="row justify-content-center" >
          <div className="col-lg-3 col-md-4">
            <div className="info" style={{display:'contents'}} >
              <div>
                <i className="bi bi-geo-alt"></i>
                <p>Miloša Obilića 16-32, Surdulica</p>
              </div>

              <div>
                <i className="bi bi-envelope"></i>
                <p>doggy@gmail.com</p>
              </div>

              <div>
                <i className="bi bi-phone" ></i>
                <p >+381 064 123 4567</p>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>

  </main>
<Footer />
</div> 
)

}

export default Home;