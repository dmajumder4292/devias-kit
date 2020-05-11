import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Link,
  colors
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Page from 'src/components/Page';
import Filter from 'src/views/ProjectList/Filter';

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
  },
  content: {
    marginBottom: theme.spacing(-2)
  },
  chip: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

function Chips() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Chips"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">Components</Typography>
        <Typography
          gutterBottom
          variant="h3"
        >
          Chips
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.section}>
          <Card>
            <CardContent className={classes.content}>
              <Chip
                className={classes.chip}
                label="Text"
                onDelete={() => {}}
              />
              <Chip
                avatar={<Avatar src="/images/avatars/avatar_3.png">CM</Avatar>}
                className={classes.chip}
                label="Avatar"
                onClick={() => {}}
                onDelete={() => {}}
              />
              <Chip
                className={classes.chip}
                icon={<SettingsIcon />}
                label="Icon"
                onClick={() => {}}
                onDelete={() => {}}
              />
              <Chip
                className={classes.chip}
                label="Basic"
              />
              <Chip
                avatar={<Avatar src="/images/avatars/avatar_5.png">CM</Avatar>}
                className={classes.chip}
                label="Small"
                onDelete={() => {}}
                size="small"
              />
            </CardContent>
          </Card>
        </div>
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h4"
          >
            Example
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
          >
            Here is a complex example used in
            {' '}
            <Link
              component={RouterLink}
              to="/projects"
            >
              Project List View
            </Link>
          </Typography>
          <Filter />
        </div>
      </Container>
    </Page>
  );
}

export default Chips;
