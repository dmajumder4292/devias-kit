import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  list: {
    marginTop: theme.spacing(6)
  }
}));

const faqs = [
  {
    title: 'What do we use for styling our components?',
    description:
      'We use Material-ui\'s hooks api as we think it’s the best way of avoiding clutter.'
  },
  {
    title:
      'Are the design files (sketch, figma) included in the Standard Package?',
    description:
      'No, we offer the design source file only to Standard Plus Sketch & Figma and Extended Package.'
  },
  {
    title: 'Are you providing support for setting up my project?',
    description:
      'Yes, we offer email support for all our customers & even skype meetings for our extended license customers.'
  }
];

function FAQ({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant="h3"
        >
          FAQ
        </Typography>
        <List
          disablePadding
          className={classes.list}
        >
          {faqs.map((faq) => (
            <ListItem
              disableGutters
              key={uuid()}
            >
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText
                primary={faq.title}
                primaryTypographyProps={{ variant: 'h5' }}
                secondary={faq.description}
                secondaryTypographyProps={{ variant: 'body1' }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
