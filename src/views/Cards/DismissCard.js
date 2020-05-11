import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  Typography,
  colors
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 126
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -60
  },
  avatar: {
    height: 72,
    width: 72,
    marginBottom: theme.spacing(1),
    border: `4px solid ${theme.palette.common.white}`
  },
  actions: {
    justifyContent: 'space-between'
  },
  containedSuccess: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: colors.green[600],
      }
    }
  }
}));

function DismissCard({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardMedia
        className={classes.media}
        image="/images/covers/cover_2.jpg"
      />
      <CardContent className={classes.content}>
        <Avatar
          className={classes.avatar}
          src="/images/avatars/avatar_3.png"
        >
          CM
        </Avatar>
        <Typography
          gutterBottom
          variant="h6"
        >
          Carmelita Marsham
        </Typography>
        <Typography variant="body2">
        Working on the latest API integration.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button>
          Dismiss User
        </Button>
        <Button className={classes.containedSuccess}>
          Accept Request
        </Button>
      </CardActions>
    </Card>
  );
}

DismissCard.propTypes = {
  className: PropTypes.string
};

export default DismissCard;
