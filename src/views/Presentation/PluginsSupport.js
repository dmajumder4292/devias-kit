import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

function PluginsSupport({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justify="space-between"
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="h3"
            >
              Support for Plugins
            </Typography>
            <Typography variant="subtitle2">
              The kit provides support for multiple third-party plugins right
              out of the box like Chart.js, Dropzone.js, Kanban Plugin and many
              more.
            </Typography>
          </Grid>
          <Grid
            className={classes.media}
            item
            lg={4}
            md={6}
            xs={12}
          >
            <img
              alt="User flows"
              src="/images/presentation/plugins_support.png"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

PluginsSupport.propTypes = {
  className: PropTypes.string
};

export default PluginsSupport;
