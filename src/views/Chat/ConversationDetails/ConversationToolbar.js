import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  IconButton,
  Input,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
  Hidden
} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SearchIcon from '@material-ui/icons/Search';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import StatusBullet from 'src/components/StatusBullet';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white
  },
  backButton: {
    marginRight: theme.spacing(2),
    '@media (min-width: 864px)': {
      display: 'none'
    }
  },
  user: {
    flexShrink: 0,
    flexGrow: 1
  },
  activity: {
    display: 'flex',
    alignItems: 'center'
  },
  statusBullet: {
    marginRight: theme.spacing(1)
  },
  search: {
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    flexBasis: 300,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 auto'
    }
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  }
}));

function ConversationToolbar({ conversation, className, ...rest }) {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <Toolbar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Tooltip title="Back">
        <IconButton
          className={classes.backButton}
          component={RouterLink}
          edge="start"
          to="/chat"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
      <div className={classes.user}>
        <Typography variant="h6">{conversation.otherUser.name}</Typography>
        <div className={classes.activity}>
          {conversation.otherUser.active ? (
            <>
              <StatusBullet
                className={classes.statusBullet}
                color="success"
                size="small"
              />
              <Typography variant="body2">Active now</Typography>
            </>
          ) : (
            <Typography variant="body2">
              Active
              {' '}
              {moment(conversation.otherUser.lastActivity).fromNow()}
            </Typography>
          )}
        </div>
      </div>
      <Hidden smDown>
        <Paper
          className={classes.search}
          elevation={1}
        >
          <SearchIcon className={classes.searchIcon} />
          <Input
            className={classes.searchInput}
            disableUnderline
            placeholder="Search email"
          />
        </Paper>
      </Hidden>
      <Tooltip title="More options">
        <IconButton
          onClick={handleMenuOpen}
          ref={moreRef}
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        keepMounted
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
      >
        <MenuItem>
          <ListItemIcon>
            <BlockIcon />
          </ListItemIcon>
          <ListItemText primary="Block user" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete conversation" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive conversation" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NotificationsOffIcon />
          </ListItemIcon>
          <ListItemText primary="Mute notifications" />
        </MenuItem>
      </Menu>
    </Toolbar>
  );
}

ConversationToolbar.propTypes = {
  className: PropTypes.string,
  conversation: PropTypes.object.isRequired
};

export default ConversationToolbar;
