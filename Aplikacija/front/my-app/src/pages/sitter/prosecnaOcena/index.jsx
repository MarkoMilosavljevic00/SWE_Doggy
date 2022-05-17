import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { vratiSveSitereUrl } from '../../../backendAddress';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const ocene = [1, 2, 3, 4, 5];
  const handleChange = event => {
    console.log('aaaaaaaaaaaaa');
    setAge(event.target.value);
  };

  const [siteri, postaviSitere] = useState([]);

  useEffect(() => {
    fetch(vratiSveSitereUrl).then(async res => {
      const results = await res.json();
      postaviSitere(results);
    });
  }, []);

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Prosecna ocena</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Prosecna ocena"
          onChange={handleChange}
        >
          {ocene.map((ocena, index) => {
            return (
              <MenuItem key={index} value={ocena}>
                {ocena}
              </MenuItem>
            );
          })}

          {/* {ocene.map(ocena => {
            return (<MenuItem>{ocena}</MenuItem>);
          })} */}

          {/* {ocene.map(ocena => (
            <MenuItem>{ocena}</MenuItem>
          ))} */}

          {/* {ocene.map(ocena => <MenuItem>{ocena}</MenuItem> )} */}
        </Select>
      </FormControl>
    </Box>
  );
}
