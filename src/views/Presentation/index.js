import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';
import Header from './Header';
import FAQ from './FAQ';
import PluginsSupport from './PluginsSupport';
import SourceFiles from './SourceFiles';
import UserFlows from './UserFlows';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Presentation() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Presentation"
    >
      <Header />
      <UserFlows />
      <PluginsSupport />
      <SourceFiles />
      <FAQ />
    </Page>
  );
}

export default Presentation;
