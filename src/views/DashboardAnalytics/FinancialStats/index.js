import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import GenericMoreButton  from 'src/components/GenericMoreButton';
import Chart from './Chart';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  chart: {
    padding: theme.spacing(4, 2, 0, 2),
    height: 400
  }
}));

function FinancialStats({ className, ...rest }) {
  const classes = useStyles();

  const data = {
    thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
    lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
  };

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Financial Stats"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart
              className={classes.chart}
              data={data}
              labels={labels}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

FinancialStats.propTypes = {
  className: PropTypes.string
};

export default FinancialStats;
