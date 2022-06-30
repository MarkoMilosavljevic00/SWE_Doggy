import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import classStyles from './styles';
import CardSlika from '../card';
import { useNavigate } from 'react-router-dom';
 
const CardDialog = props => {
  const classes = classStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
 
  const { imesitera } = props;
 
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
            <h5 style={{ color: 'black' }}>Ime sitera je:{imesitera}</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'rgb(93, 224, 100)' }} onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CardDialog;