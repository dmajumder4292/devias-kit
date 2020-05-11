import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Typography,
  Divider,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import Markdown from 'src/components/Markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  markdownContainer: {
    marginLeft: 0,
    marginRight: 0
  }
}));

function Changelog() {
  const classes = useStyles();
  const [source, setSource] = useState('');

  useEffect(() => {
    fetch('/docs/Changelog.md')
      .then((response) => response.text())
      .then((text) => setSource(text));
  }, []);

  return (
    <Page
      className={classes.root}
      title="Changelog"
    >
      <Container maxWidth={false}>
        <Typography
          gutterBottom
          variant="overline"
        >
          Support
        </Typography>
        <Typography variant="h3">Changelog</Typography>
        <Divider className={classes.divider} />
      </Container>
      {source && (
        <Container
          maxWidth="md"
          className={classes.markdownContainer}
        >
          <Markdown
            escapeHtml={false}
            source={source}
          />
        </Container>
      )}
    </Page>
  );
}

export default Changelog;
