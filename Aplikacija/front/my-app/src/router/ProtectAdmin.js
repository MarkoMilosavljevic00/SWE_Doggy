import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
const ProtectAdmin = () => {
  return (
    <>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            align="center"
            variant="h4"
            fontWeight='bold'
            
          >
          UNAUTHORIZED
          </Typography>
          {/* <Typography
            align="center"
            color=" orange"
            variant="subtitle2"
          >
            
          </Typography> */}
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src="https://i.pinimg.com/originals/ac/06/47/ac064781d562d0963f62ab456c0f2f01.png"
              style={{
                marginTop: 0,
                display: 'inline-block',
                maxWidth: '100%',
                height:'650px'
              }}
            />
          </Box>
          <Link
            to='/'                                                                                                                                              
          >
            <Button
            style={{backgroundColor:'blue',color:'white'}}
              component="a"
              startIcon={(<ArrowBackIcon fontSize="small" />)}
              
              variant="contained"
              
            >
              Vrati se na pocetnu
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  </>
  )
};
export default ProtectAdmin
