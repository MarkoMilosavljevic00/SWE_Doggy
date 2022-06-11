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
                Vaši psi će obožavati duge šetnje sa našim sitterima
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
                Ukoliko je Vas pas nabacio malo vise kilograma, a ne zelite da ga vodite na setnje,ovo je prava vrsta usluge za Vas.
                Nasi siteri ce doci na vasu kucnu adresu sa razlicitim igrackama i lopticama za Vaseg psa i naterace malog nevaljalca na
                malo fizicke aktivnosti u Vasem dvoristu.
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
                Ukoliko Vam je potreban Vas kucni prostor za neki dogadjaj, a pritom ce Vam pas praviti probleme,odaberite kada Vam odgovara
                da nas siter pokupi vaseg psa i odvede ga kod svoje kuce na cuvanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Usluge;
