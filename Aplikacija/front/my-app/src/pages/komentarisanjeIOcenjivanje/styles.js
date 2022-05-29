import { makeStyles } from '@material-ui/styles';
const classStyles = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#95e36e61',
  },

  miniContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
export default classStyles;
