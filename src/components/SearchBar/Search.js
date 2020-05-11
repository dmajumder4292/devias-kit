import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    backgroundColor: theme.palette.common.white,
    marginLeft: theme.spacing(2)
  }
}));

function Search({ onSearch, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Paper
        className={classes.search}
        elevation={1}
      >
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
        />
      </Paper>
      <Button
        className={classes.searchButton}
        onClick={onSearch}
        size="large"
        variant="contained"
      >
        Search
      </Button>
    </div>
  );
}

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search;
