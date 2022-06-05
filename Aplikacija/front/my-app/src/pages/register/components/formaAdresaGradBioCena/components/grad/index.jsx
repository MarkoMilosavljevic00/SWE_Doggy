import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { ValidationTextField } from './styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { vratiSveGradoveSittera } from '../../../../../../backendAddress';

const Grad = props => {
  const [validGrad, setValidGrad] = useState(false);
  const { grad, setGrad } = props;
  const classes = classStyles();
  const [gradovi, postaviGradove] = useState([]);

  useEffect(() => {
    fetch(vratiSveGradoveSittera).then(async res => {
      const result = await res.json();
      postaviGradove(result);
    });
  }, []);

  const handleChange = event => {
    setGrad(event.target.value);
  };
  // useEffect(() => {
  //   const result = grad;
  //   setValidGrad(result);
  // }, [grad]);
  console.log(gradovi);

  return (
    <form noValidate className={classes.container}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Grad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grad}
            label="gradovi"
            onChange={handleChange}
            // aria-invalid={validGrad ? 'false' : 'true'}
          >
            {gradovi.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {/* <ValidationTextField
        label="Grad"
        type="text"
        autoComplete="off"
        onChange={e => setGrad(e.target.value)}
        required
        variant="outlined"
        value={grad}
        // helperText={'Ime mora da sadrzi vise od 2 karaktera'}
      /> */}
    </form>
  );
};

export default Grad;
