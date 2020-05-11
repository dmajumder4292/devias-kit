import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Avatar,
  Typography,
  Button,
  Hidden,
  IconButton,
  Snackbar,
  Tooltip,
  colors
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {},
  cover: {
    position: 'relative',
    height: 360,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
    },
    '&:hover': {
      '& $changeButton': {
        visibility: 'visible'
      }
    }
  },
  changeButton: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(3),
      bottom: 'auto'
    },
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  addPhotoIcon: {
    marginRight: theme.spacing(1)
  },
  container: {
    padding: theme.spacing(2, 3),
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    border: `2px solid ${theme.palette.common.white}`,
    height: 120,
    width: 120,
    top: -60,
    left: theme.spacing(3),
    position: 'absolute'
  },
  details: {
    marginLeft: 136
  },
  actions: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  pendingButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  personAddIcon: {
    marginRight: theme.spacing(1)
  },
  mailIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const user = {
    name: 'Shen Zhi',
    bio: 'Web Developer',
    avatar: '/images/avatars/avatar_11.png',
    cover: '/images/covers/cover_2.jpg',
    connectedStatus: 'not_connected'
  };
  const [connectedStatus, setConnectedStatus] = useState(user.connectedStatus);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleConnectToggle = () => {
    setConnectedStatus((prevConnectedStatus) => (prevConnectedStatus === 'not_connected' ? 'pending' : 'not_connected'));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (connectedStatus === 'pending') {
      setOpenSnackbar(true);
    }
  }, [connectedStatus]);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${user.cover})` }}
      >
        <Button
          className={classes.changeButton}
          variant="contained"
        >
          <AddPhotoIcon className={classes.addPhotoIcon} />
          Change Cover
        </Button>
      </div>
      <Container
        maxWidth="lg"
        className={classes.container}
      >
        <Avatar
          alt="Person"
          className={classes.avatar}
          src={user.avatar}
        />
        <div className={classes.details}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            {user.bio}
          </Typography>
          <Typography
            component="h1"
            variant="h4"
          >
            {user.name}
          </Typography>
        </div>
        <Hidden smDown>
          <div className={classes.actions}>
            <Button
              color="secondary"
              component={RouterLink}
              to="/chat"
              variant="contained"
            >
              <ChatIcon className={classes.mailIcon} />
              Send message
            </Button>
            {connectedStatus === 'not_connected' && (
              <Button
                color="primary"
                onClick={handleConnectToggle}
                variant="contained"
              >
                <PersonAddIcon className={classes.personAddIcon} />
                Add connection
              </Button>
            )}
            {connectedStatus === 'pending' && (
              <Button
                className={classes.pendingButton}
                onClick={handleConnectToggle}
                variant="contained"
              >
                <PersonAddIcon className={classes.personAddIcon} />
                Pending connection
              </Button>
            )}
            <Tooltip title="More options">
              <IconButton>
                <MoreIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Hidden>
      </Container>
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
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
