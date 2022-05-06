
import Button from "@mui/material/Button"


const PostaniSitter=()=>
{
    return (
 <section id="about">
 <div className="container" data-aos="fade-up">
   <div className="row about-container">

     <div style={{'margin-top':'50px'}}className="col-lg-6 content order-lg-1 order-2">
       <h2 className="title">Želiš da postaneš sitter</h2>
       <p>
       Stay for free with adorable animals in unique homes around the world. Sit as often as you like, wherever you like.
       </p>
       <Button style={{'border-radius':'50px','margin-right': '425px','width': '150px','height': '50px','align-self':'center','background-color':'#00FA9A','color': 'white'}} onClick={()=>alert("mjau")}>Nadji sittera</Button>
      

     </div>

     <div className="col-lg-6  order-1"  data-aos-delay="100">
     <img src="https://media.istockphoto.com/photos/dog-walker-picture-id1126947324?k=20&m=1126947324&s=612x612&w=0&h=-ezh7aau25V9ELwyUvRe6PXMr5vDBFruz9JAZavBgsk=" class="glightbox play-btn mb-4"/>
     </div>
   </div>

 </div>
</section>
    )
}
export default PostaniSitter