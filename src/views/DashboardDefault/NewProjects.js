import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Typography, Avatar, colors
} from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpenOutlined';
import Label from 'src/components/Label';
import gradients from 'src/utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

function NewProjects({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    value: '12',
    difference: '-10%'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
          New projects
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{data.value}</Typography>
          <Label
            className={classes.label}
            color={colors.red[600]}
            variant="outlined"
          >
            {data.difference}
          </Label>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FolderOpenIcon />
      </Avatar>
    </Card>
  );
}

NewProjects.propTypes = {
  className: PropTypes.string
};

export default NewProjects;
