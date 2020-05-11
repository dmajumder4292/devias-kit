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

function SourceFiles({ className, ...rest }) {
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
              Source Files
            </Typography>
            <Typography variant="subtitle2">
              We&apos;ve included the source Sketch &amp; Figma files to Plus &amp; Extended licenses so you can get creative! Build layouts with confidence.
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
              src="/images/presentation/source_files.png"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

SourceFiles.propTypes = {
  className: PropTypes.string
};

export default SourceFiles;
