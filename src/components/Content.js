import React from 'react';
import {
  shape, string, func, element,
} from 'prop-types';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import Education from './Education';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop({ children, window }) {
  // const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#navbar');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: element.isRequired,
  window: func,
};

ScrollTop.defaultProps = {
  window: undefined,
};

const Content = ({ sharedData, resumeData }) => (
  <Grid container alignItems="center" justifyContent="center" spacing={2}>
    <Grid item xs={12}>
      <Home
        id="home"
        sharedBasicInfo={sharedData.basic_info}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Services
        id="services"
        resumeServices={resumeData.services}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Projects
        id="projects"
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        id="skills"
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        id="experience"
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Education
        id="about"
        resumeEducation={resumeData.education}
        resumeBasicInfo={resumeData.basic_info}
      />
      <About
        id="about"
        sharedBasicInfo={sharedData.basic_info}
        resumeBasicInfo={resumeData.basic_info}
        resumeAbout={resumeData.about}
      />
    </Grid>
    <ScrollTop>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </Grid>
);

Content.propTypes = {
  sharedData: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  resumeData: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Content;
