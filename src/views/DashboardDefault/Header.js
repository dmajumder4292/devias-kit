import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startDateButton: {
    marginRight: theme.spacing(1)
  },
  endDateButton: {
    marginLeft: theme.spacing(1)
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    name: 'Shen Zhi'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        Home
      </Typography>
      <Typography
        component="h1"
        gutterBottom
        variant="h3"
      >
        Good Morning,
        {' '}
        {data.name}
      </Typography>
      <Typography variant="subtitle1">
        Here&apos;s what&apos;s happening
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
