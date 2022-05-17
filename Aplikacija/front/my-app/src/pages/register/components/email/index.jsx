import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { NAME_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const PhoneNumber = props => {
  const { email, setEmail } = props;
  const classes = classStyles();

  return (
    <form noValidate className={classes.container}>
      <ValidationTextField
        label="Email"
        type="text"
        id="validation-outlined-input"
        onChange={e => setEmail(e.target.value)}
        required
        variant="outlined"
        value={email}
        input
      />
    </form>
  );
};

export default PhoneNumber;
