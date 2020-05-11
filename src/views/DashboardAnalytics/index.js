import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Overview from './Overview';
import FinancialStats from './FinancialStats';
import EarningsSegmentation from './EarningsSegmentation';
import TopReferrals from './TopReferrals';
import MostProfitableProducts from './MostProfitableProducts';
import CustomerActivity from './CustomerActivity';
import LatestOrders from './LatestOrders';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function DashboardAnalytics() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Analytics Dashboard"
    >
      <Container maxWidth={false}>
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Overview />
          </Grid>
          <Grid
            item
            lg={8}
            xl={9}
            xs={12}
          >
            <FinancialStats />
          </Grid>
          <Grid
            item
            lg={4}
            xl={3}
            xs={12}
          >
            <EarningsSegmentation />
          </Grid>
          <Grid
            item
            lg={8}
            xs={12}
          >
            <LatestOrders />
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
          >
            <CustomerActivity />
          </Grid>
          <Grid
            item
            lg={8}
            xs={12}
          >
            <MostProfitableProducts />
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
          >
            <TopReferrals />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAnalytics;
