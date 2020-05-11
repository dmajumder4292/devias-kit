import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  calendar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarButton: {
    backgroundColor: theme.palette.common.white
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const open = Boolean(selectEdge);

  const handleCalendarOpen = (edge) => {
    setSelectEdge(edge);
  }

  const handleCalendarChange = (date) => {
    setCalendarDate(date);
  }

  const handleCalendarClose = () => {
    setCalendarDate(moment());
    setSelectEdge(null);
  }

  const handleCalendarAccept = (date) => {
    setCalendarDate(moment());

    if (selectEdge === 'start') {
      setStartDate(date);

      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);

      if (moment(date).isBefore(startDate)) {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Analytics
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Finance Overview
          </Typography>
        </Grid>
        <Grid
          className={classes.calendar}
          item
          lg={6}
          xs={12}
        >
          <ButtonGroup
            variant="contained"
          >
            <Button
              className={classes.calendarButton}
              onClick={() => handleCalendarOpen('start')}
            >
              <CalendarTodayIcon className={classes.calendarTodayIcon} />
              {startDate.format('DD MM YYYY')}
            </Button>
            <Button
              className={classes.calendarButton}
              onClick={() => handleCalendarOpen('end')}
            >
              <CalendarTodayIcon className={classes.calendarTodayIcon} />
              {endDate.format('DD MM YYYY')}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <DatePicker
        maxDate={moment()}
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={open}
        style={{ display: 'none' }} // Temporal fix to hide the input element
        value={calendarDate}
        variant="dialog"
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {};

export default Header;
