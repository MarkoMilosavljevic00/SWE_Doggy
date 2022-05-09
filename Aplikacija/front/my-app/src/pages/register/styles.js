import { makeStyles } from '@material-ui/styles';

const classStyles = makeStyles({
    dugme: {
        backgroundColor: "blue"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150
    },
    divRegister: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        height: 400,
        justifyContent: "space-evenly"
    }, 
    divButton: {
    display: "flex",
    justifyContent: "space-evenly"
    },

    divInput: {
        display: "flex",
        marginTop: 10,
        justifyContent: "space-between"
    }
});

export default classStyles;
