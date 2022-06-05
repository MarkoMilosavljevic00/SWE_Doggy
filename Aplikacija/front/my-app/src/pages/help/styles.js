import { makeStyles } from '@material-ui/styles';
import slika from '../../slike/dogHelp.jpg';
const classStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  naslov: {
    display: 'flex',
    justifyContent: 'center',
    color: 'green',
  },

  divSlika: {
    backgroundImage: `url(${slika})`,
    backgroundSize: 'cover',
    display: 'flex',
    width: '550px',
    height: '250px',
  },
  divSlikaVelika: {
    display: 'flex',
    flexDirection: 'row',
  },
  miniContainer: {
    color: 'green',
    display: 'flex',
    flex: 1,
    marginLeft: '50px',
  },
});
export default classStyles;
