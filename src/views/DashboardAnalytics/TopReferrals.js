import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'src/utils/axios';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function TopReferrals({ className, ...rest }) {
  const classes = useStyles();
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchReferrals = () => {
      axios.get('/api/dashboard/top-referrals').then((response) => {
        if (mounted) {
          setReferrals(response.data.referrals);
        }
      });
    };

    fetchReferrals();

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
        title="Top Referrals"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List disablePadding>
          {referrals.map((referral, i) => (
            <ListItem
              divider={i < referrals.length - 1}
              key={referral.id}
            >
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  size="small"
                  style={{ backgroundColor: referral.color }}
                >
                  {referral.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={referral.name} />
              <Typography variant="subtitle2">{referral.value}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="#"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

TopReferrals.propTypes = {
  className: PropTypes.string
};

export default TopReferrals;
