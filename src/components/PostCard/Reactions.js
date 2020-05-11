import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button,
  IconButton,
  Tooltip,
  colors
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: 'auto'
  },
  shareIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Reactions({ post, className, ...rest }) {
  const classes = useStyles();
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {liked ? (
        <Tooltip title="Unlike">
          <IconButton
            className={classes.likedButton}
            onClick={handleUnlike}
            size="small"
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Like">
          <IconButton
            className={classes.likeButton}
            onClick={handleLike}
            size="small"
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      )}
      <Typography
        color="textSecondary"
        variant="h6"
      >
        {likes}
      </Typography>
      <Button
        className={classes.shareButton}
        size="small"
        variant="contained"
      >
        <ShareIcon className={classes.shareIcon} />
        Share
      </Button>
    </div>
  );
}

Reactions.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default Reactions;
