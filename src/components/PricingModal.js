import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Dialog,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  colors
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 960
  },
  header: {
    maxWidth: 600,
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    maxWidth: 720,
    margin: '0 auto'
  },
  product: {
    overflow: 'visible',
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  options: {
    lineHeight: '26px'
  },
  recommended: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: `${theme.palette.common.white} !important`
    }
  },
  contact: {
    margin: theme.spacing(3, 0)
  },
  actions: {
    backgroundColor: colors.grey[100],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  startButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

function PricingModal({
  open, onClose, className, ...rest
}) {
  const classes = useStyles();

  return (
    <Dialog
      maxWidth="lg"
      onClose={onClose}
      open={open}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Typography
            align="center"
            gutterBottom
            variant="h3"
          >
            Start with Freelancer today. Boost up your services!
          </Typography>
          <Typography
            align="center"
            className={classes.subtitle}
            variant="subtitle2"
          >
            Welcome to the first platform created for freelancers and agencies
            for showcasing and finding the best clients in the market. 30% of
            our income goes into Whale Charity
          </Typography>
        </div>
        <div className={classes.content}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
                onClick={onClose}
              >
                <img
                  alt="Product"
                  className={classes.image}
                  src="/images/products/product_freelancer.svg"
                />
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                >
                  Freelancer
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    $5
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                  >
                    /month
                  </Typography>
                </div>
                <Typography variant="overline">Max 1 user</Typography>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  <b>20</b>
                  {' '}
                  proposals/month
                  {' '}
                  <br />
                  <b>10</b>
                  {' '}
                  templates
                  {' '}
                  <br />
                  Analytics
                  {' '}
                  <b>dashboard</b>
                  {' '}
                  <br />
                  <b>Email</b>
                  {' '}
                  alerts
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={clsx(classes.product, classes.recommended)}
                elevation={1}
                onClick={onClose}
              >
                <img
                  alt="Product"
                  className={classes.image}
                  src="/images/products/product_agency--outlined.svg"
                />
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                >
                  Agency
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    $29
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                  >
                    /month
                  </Typography>
                </div>
                <Typography variant="overline">Max 3 user</Typography>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  <b>20</b>
                  {' '}
                  proposals/month
                  {' '}
                  <br />
                  <b>10</b>
                  {' '}
                  templates
                  {' '}
                  <br />
                  Analytics
                  {' '}
                  <b>dashboard</b>
                  {' '}
                  <br />
                  <b>Email</b>
                  {' '}
                  alerts
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
                onClick={onClose}
              >
                <img
                  alt="Product"
                  className={classes.image}
                  src="/images/products/product_enterprise.svg"
                />
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                >
                  Enterprise
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                  >
                    $259
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                  >
                    /month
                  </Typography>
                </div>
                <Typography variant="overline">Unlimited</Typography>
                <Divider className={classes.divider} />
                <Typography
                  className={classes.options}
                  variant="subtitle2"
                >
                  All from above
                  {' '}
                  <br />
                  <b>Unlimited</b>
                  {' '}
                  24/7 support
                  {' '}
                  <br />
                  Personalised
                  {' '}
                  <b>Page</b>
                  {' '}
                  <br />
                  <b>Advertise</b>
                  {' '}
                  your profile
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Typography
            align="center"
            className={classes.contact}
            variant="subtitle2"
          >
            Have a larger team?
            {' '}
            <Link
              color="secondary"
              component={RouterLink}
              to="#"
            >
              Contact us
            </Link>
            {' '}
            for information about more enterprise options.
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.startButton}
            onClick={onClose}
            variant="contained"
          >
            Start with freelancer
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

PricingModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default PricingModal;
