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
const CardSlika = () => {
  
  
  const classes = classStyles();
  const[expanded,setExpanded]=useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const[slika,setSlika]=useState('')
const ajdi=localStorage.getItem('idVlasnika')
useEffect(()=>
{
  Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + ajdi).then(
    res=>
    {
      console.log(res.data.slika)
      setSlika(res.data.slika)
    }
  )
},[])
  console.log(ajdi + 'jajkas')
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const picture = ()=>
  {
    Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + ajdi).then(
      res=>
      {
        console.log(res.data.slika)
        setSlika(res.data.slika)
      }
    )
  }
  const[namino,setNamino]=useState('')
useEffect(()=>
  {
    Axios.get('https://localhost:5001/Vlasnik/vratiVlasnikaPoId?id=' + ajdi).then(
      res=>
      {
        console.log(res.data)
        setNamino(res.data)
      }
    )
  },[])
  const [file, setFile] = useState()
function handleChange(event) {
  setFile(event.target.files[0])
}
  function handleSubmit(event) {
  
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'responseType': 'blob' 
      },
    };
    Axios.post('https://localhost:5001/Vlasnik/dodajSlikuVlasniku?idVlasnik=' + ajdi, formData, config).then((response) => {
     
    //    base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
    // srcValue = "data:image/png;base64,"+base64ImageString
    console.log(response);
    // const blob1= response.data.blob();
      
      setFile(response.data)
      
    });
  }
  const[klik,setKlik]=useState(false)
  const handleClick=()=>
  {
    setKlik(!klik)
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
          avatar={<Avatar style={{marginRight:'0px'}}sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + slika}>
            
          </Avatar>}
          // action={<IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>}
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
        alt="Paella dish"
      />
      <CardActions className={classes.divButtonCard}>
    <Button  style={{backgroundColor:'rgb(93, 224, 100)',borderRadius:'10px',color:'black'}} onClick={()=>{handleClick();}}>Ubacite novu sliku</Button>
    <input className='inputic' style={{display:'flex',textAlignLast:'center'}}type="file" hidden={!klik} onChange={handleChange} />
    <ExpandMore
expand={expanded}
hidden={!klik}
onClick={() => { handleExpandClick(); handleSubmit(); } }
aria-expanded={expanded}
aria-label="show more"

>
    </ExpandMore>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
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
          onClick={picture}
        >
          Dodaj sliku
        </Button>
        </CardContent>
  </Collapse>
      </CardActions>
    </Card>
  );
};
export default CardSlika;
