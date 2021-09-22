import React from 'react';
import { shape, string } from 'prop-types';

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
  let sectionName = '';
  let skills = '';
  if (sharedSkills && resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.skills;
    skills = sharedSkills.icons.map((skill) => (
      <li className="list-inline-item mx-3" key={skill.class}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: '220%' }}>
              <p className="text-center" style={{ fontSize: '30%', marginTop: '4px' }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <h1 className="section-title">
          <span className="text-white">{sectionName}</span>
        </h1>
      </div>
      <div className="col-md-12 text-center">
        <ul className="list-inline mx-auto skill-icon">{skills}</ul>
      </div>
    </section>
  );
};

Skills.propTypes = {
  sharedSkills: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Skills;
