import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { makeStyles } from '@material-ui/styles';
import {
  Paper, Typography, Link, Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 420,
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  media: {
    padding: theme.spacing(1, 2),
    height: 180,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(2)
  }
}));

function CookiesNotification() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    Cookies.set('consent', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const consent = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Paper
      className={classes.root}
      elevation={3}
    >
      <div className={classes.media}>
        <img
          alt="Cookies"
          src="/images/undraw_cookie_love_ulvn.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          We use Cookies to ensure that we give you the best experience on our
          website. Read our
          {' '}
          <Link
            className={classes.link}
            component="a"
            href="https://devias.io/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </Link>
          .
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.agreeButton}
          color="primary"
          onClick={handleClose}
          variant="contained"
        >
          I Agree
        </Button>
      </div>
    </Paper>
  );
}

export default CookiesNotification;
