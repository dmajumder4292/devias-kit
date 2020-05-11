import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import CodeIcon from '@material-ui/icons/Code';
import StoreIcon from '@material-ui/icons/Store';
import gradients from 'src/utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
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
  },
  arrowForwardIcon: {
    color: theme.palette.icon
  }
}));

function NotificationList({ notifications, className, ...rest }) {
  const classes = useStyles();

  const avatars = {
    order: (
      <Avatar className={classes.avatarBlue}>
        <PaymentIcon />
      </Avatar>
    ),
    user: (
      <Avatar className={classes.avatarOrange}>
        <PeopleIcon />
      </Avatar>
    ),
    project: (
      <Avatar className={classes.avatarGreen}>
        <StoreIcon />
      </Avatar>
    ),
    feature: (
      <Avatar className={classes.avatarIndigo}>
        <CodeIcon />
      </Avatar>
    )
  };

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
      disablePadding
    >
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="#"
        >
          <ListItemAvatar>{avatars[notification.type]}</ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={moment(notification.created_at).fromNow()}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
}

NotificationList.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired
};

export default NotificationList;
