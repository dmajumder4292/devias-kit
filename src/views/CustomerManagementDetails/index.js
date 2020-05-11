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
import Summary from './Summary';
import Invoices from './Invoices';
import Logs from './Logs';

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
  content: {
    marginTop: theme.spacing(3)
  }
}));

function CustomerManagementDetails({ match, history }) {
  const classes = useStyles();
  const { id, tab: currentTab } = match.params;
  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' }
  ];

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  if (!currentTab) {
    return <Redirect to={`/management/customers/${id}/summary`} />;
  }

  if (!tabs.find((tab) => tab.value === currentTab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Customer Management Details"
    >
      <Container maxWidth={false}>
        <Header />
        <Tabs
          className={classes.tabs}
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
          {currentTab === 'summary' && <Summary />}
          {currentTab === 'invoices' && <Invoices />}
          {currentTab === 'logs' && <Logs />}
        </div>
      </Container>
    </Page>
  );
}

CustomerManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CustomerManagementDetails;
