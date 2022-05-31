
import { makeStyles } from '@material-ui/styles';
import { AlignHorizontalCenterTwoTone, AlignVerticalCenterSharp } from '@mui/icons-material';


const classStyles = makeStyles(
    {
        datepicker:
        {
           marginTop: '20px',
           marginBottom:'20px'
        },
        naslov:
        {
            justifyContent:'center'
        },
        saman:
        {
backgroundColor:'blue'
        },
        slider:
        {
            marginLeft:'10px'
        },
        adresa:
        {
            display:'flex',
            width:'inherit',
            justifyContent:'space-evenly',
            marginTop: '20px',
           marginBottom:'20px'
        },
        usluga:
        {   display:'flex',
            flexDirection:'column',
            borderRadius:'30px',
            backgroundColor:'rgb(0,250,154)',
            width:'650px',
             justifyContent:'center',
             alignItems:'center',
             marginBottom:'20px',
             marginTop:'20px'
            

        },
        vrsta:
        {
            display:'flex'
        },
        pikeri:
        {
            display:'flex',
            justifyContent: 'space-evenly'
        },
        main:
        {
            // backgroundColor:'	rgb(32,178,170)',
            backgroundColor: 'cornsilk',

            justifyContent:'center',
            display:'flex'
        },
        dugme:
        {
            display:'flex',
            marginTop: '20px',
           marginBottom:'20px',
           height:'70px',
          
        },
        selectbox:
        {
            display:'flex',
            marginTop: '20px',
            marginBottom:'20px',
            width:'inherit',
            justifyContent:'space-evenly'
        },
        napomena:
        {
            display:'flex',
            width:'inherit',
            justifyContent:'space-evenly',
            marginTop: '20px',
           marginBottom:'20px'
        }
        
       
    }
)
export default classStyles
