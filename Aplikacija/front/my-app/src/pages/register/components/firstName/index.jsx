import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { NAME_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const FirstName = props => {
  const [validFirstName, setValidFirstName] = useState(false);
  const { firstName, setFirstName } = props;
  const classes = classStyles();

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    setValidFirstName(true);
  }, [firstName]);

  return (
    <form noValidate className={classes.container}>
      <ValidationTextField
        label="Ime"
        type="text"
        id="validation-outlined-input"
        autoComplete="off"
        onChange={e => setFirstName(e.target.value)}
        required
        variant="outlined"
        aria-invalid={validFirstName ? 'false' : 'true'}
        aria-describedly="uidnote"
        helperText="Unesite ime"
      />
    </form>
  );
};

export default FirstName;
