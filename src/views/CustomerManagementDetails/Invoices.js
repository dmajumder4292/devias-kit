import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  }
}));

function Invoices({ className, ...rest }) {
  const classes = useStyles();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchInvoices = () => {
      axios.get('/api/management/customers/1/invoices').then(response => {
        if (mounted) {
          setInvoices(response.data.invoices);
        }
      });
    }

    fetchInvoices();

    return () => {
      mounted = false;
    };
  }, []);

  const statusColors = {
    pending: colors.orange[600],
    paid: colors.green[600],
    rejected: colors.red[600]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Customer invoices"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoices.map(invoice => (
                    <TableRow key={invoice.id}>
                      <TableCell>#{invoice.id.split('-').shift()}</TableCell>
                      <TableCell>
                        {moment(invoice.date).format('DD/MM/YYYY | HH:MM')}
                      </TableCell>
                      <TableCell>{invoice.description}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell>
                        {invoice.currency}
                        {invoice.value}
                      </TableCell>
                      <TableCell>
                        <Label
                          color={statusColors[invoice.status]}
                          variant="outlined"
                        >
                          {invoice.status}
                        </Label>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={'/management/invoices/1'}
                          variant="outlined"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
}

Invoices.propTypes = {
  className: PropTypes.string
};

export default Invoices;
