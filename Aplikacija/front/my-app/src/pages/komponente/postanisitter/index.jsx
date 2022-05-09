
import Button from "@mui/material/Button"
import classStyles from './styles';
import { useNavigate } from "react-router-dom";
import { registerRoute } from "../../../router/routes";

const PostaniSitter=()=>
{
  const navigate=useNavigate();
  const classes = classStyles();

  return (
 <section id="about">
 <div className="container" data-aos="fade-up">
   <div className="row about-container">

     <div style={{'margin-top':'50px'}}className="col-lg-6 content order-lg-1 order-2">
       <h2 className="title">Želiš da postaneš sitter?</h2>
       <h4>
      Ukoliko si osoba koja voli pse i koja želi da bude u njihovom prisustvu, a prirom i zaradi novac, ne traži dalje, na pravom si mestu!
       </h4>
       <button className={classes.dugme} onClick={()=>navigate(registerRoute)}>Postani sitter</button>
     </div>

     <div className="col-lg-6  order-1"  data-aos-delay="100">
     <img className={classes.slika} src="https://media.istockphoto.com/photos/dog-walker-picture-id1126947324?k=20&m=1126947324&s=612x612&w=0&h=-ezh7aau25V9ELwyUvRe6PXMr5vDBFruz9JAZavBgsk=" class="glightbox play-btn mb-4"/>
     </div>
   </div>

 </div>
</section>
    )
}
export default PostaniSitter