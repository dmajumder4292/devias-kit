import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Snackbar, SnackbarContent, colors } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: colors.green[600]
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

function SuccessSnackbar({ open, onClose }) {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={6000}
      onClose={onClose}
      open={open}
    >
      <SnackbarContent
        className={classes.content}
        message={(
          <span className={classes.message}>
            <CheckCircleIcon className={classes.icon} />
            Successfully saved changes!
          </span>
        )}
        variant="h6"
      />
    </Snackbar>
  );
}

SuccessSnackbar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};

SuccessSnackbar.defaultProps = {
  open: true,
  onClose: () => {}
};

export default SuccessSnackbar;
