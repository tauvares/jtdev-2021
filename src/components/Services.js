import React from 'react';
import {
  shape, string, arrayOf,
} from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Icon } from '@iconify/react';

const Services = ({ resumeServices, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.services : '';

  const getServices = (resumeServs, resumeBasic) => {
    let result = '';
    if (resumeServs && resumeBasic) {
      result = resumeServs.map((service) => (
        <Grid item xs={12} md={6} lg={4} key={service.title} style={{ textAlign: 'center' }}>
          <Icon icon={service.icon} fontSize="100px" />
          <h3>
            {service.title}
          </h3>
          <h5>{service.keywords}</h5>
          <p>{service.description}</p>
        </Grid>
      ));
    }
    return result;
  };

  const services = getServices(resumeServices, resumeBasicInfo);

  return (
    <section id="services">
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <Grid container spacing={2} justifyContent="center">
        {services}
      </Grid>
    </section>
  );
};

Services.propTypes = {
  resumeServices: arrayOf(
    shape,
  ).isRequired,
  resumeBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Services;
