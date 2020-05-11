import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Divider,
  Typography,
  Grid,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProjectCard from 'src/components/ProjectCard';
import ReviewCard from 'src/views/Profile/Reviews/ReviewCard';
import ListCard from './ListCard';
import DismissCard from './DismissCard';

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

function Cards() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Cards"
    >
      <Container maxWidth="lg">
        <Typography variant="overline">
          Components
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
        >
          Cards
        </Typography>
        <Divider className={classes.divider} />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            xs={12}
          >
            <ListCard />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
          >
            <DismissCard />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <ProjectCard
              project={{
                id: uuid(),
                title: 'Develop a PDF Editor',
                author: {
                  name: 'Sasha Moreno',
                  avatar: '/images/avatars/avatar_6.png'
                },
                price: '12,500',
                currency: '$',
                type: 'Full-Time',
                location: 'Europe',
                members: 5,
                tags: [
                  {
                    text: 'HTML',
                    color: colors.green[600]
                  },
                  {
                    text: 'React JS',
                    color: colors.blue[600]
                  }
                ],
                start_date: moment(),
                end_date: moment(),
                updated_at: moment().subtract(8, 'days')
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <ReviewCard
              review={{
                id: uuid(),
                rating: 4,
                message: 'Shen was really great during the all time session we created the project',
                reviewer: {
                  name: 'Ekaterina Tankova',
                  avatar: '/images/avatars/avatar_2.png'
                },
                project: {
                  title: 'Mella Full Screen Slider',
                  price: '5,240.00'
                },
                pricePerHour: '43.00',
                hours: 31,
                currency: '$',
                created_at: moment().subtract(4, 'hours')
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Cards;
