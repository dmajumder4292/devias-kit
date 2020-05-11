import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Grid,
  Card,
  CardContent,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

function TypographyView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Typography"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">Components</Typography>
        <Typography
          gutterBottom
          variant="h3"
        >
          Typography
        </Typography>
        <Divider className={classes.divider} />
        <Card>
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h1"
                >
                  h1. Heading
                </Typography>
                <Typography
                  gutterBottom
                  variant="h2"
                >
                  h2. Heading
                </Typography>
                <Typography
                  gutterBottom
                  variant="h3"
                >
                  h3. Heading
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                >
                  h4. Heading
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                >
                  h5. Heading
                </Typography>
                <Typography variant="h6">
                  h6. Heading
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="body1"
                >
                  body1. Nunc arcu est, blandit a malesuada eget, maximus nec metus. Vivamus turpis sapien, dapibus id lectus vitae, finibus ullamcorper augue. Nullam vulputate elementum velit. Sed vel commodo ligula, vitae ullamcorper ipsum. Duis convallis ligula nunc, ac posuere mi mattis id. Duis venenatis mattis dolor blandit sodales.
                </Typography>
                <Typography variant="body2">
                  body2. Nunc arcu est, blandit a malesuada eget, maximus nec metus. Vivamus turpis sapien, dapibus id lectus vitae, finibus ullamcorper augue. Nullam vulputate elementum velit. Sed vel commodo ligula, vitae ullamcorper ipsum. Duis convallis ligula nunc, ac posuere mi mattis id. Duis venenatis mattis dolor blandit sodales.
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  subtitle1. Fusce pellentesque neque sed nisl pretium ultricies.
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                >
                  subtitle2. Fusce pellentesque neque sed nisl pretium ultricies.
                </Typography>
                <Typography
                  component="p"
                  gutterBottom
                  variant="caption"
                >
                  caption. Duis convallis ligula nunc
                </Typography>
                <Typography
                  component="p"
                  gutterBottom
                  variant="overline"
                >
                  overline. Sed arcu est
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default TypographyView;
