import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32,
    zIndex: theme.zIndex.drawer - 100
  }
}));

function DirectionToggle({ direction, onToggle }) {
  const classes = useStyles();

  return (
    <>
      <Fab
        className={classes.fab}
        color="primary"
        onClick={onToggle}
        size="small"
      >
        {direction}
      </Fab>
    </>
  );
}

DirectionToggle.propTypes = {
  direction: PropTypes.string,
  onToggle: PropTypes.func
};

export default DirectionToggle;
