const Usluge = () => {
  const idVlasnika=localStorage.getItem('idVlasnika')
  return (
    <section id="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Usluge</h3>
          <p className="section-description">
            Neke od usluga koje Vam nude sitteri
          </p>
        </div>
        <div
          className="row"
          style={{ dispey: 'flex', justifyContent: 'center' }}
        >
       
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"  href='registerRoute'>
                <i class="fa-solid fa-dog"></i>
              </div>
              <h4 className="title">Šetanje psa po gradu</h4>
              <p className="description">
                Vaši psi će obožavati duge šetnje sa našim sitterima i ubrzo ce Vam traziti da ih naši sitteri ponovo šetaju.
              </p>
            </div>
          </div>


          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon">
              <i class="fa-solid fa-house"></i>
              </div>
              <h4 className="title">Čuvanje psa u vašoj kući</h4>
              <p className="description">
                Ukoliko niste kod kuće, a niste u mogućnosti da povedete Vašeg
                voljenog ljubimca sa sobom, onda ste na pravom mestu.Naši
                sitteri će se pobrinuti o Vašem ljubimcu.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ dispey: 'flex', justifyContent: 'center' }}
        >
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon">
              <i class="fa-solid fa-bone"></i>
              </div>
              <h4 className="title">Poseta sittera</h4>
              <p className="description">
                Ukoliko je Vaš pas nabacio višak kilograma, a ne želite da ga vodite na šetnje,ovo je prava vrsta usluge za Vas.
                Naši siteri će doći na vašu kućnu adresu sa različitim igračkama i lopticama za Vašeg psa i nateraće malog nevaljalca na
                malo fizičke aktivnosti u Vašem dvorištu.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon">
              <i class="fa-solid fa-bowl-food"></i>
              </div>
              <h4 className="title">Čuvanje psa u kući sittera</h4>
              <p className="description">
                Ukoliko Vam je potreban Vas kućni prostor za neki dogadjaj, a pritom će Vam pas praviti probleme,odaberite kada Vam odgovara
                da naš siter pokupi vašeg psa i odvede ga kod svoje kuće na čuvanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Usluge;
