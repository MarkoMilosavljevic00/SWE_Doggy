
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
import Axios from 'axios'
import classStyles from './styles';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState,useEffect } from 'react';
// import { Blob } from 'buffer';
const CardSlika=(user) =>{
// const [state,setState]=useState('')
// state:{profileImg="https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg"}
// const imageHandler = (e) =>
// {
//   const reader = new FileReader()
//   reader.onload = () =>
//   {
//     if(reader.readyState===2){
//     this.setState({state:reader.result})
//     }
//   }
//   reader.readAsDataURL(e.target.files[0])
// }
// const ajdi=localStorage.getItem('idSitera')

const {korisnik}=user;
console.log(korisnik.id + 'jajkas')
// const [logovan,setLogovan]=useState('')
// const[handle,setHandle1]=useState('')
// useEffect(()=>
// {
//   const TOKEN=localStorage.getItem('token')
//   Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
//   {
//     headers:{ Authorization: `Bearer ${TOKEN}`
// }}).then(res=>
//   {
//      setLogovan(res.data)
//      console.log(res.data.id)
//      setHandle1(!handle)
//   })
// },[])
const[ime,setIme]=useState('')
useEffect(()=>
{
  async function vrati(){
  const TOKEN=localStorage.getItem('token')
  await Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + korisnik.id,{
    headers:{ Authorization: `Bearer ${TOKEN}`}
  }).then(
    res=>
    {
      console.log(res.data.slika)
      setIme(res.data.slika)
    }
  )}
  vrati();
},[])
const [imenoto,setImenoto]=useState('')
useEffect(()=>
{
  async function vrati(){
  const TOKEN=localStorage.getItem('token')
  await Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + korisnik.id,
  {
  headers:{ Authorization: `Bearer ${TOKEN}`}}).then(
    res=>
    {
      console.log(res.data)
      setImenoto(res.data)
    }
  )}
  vrati();
},[])
const name = async()=>
{
  const TOKEN=localStorage.getItem('token')
  await Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + korisnik.id,
  {
    headers:{ Authorization: `Bearer ${TOKEN}`}
  }).then(
    res=>
    {
      console.log(res.data.slika)
      setIme(res.data.slika)
      window.location.reload(false)
    }
  )
}

const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}
let imagePath=null;
const [ja,setJa]=useState('')
let ja1=''
let srcValue = ''
let base64ImageString=''
const handleSubmit=async(event) =>{
  
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
  await Axios.post('https://localhost:5001/Siter/dodajSlikuSiteru?idSiter=' + korisnik.id, formData, config).then((response) => {
   
  console.log(response);
    
    setFile(response.data)
    name();
    setKlik(false)
    
  });

}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
   const classes = classStyles();
  const[expanded,setExpanded]=useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded);
};
const[klik,setKlik]=useState(false)
const token=localStorage.getItem('token')
const handleClick=()=>
{
  const TOKEN=localStorage.getItem('token')
  if(token!=TOKEN || !TOKEN)
  {
    window.location.reload(false)
    return
  }
  setKlik(!klik)
  setExpanded(!expanded);
}
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return(
    <><Card sx={{ maxWidth: 345 }} style={{ backgroundColor: 'khaki', display: 'grid', marginBottom: '40px', marginTop: '40px', borderRadius: '50px',minWidth:'300px' }}>
     <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + ime}>
            
          </Avatar>}
          title={imenoto.ime + " "  + imenoto.prezime}
          subheader={date}
          />
      <CardMedia
        component='img'
        height="400"
        image={'https://localhost:5001/StaticFiles/' + ime}
       />
      <CardActions className={classes.divButtonCard}>
      {/* <Button  style={{backgroundColor:'rgb(93, 224, 100)',borderRadius:'10px',color:'black'}} onClick={()=>{handleClick();}}>Ubacite novu sliku</Button> */}
       <Typography variant='h6' style={{marginBottom:'15px'}}>Odaberite sliku</Typography>
      
        <input  style={{display:'flex',textAlignLast:'center'}}type="file"onClick={()=>{handleClick();}} onChange={handleChange} />
      
        {/* <IconButton hidden={!klik} onClick={() => { handleExpandClick();handleSubmit(); } }>
        <ExpandMore
          expand={expanded}
hidden={!klik}
          onClick={() => { handleExpandClick(); } }
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </ExpandMore>
        Prikazi dugme za potvrdu
        </IconButton >
        <Collapse in={expanded} timeout="auto" unmountOnExit> */}
          <CardContent>

            <Button
            hidden={!klik}
              style={{ backgroundColor: 'rgb(93, 224, 100)', color: "black", width: '250px', height: '50px', borderRadius: '20px' }}
              variant="contained"
              color="success"
              type="submit"
              onClick={()=>{handleSubmit();}}
            >
              Potvrdi
            </Button>

          </CardContent>
        {/* </Collapse> */}


      </CardActions>
    </Card>
      </>
  );
}
export default CardSlika