const Recenzije=()=>
{
    return(
      <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Užitak za sve</h3>
          <p className="section-description">
            Uverite se i sami!
          </p> 
        </div>
        <div className="row">
          

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="pic" ><img src="https://www.thesprucepets.com/thmb/Mj_fuGIKE63coiBcHxstqc2LTN4=/2048x1152/smart/filters:no_upscale()/GettyImages-11495316831-d3a68a67da3d4038b0d3b0d70bd01a84.jpg" alt=""/></div>
              <h4>Užitak za pse</h4>
              <span>Ljubimci će biti presrećni sa svojim sitterima koji će se brinuti o njima i praviti im društvo.</span>
           
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic"><img  src="https://parade.com/wp-content/uploads/2018/09/happy-dog-owner-field-ftr.jpg" alt=""/></div>
              <h4>Užitak za vlasnike pasa</h4>
              <span>Vlasnici pasa mogu biti u miru i spokoju znajući da su njihovi ljubimci na sigurnom.</span>
              
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="pic"><img src="https://dogtime.com/assets/uploads/2018/10/how-to-get-pet-sitter-job.jpg" alt=""/></div>
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