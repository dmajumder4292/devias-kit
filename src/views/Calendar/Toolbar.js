import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Hidden,
  Typography,
  Tooltip,
  ButtonGroup,
  IconButton,
  Button
} from '@material-ui/core';
import ViewConfigIcon from '@material-ui/icons/ViewComfyOutlined';
import ViewWeekIcon from '@material-ui/icons/ViewWeekOutlined';
import ViewDayIcon from '@material-ui/icons/ViewDayOutlined';
import ViewAgendaIcon from '@material-ui/icons/ViewAgendaOutlined';

const useStyles = makeStyles(() => ({
  root: {}
}));

const viewOptions = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: ViewConfigIcon
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: ViewWeekIcon
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: ViewDayIcon
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaIcon
  }
];

function Toolbar({
  date,
  view,
  onDatePrev,
  onDateNext,
  onEventAdd,
  onViewChange,
  onDateToday,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Calendar
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Here's what you planned
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={onEventAdd}
            variant="contained"
          >
            Add event
          </Button>
        </Grid>
      </Grid>
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <ButtonGroup>
            <Button onClick={onDatePrev}>Prev</Button>
            <Button onClick={onDateToday}>Today</Button>
            <Button onClick={onDateNext}>Next</Button>
          </ButtonGroup>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Typography variant="h3">
              {moment(date).format('MMMM YYYY')}
            </Typography>
          </Grid>
          <Grid item>
            {viewOptions.map(viewOption => {
              const Icon = viewOption.icon;

              return (
                <Tooltip
                  key={viewOption.value}
                  title={viewOption.label}
                >
                  <IconButton
                    color={viewOption.value === view ? 'primary' : 'default'}
                    onClick={() => onViewChange(viewOption.value)}
                  >
                    <Icon />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

Toolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.any.isRequired,
  onDateNext: PropTypes.func,
  onDatePrev: PropTypes.func,
  onDateToday: PropTypes.func,
  onEventAdd: PropTypes.func,
  onViewChange: PropTypes.func,
  view: PropTypes.string.isRequired
};

export default Toolbar;
