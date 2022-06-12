import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { useState, useEffect, useContext } from 'react'
import IkonicaHome from '../../components/ikonicaHome';
import { profilVlasnikRoute,profilSitterRoute,DodajPsaRoute } from "../../router/routes";
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
      // onClick={handleMobileMenuOpen}
      >
      <MenuItem    src={'https://localhost:5001/StaticFiles/' + slika} onClick={() => navigate(profilSitterRoute)}>Profil</MenuItem>
      {/* <MenuItem onClick={() => navigate(DodajPsaRoute)}>Tvoji psi</MenuItem> */}
      <MenuItem onClick={()=>{handleMenuClose();log_out();navigate('/')}}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const slika1='https://localhost:5001/StaticFiles/' + slika
  console.log(slika1)
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
    {/* onClick={handleProfileMenuOpen} -- stavi to posle +slika */}
      <MenuItem src={'https://localhost:5001/StaticFiles/' + slika}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          src={'https://localhost:5001/StaticFiles/' + slika}
          >
         {/* <AccountCircle src={'https://localhost:5001/StaticFiles/' + slika}/> */}
         {/* <img src={'https://localhost:5001/StaticFiles/' + slika}/> */}
      
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
            
          </Avatar>
        </IconButton>
        {/* <p>Profil</p> */}
      </MenuItem>
      <MenuItem onClick={() => navigate(profilSitterRoute)}>
        <IconButton
          size="large"
         
          color="inherit"
        >
          <Badge color="success">
            <AccountCircle />
       <Typography > Profil </Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={()=>{navigate('/sitterZahteviRoute')}} >
        <IconButton
          size="large"
         
          color="inherit"
        >
          <Badge color="error">
            <NotificationsIcon />
       <Typography > Obavestenja </Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem href='./'onClick={()=>{handleMobileMenuClose();log_out();navigate('/')}}>
        <IconButton
          size="large"
         
          color="inherit"
        >
          <Badge color="error">
            <LogoutIcon />
       <Typography > Log out </Typography>
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
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit" href='/'>
              <Badge>
            <HomeIcon />
            </Badge>
            <Typography>Kuci</Typography>
          
             </IconButton>
            {/* <IconButton size="large" href='/sitterZahteviRoute' color="inherit">
              <Badge >
                <MailIcon />
              </Badge>
            </IconButton> */} 
            <IconButton
              size="larger"
              color="inherit"
              href='/sitterZahteviRoute' 
            >
              <Badge >
                <NotificationsIcon />
              </Badge>
              <Typography>Obavestenja</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              src={'https://localhost:5001/StaticFiles/' + slika}
            >
              {/* <AccountCircle src={'https://localhost:5001/StaticFiles/' + slika}/> */}
              {/* <img src={'https://localhost:5001/StaticFiles/' + slika}/> */}
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
            
          </Avatar>
              

            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {console.log('jebi se')}
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
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
//             LOGO
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
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
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
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;