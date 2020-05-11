/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  Switch,
  colors
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  field: {
    marginTop: theme.spacing(3)
  },
  cancelButton: {
    marginLeft: 'auto'
  },
  confirmButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const defaultEvent = {
  title: 'Event title',
  desc: 'Event description',
  allDay: false,
  start: moment().toDate(),
  end: moment().toDate()
};

const AddEditEvent = forwardRef((props, ref) => {
  const {
    event,
    onDelete,
    onCancel,
    onAdd,
    onEdit,
    className,
    ...rest
  } = props;
  const classes = useStyles();
  const [values, setValues] = useState(event || { ...defaultEvent });
  const mode = event ? 'edit' : 'add';

  const handleFieldChange = (e) => {
    e.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(event);
    }
  };

  const handleAdd = () => {
    if (!values.title || !values.desc) {
      return;
    }

    onAdd({ ...values, id: uuid() });
  };

  const handleEdit = () => {
    if (!values.title || !values.desc) {
      return;
    }

    onEdit(values);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      ref={ref}
    >
      <form>
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h3"
          >
            {mode === 'add' ? 'Add Event' : 'Edit Event'}
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            label="Title"
            name="title"
            onChange={handleFieldChange}
            value={values.title}
            variant="outlined"
          />
          <TextField
            className={classes.field}
            fullWidth
            label="Description"
            name="desc"
            onChange={handleFieldChange}
            value={values.desc}
            variant="outlined"
          />
          <FormControlLabel
            className={classes.field}
            control={(
              <Switch
                checked={values.allDay}
                name="allDay"
                onChange={handleFieldChange}
              />
            )}
            label="All day"
          />
          <TextField
            className={classes.field}
            defaultValue={moment(values.start).format('YYYY-MM-DDThh:mm:ss')}
            fullWidth
            label="Start date"
            name="start"
            onChange={handleFieldChange}
            type="datetime-local"
            variant="outlined"
          />
          <TextField
            className={classes.field}
            defaultValue={moment(values.end).format('YYYY-MM-DDThh:mm:ss')}
            disabled={values.allDay}
            fullWidth
            label="End date"
            name="end"
            onChange={handleFieldChange}
            type="datetime-local"
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <CardActions>
          <IconButton
            edge="start"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
          <Button
            className={classes.cancelButton}
            onClick={onCancel}
            variant="contained"
          >
            Cancel
          </Button>
          {mode === 'add' ? (
            <Button
              className={classes.confirmButton}
              onClick={handleAdd}
              variant="contained"
            >
              Add
            </Button>
          ) : (
            <Button
              className={classes.confirmButton}
              onClick={handleEdit}
              variant="contained"
            >
              Save
            </Button>
          )}
        </CardActions>
      </form>
    </Card>
  );
});

AddEditEvent.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};

export default AddEditEvent;
