import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import * as routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={routes.loginRoute} element={<Login />} />
        <Route exact path={routes.registerRoute} element={<Registracija />} />
        <Route exact path={routes.sitterRoute} element={<Sitter />} />
        <Route exact path={routes.helpRoute} element={<Help />} />
        <Route exact path={routes.adminRoute} element={<Admin />} />

        <Route
          exact
          path={routes.komentarisanjeIOcenjivanjeRoute}
          element={<KomentariasnjeIOcenjivanje />}
        />
        <Route exact path={routes.vlasnikRoute} element={<Vlasnik />} />
        <Route
          exact
          path={routes.profilVlasnikRoute}
          element={<ProfilVlasnik />}
        />
        <Route exact path={routes.DodajPsaRoute} element={<DodajPsa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
