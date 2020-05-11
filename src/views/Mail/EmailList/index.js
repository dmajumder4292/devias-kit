import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, List } from '@material-ui/core';
import EmailToolbar from './EmailToolbar';
import EmailItem from './EmailItem';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden'
  }
}));

function EmailList({
  emails,
  onEmailOpen,
  onBack,
  className,
  ...rest
}) {
  const classes = useStyles();
  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleSelectAll = () => {
    setSelectedEmails(emails.map((email) => email.id));
  };

  const handleDeselectAll = () => {
    setSelectedEmails([]);
  };

  const handleToggleOne = (id) => {
    setSelectedEmails((prevSelectedEmails) => {
      const newSelectedEmails = [...prevSelectedEmails];

      if (newSelectedEmails.includes(id)) {
        return newSelectedEmails.filter((email) => email !== id);
      }
      newSelectedEmails.push(id);

      return newSelectedEmails;
    });
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <EmailToolbar
        onBack={onBack}
        onDeselectAll={handleDeselectAll}
        onSelectAll={handleSelectAll}
        selectedEmails={selectedEmails}
        totalEmails={emails.length}
      />
      <Divider />
      <List disablePadding>
        {emails.map((email) => (
          <EmailItem
            email={email}
            key={email.id}
            onOpen={onEmailOpen}
            onToggle={() => handleToggleOne(email.id)}
            selected={selectedEmails.includes(email.id)}
          />
        ))}
      </List>
    </div>
  );
}

EmailList.propTypes = {
  className: PropTypes.string,
  emails: PropTypes.array.isRequired,
  onBack: PropTypes.func,
  onEmailOpen: PropTypes.func
};

export default EmailList;
