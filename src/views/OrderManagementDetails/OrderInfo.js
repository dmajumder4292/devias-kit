import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Link
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const statusOptions = ['Canceled', 'Completed', 'Rejected'];

function OrderInfo({ order, className, ...rest }) {
  const classes = useStyles();
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Order info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>
                <Link
                  component={RouterLink}
                  to="/management/customers/1"
                >
                  {order.customer.name}
                </Link>
                <div>{order.customer.address}</div>
                <div>{order.customer.city}</div>
                <div>{order.customer.country}</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>ID</TableCell>
              <TableCell>
                #
                {order.id.split('-').shift()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ref</TableCell>
              <TableCell>{order.ref}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Date</TableCell>
              <TableCell>
                {moment(order.created_at).format('DD/MM/YYYY HH:MM')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Promotion Code</TableCell>
              <TableCell>{order.promoCode ? order.promoCode : 'N/A'}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Amount</TableCell>
              <TableCell>
                {order.currency}
                {order.value}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  name="option"
                  onChange={handleChange}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={status}
                  variant="outlined"
                >
                  {statusOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </TextField>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Resend invoice
        </Button>
      </CardActions>
    </Card>
  );
}

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
