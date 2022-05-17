import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { USER_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const Username = props => {
  const [validName, setValidName] = useState(false);
  const { user, setUser } = props;
  const classes = classStyles();

  const checkUsername = () => {
    const result = USER_REGEX.test(user);
    if (!result) {
      setValidName(false);
      // alert('Niste validno korisncko ime');
    } else {
      setValidName(true);
    }
  };

  return (
    <form noValidate className={classes.container}>
      <ValidationTextField
        label="Korisnicko ime"
        type="text"
        id="validation-outlined-input"
        autoComplete="off"
        onChange={e => setUser(e.target.value)}
        required
        variant="outlined"
        aria-invalid={validName ? 'false' : 'true'}
        helperText="Morate uneti od 4 do 24 karaktera"
        onBlur={checkUsername}
      />
    </form>
  );
};

export default Username;
