



const About=()=>
{
    return (
 <section id="about">
 <div className="container" data-aos="fade-up">
   <div className="row about-container">

     <div className="col-lg-6 content order-lg-1 order-2">
       <h2 className="title">O sajtu</h2>
       <p>
        Na ovom sajtu ćete naći različite usluge za Vaše najdraže ljubimce
       </p>

       <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
         <div className="icon"><i class="fa-solid fa-dog"></i></div>
         <h4 className="title">Šetanje psa</h4>
         <p className="description">Vaši psi će obožavati duge šetnje sa našim sitterima</p>
       </div>

       <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
         <div className="icon"><i class="fa-solid fa-paw"></i></div>
         <h4 className="title">Cuvanje psa</h4>
         <p className="description">Ukoliko niste kod kuće, a niste u mogućnosti da povedete Vašeg voljenog ljubimca sa sobom, onda ste na pravom mestu.Naši sitteri će se pobrinuti o Vašem ljubimcu.</p>
       </div>

       <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
         <div className="icon"><i class="fa-solid fa-bone"></i></div>
         <h4 className="title">Dresura psa</h4>
         <p className="description">Ukoliko je Vaš pas nevaljao i želite da ostanete sa jastukom više na kraju meseca, ne tražite dalje, ovaj sajt je pravo mesto za dresuru Vašeg nevaljalca.</p>
       </div>

     </div>

     <div className="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
   </div>

 </div>
</section>
    )
}
export default About