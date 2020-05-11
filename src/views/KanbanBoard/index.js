import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Header from './Header';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskDetails from './TaskDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(0, 3, 3, 1),
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  }
}));

function KanbanBoard() {
  const classes = useStyles();
  const [lists, setLists] = useState([]);
  const [openedTask, setOpenedTask] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios.get('/api/kanban').then((response) => {
        if (mounted) {
          const tempLists = [];

          // eslint-disable-next-line no-restricted-syntax
          for (const list of response.data.lists) {
            tempLists.push({ ...list, items: [] });
          }

          // eslint-disable-next-line no-restricted-syntax
          for (const task of response.data.tasks) {
            tempLists.forEach((list) => {
              if (list.id === task.list) {
                list.items.push(task);
              }
            });
          }

          setLists(tempLists);
        }
      });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const handleDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    const newLists = _.clone(lists);
    const sourceList = newLists.find((list) => list.id === source.droppableId);
    const destinationList = newLists.find(
      (list) => list.id === destination.droppableId
    );
    const [removedItem] = sourceList.items.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceList.items.splice(destination.index, 0, removedItem);
      setLists(newLists);
    } else {
      removedItem.list = destination.droppableId;
      destinationList.items.splice(destination.index, 0, removedItem);
      setLists(newLists);
    }
  };

  const handleListAdd = () => {
    const list = {
      id: uuid(),
      title: 'New list',
      items: []
    };

    setLists((prevLists) => [...prevLists, list]);
  };

  const handleTaskOpen = (task) => {
    setOpenedTask(task);
  };

  const handleTaskClose = () => {
    setOpenedTask(null);
  };

  return (
    <Page
      className={classes.root}
      title="Kanban Board"
    >
      <Header onListAdd={handleListAdd} />
      <div className={classes.container}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {lists.map((list) => (
            <Droppable
              droppableId={list.id}
              key={list.id}
            >
              {(provided, snapshot) => (
                <TaskList
                  provided={provided}
                  snapshot={snapshot}
                  title={list.title}
                  total={list.items.length}
                >
                  {list.items.map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided, snapshot) => (
                        <TaskListItem
                          onOpen={() => handleTaskOpen(task)}
                          provided={provided}
                          snapshot={snapshot}
                          task={task}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      <TaskDetails
        onClose={handleTaskClose}
        open={Boolean(openedTask)}
        task={openedTask}
      />
    </Page>
  );
}

export default KanbanBoard;
