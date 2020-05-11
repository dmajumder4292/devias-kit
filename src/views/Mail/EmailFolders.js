import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  colors
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/InboxOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import DraftsIcon from '@material-ui/icons/DraftsOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import FlagIcon from '@material-ui/icons/OutlinedFlag';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    padding: theme.spacing(2, 3)
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightRegular
  },
  folderIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.icon
  },
  totalItems: {
    marginLeft: theme.spacing(1)
  },
  newItems: {
    marginLeft: 'auto'
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    '& $folderIcon': {
      color: theme.palette.primary.main
    }
  }
}));

function EmailFolders({ onFolderOpen, className, ...rest }) {
  const classes = useStyles();
  const [active, setActive] = useState('inbox');
  const folders = [
    {
      id: 'inbox',
      title: 'Inbox',
      total_items: 200,
      new_items: 2,
      icon: <InboxIcon className={classes.folderIcon} />
    },
    {
      id: 'draft',
      title: 'Draft',
      total_items: 0,
      icon: <DraftsIcon className={classes.folderIcon} />
    },
    {
      id: 'sent',
      title: 'Sent',
      total_items: 78,
      icon: <SendIcon className={classes.folderIcon} />
    },
    {
      id: 'spam',
      title: 'Spam',
      total_items: 0,
      icon: <FlagIcon className={classes.folderIcon} />
    },
    {
      id: 'trash',
      title: 'Trash',
      total_items: 31,
      icon: <DeleteIcon className={classes.folderIcon} />
    }
  ];

  const handleSelect = (folder) => {
    setActive(folder.id);

    if (onFolderOpen) {
      onFolderOpen(folder.id);
    }
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.toolbar}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
        >
          <AddIcon className={classes.addIcon} />
          Compose message
        </Button>
      </div>
      <Divider />
      <List>
        {folders.map((folder) => (
          <ListItem
            className={classes.listItem}
            key={folder.title}
          >
            <Button
              className={clsx(classes.button, {
                [classes.active]: active === folder.id
              })}
              fullWidth
              onClick={() => handleSelect(folder)}
            >
              {folder.icon}
              {folder.title}
              {folder.total_items > 0 && (
                <Typography
                  className={classes.totalItems}
                  variant="body2"
                >
                  (
                    {folder.total_items > 99 ? '99+' : folder.total_items}
                  )
                </Typography>
              )}
              {folder.new_items && (
                <Label
                  className={classes.newItems}
                  color={colors.red[600]}
                  shape="rounded"
                  variant="contained"
                >
                  {folder.new_items}
                </Label>
              )}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

EmailFolders.propTypes = {
  className: PropTypes.string,
  onFolderOpen: PropTypes.func
};

export default EmailFolders;
