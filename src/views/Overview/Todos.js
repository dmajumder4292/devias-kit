/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Tooltip,
  Typography,
  colors
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';

const getLabel = (todo) => {
  if (todo.done) {
    return null;
  }

  if (moment(todo.deadline).isBefore(moment(), 'day')) {
    return (
      <Label color={colors.red[600]}>
        {
          `Due ${moment(todo.deadline).fromNow()}`
        }
      </Label>
    );
  }

  if (moment(todo.deadline).isSame(moment(), 'day')) {
    return <Label color={colors.orange[600]}>Due today</Label>;
  }

  return <Label>{`Due ${moment(todo.deadline).fromNow()}`}</Label>;
};

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  addIcon: {
    marginRight: theme.spacing(1)
  },
  done: {
    textDecoration: 'line-through',
    color: theme.palette.text.secondary
  }
}));

function Todos({ className, ...rest }) {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const handleChange = (event, todo) => {
    event.persist();

    setTodos((prevTodos) => prevTodos.map((prevTodo) => {
      if (prevTodo.id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        };
      }

      return prevTodo;
    }));
  };

  useEffect(() => {
    let mounted = true;

    const fetchTodos = () => {
      axios.get('/api/account/todos').then((response) => {
        if (mounted) {
          setTodos(response.data.todos);
        }
      });
    };

    fetchTodos();

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
        action={(
          <Button
            color="primary"
            size="small"
          >
            <AddIcon className={classes.addIcon} />
            Add
          </Button>
        )}
        title="My todos"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {todos.map((todo, i) => (
            <ListItem
              divider={i < todos.length - 1}
              key={todo.id}
            >
              <ListItemIcon>
                <Radio
                  checked={todo.done}
                  onClick={(event) => handleChange(event, todo)}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className={clsx({
                    [classes.done]: todo.done
                  })}
                  variant="body1"
                >
                  {todo.title}
                </Typography>
              </ListItemText>
              {getLabel(todo)}
              <Tooltip title="Archive">
                <IconButton>
                  <ArchiveIcon />
                </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

Todos.propTypes = {
  className: PropTypes.string
};

export default Todos;
