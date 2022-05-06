

const Recenzije=()=>
{
    return(

      <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title" style={{'margin-bottom':'50px'}}>Užitak za sve</h3>
          
        </div>
        <div className="row">
          

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="pic" ><img style={{'border-radius':'100px'}} src="https://img.freepik.com/free-photo/three-little-dogs-sitting-outdoors-three-cute-corgi-leashes-dog-show-city-park-sunny-day-corgi-smiling-looking-camera_126267-4700.jpg" alt=""/></div>
              <h4>Užitak za pse</h4>
              <span>Ljubimci će biti presrećni sa svojim sitterima koji će se brinuti o njima i praviti im društvo.</span>
           
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic"><img style={{'border-radius':'100px'}} src="https://parade.com/wp-content/uploads/2018/09/happy-dog-owner-field-ftr.jpg" alt=""/></div>
              <h4>Užitak za vlasnike pasa</h4>
              <span>Vlasnici pasa mogu biti u miru i spokoju znajući da su njihovi ljubimci na sigurnom.</span>
              
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="pic"><img style={{'border-radius':'100px'}} src="https://media.istockphoto.com/photos/funny-and-cheerful-dog-doing-high-five-with-the-owner-picture-id1173902011?k=20&m=1173902011&s=612x612&w=0&h=0Z44tN5tNG6f0BnLTT6iyTteglPsp9y7NjceXsFzJYw=" alt=""/></div>
              <h4>Užitak za sittere</h4>
              <span>Posle svakog dobro obavljenog posla sitteri su bogatiji za još jednu novu avanturu i dobrog druženja sa psima.</span>
            
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}
export default Recenzije;