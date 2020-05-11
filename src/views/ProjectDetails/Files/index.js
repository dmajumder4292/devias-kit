import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import FilesDropzone from 'src/components/FilesDropzone';
import FileCard from './FileCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

function Files({ files, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardContent>
          <FilesDropzone />
        </CardContent>
      </Card>
      <Grid
        className={classes.files}
        container
        spacing={3}
      >
        {files.map((file) => (
          <Grid
            item
            key={file.id}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.array.isRequired
};

export default Files;
