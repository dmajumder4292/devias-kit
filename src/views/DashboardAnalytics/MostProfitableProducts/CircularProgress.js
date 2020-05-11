import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 56,
    height: 56
  },
  circle1: {
    stroke: 'rgba(0,0,0,0.05)',
    fill: 'none',
    strokeWidth: 4
  },
  circle2: {
    stroke: theme.palette.primary.main,
    fill: 'none',
    strokeWidth: 4,
    animation: '$progress 1s ease-out forwards'
  },
  '@keyframes progress': {
    '0%': {
      strokeDasharray: '0 100'
    }
  }
}));

function CircularProgress({ value, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <svg viewBox="0 0 36 36">
        <path
          className={classes.circle1}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          strokeDasharray="100, 100"
        />
        <path
          className={classes.circle2}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          strokeDasharray={`${value}, 100`}
        />
      </svg>
    </div>
  );
}

CircularProgress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired
};

export default CircularProgress;
