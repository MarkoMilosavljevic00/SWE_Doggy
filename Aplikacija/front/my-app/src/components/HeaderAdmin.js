// import React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import StartIcon from '@mui/icons-material/Start';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import {
//   loginRoute,
//   registerRoute,
//   sitterRoute,
//   helpRoute,
//   adminRoute,
//   komentarisanjeIOcenjivanjeRoute,
// } from '../router/routes';
// import { useNavigate } from 'react-router-dom';
// import { Badge, IconButton, MenuItem, Typography } from '@mui/material';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

// export default function Header() {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
//   const handleProfileMenuOpen = (event) => {
//       setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//       setMobileMoreAnchorEl(null);
// };

// const handleMenuClose = () => {
//   setAnchorEl(null);
//   handleMobileMenuClose();
// };

// const handleMobileMenuOpen = (event) => {
//   setMobileMoreAnchorEl(event.currentTarget);
// };
// const mobileMenuId = 'primary-search-account-menu-mobile';
// const renderMobileMenu = (
//   <Menu
 
//   anchorEl={mobileMoreAnchorEl}
//   anchorOrigin={{
//       vertical: 'top',
//     horizontal: 'right',
// }}
// id={mobileMenuId}
// keepMounted
// transformOrigin={{
//     vertical: 'top',
//     horizontal: 'right',
// }}
// open={isMobileMenuOpen}
// onClose={handleMobileMenuClose}
// onClick={handleMobileMenuOpen}
// >
//   {/* <MenuItem href="/">
//   <IconButton size="large" href="/" color="inherit">
//         <Badge >
//         <HomeIcon />
//         </Badge>
//         <Typography>Kuci</Typography>
      
//         </IconButton>
//         </MenuItem> */}
//   <MenuItem onClick={handleProfileMenuOpen}>
//     <IconButton
//       size="large"
//       aria-label="account of current user"
//       aria-controls="primary-search-account-menu"
//       aria-haspopup="true"
//       color="inherit"
    
//       >
      
  
  
//     {/* <Typography >Profil</Typography> */}
//     </IconButton>
//   </MenuItem>
//   <MenuItem href="#about">
//     <IconButton size="large" color="inherit">
//       <Badge >
//         {/* <AccountCircle /> */}
//     <Typography >O sajtu</Typography>
//       </Badge>
//     </IconButton>
//   </MenuItem>
//   <MenuItem href="/registerRoute">
//     <IconButton size="large" color="inherit">
//       <Badge >
//         <PlayCircleFilledWhiteIcon />
//     <Typography >Zapocni</Typography>
//       </Badge>
//     </IconButton>
//   </MenuItem>
//   <MenuItem  href="#contact">
//   <IconButton size="large" color="inherit">
//           <Badge >
//             <AddLocationAltIcon />
//          <Typography >Kontakt</Typography>
//           </Badge>
//         </IconButton>
          
//         </MenuItem>
//         <MenuItem  href="/helpRoute">
//   <IconButton size="large" color="inherit">
//           <Badge >
//             <HelpOutlineIcon />
//          <Typography >Pomoc</Typography>
//           </Badge>
//         </IconButton>
          
//         </MenuItem>
//         {/* <MenuItem>
//   <IconButton size="large" href="/dodajPsaRoute" color="inherit">
//           <Badge >
//             <PetsIcon />
//          <Typography >Usluge</Typography>
//           </Badge>
//         </IconButton>
          
//       </MenuItem>*/}
//         <MenuItem onClick={()=>{navigate('./loginRoute')}}>
//   <IconButton size="large"  color="inherit">
//           <Badge >
           
//          <Typography >Log in</Typography>
//           </Badge>
//         </IconButton>
          
//         </MenuItem>
//         <MenuItem onClick={()=>{navigate('./registerRoute')}}>
//   <IconButton size="large"  color="inherit">
//           <Badge >
            
//          <Typography >Registruj se</Typography>
//           </Badge>
//         </IconButton>
          
//         </MenuItem>
//         <MenuItem >
//   <IconButton size="large" color="inherit">
//           <Badge >
            
//          <Typography >Zatvori</Typography>
//           </Badge>
//         </IconButton>
          
//         </MenuItem>
       
  
        
//     </Menu>
//         );
//   return (
//     //  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
//     // <div className="container">
//     //     <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
//     //     <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//     //         Menu
//     //         <i className="fas fa-bars"></i>
//     //     </button>
//     //     <div className="collapse navbar-collapse" id="navbarResponsive">
//     //         <ul className="navbar-nav ms-auto">
//     //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
//     //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
//     //             <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
//     //         </ul>
//     //     </div>
//     // </div>
//     // </nav>

