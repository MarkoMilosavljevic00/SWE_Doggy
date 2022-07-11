// import classStyles from './styles';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { registerRoute } from '../../../router/routes';
// import { sitterRoute } from '../../../router/routes';
// import { CardContent } from '@mui/material';

// const NadjiSittera = () => {
//   const navigate = useNavigate();
//   const classes = classStyles();
// const idVlasnika=localStorage.getItem('idVlasnika')
// const idSitera=localStorage.getItem('idSitera')
//   return (
  
//     <section id="about">
//       <div className="container">
//         <div class="row about-container">
       
//          <CardContent>
//           <div class="class=col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative" >
//             <img
//               style={{ width:null,height:400,flex:1 }}
//               className={classes.slika}
//               src="https://media.istockphoto.com/photos/happy-family-picture-id539234375?k=20&m=539234375&s=612x612&w=0&h=c8EBpeH8-n0klYu7KZFWqRwlWiaAcVTuuEG80Q-rhfY="
//               class="glightbox play-btn mb-4"
//             />
//           </div>
//           </CardContent>

//           <div
//             style={{ 'margin-top': '50px' }}
//             className="col-lg-6 content order-lg-1 order-2"
//           >
//             <h2 className="title">Potreban Vam je sitter?</h2>
//             <h4>
//               Pronadjite nekog ko će se brinuti o Vašem psu, na način na koji se
//               Vi brinete o njemu.
//             </h4>
//             {/* { proveraSiter ? <NavBarSiter/> : (proveraVlasnik ? <NavbarVlasnik/> : <Header/>)}  */}
//             {idVlasnika ? 
       
//             <button
//               className={classes.dugme}
//               onClick={()=>{navigate(sitterRoute)}}
//             >
//               Nadji sittera
//             </button>
//             :
//             (idSitera ? 
//               <button
//               className={classes.dugme}
//               onClick={() => alert('Ulogovani ste kao siter!!!')}
//               >
//               Nadji sittera
//             </button>
//             :
//             <button
//               className={classes.dugme}
//               onClick={() => navigate(registerRoute)}
//               >
//               Nadji sittera
//             </button>
//               )
// }

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default NadjiSittera;
import classStyles from './styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { registerRoute } from '../../../router/routes';
import { sitterRoute } from '../../../router/routes';
import { CardContent } from '@mui/material';
const NadjiSittera = () => {
  const navigate = useNavigate();
  const classes = classStyles();
// const idVlasnika=localStorage.getItem('idVlasnika')
// const idSitera=localStorage.getItem('idSitera')
  return (
  
    <section id="about">
            {/* <div className='saasf' style={{}}> */}
      <div className="container">
        <div className="row about-container">
       
          <div className="class=col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
            <CardContent>
            <img
              style={{height:'400px',
                width: null,
                flex: 1 }}
              className={classes.slika}
              src="https://media.istockphoto.com/photos/happy-family-picture-id539234375?k=20&m=539234375&s=612x612&w=0&h=c8EBpeH8-n0klYu7KZFWqRwlWiaAcVTuuEG80Q-rhfY="
              class="glightbox play-btn mb-4"
            />
          </CardContent>
          </div>
          <div
            style={{ marginTop: '50px' }}
            className="col-lg-6 content order-lg-1 order-2"
          >
            <h2 className="title">Potreban Vam je sitter?</h2>
            <h4>
              Pronadjite nekog ko će se brinuti o Vašem psu, na način na koji se
              Vi brinete o njemu.
            </h4>
            {/* { proveraSiter ? <NavBarSiter/> : (proveraVlasnik ? <NavbarVlasnik/> : <Header/>)}  */}
            
            <button
              className={classes.dugme}
              onClick={() => navigate(registerRoute)}
              >
              Nadji sittera
            </button>
             
          </div>
        </div>
        </div>
      {/* </div> */}
    </section>
  );
};
export default NadjiSittera;