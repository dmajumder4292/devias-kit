import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  sendButton: {
    marginTop: theme.spacing(2)
  },
  mailIcon: {
    marginRight: theme.spacing(1)
  },
  table: {
    marginTop: theme.spacing(2)
  },
  cell: {
    padding: theme.spacing(1)
  }
}));

const options = [
  'Resend last invoice',
  'Send password reset',
  'Send verification'
];

function SendEmails({ customer, className, ...rest }) {
  const classes = useStyles();
  const [option, setOption] = useState(options[0]);

  const handleChange = (event) => {
    event.persist();
    setOption(event.target.value);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Send emails" />
      <Divider />
      <CardContent className={classes.content}>
        <TextField
          fullWidth
          name="option"
          onChange={handleChange}
          select
          // eslint-disable-next-line react/jsx-sort-props
          SelectProps={{ native: true }}
          value={option}
          variant="outlined"
        >
          {options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </TextField>
        <Button
          className={classes.sendButton}
          variant="contained"
        >
          <MaiIcon className={classes.mailIcon} />
          Send email
        </Button>
        <Table className={classes.table}>
          <TableBody>
            {customer.emails.map(email => (
              <TableRow key={email.id}>
                <TableCell className={classes.cell}>
                  {moment(email.created_at).format('DD/MM/YYYY | HH:MM')}
                </TableCell>
                <TableCell className={classes.cell}>
                  {email.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

SendEmails.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default SendEmails;
