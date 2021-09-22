import React from 'react';
import { shape, string } from 'prop-types';
import { InlineIcon } from '@iconify/react';

const Footer = ({ sharedBasicInfo }) => {
  let sectionName = '';
  let networks = '';
  if (sharedBasicInfo) {
    sectionName = sharedBasicInfo.name ? sharedBasicInfo.name : '???';
    networks = sharedBasicInfo.social.map((network) => (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <InlineIcon
            icon={network.class}
            fontSize="40px"
            style={{ marginRight: '8px' }}
            color="white"
          />
        </a>
      </span>
    ));
  }

  return (
    <footer>
      <div className="social-links">{networks}</div>
      <div className="copyright">
        <small>
          Copyright &copy;
          {' '}
          {sectionName}
        </small>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  sharedBasicInfo: shape({
    basic_info: shape({
      description: string,
    }),
  }).isRequired,
};

export default Footer;
