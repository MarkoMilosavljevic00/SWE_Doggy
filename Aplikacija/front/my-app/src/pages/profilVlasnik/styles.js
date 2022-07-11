import { makeStyles } from '@material-ui/styles';
import slika from '../../slike/slika6.jpg';
import { styled } from '@mui/material/styles';

const classStyles = makeStyles({
  container: {
    displey: 'flex',
    flexDirection: 'row',
    // backgroundImage:'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)'
    backgroundColor: 'rgb(234, 252, 220)',
    height:'750px'
  },
  naslov: {
    textAlign: 'center',
    color: 'green',
  },
  naslov2: {
    color: 'green',
  },
  slika: {
    displey: 'flex',
    flexDirection: 'column',
  },
  glavni: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap:'wrap',
    flex: 1,
    backgroundColor: 'rgb(234, 252, 220)'
   
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.4,
    padding: 30,
  },
  tekst: {
    color: 'green',
  },
  divButton: {
    alignItems: 'center',
  },
  divButtonCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default classStyles;
