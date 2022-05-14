import React, { Component } from 'react'; 
import About from '../komponente/about';
import Recenzije from '../komponente/recenzije';
import Usluge from '../komponente/usluge';
import NadjiSittera from '../komponente/nadjisittera';
import PostaniSitter from '../komponente/postanisitter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classStyles from './styles';


export const home = (props) => {
  const classes = classStyles();
  
  return (

<div className='wrapper'>
<Header />
  <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Dobro došli na sajt Doggy</h1>
      <h2>Pravo mesto za vas i vašeg najboljeg prijatelja</h2>
      <a href="#about" className="btn-get-started">Nadji ono što ti je potrebno</a>
    </div>
  </section>

  <main id="main">

<About/>
<NadjiSittera/>
<PostaniSitter/>
<Recenzije/>
<Usluge/>
    
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Kontakt</h3>
        </div>
      </div>

     
      <iframe title='myfeame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameBorder="0" style={{border:0}} allowFullScreen></iframe>

      <div className="container mt-5">
        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-4">

            <div className="info">
              <div>
                <i className="bi bi-geo-alt"></i>
                <p>A108 Adam Street New York, NY 535022</p>
              </div>

              <div>
                <i className="bi bi-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className="bi bi-phone"></i>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>

            <div className="social-links">
              <a href="/#"  className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="/#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="/#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="/#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="/#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="form-group mt-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>
<Footer />
</div> 
)

}

export default home;