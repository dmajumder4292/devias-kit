import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Tabs,
  Tab,
  Divider,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Timeline from './Timeline';
import Connections from './Connections';
import Projects from './Projects';
import Reviews from './Reviews';

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

function Profile({ match, history }) {
  const classes = useStyles();
  const { id, tab: currentTab } = match.params;
  const tabs = [
    { value: 'timeline', label: 'Timeline' },
    { value: 'connections', label: 'Connections' },
    { value: 'projects', label: 'Projects' },
    { value: 'reviews', label: 'Reviews' }
  ];

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  if (!currentTab) {
    return <Redirect to={`/profile/${id}/timeline`} />;
  }

  if (!tabs.find((tab) => tab.value === currentTab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Profile"
    >
      <Header />
      <Container maxWidth="lg">
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {currentTab === 'timeline' && <Timeline />}
          {currentTab === 'connections' && <Connections />}
          {currentTab === 'projects' && <Projects />}
          {currentTab === 'reviews' && <Reviews />}
        </div>
      </Container>
    </Page>
  );
}

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Profile;
