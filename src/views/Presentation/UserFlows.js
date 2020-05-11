import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
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

function UserFlows({ className, ...rest }) {
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
              Complete User Flows
            </Typography>
            <Typography variant="subtitle2">
              Not just a set of tools, the package includes the most common use
              cases of user flows like User Management, Second Level Layout, and
              many more.
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
              src="/images/presentation/user_flows.png"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

UserFlows.propTypes = {
  className: PropTypes.string
};

export default UserFlows;
