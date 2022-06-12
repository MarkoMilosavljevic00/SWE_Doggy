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
  // const [grad, postaviGrad] = React.useState('');
  const { grad, postaviGrad } = props;

  const handleChange = event => {
    postaviGrad(event.target.value);
  };

  const [gradovi, postaviGradove] = useState([]);

  useEffect(() => {
    fetch(vratiSveGradoveSittera).then(async res => {
      const results = await res.json();
      postaviGradove(results);
    });
  }, []);
  const[siteri,setSiteri]=useState('')
  const vratisve=()=>
  {
    Axios.get('https://localhost:5001/Siter/vratiSveSitere').then(
      res=>
      {
        console.log(res.data)
        setSiteri(res.data)
      }
    )
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
              // style={getStyles(name, personName, theme)}
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
