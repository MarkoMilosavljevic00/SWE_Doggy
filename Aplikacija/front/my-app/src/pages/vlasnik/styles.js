
import { makeStyles } from '@material-ui/styles';
import { AlignHorizontalCenterTwoTone, AlignVerticalCenterSharp } from '@mui/icons-material';


const classStyles = makeStyles(
    {
        datepicker:
        {
           marginTop: '10px'
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
            borderRadius:'1px'
        },
        usluga:
        {   display:'flex',
            flexDirection:'column',
            borderRadius:'30px',
            backgroundColor:'rgb(0,250,154)',
            width:'750px',
             justifyContent:'center',
             alignItems:'center'
            

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
            backgroundColor: '#4dccc6',
backgroundImage: 'linear-gradient(315deg, #4dccc6 0%, #96e4df 74%)',
            justifyContent:'center',
            display:'flex'
        },
        dugme:
        {
            display:'flex'
        }
        
       
    }
)
export default classStyles
