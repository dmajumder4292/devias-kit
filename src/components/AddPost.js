import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  }
}));

function AddPost({ className, ...rest }) {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');
  const session = useSelector((state) => state.session);

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value);
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <Paper
          className={classes.paper}
          elevation={1}
        >
          <Input
            className={classes.input}
            disableUnderline
            onChange={handleChange}
            placeholder={`What's on your mind, ${session.user.first_name}`}
          />
        </Paper>
        <Tooltip title="Send">
          <IconButton color={value.length > 0 ? 'primary' : 'default'}>
            <SendIcon />
          </IconButton>
        </Tooltip>
        <Divider className={classes.divider} />
        <Tooltip title="Attach image">
          <IconButton
            edge="end"
            onClick={handleAttach}
          >
            <AddPhotoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Attach file">
          <IconButton
            edge="end"
            onClick={handleAttach}
          >
            <AttachFileIcon />
          </IconButton>
        </Tooltip>
        <input
          className={classes.fileInput}
          ref={fileInputRef}
          type="file"
        />
      </CardContent>
    </Card>
  );
}

AddPost.propTypes = {
  className: PropTypes.string
};

export default AddPost;
