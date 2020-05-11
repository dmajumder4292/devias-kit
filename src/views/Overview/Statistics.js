import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Typography,
  Grid,
  colors
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  overline: {
    marginTop: theme.spacing(1)
  }
}));

function Statistics({ className, ...rest }) {
  const classes = useStyles();
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchStatistics = () => {
      axios.get('/api/account/statistics').then((response) => {
        if (mounted) {
          setStatistics(response.data.statistics);
        }
      });
    };

    fetchStatistics();

    return () => {
      mounted = false;
    };
  }, []);

  if (!statistics) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">
            $
            {statistics.payout}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Next payout
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">
            $
            {statistics.projects}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Total products
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography variant="h2">{statistics.visitors}</Typography>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Today&apos;s Visitors
          </Typography>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <div className={classes.titleWrapper}>
            <Typography
              component="span"
              variant="h2"
            >
              {statistics.watching}
            </Typography>
            <Label
              className={classes.label}
              color={colors.green[600]}
            >
              Live
            </Label>
          </div>
          <Typography
            className={classes.overline}
            variant="overline"
          >
            Watching now
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

Statistics.propTypes = {
  className: PropTypes.string
};

export default Statistics;
