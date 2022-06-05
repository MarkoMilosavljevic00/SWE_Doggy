import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import classStyles from './styles';
import { aaa } from '../aaa/index.jsx';

export default function BasicCard(props) {
  const { ime, prezime, telefon, grad, cenaPoSatu, bio, validan, dugme } =
    props;

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  const classes = classStyles();
  return (
    <div className={classes.miniContainer}>
      <Card
        style={{
          display: 'flex',
          margin: 10,
          width: '650px',
          borderRadius: '30px',

          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography
            color="#006f03"
            sx={{ fontSize: 25 }}
            component="div"
            gutterBottom
          >
            {ime} {prezime}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Broj telefona: {telefon}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Grad: {grad}</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Cena po satu: {cenaPoSatu}
          </Typography>
          {/* <Typography sx={{ fontSize: 20 }}>
            {validan ? 'Validan' : 'Nevalidan'}
          </Typography> */}
          <Typography sx={{ fontSize: 16 }}>Opis: {bio}</Typography>
        </CardContent>

        <div className={classes.divButton}>
          {dugme ? (
            <CardActions>
              <Button
                style={{
                  display: 'flex',
                  backgroundColor: 'green',
                  color: 'white',
                }}
              >
                Prikazi komentare i ocene
              </Button>
            </CardActions>
          ) : (
            <CardActions>
              <label>Validan: </label>
              <FormControlLabel control={<Android12Switch />} />
            </CardActions>
          )}
        </div>
      </Card>
    </div>
  );
}