//     <header
//       id="header"
//       className="fixed-top d-flex align-items-center header-transparent"
//     >
//       <div className="container d-flex justify-content-between align-items-center">
//         <div id="logo">
  
//           <h1>
//             <a href="/">Doggy</a>
//           </h1>
//         </div>

//         <nav id="navbar" className="navbar">
//           <ul>
//             {/* <li><a className="nav-link scrollto active" href="#hero">Početna</a></li> */}
//             <li>
              
//               <IconButton  href="#about">
            
//               <Typography style={{color:'white'}} className="nav-link scrollto">
//                 O sajtu
//               </Typography>
              
//               </IconButton>
              
              
//             </li>

//             <li>
              
//               <IconButton  href="/registerRoute">
//             <PlayCircleFilledWhiteIcon/>
//               <Typography fontSize={14} style={{color:'white'}} className="nav-link scrollto">
//                 Zapocni 
//               </Typography>
              
//               </IconButton>
              
              
//             </li>

//              {/* <li> */}
//             {/* /* <li>
//             <IconButton href="/registerRoute">
//               <Typography style={{color:'white'}}className="nav-link scrollto" href="/registerRoute">
//                 <i class="fa-solid fa-magnifying-glass"></i> Nadji sittera
//               </Typography>
//               </IconButton>
//             </li>
//             <li>
//             <IconButton href="/registerRoute">
//               <Typography   style={{color:'white'}} className="nav-link scrollto " href="/registerRoute">
//                 <i class="fa-solid fa-heart"></i>Postani sitter
//               </Typography>
//               </IconButton>
//   </li> */}
//               {/* <a className="nav-link scrollto " href="/SitterRoute">
//                 Sitter
//               </a>
//             </li>  */}

//             {/* <li><a className="nav-link scrollto" href="#dogs">Galerija pasa</a></li> */}
// {/*  */}
//             <li>
//             <IconButton href="#contact">
//               <AddLocationAltIcon/>
//               <Typography fontSize={14} className="nav-link scrollto" href="#contact" style={{color:'white'}}>
//                 Kontakt
//               </Typography>
//               </IconButton>
//             </li>
//             <li>
//             <IconButton  href="/helpRoute">
//               <HelpOutlineIcon />
//               <Typography fontSize={14} className="nav-link scrollto" href="/helpRoute" style={{color:'white'}}>
//                 Pomoć
//               </Typography>
//               </IconButton>
//             </li>
//             {/* <li>
//               <a className="nav-link scrollto" href="/adminRoute" style={{marginLeft:'50px'}}>
//                Admin
//               </a>
//             </li>
//              <li> */}
//             <li className="dropdown" >
//             <IconButton>
//               <Typography style={{color:'white'}}href="/#">
//                 <span fontSize={18}>Usluge</span> <i className="bi bi-chevron-down"></i>
//               </Typography>
//               </IconButton>
//               <ul>
//                 {/* <li className="dropdown"><a href="#services"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
//                 <ul>
//                   <li><a className="nav-link scrollto" href="#about">Deep Drop Down 1</a></li>
//                   <li><a href="/#">Deep Drop Down 2</a></li>
//                   <li><a href="/#">Deep Drop Down 3</a></li>
//                   <li><a href="/#">Deep Drop Down 4</a></li>
//                   <li><a href="/#">Deep Drop Down 5</a></li>
//                 </ul>
//               </li> */}
//                 <li>
//                   <a href="#services" >Šetanje psa po gradu</a>
//                 </li>
//                 <li>
//                   <a href="#services" >Čuvanje psa u vašoj kući</a>
//                 </li>
//                 <li>
//                   <a href="#services">Poseta sittera</a>
//                 </li>
//                 <li>
//                   <a href="#services" >Čuvanje psa u kući sittera</a>
//                 </li>
//               </ul>
//             </li>
//              <li>
//              <IconButton href="/loginRoute">
//               <Typography className="nav-link scrollto" href="/loginRoute" style={{color:'white',fontWeight:'bolder'}}>
//                 Log In
//               </Typography>
//               </IconButton>
//             </li>
//             <li>
//             <IconButton href="/registerRoute">
//               <Typography className="nav-link scrollto" href="/registerRoute"style={{color:'white',fontWeight:'bolder'}}>
//                 Registruj se
//               </Typography>
//               </IconButton>
//             </li>
//           </ul>
//           <i  onClick={handleMobileMenuOpen}class="bi bi-list mobile-nav-toggle"></i>
 
//         </nav>
//       </div>
//       {renderMobileMenu}
//     </header>
//   );
// }
import * as React from 'react';
import Link from '@mui/material/Link';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
 import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { useState, useEffect, useContext } from 'react'
