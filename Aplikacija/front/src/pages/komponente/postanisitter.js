
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import { registerRoute } from "../../router/routes";

const PostaniSitter=()=>
{
  const navigate=useNavigate();
    return (
 <section id="about">
 <div className="container" data-aos="fade-up">
   <div className="row about-container">

     <div style={{'margin-top':'50px'}}className="col-lg-6 content order-lg-1 order-2">
       <h2 className="title">Želiš da postaneš sitter?</h2>
       <h4>
      Ukoliko si osoba koja voli pse i koja želi da bude u njihovom prisustvu, a prirom i zaradi novac, ne traži dalje, na pravom si mestu!
       </h4>
       <Button onClick={()=>navigate(registerRoute)} style={{'border-radius':'50px','margin-right': '425px','width': '150px','height': '50px','align-self':'center','background-color':'#00FA9A','color': 'white'}}>Postani sitter</Button>
      

     </div>

     <div className="col-lg-6  order-1"  data-aos-delay="100">
     <img  style={{'border-radius':'15px'}} src="https://media.istockphoto.com/photos/dog-walker-picture-id1126947324?k=20&m=1126947324&s=612x612&w=0&h=-ezh7aau25V9ELwyUvRe6PXMr5vDBFruz9JAZavBgsk=" class="glightbox play-btn mb-4"/>
     </div>
   </div>

 </div>
</section>
    )
}
export default PostaniSitter