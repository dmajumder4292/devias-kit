import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Divider,
  colors
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  saveButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

function Notifications({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Notifications" />
      <Divider />
      <CardContent>
        <form>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h6"
              >
                System
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
              >
                You will recieve emails in your business email address
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                )}
                label="Email alerts"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Push Notifications"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                )}
                label="Text message"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                )}
                label={(
                  <>
                    <Typography variant="body1">Phone calls</Typography>
                    <Typography variant="caption">
                      Short voice phone updating you
                    </Typography>
                  </>
                )}
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h6"
              >
                Chat App
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
              >
                You will recieve emails in your business email address
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                )}
                label="Email"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                )}
                label="Push notifications"
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          variant="contained"
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
}

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
