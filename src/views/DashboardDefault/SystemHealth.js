import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Typography, Avatar, LinearProgress
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import gradients from 'src/utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  }
}));

function SystemHealth({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: 97
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
          System Health
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">
            {data.value}
            %
          </Typography>
          <LinearProgress
            className={classes.progress}
            value={data.value}
            variant="determinate"
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <DoneIcon />
      </Avatar>
    </Card>
  );
}

SystemHealth.propTypes = {
  className: PropTypes.string
};

export default SystemHealth;
