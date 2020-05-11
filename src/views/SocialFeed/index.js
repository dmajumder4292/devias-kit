import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import PostCard from 'src/components/PostCard';
import AddPost from 'src/components/AddPost';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  addPost: {
    marginTop: theme.spacing(3)
  },
  posts: {
    marginTop: theme.spacing(3)
  },
  post: {
    marginBottom: theme.spacing(3)
  }
}));

function SocialFeed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = () => {
      axios.get('/api/social-feed').then((response) => {
        if (mounted) {
          setPosts(response.data.posts);
        }
      });
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Social Feed"
    >
      <Container maxWidth="lg">
        <Header />
        <AddPost className={classes.addPost} />
        <div className={classes.posts}>
          {posts.map((post) => (
            <PostCard
              className={classes.post}
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </Container>
    </Page>
  );
}

export default SocialFeed;
