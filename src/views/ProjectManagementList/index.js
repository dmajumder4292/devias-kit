import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Paginate from 'src/components/Paginate';
import SearchBar from 'src/components/SearchBar';
import Header from './Header';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

function ProjectManagementList() {
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects, setProjects] = useState([]);

  const handleFilter = () => {};

  const handleSearch = () => {};

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/projects').then((response) => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Project Management List"
    >
      <Container maxWidth={false}>
        <Header />
        <SearchBar
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
        <div className={classes.results}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {`${projects.length} Records found. Page ${page + 1} of ${Math.ceil(projects.length / rowsPerPage)}`}
          </Typography>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        <div className={classes.paginate}>
          <Paginate pageCount={3} />
        </div>
      </Container>
    </Page>
  );
}

export default ProjectManagementList;
