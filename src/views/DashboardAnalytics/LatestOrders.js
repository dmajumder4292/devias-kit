import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  colors
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  progressContainer: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const labelColors = {
  complete: colors.green[600],
  pending: colors.orange[600],
  rejected: colors.red[600]
};

function LatestOrders({ className, ...rest }) {
  const classes = useStyles();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      axios.get('/api/dashboard/latest-orders').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    }

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Latest Orders"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className={classes.inner}>
            {orders && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >
                          Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell>{order.ref}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell className={classes.totalCell}>
                        {order.currency} {order.value}
                      </TableCell>
                      <TableCell>
                        <Label
                          color={labelColors[order.status]}
                          variant="outlined"
                        >
                          {order.status}
                        </Label>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={'management/orders/1'}
                          variant="outlined"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="management/orders"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
