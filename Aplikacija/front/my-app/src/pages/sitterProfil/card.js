
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
const CardSlika=() =>{
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
const ajdi=localStorage.getItem('idSitera')
console.log(ajdi + 'jajkas')
const[ime,setIme]=useState('1.jpg')
useEffect(()=>
{
  Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + ajdi).then(
    res=>
    {
      console.log(res.data.slika)
      setIme(res.data.slika)
    }
  )
},[])
const [imenoto,setImenoto]=useState('')
useEffect(()=>
{
  Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + ajdi).then(
    res=>
    {
      console.log(res.data)
      setImenoto(res.data)
    }
  )
},[])
const name = ()=>
{
  Axios.get('https://localhost:5001/Siter/vratiSiteraPoId?id=' + ajdi).then(
    res=>
    {
      console.log(res.data.slika)
      setIme(res.data.slika)
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
  Axios.post('https://localhost:5001/Siter/dodajSlikuSiteru?idSiter=' + ajdi, formData, config).then((response) => {
   
  //    base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
  // srcValue = "data:image/png;base64,"+base64ImageString
  console.log(response);
  // const blob1= response.data.blob();
    
    setFile(response.data)
    
  });

}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
   const classes = classStyles();
  // return (
  //   <div className='page'>
  //     <div className='container'>
  //       <h1 className='h1'>Dodaj slickcu</h1>
  //       <div className='img-holder'>
  //         <img src={profileImg} alt='' id='img' className='img' />

  //       </div>
  //        <input type='file' name='image-upload' id='input' accept='image/*' onChange={imageHandler}/>
  //     <div className='label'>
  //       <label htmlFor='input' className='image-upload'>choose </label>
  //     </div>        
  //      </div>
  //   </div>
  const[expanded,setExpanded]=useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded);
};
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return(
    <><Card sx={{ maxWidth: 345 }} style={{ backgroundColor: 'mediumspringgreen', display: 'grid', marginBottom: '40px', marginTop: '40px', borderRadius: '50px' }}>
    {/* <ThemeProvider theme={darkTheme}>
      <main>This app is using the dark mode</main>
    </ThemeProvider> */}
     <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + ime}>
            
          </Avatar>}
          // action={<IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>}
          title={imenoto.ime + " "  + imenoto.prezime}
          subheader={date}
          />
      <CardMedia
        component='img'
        height="400"
        image={'https://localhost:5001/StaticFiles/' + ime}
       alt='paela'
       />
      <CardActions className={classes.divButtonCard}>
     <Typography paragraph>Ubacite novu sliku</Typography>
        <input type="file" onChange={handleChange} />
        {/* <Button color='success' onClick={handleSubmit}>klik</Button> */}
        <ExpandMore
          expand={expanded}

          onClick={() => { handleExpandClick(); handleSubmit(); } }
          aria-expanded={expanded}
          aria-label="show more"

        >
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <Button
              style={{ backgroundColor: 'cornsilk', color: "black", width: '250px', height: '50px', borderRadius: '20px' }}
              variant="contained"
              color="success"
              type="submit"
              onClick={name}
            >
              Dodaj sliku
            </Button>

          </CardContent>
        </Collapse>


      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }} hidden={true}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={'https://localhost:5001/StaticFiles/'  + ime}>
            
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
          title={imenoto.ime + " "  + imenoto.prezime}
          subheader={date}/>
        <CardMedia
          component="img"
          height="194"
          image={'https://localhost:5001/StaticFiles/' + ime}
          alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card></>
  );
}
export default CardSlika