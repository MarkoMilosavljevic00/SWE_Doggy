import { makeStyles } from '@material-ui/styles';
import slika from '../../slike/slika6.jpg';
import { styled } from '@mui/material/styles';

const classStyles = makeStyles({
      container: {
         displey:'flex',
         flexDirection: 'row',
      },
      naslov: {
         textAlign: 'center',
         color: 'green'
      },
      naslov2: {
         color: 'green'
      },
      slika: {
         displey:'flex',
         flexDirection: 'column',
         
      },
      glavni:{
          display: 'flex',
          flexDirection: 'row', 
          justifyContent:'space-evenly' ,
          flex:1          
      },

      paper:{
         display: 'flex',
         flexDirection: 'column' ,
         flex: 0.4 , 
         padding: 30    
      }, 
      tekst:{
         color: 'green'
      },
      divButton:{
         alignItems:'center'
      },
      divButtonCard:{
         display: 'flex',
         flexDirection: 'column' ,
         alignItems:'center'
      }
                                                  
});

export default classStyles;