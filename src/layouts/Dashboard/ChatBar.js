import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import axios from 'src/utils/axios';
import StatusBullet from 'src/components/StatusBullet';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 280
  },
  root: {
    backgroundColor: theme.palette.common.white
  },
  list: {
    padding: theme.spacing(1, 3)
  },
  listItemText: {
    marginRight: theme.spacing(1)
  },
  lastActivity: {
    whiteSpace: 'nowrap'
  }
}));

function ChatBar({
  open,
  onClose,
  className,
  ...rest
}) {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios.get('/api/chat/activity').then((response) => {
        if (mounted) {
          setData(response.data);
        }
      });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      elevation={1}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {data.groups.map((group) => (
          <List
            className={classes.list}
            key={group.id}
            subheader={(
              <ListSubheader
                disableGutters
                disableSticky
              >
                {group.name}
              </ListSubheader>
            )}
          >
            {data.connections
              .filter((connection) => group.id === connection.group)
              .map((connection) => (
                <ListItem
                  disableGutters
                  key={connection.id}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Person"
                      component={RouterLink}
                      src={connection.avatar}
                      to="/profile/1/timeline"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listItemText}
                    disableTypography
                    primary={(
                      <Typography
                        component={RouterLink}
                        display="block"
                        noWrap
                        to="/profile/1/timeline"
                        variant="h6"
                      >
                        {connection.name}
                      </Typography>
                    )}
                  />
                  {connection.active ? (
                    <StatusBullet
                      color="success"
                      size="small"
                    />
                  ) : (
                    <Typography
                      className={classes.lastActivity}
                      variant="body2"
                    >
                      {moment(connection.lastActivity).fromNow()}
                    </Typography>
                  )}
                </ListItem>
              ))}
          </List>
        ))}
      </div>
    </Drawer>
  );
}

ChatBar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default ChatBar;
