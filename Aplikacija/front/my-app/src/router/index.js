import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "../pages/login/index.jsx"
import Registracija from "../pages/register/index.jsx"
import Home from "../pages/home/index.jsx"
import Sitter from "../pages/sitter/index.jsx"

import * as routes from "./routes";

const Router = () => {
    
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={routes.loginRoute} element={<Login/>} />
          <Route exact path={routes.registerRoute} element={<Registracija/>} />
          <Route exact path={routes.sitterRoute} element={<Sitter/>}  />
        </Routes>
      </BrowserRouter>
  );
}


export default Router;
