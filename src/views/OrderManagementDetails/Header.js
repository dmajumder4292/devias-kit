import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
  colors
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  deleteButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  deleteIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ order, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Orders
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Order #
            {order.id.split('-').shift()}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.deleteButton}
            variant="contained"
          >
            <DeleteIcon className={classes.deleteIcon} />
            Delete
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default Header;
