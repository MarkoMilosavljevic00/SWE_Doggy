import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
  
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150,
       
    },
    glavni:{
        display: "flex",
        flexDirection: "column",
        flex: 1
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