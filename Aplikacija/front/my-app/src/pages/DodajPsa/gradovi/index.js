import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { useState, useEffect } from 'react';
import { vratiSveGradoveSittera } from '../../../backendAddress';
import Select from '@mui/material/Select';
import { Axios } from 'axios';

export default function BasicSelect(props) {
  const { grad, postaviGrad } = props;
  const [gradovi, postaviGradove] = useState([]);

  const handleChange = event => {
    postaviGrad(event.target.value);
  };


  useEffect(() => {
    const TOKEN=localStorage.getItem('token')
    fetch(vratiSveGradoveSittera).then(async res => {
      const results = await res.json();
      postaviGradove(results);
    },{
      headers:{Authorization:`Bearer ${TOKEN}`}
    });
  }, []);
  const[siteri,setSiteri]=useState('')
  const vratisve= async()=>
  {
    const TOKEN=localStorage.getItem('token')
   await Axios.get('https://localhost:5001/Siter/vratiSveSitere').then(
      res=>
      {
        console.log(res.data)
        setSiteri(res.data)
      }
      ,{
        headers:{Authorization:`Bearer ${TOKEN}`}
      })
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grad}
          label="grad"
          onChange={handleChange}
        >
          <Typography onClick={()=>{vratisve();}}>Svi</Typography>
          {gradovi.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