// import IkonicaHome from '../../components/ikonicaHome';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { profilVlasnikRoute,profilSitterRoute,DodajPsaRoute, adminRoute } from "../router/routes";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { red } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import { CardHeader } from '@mui/material';
import { Home } from '@mui/icons-material';
const Search = styled('div')(({ theme }) => ({
 
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const NavBarSiter=()=> {
  const[slika,setSlika]=useState('')
  const ajdi=localStorage.getItem('idSitera')
  useEffect(()=>
  {
    Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + ajdi).then(res=>
    {
      console.log(res.data.slika + 'slik je')
      setSlika(res.data.slika)
    })
  },[])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const log_out=()=>
    {
           
            const token=localStorage.removeItem('token')
            navigate('/')
          window.location.reload(false)
            // console.log('Uspesno ste se log autovali')
            alert('Successful log out')
  
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMobileMenuOpen}
      >
      <MenuItem    src={'https://localhost:5001/StaticFiles/' + slika} onClick={() => navigate(adminRoute)}>Profil</MenuItem>
      {/* <MenuItem onClick={() => navigate(DodajPsaRoute)}>Tvoji psi</MenuItem> */}
      <MenuItem onClick={()=>{handleMenuClose();log_out()}}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const slika1='https://localhost:5001/StaticFiles/' + slika
  // console.log(slika1)
  const renderMobileMenu = (
      <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
          vertical: 'top',
        horizontal: 'right',
    }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    
    >
     
      <MenuItem onClick={()=>{navigate('./adminRoute')}}>
        <IconButton
          size="large"
         
          color="inherit"
        >
          <Badge color="error">
            <AdminPanelSettingsIcon />
       <Typography > Proveri sve </Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      
      {/* <MenuItem onClick={()=>{navigate('./helpRoute')}}>
        <IconButton
          size="large"
         
          color="inherit"
        >
          <Badge color="error">
            <HelpOutlineIcon />
       <Typography > Pomoc </Typography>
          </Badge>
        </IconButton>
      </MenuItem> */}
   
  
     <MenuItem onClick={()=>{log_out();}}>
     <IconButton
       size="large"
      
       color="inherit"
     >
       <Badge color="error">
         <LogoutIcon />
    <Typography > Log Out</Typography>
       </Badge>
     </IconButton>
   </MenuItem>

 {/* <MenuItem onClick={()=>{navigate('./registerRoute')}}>
 <IconButton
   size="large"
  
   color="inherit"
 >
   <Badge color="error">
     <AppRegistrationIcon />
<Typography > Registruj se </Typography>
   </Badge>
 </IconButton>
</MenuItem> */}
</Menu>
  );

  const navigate=useNavigate();
  const log_out_admin=()=>
  {
    // const idVlasnika=localStorage.removeItem('idVlasnika')
    const token=localStorage.removeItem('token')
    const korisnik=localStorage.removeItem('korisnik')
    const idAdmina=localStorage.removeItem('idAdmina')
    navigate('/')
    console.log('Uspesno ste se log autovali')
    alert('Successful log out')

}
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar  position='fixed' style={{display:'flex'}}>
        <Toolbar  position='fixed'style={{backgroundColor:'#5de064',display:'flex'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            
            >
            {/* <HomeIcon /> */}
          </IconButton>
          <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
    
        <div id="logo">
          <h1>
            <a href="./">Doggy</a>
          </h1>
        </div>
        </header>
          
          <Box sx={{ flexGrow: 1,flexShrink:1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div className="container d-flex justify-content-between align-items-center">
       

        <nav xs={12} md={6} id="navbar" className="navbar">
          <ul style={{display:'flex'}} xs={12} md={6}>
          
            <li  style={{display:'flex'}}>
              
              <IconButton  href='/adminRoute'  style={{display:'flex'}}>
            <AdminPanelSettingsIcon></AdminPanelSettingsIcon>
              <Typography style={{color:'white',display:'flex'}} className="nav-link scrollto">
               Proveri sve
              </Typography>
              
              </IconButton>
           </li>

            <li>  
            <IconButton   onClick={()=>{log_out();}} style={{display:'flex'}}>
              <LogoutIcon style={{color:'white'}} />
              <Typography fontSize={14} className="nav-link scrollto"  style={{color:'white',display:'flex'}}>
                Log Out
              </Typography>
              </IconButton>
            </li>
            <div className='upadaj' style={{display:'flex'}}>
          
            </div>
          </ul>
          </nav>
          </div>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {/* {console.log('jebi se')} */}
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              // src={'https://localhost:5001/StaticFiles/' + slika}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default NavBarSiter

