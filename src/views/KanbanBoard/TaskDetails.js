import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 360,
    maxWidth: '100%'
  }
}));

function TaskDetails({
  open,
  onClose,
  task,
  className,
  ...rest
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
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body1">{task.desc}</Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}

TaskDetails.displayName = 'TaskDetails';

TaskDetails.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  task: PropTypes.any
};

TaskDetails.defaultProps = {
  open: false,
  onClose: () => {}
};

export default TaskDetails;
