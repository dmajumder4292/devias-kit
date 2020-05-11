import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ReviewStars from 'src/components/ReviewStars';

const useStyles = makeStyles((theme) => ({
  root: {},
  stars: {
    display: 'flex',
    alignItems: 'center'
  },
  rating: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  }
}));

function OverallReviews({ ratings, className, ...rest }) {
  const classes = useStyles();
  let rating = 0;

  if (ratings.length > 0) {
    rating = ratings.reduce((prev, current) => prev + current, 0) / ratings.length;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid item>
            <Typography variant="h5">Overall Reviews</Typography>
          </Grid>
          <Grid
            className={classes.stars}
            item
          >
            <ReviewStars value={rating} />
            <Typography
              className={classes.rating}
              variant="h6"
            >
              {rating}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.total}
              color="textSecondary"
              variant="body2"
            >
              {ratings.length}
              {' '}
              reviews in total
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

OverallReviews.propTypes = {
  className: PropTypes.string,
  ratings: PropTypes.array.isRequired
};

export default OverallReviews;
