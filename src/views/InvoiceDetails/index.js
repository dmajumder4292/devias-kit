import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Divider } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Header from './Header';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

function InvoiceDetails() {
  const classes = useStyles();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchInvoice = () => {
      axios.get('/api/invoices/1').then((response) => {
        if (mounted) {
          setInvoice(response.data.invoice);
        }
      });
    };

    fetchInvoice();

    return () => {
      mounted = false;
    };
  }, []);

  if (!invoice) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Invoice Details"
    >
      <Container maxWidth="lg">
        <Header invoice={invoice} />
        <Divider className={classes.divider} />
        <Details invoice={invoice} />
      </Container>
    </Page>
  );
}

export default InvoiceDetails;
