import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Filter from './Filter';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(3)
  },
  filter: {
    marginTop: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(6)
  }
}));

function ProjectList() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Projects List"
    >
      <Container maxWidth="lg">
        <Header className={classes.header} />
        <Filter className={classes.filter} />
        <Results className={classes.results} />
      </Container>
    </Page>
  );
}

export default ProjectList;
