import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Button,
  Card,
  CardContent,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerEditModal from 'src/views/CustomerManagementDetails/Summary/CustomerEditModal';
import BaseModal from './BaseModal';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  section: {
    '& + &': {
      marginTop: theme.spacing(5)
    }
  }
}));

function Modals() {
  const classes = useStyles();
  const [openBase, setOpenBase] = useState(false);
  const [openCustomer, setOpenCustomer] = useState(false);

  return (
    <Page
      className={classes.root}
      title="Modals"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">
          Components
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
        >
          Modals
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Simple Modal
          </Typography>
          <Card>
            <CardContent>
              <Button
                color="primary"
                onClick={() => setOpenBase(true)}
                variant="contained"
              >
                Open Base Modal
              </Button>
            </CardContent>
          </Card>
          <BaseModal
            onClose={() => setOpenBase(false)}
            open={openBase}
          />
        </div>
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Example Modal
          </Typography>
          <Card>
            <CardContent>
              <Button
                color="primary"
                onClick={() => setOpenCustomer(true)}
                variant="contained"
              >
                Open Example Modal
              </Button>
            </CardContent>
          </Card>
          <CustomerEditModal
            customer={{
              email: 'j.doe@domain.com',
              name: 'J Doe',
              phone: '+4 505 950 823',
              country: 'USA',
              state: 'California',
              address1: '',
              address2: '',
              verified: true,
              discountedPrices: false
            }}
            onClose={() => setOpenCustomer(false)}
            open={openCustomer}
          />
        </div>
      </Container>
    </Page>
  );
}

export default Modals;
