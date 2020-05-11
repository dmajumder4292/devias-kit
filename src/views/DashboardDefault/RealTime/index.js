import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import gradients from 'src/utils/gradients';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: gradients.indigo,
    color: theme.palette.primary.contrastText
  },
  content: {
    paddingTop: 0
  },
  itemDivider: {
    borderBottomColor: 'rgba(255,255,255,0.2)'
  },
  actions: {
    paddingTop: 0,
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RealTime({ className, ...rest }) {
  const classes = useStyles();

  const [data, setData] = useState([
    163,
    166,
    161,
    159,
    99,
    163,
    173,
    166,
    167,
    183,
    176,
    172
  ]);

  useEffect(() => {
    let mounted = true;

    setInterval(() => {
      if (mounted) {
        setData((data) => {
          const newData = [...data];

          newData.shift();
          newData.push(0);

          return newData;
        });
      }

      setTimeout(() => {
        if (mounted) {
          setData((prevData) => {
            const newData = [...prevData];
            const random = getRandomInt(100, 200);

            newData.pop();
            newData.push(random);

            return newData;
          });
        }
      }, 500);
    }, 2000);

    return () => {
      mounted = false;
    };
  }, []);

  const labels = data.map((value, i) => i);

  const pages = [
    {
      pathname: '/projects',
      views: '24'
    },
    {
      pathname: '/chat',
      views: '21'
    },
    {
      pathname: '/cart',
      views: '15'
    },
    {
      pathname: '/cart/checkout',
      views: '8'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            gutterBottom
            variant="h3"
          >
            {
              data[data.length - 1] === 0
                ? data[data.length - 2]
                : data[data.length - 1]
            }
          </Typography>
        )}
        subheader="Page views per second"
        subheaderTypographyProps={{ color: 'inherit' }}
        title="Active users"
        titleTypographyProps={{ color: 'inherit' }}
      />
      <CardContent className={classes.content}>
        <Chart
          data={data}
          labels={labels}
        />
        <List>
          {pages.map((page) => (
            <ListItem
              classes={{ divider: classes.itemDivider }}
              divider
              key={page.pathname}
            >
              <ListItemText
                primary={page.pathname}
                primaryTypographyProps={{ color: 'inherit', variant: 'body1' }}
              />
              <Typography color="inherit">{page.views}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="inherit"
          component={RouterLink}
          size="small"
          to="#"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

RealTime.propTypes = {
  className: PropTypes.string
};

export default RealTime;
