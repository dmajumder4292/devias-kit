import React, { useState, useEffect } from 'react';
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
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Alert from 'src/components/Alert';
import Header from './Header';
import Overview from './Overview';
import Files from './Files';
import Activities from './Activities';
import Subscribers from './Subscribers';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  alert: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

function ProjectDetails({ match, history }) {
  const classes = useStyles();
  const { id, tab } = match.params;
  const [openAlert, setOpenAlert] = useState(true);
  const [project, setProject] = useState(null);
  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'files', label: 'Files' },
    { value: 'activity', label: 'Activity' },
    { value: 'subscribers', label: 'Subscribers' }
  ];

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  useEffect(() => {
    let mounted = true;

    const fetchProject = () => {
      axios.get('/api/projects/1').then((response) => {
        if (mounted) {
          setProject(response.data.project);
        }
      });
    };

    fetchProject();

    return () => {
      mounted = false;
    };
  }, []);

  if (!tab) {
    return <Redirect to={`/projects/${id}/overview`} />;
  }

  if (!tabs.find((t) => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!project) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Project Details"
    >
      <Container maxWidth="lg">
        <Header project={project} />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
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
        {openAlert && (
          <Alert
            className={classes.alert}
            message="The content holder has extended the deadline! Good luck"
            onClose={handleAlertClose}
          />
        )}
        <div className={classes.content}>
          {tab === 'overview' && <Overview project={project} />}
          {tab === 'files' && <Files files={project.files} />}
          {tab === 'activity' && <Activities activities={project.activities} />}
          {tab === 'subscribers' && (
            <Subscribers subscribers={project.subscribers} />
          )}
        </div>
      </Container>
    </Page>
  );
}

ProjectDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ProjectDetails;
