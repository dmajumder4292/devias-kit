import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  Divider,
  TextField,
  colors
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

function Security({ className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const valid = values.password && values.password === values.confirm;

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Change password" />
      <Divider />
      <CardContent>
        <form>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Security"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Confirm password"
                name="confirm"
                onChange={handleChange}
                type="password"
                value={values.confirm}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          disabled={!valid}
          variant="contained"
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
}

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
