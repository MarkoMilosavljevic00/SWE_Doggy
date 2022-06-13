const About = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <h2 className="title">O sajtu</h2>
            <p>
              Na ovom sajtu ćete naći različite usluge za Vaše najdraže ljubimce.
            </p>
            <p>
              Cilj sajta Doggy je da na lak i siguran način obezbedi čuvanje
              Vašeg kućnog ljubimca.{' '}
            </p>
            <p>
              Omogućuva razne pogodnosti koje će Vam olakšati brigu o psu kada
              niste u mogućnosti da brinete o njemu.
            </p>
            <p>
              Doggy će Vam pomoći da zaradite dodatne prihode, bez stalne
              obaveze.
            </p>
            <p>
              Sajt dalje pruža mogućnost komentarisanja i ocenjivanja sittera i pasa, kao pomoć pri odabiru sittera ili pasa.
            </p>
          </div>

          <div
            className="col-lg-6 background order-lg-2 order-1"
            data-aos="fade-left"
            data-aos-delay="100"
          ></div>
        </div>
      </div>
    </section>
  );
};
export default About;
