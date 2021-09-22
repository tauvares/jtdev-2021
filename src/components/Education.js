import React from 'react';
import { shape, string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import vueIcon from '@iconify/icons-logos/vue';

const Education = ({
  sharedBasicInfo, resumeBasicInfo,
}) => {
  const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : undefined;

  const sectionName = resumeBasicInfo && resumeBasicInfo.section_name ? resumeBasicInfo.section_name.education : '';
  const hello = resumeBasicInfo ? resumeBasicInfo.description_header : '';
  const about = resumeBasicInfo ? resumeBasicInfo.description : '';
  const coloredButtons = () => (
    <div className="card-header">
      <Icon icon="twemoji:red-circle" style={{ fontSize: '12px' }} />
      {' '}
      {' '}
      <Icon icon="twemoji:yellow-circle" style={{ fontSize: '12px' }} />
      {' '}
      {' '}
      <Icon icon="twemoji:green-circle" style={{ fontSize: '12px' }} />
    </div>
  );

  return (
    <Grid id="education" container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <h1 className="section-title" style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <div className="project-spacing" style={{ cursor: 'pointer' }}>
          <span className="portfolio-item">
            <div
              className="foto"
              role="contentinfo"
            >
              <div>
                <img
                  src={profilepic}
                  alt="Avatar placeholder"
                  height="500"
                  style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                />
                <ul className="list-inline mx-auto skill-icon">
                  <li className="list-inline-item mx-3">
                    <Icon icon={angularIcon} style={{ fontSize: '300%', margin: '9% 5%' }} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <Icon icon={reactIcon} style={{ fontSize: '300%', margin: '9% 5%' }} />
                  </li>
                  <li className="list-inline-item mx-3">
                    <Icon icon={vueIcon} style={{ fontSize: '300%', margin: '9% 5%' }} />
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            component={coloredButtons}
          />
          <Divider />
          <CardContent>
            <br />
            <span className="wave">
              {hello}
              {' '}
              :)
              {' '}
            </span>
            <br />
            <br />
            {about}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Education.propTypes = {
  sharedBasicInfo: shape({
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

export default Education;
