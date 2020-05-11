import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white
  },
  header: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          align="center"
          gutterBottom
          variant="h1"
        >
          Devias React Material Kit - PRO
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="subtitle1"
        >
          A professional kit that comes with ready-to-use Material-UI©
          components developed with one common goal in mind, help you build
          faster &amp; beautiful applications. Each component is fully
          customizable, responsive and easy to integrate.
        </Typography>
        <div className={classes.buttons}>
          <Button
            color="primary"
            component="a"
            href="https://themes.material-ui.com/themes/devias-kit-pro"
            target="_blank"
            variant="contained"
          >
            Purchase Devias Kit
          </Button>
        </div>
      </div>
      <div className={classes.mediaContainer}>
        <img
          alt="Demos"
          className={classes.media}
          src="/images/presentation/header.jpg"
        />
      </div>
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              30+
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Demo Pages
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              UX
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Complete Flows
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              300+
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Components
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <div>
              <img
                alt="React"
                src="/images/react.png"
              />
            </div>
            <Typography
              color="inherit"
              variant="body2"
            >
              React Hooks API
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
