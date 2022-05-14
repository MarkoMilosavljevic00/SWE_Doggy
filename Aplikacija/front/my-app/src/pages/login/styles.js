import { makeStyles } from '@material-ui/styles';
import slika from "../../slike/slika6.jpg"

const classStyles = makeStyles({
  
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-evenly",
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: '100%',
        backgroundImage: `url(${slika})`,
        // backgroundImage: "../../slike/slika6.jpg",
        backgroundSize: 'cover' ,
        height: '450px',
        
    },
    
    
    glavni:{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginTop: "100px",

    },

    divLogIn: {
        display: "flex",
        flexDirection: "row",
        
    },
    divInput:{
      dipley:"flex",
      flex: 0.5

    },
    
    labela: {
      display: "flex",
      flexDirection: "column",
      flex: 0.5
    },
    
    naslov: {

        textAlign: "center",
        color:"green"
    },

  /*  divKorisnickoIme: {
        display: "flex",
        marginTop: 10,
        
    },*/

   /* divLozinka: {
        display:"flex",
        marginTop: 10,
        marginBlockEnd:30,
        width: 50,
        height: 21
    },*/

    // inputKorisnickoIme:{
    //     flex: 1
    // },
    // inputLozinka: {
    //     flex: 0.5
    // },

    lbl:{
        flex: 0.6
    },

   divButton: {
       display: "flex",
       justifyContent: "space-evenly",
       flex:0.3
   }
    // divKartice: {
    //     display: "flex",
    //     flexWrap: "wrap"
    // }
    
});

export default classStyles;