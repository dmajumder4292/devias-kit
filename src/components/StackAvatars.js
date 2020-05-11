import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: 20
  },
  avatar: {
    border: `3px solid ${theme.palette.common.white}`,
    marginLeft: -20,
    '&:hover': {
      zIndex: 2
    }
  },
  more: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium
  }
}));

function StackAvatars({
  avatars, limit, className, ...rest
}) {
  const classes = useStyles();

  const avatarNodes = avatars.slice(0, limit).map((item) => (
    <Tooltip
      key={uuid()}
      title="View"
    >
      <Avatar
        className={classes.avatar}
        src={item}
      />
    </Tooltip>
  ));

  if (avatars.length > limit) {
    avatarNodes.push(
      <Tooltip
        key={uuid()}
        title="View"
      >
        <Avatar className={clsx(classes.avatar, classes.more)}>
          +
          {avatars.length - limit}
        </Avatar>
      </Tooltip>
    );
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {avatarNodes}
    </div>
  );
}

StackAvatars.propTypes = {
  avatars: PropTypes.array,
  className: PropTypes.string,
  limit: PropTypes.number
};

StackAvatars.defaultProps = {
  avatars: [],
  limit: 3
};

export default memo(StackAvatars);
