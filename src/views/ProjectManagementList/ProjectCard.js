import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

function ProjectCard({ project, className, ...rest }) {
  const classes = useStyles();

  const statusColors = {
    'In progress': colors.orange[600],
    Canceled: colors.grey[600],
    Completed: colors.green[600]
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            className={classes.avatar}
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
            >
              {project.title}
            </Link>
            <Typography variant="body2">
              by
              {' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6"
              >
                {project.author.name}
              </Link>
            </Typography>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {project.currency}
            {project.price}
          </Typography>
          <Typography variant="body2">Project price</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{project.members}</Typography>
          <Typography variant="body2">Team members</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.start_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Project started</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.end_date).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">Project deadline</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{ color: statusColors[project.status] }}
            variant="h6"
          >
            {project.status}
          </Typography>
          <Typography variant="body2">Project status</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
