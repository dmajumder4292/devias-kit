import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';
import Markdown from 'src/components/Markdown';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Brief({ brief, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Markdown source={brief} />
      </CardContent>
    </Card>
  );
}

Brief.propTypes = {
  brief: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Brief;
