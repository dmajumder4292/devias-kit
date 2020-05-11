import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import CustomerInfo from './CustomerInfo';
import Invoices from './Invoices';
import SendEmails from './SendEmails';
import OtherActions from './OtherActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Summary({ className, ...rest }) {
  const classes = useStyles();
  const [customer, setCustomer] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      axios.get('/api/management/customers/1/summary').then(response => {
        if (mounted) {
          setCustomer(response.data.summary);
        }
      });
    }

    fetchCustomer();

    return () => {
      mounted = false;
    };
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <CustomerInfo customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <SendEmails customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <OtherActions />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
