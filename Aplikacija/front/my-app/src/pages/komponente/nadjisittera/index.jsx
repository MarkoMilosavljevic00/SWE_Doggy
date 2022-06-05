import classStyles from './styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { registerRoute } from '../../../router/routes';
const NadjiSittera = () => {
  const navigate = useNavigate();
  const classes = classStyles();
  return (
    /* <section id="about" class="about">
        <div className="container">
  
          <div class="row about-container">
            <div class="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
              <img className={classes.slika} src="https://media.istockphoto.com/photos/happy-family-picture-id539234375?k=20&m=539234375&s=612x612&w=0&h=c8EBpeH8-n0klYu7KZFWqRwlWiaAcVTuuEG80Q-rhfY=" class="glightbox play-btn mb-4"/>
            </div>
  
            <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3 className={classes.texth3}>Potreban Vam je sitter?</h3>
              <h4 classname={classes.texth4}> Pronadjite nekog ko će se brinuti o Vašem psu, na način na koji se Vi brinete o njemu.</h4>
              <button className={classes.dugme} onClick={()=>navigate(registerRoute)}>Nadji sittera</button>
            </div>
          </div>
  
        </div>
      </section>*/
    <section id="about">
      <div className="container">
        <div class="row about-container">
          <div class="class=col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
            <img
              style={{ marginRight: '100px' }}
              className={classes.slika}
              src="https://media.istockphoto.com/photos/happy-family-picture-id539234375?k=20&m=539234375&s=612x612&w=0&h=c8EBpeH8-n0klYu7KZFWqRwlWiaAcVTuuEG80Q-rhfY="
              class="glightbox play-btn mb-4"
            />
          </div>

          <div
            style={{ 'margin-top': '50px' }}
            className="col-lg-6 content order-lg-1 order-2"
          >
            <h2 className="title">Potreban Vam je sitter?</h2>
            <h4>
              Pronadjite nekog ko će se brinuti o Vašem psu, na način na koji se
              Vi brinete o njemu.
            </h4>
            <button
              className={classes.dugme}
              onClick={() => navigate(registerRoute)}
            >
              Nadji sittera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NadjiSittera;
