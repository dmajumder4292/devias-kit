import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  value: {
    fontWeight: theme.typography.fontWeightMedium
  },
  type: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const notifications = [
  {
    id: uuid(),
    value: 6,
    type: 'invite',
    message: 'to send service quotes'
  },
  {
    id: uuid(),
    value: 2,
    type: 'message',
    message: 'from clients'
  },
  {
    id: uuid(),
    value: 1,
    type: 'payout',
    message: 'that needs your confirmation'
  }
];

const icons = {
  invite: <SendIcon />,
  message: <MailIcon />,
  payout: <PaymentIcon />
};

function Notifications({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <List>
        {notifications.map((notification, i) => (
          <ListItem
            divider={i < notifications.length - 1}
            key={notification.id}
          >
            <ListItemIcon>{icons[notification.type]}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1">
                <span className={classes.value}>{notification.value}</span>
                {' '}
                <span className={classes.type}>
                  {notification.type}
                  s
                </span>
                {' '}
                {notification.message}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Tooltip title="View">
                <IconButton
                  edge="end"
                  size="small"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
