import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  image: {
    height: 240,
    backgroundImage: 'url("/images/undraw_empty_xct9.svg")',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

function Placeholder({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.image} />
      <Typography variant="h4">
        There&apos;s nothing here...
      </Typography>
    </div>
  );
}

Placeholder.propTypes = {
  className: PropTypes.string
};

export default Placeholder;
