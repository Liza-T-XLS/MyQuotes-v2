/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// == Imports

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import binIcon from '../../../images/bin.svg';

// == Component

const AlertDialog = ({ quote, deleteQuote }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseYes = () => {
    setOpen(false);
    deleteQuote(quote.id);
  };

  const handleCloseNo = () => {
    setOpen(false);
  };

  return (
    <>
      <img className="binIcon" src={binIcon} alt="bin icon" title="Delete the quote" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Do you really want to delete this quote?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseYes} color="primary">
            Yes
          </Button>
          <Button onClick={handleCloseNo} color="secondary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// == PropTypes

AlertDialog.propTypes = {
  quote: PropTypes.object.isRequired,
  deleteQuote: PropTypes.func.isRequired,
};

// == Export

export default AlertDialog;
