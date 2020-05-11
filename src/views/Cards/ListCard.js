import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActions,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: colors.red[600],
    height: 32,
    width: 32
  },
  actions: {
    justifyContent: 'flex-end'
  },
  iconAfter: {
    marginLeft: theme.spacing(1)
  }
}));

const items = [
  {
    id: 1,
    initials: 'GH',
    title: 'GitHub',
    value: '28,400'
  },
  {
    id: 2,
    initials: 'TW',
    title: 'Twitter',
    value: '25,421'
  },
  {
    id: 3,
    initials: 'HN',
    title: 'Hacker News',
    value: '22,421'
  },
  {
    id: 4,
    initials: 'SO',
    title: 'StackOverflow',
    value: '21,223'
  }
];

function ListCard({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={(
          <IconButton size="small">
            <MoreIcon />
          </IconButton>
        )}
        title="Card Header"
      />
      <Divider />
      <List disablePadding>
        {items.map((item) => (
          <ListItem
            divider
            key={item.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {item.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography variant="subtitle2">
              {item.value}
            </Typography>
          </ListItem>
        ))}
      </List>
      <CardActions className={classes.actions}>
        <Button color="secondary">
            See All Results
          <ArrowForwardIcon className={classes.iconAfter} />
        </Button>
      </CardActions>
    </Card>
  );
}

ListCard.propTypes = {
  className: PropTypes.string
};

export default ListCard;
