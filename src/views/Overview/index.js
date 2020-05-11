import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Statistics from './Statistics';
import Notifications from './Notifications';
import Projects from './Projects';
import Todos from './Todos';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

function Overview() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth="lg">
        <Header />
        <Statistics className={classes.statistics} />
        <Notifications className={classes.notifications} />
        <Projects className={classes.projects} />
        <Todos className={classes.todos} />
      </Container>
    </Page>
  );
}

export default Overview;
