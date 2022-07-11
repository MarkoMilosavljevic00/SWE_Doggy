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
import { Alert, MenuItem } from '@mui/material';

const CardSlika=(props) =>{

const { id }=props
const token=localStorage.getItem('token')
const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}
const[expanded,setExpanded]=useState('')
const handleExpandClick = () => {
  setExpanded(!expanded);
};
const handleSubmit=async(event)=> {
  const TOKEN=localStorage.getItem('token')
  // const url = 'http://localhost:3000/uploadFile';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'responseType': 'blob' ,
      'Authorization': `Bearer ${TOKEN}`
    },
  };
  await Axios.post('https://localhost:5001/Pas/dodajSlikuPsu?idPas=' + id, formData, config).then((response) => {
  console.log(response);
    setFile(response.data)
    window.location.reload(false)
  }).catch(err=>
    {
      if(err.response.status)
      {
        alert(err.response.data)
      }
    });
}
const [pic,setPic]=useState('')

useEffect(()=>
{
  async function fetchData(){
  const TOKEN=localStorage.getItem('token')
  await Axios.get('https://localhost:5001/Pas/vratiPsaPoId?idPas=' + id,{
    
      headers:{ Authorization: `Bearer ${TOKEN}`}
    }).then(
    res=>
    {
      console.log(res.data.slika)
      setPic(res.data.slika)
    }
  )}
  fetchData();
})
    const classes = classStyles();
    const[hide,setHide]=useState(false)

    const handleHide=()=>
    {
      const TOKEN=localStorage.getItem('token')
      if(token!=TOKEN || !TOKEN)
      {
        window.location.reload(false)
        return
      }
      setHide(!hide)
    }
   return(
     <Card sx={{ maxWidth: 200 }}style={{display:'initial'}}>
       <CardHeader
       
       />
       <CardMedia
       style={{}}
         component="img"
         height="194"
         image={'https://localhost:5001/StaticFiles/' + pic}
       
       />
      
        {/* <div className='asd' style={{textAlign:'center'}}>
       <Button paragraph onClick={()=>{handleHide();}} style={{maxWidth:'200px',backgroundColor:'rgb(93, 224, 100)',marginBottom:'20px',marginTop:'20px',color:'white'}}>Izaberite novu sliku</Button>
        </div> */}
       <CardActions className={classes.divButtonCard}> 
       <div className='dodajslikupas' style={{display:'grid'}}>
        <Typography style={{textAlign:'center',marginBottom:'15px',marginTop:'15px'}}variant='h6'>Odaberite sliku</Typography>
        <input onClick={handleHide} style={{marginLeft:'100px'}} type="file" onChange={handleChange} />
        <IconButton  hidden={!hide}onClick={() => { handleExpandClick();  } }>
        <ExpandMore
          expand={expanded}
          hidden={!hide}
          onClick={() => { handleExpandClick();  } }
          aria-expanded={expanded}
          aria-label="show more"
          style={{textAlign:'center'}}
          
          >
          <ExpandMoreIcon />
        </ExpandMore >
        Otvori dugme za potvrdu
        </IconButton>
            </div>
            </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent    style={{ textAlign:'center' }}>
         <Button
          style={{ backgroundColor: 'rgb(93, 224, 100)',textAlign:'center' }}
          variant="contained"
          color="success"
          onClick={()=>{handleSubmit();}}
          >
          Potvrdi
       </Button>
       </CardContent>
        </Collapse>
     </Card>
   );
 }
export default CardSlika