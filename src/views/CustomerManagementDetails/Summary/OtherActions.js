import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  notice: {
    marginTop: theme.spacing(1)
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

function OtherActions({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Other actions" />
      <Divider />
      <CardContent>
        <div className={classes.mainActions}>
          <Button>
            <NotInterestedIcon className={classes.buttonIcon} />
            Close Customer Account
          </Button>
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Export client data
          </Button>
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Remove this this customer’s data if he requested that, if not please
          be aware that what has been deleted can never brough back
        </Typography>
        <Button className={classes.deleteButton}>
          <DeleteIcon className={classes.buttonIcon} />
          Delete Customer Account
        </Button>
      </CardContent>
    </Card>
  );
}

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
