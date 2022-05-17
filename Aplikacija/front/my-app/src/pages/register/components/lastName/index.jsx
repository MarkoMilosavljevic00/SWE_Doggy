import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { NAME_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const LastName = props => {
  const [validLastName, setValidLastName] = useState(false);
  const { lastName, setLastName } = props;
  const classes = classStyles();

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLastName(true);
  }, [lastName]);

  return (
    <form noValidate className={classes.container}>
      <ValidationTextField
        label="Ime"
        type="text"
        id="validation-outlined-input"
        autoComplete="off"
        onChange={e => setLastName(e.target.value)}
        required
        variant="outlined"
        aria-invalid={validLastName ? 'false' : 'true'}
        aria-describedly="uidnote"
        helperText="Unesite ime"
      />
    </form>
  );
};

export default LastName;
