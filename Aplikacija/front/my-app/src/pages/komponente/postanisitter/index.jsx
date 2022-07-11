
import Button from "@mui/material/Button"
import classStyles from './styles';
import { useNavigate } from "react-router-dom";
import { registerRoute } from "../../../router/routes";
import { profilSitterRoute } from "../../../router/routes";
import { CardContent } from "@mui/material";
const PostaniSitter=()=>
{
  const navigate=useNavigate();
  const classes = classStyles();
  const idVlasnika=localStorage.getItem('idVlasnika')
  const idSitera=localStorage.getItem('idSitera')
  return (
 <section id="about">
 <div className="container" data-aos="fade-up">
   <div className="row about-container">

     <div style={{marginTop:'50px'}}className="col-lg-6 content order-lg-1 order-2">
       <h2 className="title">Želiš da postaneš sitter?</h2>
       <h4>
      Ukoliko si osoba koja voli pse i koja želi da bude u njihovom prisustvu, a prirom i zaradi novac, ne traži dalje, na pravom si mestu!
       </h4>
       
      
       <button
       className={classes.dugme}
       onClick={() => {navigate(registerRoute)}}
       >
        Postani sitter
      </button>
       
     </div>
     <div className="class=col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
     <CardContent>
     <div className="col-lg-6  order-1"  data-aos-delay="100" style={{display:'flex'}}>
     <img className={classes.slika} 
      style={{height: '400px',width: null,flex: 1 }}
      src="https://media.istockphoto.com/photos/dog-walker-picture-id1126947324?k=20&m=1126947324&s=612x612&w=0&h=-ezh7aau25V9ELwyUvRe6PXMr5vDBFruz9JAZavBgsk=" class="glightbox play-btn mb-4"/>
     </div>
     </CardContent>
 </div>
</div>
 </div>
</section>
    )
}
export default PostaniSitter
