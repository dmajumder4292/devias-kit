import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  colors
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StackAvatars from 'src/components/StackAvatars';

const useStyles = makeStyles((theme) => ({
  root: {},
  critical: {
    '& $indicator': {
      borderColor: colors.red[600]
    }
  },
  indicator: {
    height: 12,
    width: 12,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: colors.grey[100],
    borderRadius: '50%'
  },
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

function TaskItem({ task, className, ...rest }) {
  const classes = useStyles();

  let deadline = 'N/A';
  let critical = false;

  if (task.deadline) {
    const now = moment();
    const deadlineMoment = moment(task.deadline);

    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
      critical = true;
    }
  }

  return (
    <ListItem
      {...rest}
      className={clsx(
        classes.root,
        { [classes.critical]: critical },
        className
      )}
    >
      <ListItemIcon>
        <span className={classes.indicator} />
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={deadline}
      />
      <StackAvatars
        avatars={task.members}
        limit={3}
      />
      <Tooltip title="View task">
        <IconButton
          className={classes.viewButton}
          edge="end"
          size="small"
        >
          <OpenInNewIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

TaskItem.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object.isRequired
};

export default TaskItem;
