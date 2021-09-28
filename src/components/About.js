import React from 'react';
import { shape, string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Icon } from '@iconify/react';

const About = ({
  sharedBasicInfo, resumeBasicInfo, resumeAbout,
}) => {
  const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : undefined;

  const sectionName = resumeBasicInfo && resumeBasicInfo.section_name ? resumeBasicInfo.section_name.about : '';
  const {
    whois, motto, description, philosophy, iLove, passions,
  } = resumeAbout;
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
    <Grid id="about" container alignItems="center" justifyContent="center" spacing={2}>
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
          <CardContent style={{ textAlign: 'center' }}>
            <h2>{whois}</h2>
            <Grid container>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <p style={{ textAlign: 'center', padding: '20px' }}>{motto}</p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3}>
                  <p style={{ textAlign: 'center', padding: '20px' }}>{description}</p>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3}>
                  <p style={{ textAlign: 'center', padding: '20px' }}>{philosophy}</p>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3}>
                  <p style={{ textAlign: 'center', paddingTop: '20px' }}>{iLove}</p>
                  {passions.map((passion) => (<h4 style={{ textAlign: 'center' }}>{passion}</h4>))}
                  <br />
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
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
  resumeAbout: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default About;
