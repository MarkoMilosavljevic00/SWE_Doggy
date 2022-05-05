import React, { Component } from 'react'; 


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classStyles from './styles';

export const home = (props) => {
  const classes = classStyles();
  
  return (

<div className='wrapper'>
<Header />
{/* <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="masthead-avatar mb-5" src="https://pngset.com/images/face-clipart-creativity-thought-graphic-design-thinking-people-gold-trophy-transparent-png-2065982.png" alt="..." />
                
                <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
              
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
<section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
              
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
              
                <div className="row justify-content-center">
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="data:image/jpeg;base64,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" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="data:image/jpeg;base64,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" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="https://www.sweethome3d.com/images/carousel/SweetHome3DAerialView.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="https://planner5d.com/s/6/images/promo/created/slider/snapshot_demo_01.jpg?v=6.34.3" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="https://foyr.com/learn/wp-content/uploads/2018/12/two-storey-house-design-modern-home-design-3-storey-house-design-with-floor-plan-1.jpg" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="https://i.ytimg.com/vi/7-Q6kFgur-k/maxresdefault.jpg" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
               
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div>
            </div>
        </section>
       
        <section className="page-section" id="contact">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
              
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                       
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                         
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                           
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                          
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright &copy; Your Website 2022</small></div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                  
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                   
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                  
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                   
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                   
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                                  
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="..." />
                                   
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                                 
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                  
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="..." />
                                 
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                  
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                   
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                   
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                 
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                  
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                  
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                 
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                   
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                  
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                
                                    <div ="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    
                                    <img class="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                
                                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
         <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Dobro došli na sajt Doggy</h1>
      <h2>Pravo mesto za vas i vašeg najboljeg prijatelja</h2>
      <a href="#about" className="btn-get-started">Nadji ono što ti je potrebno</a>
    </div>
  </section>

  <main id="main">

   
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

    <section id="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Statistika</h3>
          {/* <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p> */}
        </div>
        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="534" data-purecounter-duration="2" className="purecounter"></span>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hard Workers</p>
          </div>

        </div>

      </div>
    </section>

    <section id="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Services</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-briefcase"></i></div>
              <h4 className="title">Lorem Ipsum</h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-card-checklist"></i></div>
              <h4 className="title">olor Sitema</h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-bar-chart"></i></div>
              <h4 className="title">Sed ut perspiciatis</h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-binoculars"></i></div>
              <h4 className="title">Magni Dolores</h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-brightness-high"></i></div>
              <h4 className="title">Nemo Enim</h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="zoom-in">
            <div className="box">
              <div className="icon"><i className="bi bi-calendar4-week"></i></div>
              <h4 className="title">Eiusmod Tempor</h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="call-to-action">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-9 text-center text-lg-start">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a href="/#" className="cta-btn align-middle" >Call To Action</a>
          </div>
        </div>

      </div>
      
    </section>
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
<section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-1.jpg" alt=""/>
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-2.jpg" alt=""/>
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-3.jpg" alt=""/>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="/#" >www.example.com</a></li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

  
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Team</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic"><img src="assets/img/team-1.jpg" alt=""/></div>
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href="/#"><i className="bi bi-twitter"></i></a>
                <a href="/#"><i className="bi bi-facebook"></i></a>
                <a href="/#"><i className="bi bi-instagram"></i></a>
                <a href="/#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="pic"><img src="assets/assets/img/team-2.jpg" alt=""/></div>
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href="/#"><i className="bi bi-twitter"></i></a>
                <a href="/#"><i className="bi bi-facebook"></i></a>
                <a href="/#"><i className="bi bi-instagram"></i></a>
                <a href="/#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic"><img src="assets/assets/img/team-3.jpg" alt=""/></div>
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href="/#"><i className="bi bi-twitter"></i></a>
                <a href="/#"><i className="bi bi-facebook"></i></a>
                <a href="/#"><i className="bi bi-instagram"></i></a>
                <a href="/#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="pic"><img src="assets/assets/img/team-4.jpg" alt=""/></div>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className="social">
                <a href="/#"><i className="bi bi-twitter"></i></a>
                <a href="/#"><i className="bi bi-facebook"></i></a>
                <a href="/#"><i className="bi bi-instagram"></i></a>
                <a href="/#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Contact</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
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