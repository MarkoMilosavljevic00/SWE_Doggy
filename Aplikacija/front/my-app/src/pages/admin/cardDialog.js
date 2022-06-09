import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import classStyles from './styles';
import CardKomentari from './components/CardKomentari';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const CardDialog = props => {
  const classes = classStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const { idSitera } = props;

  const [komentari, postaviKomentar] = useState([]);

  useEffect(() => {
    fetch(
      'https://localhost:5001/Recenzija/vratiSveRecenzije?siterId=' + idSitera
    ).then(async res => {
      const recenzijeSvihSitera = await res.json();

      const recenzije = recenzijeSvihSitera.filter(
        recenzijaSitera => recenzijaSitera.siterId == idSitera
      );

      postaviKomentar(recenzije);
    });
  }, []);

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      {/* <Button style={{ color: 'green' }} onClick={handleClickOpen('paper')}>
        {tekstButton}
  </Button>*/}
      <Button
        style={{ color: 'white', backgroundColor: '#07a607' }}
        onClick={handleClickOpen('paper')}
      >
        Prikazi komentare i ocene
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{ color: 'green' }} id="scroll-dialog-title">
          Odgovor:
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <h5 style={{ color: 'black' }}>
              {komentari.map((k, index) => {
                return (
                  <CardKomentari
                    id={k.id}
                    vreme={k.vreme}
                    komentar={k.komentar}
                    ocena={k.ocena}
                  />
                );
              })}
            </h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'green' }} onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CardDialog;
