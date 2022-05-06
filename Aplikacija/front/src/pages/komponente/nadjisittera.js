import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { registerRoute } from '../../router/routes';
const NadjiSittera=()=>
{
  const navigate=useNavigate();

    const classes=makeStyles();
    return(
        <section id="about" class="about">
        <div class="container">
  
          <div class="row">
            <div class="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
              <img style={{'border-radius':'15px'}}src="https://media.istockphoto.com/photos/happy-family-picture-id539234375?k=20&m=539234375&s=612x612&w=0&h=c8EBpeH8-n0klYu7KZFWqRwlWiaAcVTuuEG80Q-rhfY=" class="glightbox play-btn mb-4"/>
            </div>
  
            <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3 style={{'color':'black','margin-left':'50px','margin-bottom':'15px','font-family': 'Arial, Helvetica, sans-serif', 'font-weight':'bold'}}>Potreban Vam je sitter?</h3>
              <h4 classname="title" style={{'margin-left':'50px','color':'black'}}> Pronadjite nekog ko će se brinuti o Vašem psu, na način na koji se Vi brinete o njemu.</h4>
              <Button onClick={()=>navigate(registerRoute)} style={{'border-radius':'50px','margin-right': '425px','width': '150px','height': '50px','align-self':'center','background-color':'#00FA9A','color': 'white'}} >Nadji sittera</Button>
            </div>
          </div>
  
        </div>
      </section>
    )
}
export default NadjiSittera