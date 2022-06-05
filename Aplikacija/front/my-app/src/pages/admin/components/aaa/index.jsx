// import React, { useState, useEffect, useContext } from 'react';
// import classStyles from './styles';
// import { useNavigate } from 'react-router-dom';
// import Card from '../../../admin/components/card/index.jsx';

// import { vratiSveNevalidneSittere } from '../../../../backendAddress.js';
// const Napravi = () => {
//   const [siteri, postaviSitere] = useState([]);

//   const [nevalidni, postaviNevalidneSittere] = useState([]);
//   useEffect(() => {
//     fetch(vratiSveNevalidneSittere).then(async res => {
//       const rez = await res.json();
//       postaviNevalidneSittere(rez);
//       console.log(rez);
//     });
//   }, []);

//   function uradi() {
//     {
//       nevalidni.map((nevalidan, index) => {
//         return <Card />;
//       });
//     }
//   }
// };
// export default Napravi;
