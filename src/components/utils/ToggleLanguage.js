import React from 'react';
import { func } from 'prop-types';
import { InlineIcon } from '@iconify/react';

const ToggleLanguage = ({ loadPickedLanguage }) => (
  <div className="language-buttons">
    <InlineIcon
      id={window.$primaryLanguageIconId}
      icon="openmoji:flag-canada"
      fontSize="40px"
      style={{ marginRight: '8px', marginLeft: '8px' }}
      onClick={() => loadPickedLanguage(window.$primaryLanguage, window.$primaryLanguageIconId)}
    />
    <InlineIcon
      id={window.$secondaryLanguageIconId}
      icon="openmoji:flag-brazil"
      fontSize="40px"
      style={{ marginRight: '8px' }}
      onClick={() => loadPickedLanguage(window.$secondaryLanguage, window.$secondaryLanguageIconId)}
    />
    <InlineIcon
      id={window.$thirdLanguageIconId}
      icon="openmoji:quebec-flag"
      fontSize="40px"
      style={{ marginRight: '8px' }}
      onClick={() => loadPickedLanguage(window.$thirdLanguage, window.$thirdLanguageIconId)}
    />
  </div>
);

ToggleLanguage.propTypes = {
  loadPickedLanguage: func.isRequired,
};

export default ToggleLanguage;
