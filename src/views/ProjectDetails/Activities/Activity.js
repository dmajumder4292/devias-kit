import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  Typography,
  Link
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import gradients from 'src/utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  card: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    padding: theme.spacing(2),
    alignItems: 'center'
  },
  date: {
    marginLeft: 'auto',
    flexShrink: 0
  },
  avatarBlue: {
    backgroundImage: gradients.blue
  },
  avatarGreen: {
    backgroundImage: gradients.green
  },
  avatarOrange: {
    backgroundImage: gradients.orange
  },
  avatarIndigo: {
    backgroundImage: gradients.indigo
  }
}));

function Activity({ activity, className, ...rest }) {
  const classes = useStyles();

  const avatars = {
    upload_file: (
      <Avatar className={classes.avatarBlue}>
        <GetAppIcon />
      </Avatar>
    ),
    join_team: (
      <Avatar className={classes.avatarOrange}>
        <PersonAddIcon />
      </Avatar>
    ),
    price_change: (
      <Avatar className={classes.avatarGreen}>
        <AttachMoneyIcon />
      </Avatar>
    ),
    contest_created: (
      <Avatar className={classes.avatarIndigo}>
        <DashboardIcon />
      </Avatar>
    )
  };

  const to = activity.subject_type === 'user'
    ? '/profile/1/timeline'
    : '/projects/1/overview';

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {avatars[activity.action_type]}
      <Card className={classes.card}>
        <Typography variant="body1">
          <Link
            color="textPrimary"
            component={RouterLink}
            to={to}
            variant="h6"
          >
            {activity.subject}
          </Link>
          {' '}
          {activity.action_desc}
        </Typography>
        <Typography
          className={classes.date}
          variant="body2"
        >
          {moment(activity.created_at).fromNow()}
        </Typography>
      </Card>
    </div>
  );
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Activity;
