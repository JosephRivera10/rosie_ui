import { IconButton, SnackbarContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './useStyles';

const iconType = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const MessageContent = (props) => {
  const classes = useStyles();
  const {
    className, message, onClose, type, ...other
  } = props;
  const Icon = iconType[type];

  return (
    <SnackbarContent
      className={clsx(classes[type], className)}
      message={(
        <span className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconType)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
};

MessageContent.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default MessageContent;
