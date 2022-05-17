import React, { useEffect, useState } from 'react';
import classStyles from './styles';
import { PWD_REGEX } from '../REGEX';
import { ValidationTextField } from './styles';

const Password = props => {
  const [validPwd, setValidPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const { pwd, setPwd, matchPwd, setMatchPwd } = props;
  const classes = classStyles();

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(true);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  return (
    <>
      <form noValidate className={classes.container}>
        <ValidationTextField
          label="Lozinka"
          type="password"
          id="validation-outlined-input"
          onChange={e => setPwd(e.target.value)}
          required
          variant="outlined"
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedly="pwdnote"
          helperText="Mora da sadrzi velika i mala slova, karaktere i brojeve"
        />
      </form>

      <form noValidate className={classes.container}>
        <ValidationTextField
          label="Potvrdite lozinku"
          type="password"
          id="validation-outlined-input"
          onChange={e => setMatchPwd(e.target.value)}
          required
          variant="outlined"
          aria-invalid={validMatch ? 'false' : 'true'}
          helperText="Unesite prvo lozinku"
        />
      </form>
    </>
  );
};

export default Password;
