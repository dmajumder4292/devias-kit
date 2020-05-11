import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3),
    height: 200
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

function BaseModal({
  open, onClose, className, ...rest
}) {
  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Simple Modal" />
        <Divider />
        <CardContent>
          <Typography variant="body1">
            One fine body...
          </Typography>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button onClick={onClose}>
            Dismiss
          </Button>
          <Button
            color="primary"
            onClick={onClose}
            variant="contained"
          >
            Confirm
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}

BaseModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

BaseModal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default BaseModal;
