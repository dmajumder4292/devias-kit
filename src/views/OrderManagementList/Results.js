import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  colors
} from '@material-ui/core';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';
import TableEditBar from 'src/components/TableEditBar';

const useStyles = makeStyles((theme) => ({
  root: {},
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  }
}));

const paymentStatusColors = {
  canceled: colors.grey[600],
  pending: colors.orange[600],
  completed: colors.green[600],
  rejected: colors.red[600]
};

function Results({ className, orders, ...rest }) {
  const classes = useStyles();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = (event) => {
    const newSelectedOrders = event.target.checked
      ? orders.map((order) => order.id)
      : [];

    setSelectedOrders(newSelectedOrders);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelectedOrders = [];

    if (selectedIndex === -1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelectedOrders);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {orders.length}
        {' '}
        Records found. Page
        {' '}
        {page + 1}
        {' '}
        of
        {' '}
        {Math.ceil(orders.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="Orders"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedOrders.length === orders.length}
                        color="primary"
                        indeterminate={
                          selectedOrders.length > 0
                          && selectedOrders.length < orders.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Ref</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Method</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.slice(0, rowsPerPage).map((order) => (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedOrders.indexOf(order.id) !== -1}
                          color="primary"
                          onChange={(event) => handleSelectOne(event, order.id)}
                          value={selectedOrders.indexOf(order.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        {order.payment.ref}
                        <Typography variant="body2">
                          {moment(order.created_at).format(
                            'DD MMM YYYY | hh:mm'
                          )}
                        </Typography>
                      </TableCell>

                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.payment.method}</TableCell>
                      <TableCell>
                        {order.payment.currency}
                        {order.payment.total}
                      </TableCell>
                      <TableCell>
                        <Label
                          color={paymentStatusColors[order.payment.status]}
                          variant="outlined"
                        >
                          {order.payment.status}
                        </Label>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to="/management/orders/1"
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
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={orders.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOrders} />
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array
};

Results.defaultProps = {
  orders: []
};

export default Results;
