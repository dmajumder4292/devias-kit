import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from './LatestProjects';
import NewProjects from './NewProjects';
import RealTime from './RealTime';
import RoiPerCustomer from './RoiPerCustomer';
import TeamTasks from './TeamTasks';
import TodaysMoney from './TodaysMoney';
import SystemHealth from './SystemHealth';
import PerformanceOverTime from './PerformanceOverTime';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  grid: {
    marginTop: theme.spacing(2)
  }
}));

function DashboardDefault() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Default Dashboard"
    >
      <Container maxWidth={false}>
        <Header />
        <Grid
          container
          spacing={3}
          className={classes.grid}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <TodaysMoney />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <NewProjects />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <SystemHealth />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <RoiPerCustomer />
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
          >
            <RealTime />
          </Grid>
          <Grid
            item
            lg={9}
            xs={12}
          >
            <PerformanceOverTime />
          </Grid>
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <TeamTasks />
          </Grid>
          <Grid
            item
            lg={7}
            xl={8}
            xs={12}
          >
            <LatestProjects />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardDefault;
