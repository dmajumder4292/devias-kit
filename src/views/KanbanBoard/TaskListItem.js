import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatIcon from '@material-ui/icons/Chat';
import StackAvatars from 'src/components/StackAvatars';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles((theme) => ({
  root: {
    outline: 'none',
    marginBottom: theme.spacing(2)
  },
  isDragging: {},
  content: {
    paddingTop: 0
  },
  stats: {
    display: 'flex',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  files: {
    color: theme.palette.icon,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  comments: {
    color: theme.palette.icon,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  date: {
    marginLeft: theme.spacing(2)
  },
  progress: {
    marginTop: theme.spacing(2)
  }
}));

function TaskListItem({
  task,
  // eslint-disable-next-line no-unused-vars
  onOpen,
  provided,
  snapshot,
  className,
  style,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={clsx(
        classes.root,
        {
          [classes.isDragging]: snapshot.isDragging
        },
        className
      )}
      style={{ ...style, ...provided.draggableProps.style }}
    >
      <CardHeader
        action={<GenericMoreButton />}
        subheader={`#${task.ref}`}
        subheaderTypographyProps={{ variant: 'overline' }}
        title={task.title}
        titleTypographyProps={{ variant: 'h5', gutterBottom: true }}
      />
      <CardContent className={classes.content}>
        <div className={classes.stats}>
          <StackAvatars
            avatars={task.members}
            limit={4}
          />
          {task.files > 0 && (
            <div className={classes.files}>
              <AttachFileIcon />
            </div>
          )}
          {task.comments > 0 && (
            <div className={classes.comments}>
              <ChatIcon />
            </div>
          )}
          <div className={classes.flexGrow} />
          <Typography
            className={classes.date}
            color="textSecondary"
            variant="body2"
          >
            {moment(task.deadline).format('D MMM')}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

TaskListItem.propTypes = {
  className: PropTypes.string,
  onOpen: PropTypes.func,
  provided: PropTypes.object.isRequired,
  snapshot: PropTypes.object.isRequired,
  style: PropTypes.object,
  task: PropTypes.object.isRequired
};

TaskListItem.defaultProps = {
  style: {},
  onOpen: () => {}
};

export default TaskListItem;
