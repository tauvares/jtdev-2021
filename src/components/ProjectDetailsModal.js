import React from 'react';
import {
  shape, string, func, bool,
} from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { Icon } from '@iconify/react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

import AwesomeSliderStyles from '../resources/scss/light-slider.scss';
import AwesomeSliderStyles2 from '../resources/scss/dark-slider.scss';

const ProjectDetailsModal = ({
  show,
  onHide,
  data,
}) => {
  const {
    technologies,
    images,
    title,
    detail,
    client,
    category,
    url,
  } = data;
  let tech = '';
  let img = '';
  if (data) {
    if (data.technologies) {
      tech = technologies.map((icons) => (
        <li className="list-inline-item modal-icon-spacing" key={icons.name}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: '200%' }}>
                <p className="text-center" style={{ fontSize: '30%' }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));
      if (data.images) {
        img = images.map((elem) => <div key={elem} data-src={elem} />);
      }
    }
  }

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

  const modalBody = (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8}>
        <div className="modal-content">
          <div onClick={onHide} className="modal-close">
            <Icon icon="codicon:chrome-close" style={{ fontSize: '32px' }} />
          </div>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12} md={9}>
              <Card>
                <CardHeader
                  component={coloredButtons}
                />
              </Card>
              <AwesomeSlider
                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                animation="foldOutAnimation"
                className="slider-image"
              >
                {img}
              </AwesomeSlider>
            </Grid>
            <Grid item xs={12} md={9}>
              <h3 style={{ padding: '5px 5px 0 5px' }}>
                {title}
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <i
                      className="fas fa-external-link-alt"
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                ) : null}
              </h3>
              <p className="modal-description">{detail}</p>
              <p className="modal-description">{client}</p>
              <p className="modal-description">{category}</p>
              <ul className="list-inline mx-auto modal-icon">{tech}</ul>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );

  return (
    <Modal
      open={show}
      onClose={onHide}
      className="modal"
    >
      {modalBody}
    </Modal>
  );
};

ProjectDetailsModal.propTypes = {
  data: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
  onHide: func.isRequired,
  show: bool.isRequired,
};

export default ProjectDetailsModal;
