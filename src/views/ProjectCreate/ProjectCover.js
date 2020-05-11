import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import FilesDropzone from 'src/components/FilesDropzone';

const useStyles = makeStyles(() => ({
  root: {}
}));

function ProjectCover({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Project cover" />
      <CardContent>
        <FilesDropzone />
      </CardContent>
    </Card>
  );
}

ProjectCover.propTypes = {
  className: PropTypes.string
};

export default ProjectCover;
