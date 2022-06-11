import { makeStyles } from '@material-ui/styles';
const classStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#d2facc',
  },
  header:{
    display: 'flex',
    width: '100%'
  },
  zahteviPristigli:{
     display:'flex',
     flexDirection:'row'
  }, 
  zahteviPrihvaceni:{
     display:'flex',
     flexDirection:'row'                                           
  },
  divButton:{
     display:'flex',
     flexDirection:'row',
  }, 
  miniPrikaz:{
     display:'flex', 
     flexDirection:'column',                                          
  },
  divpristigli:{
      display:'flex',
     flexDirection:'column',
     marginTop:'10px'                                            
  }
});

export default classStyles;