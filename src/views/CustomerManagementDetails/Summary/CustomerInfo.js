import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import Label from 'src/components/Label';
import CustomerEditModal from './CustomerEditModal';

const useStyles = makeStyles(theme => ({
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

function CustomerInfo({ customer, className, ...rest }) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  }

  const handleEditClose = () => {
    setOpenEdit(false);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Customer info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                {customer.email}
                <div>
                  <Label
                    color={
                      customer.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {customer.verified
                      ? 'Email verified'
                      : 'Email not verified'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Phone</TableCell>
              <TableCell>{customer.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{customer.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{customer.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{customer.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{customer.address2}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Reset &amp; Send Password
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          Login as Customer
        </Button>
      </CardActions>
      <CustomerEditModal
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
}

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
