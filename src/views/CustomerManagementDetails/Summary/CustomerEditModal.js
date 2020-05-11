import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  Typography,
  TextField,
  Switch,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

function CustomerEditModal({
  open, onClose, customer, className, ...rest
}) {
  const classes = useStyles();
  const [values, setValues] = useState({
    ...customer
  });

  const handleFieldChange = (event) => {
    event.persist();
    setValues((currentValues) => ({
      ...currentValues,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };

  if (!open) {
    return null;
  }

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardHeader title="Edit Customer" />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Email address"
                  name="email"
                  onChange={handleFieldChange}
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Full name"
                  name="name"
                  onChange={handleFieldChange}
                  value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Phone number"
                  name="phone"
                  onChange={handleFieldChange}
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="State/Region"
                  name="state"
                  onChange={handleFieldChange}
                  value={values.state}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleFieldChange}
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  onChange={handleFieldChange}
                  value={values.address1}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address 2"
                  name="address2"
                  onChange={handleFieldChange}
                  value={values.address2}
                  variant="outlined"
                />
              </Grid>
              <Grid item />
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Email Verified</Typography>
                <Typography variant="body2">
                  Disabling this will automatically send the user a verification
                  email
                </Typography>
                <Switch
                  checked={values.verified}
                  color="secondary"
                  edge="start"
                  name="verified"
                  onChange={handleFieldChange}
                  value={values.verified}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Discounted Prices</Typography>
                <Typography variant="body2">
                  This will give the user discountedprices for all products
                </Typography>
                <Switch
                  checked={values.discountedPrices}
                  color="secondary"
                  edge="start"
                  name="discountedPrices"
                  onChange={handleFieldChange}
                  value={values.discountedPrices}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions className={classes.actions}>
            <Button onClick={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              onClick={onClose}
              variant="contained"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
}

CustomerEditModal.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CustomerEditModal.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CustomerEditModal;
