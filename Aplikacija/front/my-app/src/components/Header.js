import React from 'react';
import Button from '@mui/material/Button';

import {
  loginRoute,
  registerRoute,
  sitterRoute,
  helpRoute,
  adminRoute,
  komentarisanjeIOcenjivanjeRoute,
} from '../router/routes';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    //  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    // <div className="container">
    //     <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
    //     <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //         Menu
    //         <i className="fas fa-bars"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //         <ul className="navbar-nav ms-auto">
    //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
    //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
    //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
    //         </ul>
    //     </div>
    // </div>
    // </nav>

    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div id="logo">
          <a href="index.html">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <h1>
            <a href="/">Doggy</a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            {/* <li><a className="nav-link scrollto active" href="#hero">Početna</a></li> */}
            <li>
              <a className="nav-link scrollto" href="#about">
                O sajtu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/vlasnikRoute">
                <i class="fa-solid fa-magnifying-glass"></i> Nadji sittera
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/RegisterRoute">
                <i class="fa-solid fa-heart"></i>Postani sitter
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="/SitterRoute">
                Sitter
              </a>
            </li>

            {/* <li><a className="nav-link scrollto" href="#dogs">Galerija pasa</a></li> */}

            <li className="dropdown">
              <a href="/#">
                <span>Usluge</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                {/* <li className="dropdown"><a href="#services"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a className="nav-link scrollto" href="#about">Deep Drop Down 1</a></li>
                  <li><a href="/#">Deep Drop Down 2</a></li>
                  <li><a href="/#">Deep Drop Down 3</a></li>
                  <li><a href="/#">Deep Drop Down 4</a></li>
                  <li><a href="/#">Deep Drop Down 5</a></li>
                </ul>
              </li> */}
                <li>
                  <a href="#services">Šetanje psa po gradu</a>
                </li>
                <li>
                  <a href="#services">Čuvanje psa u vašoj kući</a>
                </li>
                <li>
                  <a href="#services">Poseta sittera</a>
                </li>
                <li>
                  <a href="#services">Čuvanje psa u kući sittera</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Kontakt
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/helpRoute">
                Pomoć
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
          <Button color="inherit" onClick={() => navigate(loginRoute)}>
            Log In
          </Button>
          <Button color="inherit" onClick={() => navigate(registerRoute)}>
            Registruj se
          </Button>

          <Button
            color="inherit"
            onClick={() => navigate(komentarisanjeIOcenjivanjeRoute)}
          >
            KomentarisiIOceni
          </Button>

          <Button color="inherit" onClick={() => navigate(adminRoute)}>
            Admin
          </Button>
        </nav>
      </div>
    </header>
  );
}
