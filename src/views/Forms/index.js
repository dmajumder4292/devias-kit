import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Link,
  Paper,
  Card,
  CardContent,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import AboutAuthor from 'src/views/ProjectCreate/AboutAuthor';
import RichEditor from 'src/components/RichEditor';
import FilesDropzone from 'src/components/FilesDropzone';
import SimpleForm from './SimpleForm';

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

function Forms() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Forms"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">Components</Typography>
        <Typography
          gutterBottom
          variant="h3"
        >
          Forms
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Simple Form
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
          >
            We used the default styiling as we think it fits our design aesthetic best. For more information on how to do that, visit
            {' '}
            <Link
              href="https://material-ui.com/"
              target="_blank"
            >
              Material-UI
            </Link>
            {' '}
            documentation.
          </Typography>
          <SimpleForm />
        </div>
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Radio Forms
          </Typography>
          <AboutAuthor />
        </div>
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            WYSIWYG Editor
          </Typography>
          <Paper>
            <RichEditor />
          </Paper>
        </div>
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            File Uploader
          </Typography>
          <Card>
            <CardContent>
              <FilesDropzone />
            </CardContent>
          </Card>
        </div>
      </Container>
    </Page>
  );
}

export default Forms;
