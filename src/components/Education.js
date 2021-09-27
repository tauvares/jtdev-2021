import React from 'react';
import {
  shape, string,
} from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { InlineIcon } from '@iconify/react';

const Education = ({ resumeEducation, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.education : '';
  const languageSection = resumeBasicInfo ? resumeBasicInfo.section_name.language : '';

  const getEducationItems = (sectionEducation, resumeBasic) => {
    let result = '';
    if (sectionEducation && resumeBasic) {
      result = sectionEducation.courses.map((education) => (
        <Grid item xs={12} md={6} lg={3} key={education.institution} style={{ textAlign: 'center' }}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <img
                src={`./images/icons/${education.institutionIcon}`}
                alt={education.institution}
                loading="lazy"
                height="50rem"
              />
              <h3>
                {education.institution}
              </h3>
              <h5>{education.course}</h5>
              <p>{education.conclusionDate}</p>
            </CardContent>
          </Card>
        </Grid>
      ));
    }
    return result;
  };

  const getLanguages = (sectionEducation, resumeBasic) => {
    let result = '';
    if (sectionEducation && resumeBasic) {
      result = sectionEducation.languages.map((language) => (
        <Grid item xs={12} md={6} lg={3} key={language.language} style={{ textAlign: 'center' }}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <InlineIcon
                icon={`openmoji:flag-${language.icon}`}
                fontSize="50px"
              />
              <h3>
                {language.language}
              </h3>
              <h5>{language.level}</h5>
            </CardContent>
          </Card>
        </Grid>
      ));
    }
    return result;
  };

  const educationItems = getEducationItems(resumeEducation, resumeBasicInfo);
  const languages = getLanguages(resumeEducation, resumeBasicInfo);

  return (
    <section id="education">
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {educationItems}
      </Grid>
      <h3 className="section-title">
        <span>{languageSection}</span>
      </h3>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {languages}
      </Grid>
    </section>
  );
};

Education.propTypes = {
  resumeEducation: shape(
    shape,
  ).isRequired,
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Education;
