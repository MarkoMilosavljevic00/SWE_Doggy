import { makeStyles } from '@material-ui/styles';
import slika from '../../slike/aaa.jpg';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const classStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${slika})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundColor: '#D5F4C8',
    flex: 1,
    alignItems: 'center',
  },
  divRegistracija: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '300px',
  },
});

export default classStyles;
