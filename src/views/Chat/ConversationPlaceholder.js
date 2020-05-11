import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    textAlign: 'center'
  },
  image: {
    maxWidth: 400
  },
  title: {
    margin: theme.spacing(4, 0, 1, 0)
  }
}));

function ConversationPlaceholder({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <img
          alt="Select conversation"
          className={classes.image}
          src="/images/undraw_work_chat_erdt.svg"
        />
        <Typography
          className={classes.title}
          variant="h4"
        >
          Select conversation to display
        </Typography>
        <Typography variant="subtitle1">
          To start a conversation just click the message button from a person
          profile
        </Typography>
      </div>
    </div>
  );
}

ConversationPlaceholder.propTypes = {
  className: PropTypes.string
};

export default ConversationPlaceholder;
