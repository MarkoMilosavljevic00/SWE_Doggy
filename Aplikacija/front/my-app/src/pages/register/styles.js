import { makeStyles } from '@material-ui/styles';
import slika from '../../slike/slika6.jpg';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'yellow',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

const classStyles = makeStyles({
  dugme: {
    backgroundColor: 'blue',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${slika})`,
    backgroundSize: 'cover',

    // marginTop: 150,
    // backgroundColor: "red"
  },
  divRegister: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    height: 400,
    justifyContent: 'space-evenly',
  },
  // divButton: {
  // display: "flex",
  // justifyContent: "space-evenly"
  // },

  divInput: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
  },

  naslov: {
    textAlign: 'center',
    color: 'green',
  },

  divContainer: {
    display: 'flex',
    flexDirection: 'column',
    // border:"1px solid black",
    // alignItems:""
  },

  divIme: {
    display: 'flex',
    flex: 1,
  },

  inputPrezime: {},

  divButton: {
    display: 'flex',
  },
});

export default classStyles;
