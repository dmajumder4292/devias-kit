import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {},
  menuItem: {
    padding: 0
  },
  formControlLabel: {
    padding: theme.spacing(0.5, 2),
    width: '100%',
    margin: 0
  }
}));

function MultiSelect({
  label, options, value, onChange
}) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event) => {
    let newValue = [...value];

    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = newValue.filter((item) => item !== event.target.value);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <Button
        onClick={handleMenuOpen}
        ref={anchorRef}
      >
        {label}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        className={classes.menu}
        onClose={handleMenuClose}
        open={openMenu}
        elevation={1}
        // eslint-disable-next-line react/jsx-sort-props
        PaperProps={{ style: { width: 250 } }}
      >
        {options.map((option) => (
          <MenuItem
            className={classes.menuItem}
            key={option}
          >
            <FormControlLabel
              className={classes.formControlLabel}
              control={(
                <Checkbox
                  checked={value.indexOf(option) > -1}
                  color="primary"
                  onClick={handleOptionToggle}
                  value={option}
                />
              )}
              label={option}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired
};

export default MultiSelect;
