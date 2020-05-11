import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography
} from '@material-ui/core';
import axios from 'src/utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginRight: 0,
    marginTop: 0
  },
  overview: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start'
    }
  },
  product: {
    display: 'flex',
    alignItems: 'center'
  },
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  notice: {
    marginTop: theme.spacing(2)
  }
}));

function Subscription({ className, ...rest }) {
  const classes = useStyles();
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchSubscription = () => {
      axios.get('/api/account/subscription').then((response) => {
        if (mounted) {
          setSubscription(response.data.subscription);
        }
      });
    };

    fetchSubscription();

    return () => {
      mounted = false;
    };
  }, []);

  if (!subscription) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={(
          <Button
            size="small"
            variant="contained"
          >
            Upgrade plan
          </Button>
        )}
        classes={{ action: classes.action }}
        title="Manage your subscription"
      />
      <Divider />
      <CardContent>
        <Card>
          <CardContent className={classes.overview}>
            <div>
              <Typography
                display="inline"
                variant="h4"
              >
                {subscription.currency}
                {subscription.price}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle1"
              >
                /mo
              </Typography>
            </div>
            <div className={classes.product}>
              <img
                alt="Product"
                className={classes.productImage}
                src="/images/products/product_freelancer.svg"
              />
              <Typography variant="overline">{subscription.name}</Typography>
            </div>
          </CardContent>
          <Divider />
          <CardContent className={classes.details}>
            <div>
              <Typography variant="body1">
                {`${subscription.proposalsLeft} proposals left`}
              </Typography>
              <Typography variant="body1">
                {`${subscription.templatesLeft} templates`}
              </Typography>
            </div>
            <div>
              <Typography variant="body1">
                {`${subscription.invitesLeft} invites left`}
              </Typography>
              <Typography variant="body1">
                {`${subscription.adsLeft} ads left`}
              </Typography>
            </div>
            <div>
              {subscription.hasAnalytics && (
                <Typography variant="body1">Analytics dashboard</Typography>
              )}
              {subscription.hasEmailAlerts && (
                <Typography variant="body1">Email alerts</Typography>
              )}
            </div>
          </CardContent>
          <Divider />
        </Card>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          The refunds don&apos;t work once you have the subscription, but you can
          always
          {' '}
          <Link
            color="secondary"
            component={RouterLink}
            to="#"
          >
            Cancel your subscription
          </Link>
          .
        </Typography>
      </CardContent>
    </Card>
  );
}

Subscription.propTypes = {
  className: PropTypes.string
};

export default Subscription;
