import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import axios from 'src/utils/axios';
import OverallReviews from './OverallReviews';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  review: {
    marginTop: theme.spacing(2)
  }
}));

function Reviews({ className, ...rest }) {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchReviews = () => {
      if (mounted) {
        axios
          .get('/api/users/1/reviews')
          .then((response) => setReviews(response.data.reviews));
      }
    };

    fetchReviews();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <OverallReviews ratings={reviews.map((review) => review.rating)} />
      {reviews.map((review) => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}

Reviews.propTypes = {
  className: PropTypes.string
};

export default Reviews;
