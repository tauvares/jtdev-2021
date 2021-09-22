import React, { useState } from 'react';
import {
  arrayOf,
  shape, string,
} from 'prop-types';

import Grid from '@material-ui/core/Grid';

import ProjectDetailsModal from './ProjectDetailsModal';

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showDetails = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const closeDetails = () => setDetailsModalShow(false);

  const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.projects : '';

  const getProjects = (resumeProjs, resumeBasic) => {
    let result = '';
    if (resumeProjs && resumeBasic) {
      result = resumeProjs.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.title}>
          <div className="project-spacing" style={{ cursor: 'pointer' }}>
            <span className="portfolio-item">
              <div
                className="foto"
                role="contentinfo"
                onClick={() => showDetails(project)}
              >
                <div>
                  <img
                    src={project.images[0]}
                    alt="projectImages"
                    height="300"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <span className="project-date">{project.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">{project.title}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </span>
          </div>
        </Grid>
      ));
    }
    return result;
  };

  const projects = getProjects(resumeProjects, resumeBasicInfo);

  return (
    <section id="portfolio">
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <Grid container alignItems="center" spacing={2}>
        {projects}
      </Grid>
      <ProjectDetailsModal show={detailsModalShow} onHide={closeDetails} data={deps} />
    </section>
  );
};

Projects.propTypes = {
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  resumeProjects: arrayOf(
    shape,
  ).isRequired,
};

export default Projects;
