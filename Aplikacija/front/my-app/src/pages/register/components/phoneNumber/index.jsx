import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { NAME_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const PhoneNumber = props => {
  // const [validLastName, setValidLastName] = useState(false);
  const { brojTelefona, setBrojTelefona } = props;
  const classes = classStyles();

  useEffect(() => {
    // const result = NAME_REGEX.test(brojTelefona);
    // setValidLastName(true);
  }, [brojTelefona]);

  return (
    <form noValidate className={classes.container}>
      <ValidationTextField
        label="Broj telefona"
        type="text"
        id="validation-outlined-input"
        autoComplete="off"
        onChange={e => setBrojTelefona(e.target.value)}
        required
        variant="outlined"
        value={brojTelefona}
      />
    </form>
  );
};

export default PhoneNumber;
