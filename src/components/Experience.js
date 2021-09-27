import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@material-ui/core/Chip';

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  let sectionName = '';
  let jobs = '';
  if (resumeExperience && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.experience;
    jobs = resumeExperience.map((work) => {
      const { technologies } = work;
      const mainTechnologies = work.mainTech;

      const mainTech = mainTechnologies.map((technology) => (
        <Chip
          className="main-badge"
          size="small"
          label={technology}
          key={technology}
        />
      ));
      const tech = technologies.map((technology) => (
        <Chip
          className="experience-badge"
          size="small"
          label={technology}
          key={technology}
        />
      ));
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: '#AE944F',
            color: '#fff',
            display: 'flex',
          }}
          icon={<i className={`${work.icon} experience-icon`} />}
          key={work.years}
        >
          <div style={{ textAlign: 'left', marginBottom: '4px' }}>{mainTech}</div>
          <h3 className="vertical-timeline-element-title" style={{ textAlign: 'left', color: 'black' }}>
            {work.company}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: 'left', color: 'black' }}>
            {work.title}
          </h4>
          <h5 className="vertical-timeline-element-subtitle" style={{ textAlign: 'left', color: 'black' }}>
            {work.description}
          </h5>
          <div style={{ textAlign: 'left', marginTop: '15px' }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id="experience" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: 'black' }}>
            <span className="text-black" style={{ textAlign: 'center' }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto timeline">
        <VerticalTimeline>
          {jobs}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

Experience.propTypes = {
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  resumeExperience: arrayOf(
    shape,
  ).isRequired,
};

export default Experience;
