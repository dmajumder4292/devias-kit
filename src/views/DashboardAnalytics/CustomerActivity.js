import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Link
} from '@material-ui/core';
import axios from 'src/utils/axios';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    padding: theme.spacing(3),
    flexGrow: 1,
    '&:first-of-type': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  content: {
    padding: 0
  },
  date: {
    whiteSpace: 'nowrap'
  }
}));

function CustomerActivity({ className, ...rest }) {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('/api/dashboard/customer-activity').then(response => {
        if (mounted) {
          setCustomers(response.data.customers);
        }
      });
    }

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Customer Activity" />
      <Divider />
      <div className={classes.statsContainer}>
        <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Registered
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            15,245
          </Typography>
        </div>
        <Divider />
        <div className={classes.statsItem}>
          <Typography
            align="center"
            component="h4"
            gutterBottom
            variant="overline"
          >
            Online
          </Typography>
          <Typography
            align="center"
            variant="h3"
          >
            357
          </Typography>
        </div>
      </div>
      <Divider />
      <CardContent className={classes.content}>
        <List disablePadding>
          {customers.map((customer, i) => (
            <ListItem
              divider={i < customers.length - 1}
              key={customer.id}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Customer"
                  component={RouterLink}
                  src={customer.author.avatar}
                  to="/management/customers/1"
                >
                  {getInitials(customer.author.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    component={RouterLink}
                    to="/management/customers/1"
                    variant="h6"
                  >
                    {customer.author.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2">
                    {customer.description} |{' '}
                    {customer.type === 'payment' && (
                      <Link
                        color="inherit"
                        component={RouterLink}
                        to="#"
                      >
                        See invoice
                      </Link>
                    )}
                  </Typography>
                }
              />
              <Typography
                className={classes.date}
                variant="body2"
              >
                {moment(customer.created_at).fromNow()}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

CustomerActivity.propTypes = {
  className: PropTypes.string
};

export default CustomerActivity;
