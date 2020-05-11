import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Chip,
  Typography
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Alert from 'src/components/Alert';

const useStyles = makeStyles((theme) => ({
  root: {},
  alert: {
    marginBottom: theme.spacing(3)
  },
  formGroup: {
    marginBottom: theme.spacing(3)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  fieldHint: {
    margin: theme.spacing(1, 0)
  },
  tags: {
    marginTop: theme.spacing(1),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  flexGrow: {
    flexGrow: 1
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const initialValues = {
  name: '',
  tag: '',
  tags: ['Full-Time', 'ReactJS'],
  startDate: moment(),
  endDate: moment().add(1, 'day')
};

function AboutProject({ className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({ ...initialValues });
  const [calendarTrigger, setCalendarTrigger] = useState(null);
  const calendarOpen = Boolean(calendarTrigger);
  const calendarMinDate = calendarTrigger === 'startDate'
    ? moment()
    : moment(values.startDate).add(1, 'day');
  const calendarValue = values[calendarTrigger];

  const handleFieldChange = (event, field, value) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  const handleTagAdd = () => {
    setValues((prevValues) => {
      const newValues = { ...prevValues };

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';

      return newValues;
    });
  };

  const handleTagDelete = (tag) => {
    setValues((prevValues) => {
      const newValues = { ...prevValues };

      newValues.tags = newValues.tags.filter((t) => t !== tag);

      return newValues;
    });
  };

  const handleCalendarOpen = (trigger) => {
    setCalendarTrigger(trigger);
  };

  const handleCalendarChange = () => {};

  const handleCalendarAccept = (date) => {
    setValues((prevValues) => ({
      ...prevValues,
      [calendarTrigger]: date
    }));
  };

  const handleCalendarClose = () => {
    setCalendarTrigger(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="About this project" />
      <CardContent>
        <form>
          <Alert
            className={classes.alert}
            message="Once you choose the project name you can’t change it unless you contact customer support."
          />
          <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Project Name"
              name="name"
              onChange={(event) => handleFieldChange(event, 'name', event.target.value)}
              value={values.name}
              variant="outlined"
            />
          </div>
          <div className={classes.formGroup}>
            <div className={classes.fieldGroup}>
              <TextField
                className={classes.flexGrow}
                label="Project Tags"
                name="tag"
                onChange={(event) => handleFieldChange(event, 'tag', event.target.value)}
                value={values.tag}
                variant="outlined"
              />
              <Button
                className={classes.addButton}
                onClick={handleTagAdd}
                size="small"
              >
                <AddIcon className={classes.addIcon} />
                Add
              </Button>
            </div>
            <Typography
              className={classes.fieldHint}
              variant="body2"
            >
              Tags will be colored depending the technology if the system
              recognises.
            </Typography>
            <div className={classes.tags}>
              {values.tags.map((tag) => (
                <Chip
                  deleteIcon={<CloseIcon />}
                  key={tag}
                  label={tag}
                  onDelete={() => handleTagDelete(tag)}
                />
              ))}
            </div>
          </div>
          <div className={classes.formGroup}>
            <div className={classes.fieldGroup}>
              <TextField
                className={classes.dateField}
                label="Start Date"
                name="startDate"
                onClick={() => handleCalendarOpen('startDate')}
                value={moment(values.startDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
              <TextField
                className={classes.dateField}
                label="End Date"
                name="endDate"
                onClick={() => handleCalendarOpen('endDate')}
                value={moment(values.endDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <DatePicker
        minDate={calendarMinDate}
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={calendarOpen}
        style={{ display: 'none' }} // Hide the input element
        value={calendarValue}
        variant="dialog"
      />
    </Card>
  );
}

AboutProject.propTypes = {
  className: PropTypes.string
};

export default AboutProject;
