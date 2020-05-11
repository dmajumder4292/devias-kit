import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import ProjectCard from 'src/components/ProjectCard';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Projects({ className, ...rest }) {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      if (mounted) {
        axios
          .get('/api/users/1/projects')
          .then((response) => setProjects(response.data.projects));
      }
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        spacing={3}
      >
        {projects.map((project) => (
          <Grid
            item
            key={project.id}
            lg={4}
            lx={4}
            md={6}
            xs={12}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
