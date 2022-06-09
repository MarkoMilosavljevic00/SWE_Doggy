 import * as React from 'react';
 import { styled } from '@mui/material/styles';
 import Card from '@mui/material/Card';
 import CardHeader from '@mui/material/CardHeader';
 import CardMedia from '@mui/material/CardMedia';
 import CardContent from '@mui/material/CardContent';
 import CardActions from '@mui/material/CardActions';
 import Collapse from '@mui/material/Collapse';
 import Avatar from '@mui/material/Avatar';
 import IconButton, { IconButtonProps } from '@mui/material/IconButton';
 import Typography from '@mui/material/Typography';
 import { red } from '@mui/material/colors';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import ShareIcon from '@mui/icons-material/Share';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import MoreVertIcon from '@mui/icons-material/MoreVert';
 import Button from '@mui/material/Button';
 import slika from '../../slike/dog.jpg';
 import classStyles from './styles';
 import Axios from 'axios'
 import { ExpandMore } from '@mui/icons-material';
 import { useState,useEffect } from 'react';

 const CardSlika=(props) =>{
 {/*const [state,setState]=useState('')
 state:{profileImg="https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg"}
 const imageHandler = (e) =>
 {
   const reader = new FileReader()
   reader.onload = () =>
   {
    if(reader.readyState===2){
     this.setState({state:reader.result})
     }
   }
   reader.readAsDataURL(e.target.files[0])
 }*/}
const { id }=props
const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}
const[expanded,setExpanded]=useState('')
const handleExpandClick = () => {
  setExpanded(!expanded);
};
function handleSubmit(event) {
  
  // const url = 'http://localhost:3000/uploadFile';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'responseType': 'blob' 
    },
  };
  Axios.post('https://localhost:5001/Pas/dodajSlikuPsu?idPas=' + id, formData, config).then((response) => {
  console.log(response);
    setFile(response.data)
    
  });
}
const [pic,setPic]=useState('')
// const picture = ()=>
// {
//   Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + id).then(
//     res=>
//     {
//       console.log(res.data.slika + 'ahahahaaahha')
//       setPic(res.data.slika)
//     }
//   )
// }
useEffect(()=>
{
  Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + id).then(
    res=>
    {
      console.log(res.data.slika)
      setPic(res.data.slika)
    }
  )
})
    const classes = classStyles();
 
   return(
     <Card sx={{ maxWidth: 200 }}>
       <CardHeader
       
       />
       <CardMedia
         component="img"
         height="194"
         image={'https://localhost:5001/StaticFiles/' + pic}
         alt="Paella dish"
       />
       <CardContent>
     
       </CardContent>
       <CardActions className={classes.divButtonCard}> 
       <Typography paragraph>Ubacite novu sliku</Typography>
        <input type="file" onChange={handleChange} />
        <ExpandMore
          expand={expanded}

          onClick={() => { handleExpandClick();  } }
          aria-expanded={expanded}
          aria-label="show more"

        >
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
         <Button
          style={{ backgroundColor: 'green' }}
          variant="contained"
          color="success"
          onClick={handleSubmit}
          >
          Dodaj sliku 
       </Button>
       </CardContent>
        </Collapse>
       </CardActions>
     </Card>
   );
 }
export default CardSlika