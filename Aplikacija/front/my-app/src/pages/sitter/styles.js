import { makeStyles } from '@material-ui/styles';
const classStyles = makeStyles({
  container: {
    backgroundColor: '#95e36e61',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  miniContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },

  divSearch: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },

  buttonPotvrdi: {
    display: 'flex',
    margin: '15px',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
});
export default classStyles;
