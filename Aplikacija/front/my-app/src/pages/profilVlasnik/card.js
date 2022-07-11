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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Axios from 'axios';
import classStyles from './styles';
import { useState,useEffect } from 'react';
import { ExpandMore } from '@mui/icons-material';
const CardSlika = (props) => {
  
  const {loged}=props;
  const token=localStorage.getItem('token')
  const classes = classStyles();
  const[expanded,setExpanded]=useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const[slika,setSlika]=useState('')
const [logovan,setLogovan]=useState('')
const[handle,setHandle1]=useState('')
useEffect(()=>
{
  async function fetchData(){
  const TOKEN=localStorage.getItem('token')
 await Axios.get('https://localhost:5001/Auth/vratiTrenutnogKorisnika',
  {
    headers:{ Authorization: `Bearer ${TOKEN}`
}}).then(res=>
  {
     setLogovan(res.data)
     console.log(res.data.id)
     setHandle1(!handle)
  })}
  fetchData();
},[])
useEffect(()=>
{
  async function fetchData(){
  const TOKEN=localStorage.getItem('token')
 await Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + logovan.id,
  {
    headers:{ Authorization: `Bearer ${TOKEN}`}
  }).then(
    res=>
    {
      console.log(res.data.slika)
      setSlika(res.data.slika)
    }
  )}
  fetchData();
},[handle])
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const picture = async()=>
  {
    const TOKEN=localStorage.getItem('token')
    await Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + logovan.id,
    {
      headers:{ Authorization: `Bearer ${TOKEN}`}
    }).then(
      res=>
      {
        console.log(res.data.slika)
        setSlika(res.data.slika)
        window.location.reload(false)
      }
    )
  }
  const[namino,setNamino]=useState('')
useEffect(()=>
  {
    async function fetchData(){
    const TOKEN=localStorage.getItem('token')
   await Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + logovan.id,
    {
      headers:{ Authorization: `Bearer ${TOKEN}`}
    }).then(
      res=>
      {
        console.log(res.data)
        setNamino(res.data)
      }
    )}
    fetchData();
  },[handle])
  
  const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}
  const handleSubmit=async(event)=> {
  
    
    const TOKEN=localStorage.getItem('token')
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'responseType': 'blob',
          'Authorization': `Bearer ${TOKEN}`
        
      },
    };
    await Axios.post('https://localhost:5001/Vlasnik/dodajSlikuVlasniku?idVlasnik=' + loged.id, formData, config).then((response) => {
    //    base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
    // srcValue = "data:image/png;base64,"+base64ImageString
    console.log(response);    
      setFile(response.data)
      picture();
      setKlik(false)
    });
  }
  const[klik,setKlik]=useState(false)
  const handleClick=()=>
  {
    const TOKEN=localStorage.getItem('token')
    if(token!=TOKEN || !TOKEN)
    {
      window.location.reload(false)
      return
    }
    setKlik(true)
    setExpanded(!expanded);


  }
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        display: 'grid',
        marginBottom: '40px',
        marginTop: '40px',
        borderRadius: '50px',
        backgroundColor:'khaki'
        // rgb(93, 224, 100)
      }}
    >   <div className='spoj' style={{display:'flex',justifyContent:'flex-start'}}>
        <CardHeader
          avatar={<Avatar style={{marginRight:'0px'}}sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>  </Avatar>}
          title={'Ime i prezime:' + namino.ime + ' ' + namino.prezime}
          subheader={'Danasnji datum:' + date}
          >
          </CardHeader>
          {/* <AccountBoxIcon/> */}
          </div>
      <CardMedia
        component="img"
        height="194"
        image={
          'https://localhost:5001/StaticFiles/' + slika
        }
      />
      <CardActions className={classes.divButtonCard}>
        <Typography style={{marginBottom:'20px'}}variant='h6'>Odaberite sliku</Typography>
    {/* <Button  style={{backgroundColor:'rgb(93, 224, 100)',borderRadius:'10px',color:'black'}} onClick={()=>{handleClick();}}>Ubacite novu sliku</Button> */}
    <input className='inputic' style={{display:'flex',textAlignLast:'center'}}type="file" onClick={handleClick} onChange={handleChange} />
    {/* <IconButton hidden={!klik} onClick={() => { handleExpandClick();handleSubmit(); } }>
    <ExpandMore
expand={expanded}
hidden={!klik}
onClick={() => { handleExpandClick(); } }
aria-expanded={expanded}
aria-label="show more"
// handleSubmit();
>
  <ExpandMoreIcon/>
    </ExpandMore>
  Prikazi dugme za potvrdu
    </IconButton> */}
{/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
  <CardContent hidden={!klik}>
        <Button
        
          style={{
            backgroundColor: 'rgb(93, 224, 100)',
            color: 'black',
            width: '250px',
            height: '50px',
            borderRadius: '20px',
            color:'black'
          }}
          variant="contained"
          color="success"
          onClick={()=>{handleSubmit();}}
        >
          Potvrdi
        </Button>
        </CardContent>
  {/* </Collapse> */}
      </CardActions>
    </Card>
  );
};
export default CardSlika;
