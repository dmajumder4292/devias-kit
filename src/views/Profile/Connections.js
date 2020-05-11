import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import _ from 'lodash';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Snackbar,
  Typography,
  colors
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from 'src/utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    paddingTop: 0
  },
  search: {
    padding: theme.spacing(2, 3),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    color: theme.palette.text.secondary
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: '14px'
  },
  avatar: {
    height: 60,
    width: 60
  },
  listItem: {
    flexWrap: 'wrap'
  },
  listItemText: {
    marginLeft: theme.spacing(2)
  },
  connectButton: {
    marginLeft: 'auto'
  },
  pendingButton: {
    marginLeft: 'auto',
    color: theme.palette.common.white,
    backgroundColor: colors.orange[600],
    '&:hover': {
      backgroundColor: colors.orange[900]
    }
  },
  connectedButton: {
    marginLeft: 'auto',
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Connections({ className, ...rest }) {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [connections, setConnections] = useState([]);

  const handleConnectToggle = (id) => {
    setConnections((prevConnections) => {
      const newConnections = _.map(prevConnections, _.clone);

      return newConnections.map((connection) => {
        if (connection.id === id) {
          connection.status = connection.status === 'connected' || connection.status === 'pending'
            ? 'not_connected'
            : 'pending';

          if (connection.status === 'pending') {
            setOpenSnackbar(true);
          }
        }

        return connection;
      });
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    let mounted = true;

    const fetchConnections = () => {
      axios.get('/api/users/1/connections').then((response) => {
        if (mounted) {
          setConnections(response.data.connections);
        }
      });
    };

    fetchConnections();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Connections" />
      <Divider />
      <div className={classes.search}>
        <SearchIcon
          className={classes.searchIcon}
          color="inherit"
        />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search people &amp; places"
        />
      </div>
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <List disablePadding>
            {connections.map((connection, i) => (
              <ListItem
                className={classes.listItem}
                disableGutters
                divider={i < connections.length - 1}
                key={connection.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Profile image"
                    className={classes.avatar}
                    component={RouterLink}
                    src={connection.avatar}
                    to="/profile/1/timeline"
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary={connection.name}
                  secondary={`${connection.common} connections in common`}
                />
                {connection.status === 'not_connected' && (
                  <Button
                    className={classes.connectButton}
                    onClick={() => handleConnectToggle(connection.id)}
                    size="small"
                    variant="contained"
                  >
                    <PersonAddIcon className={classes.buttonIcon} />
                    Connect
                  </Button>
                )}
                {connection.status === 'pending' && (
                  <Button
                    className={classes.pendingButton}
                    onClick={() => handleConnectToggle(connection.id)}
                    size="small"
                    variant="contained"
                  >
                    <PersonAddIcon className={classes.buttonIcon} />
                    Pending
                  </Button>
                )}
                {connection.status === 'connected' && (
                  <Button
                    className={classes.connectedButton}
                    onClick={() => handleConnectToggle(connection.id)}
                    size="small"
                    variant="contained"
                  >
                    <CheckIcon className={classes.buttonIcon} />
                    Connected
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </PerfectScrollbar>
      </CardContent>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        autoHideDuration={6000}
        message={(
          <Typography
            color="inherit"
            variant="h6"
          >
            Sent connection request
          </Typography>
        )}
        onClose={handleSnackbarClose}
        open={openSnackbar}
      />
    </Card>
  );
}

Connections.propTypes = {
  className: PropTypes.string
};

export default Connections;
