import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DodajPsa from '../../pages/DodajPsa/index.js'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import './styles'
import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';
import IkonicaHome from '../../components/ikonicaHome';
import { profilVlasnikRoute,DodajPsaRoute } from "../../router/routes";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react'
import Axios from 'axios'
import { red } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import { CardHeader } from '@mui/material';
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
const NavBarVlasnik=()=> {
  const[slika,setSlika]=useState('')
  const ajdi=localStorage.getItem('idVlasnika')
  useEffect(()=>
  {
    Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + ajdi).then(res=>
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
          const idVlasnika=localStorage.removeItem('idVlasnika')
          const token=localStorage.removeItem('token')
          const korisnik=localStorage.removeItem('korisnik')
          const idSitera=localStorage.removeItem('idSitera')
          console.log('Uspesno ste se log autovali')
          alert('Successful log out')

  }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu
    anchorEl={anchorEl}
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
      >
      <MenuItem onClick={() => navigate(profilVlasnikRoute)}>Profil</MenuItem>
      <MenuItem onClick={() => navigate(DodajPsaRoute)}>Tvoji psi</MenuItem>
      <MenuItem onClick={()=>{handleMenuClose();log_out();navigate('/')}}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
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
    // onClick={handleMobileMenuOpen}
    >
      {/* <MenuItem href="/">
      <IconButton size="large" href="/" color="inherit">
            <Badge >
            <HomeIcon />
            </Badge>
            <Typography>Kuci</Typography>
          
            </IconButton>
            </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
      </Avatar>
      
        {/* <Typography >Profil</Typography> */}
        </IconButton>
      </MenuItem>
      <MenuItem href="/profilVlasnikRoute">
        <IconButton size="large" href="/profilVlasnikRoute"color="inherit">
          <Badge >
            <AccountCircle />
        <Typography >Profil</Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem href="/sitterRoute">
        <IconButton size="large" href="/sitterRoute"color="inherit">
          <Badge >
            <SearchIcon />
        <Typography >Nadji sitera</Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
      <IconButton size="large" href="/dodajPsaRoute" color="inherit">
              <Badge >
                <PetsIcon />
             <Typography >Tvoji psi</Typography>
              </Badge>
            </IconButton>
              
            </MenuItem>
            <MenuItem>
            <IconButton size="large" href="/" color="inherit">
              <Badge >
             <LogoutIcon/>
                
             <Typography onClick={()=>{log_out();navigate('/')}}>Log out</Typography>
              </Badge>
            </IconButton>
              
</MenuItem>
      
    </Menu>
  );

  const navigate=useNavigate();
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar  style={{backgroundColor:'#5de064'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            />
          
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" href="/" color="inherit">
            <Badge >
            <HomeIcon />
            </Badge>
            <Typography>Kuci</Typography>
          
            </IconButton>
            <IconButton size="large" href="/sitterRoute" color="inherit">
              <Badge >
                <SearchIcon />
              </Badge>
             <Typography >Nadji sitera</Typography>
              
            </IconButton>
           
            <IconButton size="large" href="/dodajPsaRoute" color="inherit">
              <Badge >
                <PetsIcon />
              </Badge>
             <Typography >Tvoji psi</Typography>
              
            </IconButton>
          
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
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
export default NavBarVlasnik

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import './styles'
// import PetsIcon from '@mui/icons-material/Pets';
// import IkonicaHome from '../../components/ikonicaHome';
// import { profilVlasnikRoute,DodajPsaRoute } from "../../router/routes";
// import { useNavigate } from "react-router-dom";
// import { useState,useEffect } from 'react'
// import Axios from 'axios'
// import { red } from '@mui/material/colors';
// import Badge from '@mui/material/Badge';
// import HomeIcon from '@mui/icons-material/Home';
// import {  CardHeader } from '@mui/material';
// import Box from '@mui/material/Box';
// import SearchIcon from '@mui/icons-material/Search';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem'
// import LogoutIcon from '@mui/icons-material/Logout';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Kuci', 'Nadji sitera', 'Tvoji psi'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const[slika,setSlika]=useState('')
//      const ajdi=localStorage.getItem('idVlasnika')
//      useEffect(()=>
//   {
//     Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + ajdi).then(res=>
//     {
//       console.log(res.data.slika + 'slik je')
//       setSlika(res.data.slika)
//     })
//   })
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DOGGY
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))} */}
//                <MenuItem href="/">
//       <IconButton size="large" href="/" color="inherit">
//              <Badge >
//              <HomeIcon />
//              </Badge>
//              <Typography>Kuci</Typography>
          
//              </IconButton>
//             </MenuItem>
//       <MenuItem href="/sitterRoute">
//          <IconButton size="large" href="/sitterRoute"color="inherit">
//            <Badge >
//              <SearchIcon />
//            </Badge>
//          </IconButton>
//                  <p>Nadji sitera</p>
//        </MenuItem>
//        <MenuItem>
//        <IconButton size="large" href="/dodajPsaRoute" color="inherit">
//                <Badge >
//                  <PetsIcon />
//                </Badge>
//              <Typography >Tvoji psi</Typography>
              
//              </IconButton>
// </MenuItem>
     

//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DOGGY
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           <Menu>

//           </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
// //               </Avatar>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//                <MenuItem onClick={'profilVlasnikRoute'}>
//         <IconButton
//            size="large"
//            aria-label="account of current user"           aria-controls="primary-search-account-menu"
//            aria-haspopup="true"
//            color="inherit"
//           >
//        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
//       </Avatar>
//         </IconButton>
//          <p>Profil</p>
//       </MenuItem>
//             <MenuItem>
//                         <IconButton size="large" href="/dodajPsaRoute" color="inherit">
//                <Badge >                 <PetsIcon />
//                </Badge>
//               <Typography >Tvoji psi</Typography>
              
//             </IconButton>
//             </MenuItem>
//       <MenuItem>
//                 <IconButton size="large" href="/" color="inherit">
//              <Badge >
//              <LogoutIcon />
//              </Badge>
//              <Typography>Log out</Typography>
          
//             </IconButton>
//             </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;