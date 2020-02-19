import { Snackbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import MessageContent from './MessageContent';

const PopupMessage = (props) => {
  const {
    anchorOrigin, duration, message, open, setOpen, type,
  } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={duration}
      onClose={handleClose}
      open={open}
    >
      <MessageContent
        onClose={handleClose}
        type={type}
        message={message}
      />
    </Snackbar>
  );
};

PopupMessage.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  duration: 6000,
};

PopupMessage.propTypes = {
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
  }),
  duration: PropTypes.number,
  message: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default PopupMessage;
