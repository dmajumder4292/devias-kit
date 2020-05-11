import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import ReplyAllIcon from '@material-ui/icons/ReplyAllOutlined';
import getInitials from 'src/utils/getInitials';
import Markdown from 'src/components/Markdown';
import EmailToolbar from './EmailToolbar';
import EmailForm from './EmailForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.common.white,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: theme.spacing(3, 3),
    display: 'flex',
    justifyContent: 'space-between'
  },
  receiver: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 56,
    width: 56,
    marginRight: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6, 3)
  },
  message: {
    marginTop: theme.spacing(2),
    '& > p': {
      ...theme.typography.subtitle1
    }
  }
}));

function EmailDetails({
  email,
  onEmailClose,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <EmailToolbar onBack={onEmailClose} />
      <Divider />
      <div className={classes.header}>
        <div className={classes.receiver}>
          <Avatar
            className={classes.avatar}
            src={email.receiver.avatar}
          >
            {getInitials(email.receiver.name)}
          </Avatar>
          <div>
            <Typography
              display="inline"
              variant="h5"
            >
              {email.receiver.name}
            </Typography>
            {' '}
            <Link
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {email.receiver.email}
            </Link>
            <Typography variant="subtitle2">
              To:
              {' '}
              <Link color="inherit">shen.zhi@devias.io</Link>
              ,
              {' '}
              <Link color="inherit">contact@devias.io</Link>
            </Typography>
            <Typography variant="body2">
              {moment(email.created_at).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>
          </div>
        </div>
        <div className={classes.actions}>
          <Tooltip title="Reply">
            <IconButton
              className={classes.moreButton}
              size="small"
            >
              <ReplyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reply all">
            <IconButton
              className={classes.moreButton}
              size="small"
            >
              <ReplyAllIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More options">
            <IconButton
              className={classes.moreButton}
              size="small"
            >
              <MoreIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Divider />
      <div className={classes.content}>
        <Typography variant="h1">{email.subject}</Typography>
        <Markdown
          className={classes.message}
          source={email.message}
        />
      </div>
      <Divider />
      <EmailForm />
    </div>
  );
}

EmailDetails.propTypes = {
  className: PropTypes.string,
  email: PropTypes.object.isRequired,
  onEmailClose: PropTypes.func
};

export default EmailDetails;
