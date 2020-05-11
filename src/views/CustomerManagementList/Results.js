import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import ReviewStars from 'src/components/ReviewStars';
import GenericMoreButton from 'src/components/GenericMoreButton';
import TableEditBar from 'src/components/TableEditBar';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

function Results({ className, customers, ...rest }) {
  const classes = useStyles();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = (event) => {
    const selectedCustomers = event.target.checked
      ? customers.map((customer) => customer.id)
      : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(1)
      );
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
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
        {customers.length}
        {' '}
        Records found. Page
        {' '}
        {page + 1}
        {' '}
        of
        {' '}
        {Math.ceil(customers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader
          action={<GenericMoreButton />}
          title="All customers"
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
                        checked={selectedCustomers.length === customers.length}
                        color="primary"
                        indeterminate={
                          selectedCustomers.length > 0
                          && selectedCustomers.length < customers.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Money spent</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Projects held</TableCell>
                    <TableCell>Reviews</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.slice(0, rowsPerPage).map((customer) => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCustomers.indexOf(customer.id) !== -1
                          }
                          color="primary"
                          onChange={(event) => handleSelectOne(event, customer.id)}
                          value={selectedCustomers.indexOf(customer.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={customer.avatar}
                          >
                            {getInitials(customer.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to="/management/customers/1"
                              variant="h6"
                            >
                              {customer.name}
                            </Link>
                            <div>{customer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.location}</TableCell>
                      <TableCell>
                        {customer.currency}
                        {customer.spent}
                      </TableCell>
                      <TableCell>{customer.type}</TableCell>
                      <TableCell>{customer.projects}</TableCell>
                      <TableCell>
                        <ReviewStars value={customer.rating} />
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to="/management/customers/1"
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
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedCustomers} />
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array
};

Results.defaultProps = {
  customers: []
};

export default Results;
