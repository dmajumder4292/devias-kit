import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Card,
  colors
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MultiSelect from './MultiSelect';

const useStyles = makeStyles((theme) => ({
  root: {},
  keywords: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(2)
  },
  chips: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing(1)
  },
  selects: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.grey[50],
    padding: theme.spacing(1)
  },
  inNetwork: {
    marginLeft: 'auto'
  }
}));

const selects = [
  {
    label: 'Type',
    options: ['Freelance', 'Full Time', 'Part Time', 'Internship']
  },
  {
    label: 'Level',
    options: ['Novice', 'Expert']
  },
  {
    label: 'Location',
    options: [
      'Africa',
      'Asia',
      'Australia',
      'Europe',
      'North America',
      'South America'
    ]
  },
  {
    label: 'Roles',
    options: ['Android', 'Web Developer', 'iOS']
  }
];

function Filter({ className, ...rest }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([
    'Freelance',
    'Full Time',
    'Novice',
    'Europe',
    'Android',
    'Web Developer'
  ]);

  const handleInputChange = (event) => {
    event.persist();
    setInputValue(event.target.value);
  };

  const handleInputKeyup = (event) => {
    event.persist();

    if (event.keyCode === 13 && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips((prevChips) => [...prevChips, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleChipDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((prevChip) => chip !== prevChip));
  };

  const handleMultiSelectChange = (value) => {
    setChips(value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.keywords}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          disableUnderline
          onChange={handleInputChange}
          onKeyUp={handleInputKeyup}
          placeholder="Enter a keyword"
          value={inputValue}
        />
      </div>
      <Divider />
      <div className={classes.chips}>
        {chips.map((chip) => (
          <Chip
            className={classes.chip}
            key={chip}
            label={chip}
            onDelete={() => handleChipDelete(chip)}
          />
        ))}
      </div>
      <Divider />
      <div className={classes.selects}>
        {selects.map((select) => (
          <MultiSelect
            key={select.label}
            label={select.label}
            onChange={handleMultiSelectChange}
            options={select.options}
            value={chips}
          />
        ))}
        <FormControlLabel
          className={classes.inNetwork}
          control={(
            <Checkbox
              color="primary"
              defaultChecked //
            />
          )}
          label="In network"
        />
      </div>
    </Card>
  );
}

Filter.propTypes = {
  className: PropTypes.string
};

export default Filter;
